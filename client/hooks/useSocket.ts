import { useEffect, useRef, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";

interface UseSocketOptions {
  chatbotId: string;
  visitorId: string;
  enabled?: boolean;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp?: Date;
}

interface UseSocketReturn {
  socket: Socket | null;
  isConnected: boolean;
  messages: Message[];
  sendMessage: (content: string) => void;
  error: string | null;
}

export const useSocket = ({
  chatbotId,
  visitorId,
  enabled = true,
}: UseSocketOptions): UseSocketReturn => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);
  const messagesRef = useRef<Message[]>([]);

  // Update ref when messages change
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    if (!enabled || !chatbotId || !visitorId) {
      return;
    }

    // Get WebSocket URL from environment or derive from API URL
    let WS_URL = import.meta.env.VITE_WS_URL;
    
    if (!WS_URL) {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
      // Remove /api suffix if present
      const baseUrl = apiUrl.replace(/\/api$/, "");
      // Convert http:// to ws:// and https:// to wss://
      if (baseUrl.startsWith("https://")) {
        WS_URL = baseUrl.replace(/^https:/, "wss:");
      } else if (baseUrl.startsWith("http://")) {
        WS_URL = baseUrl.replace(/^http:/, "ws:");
      } else {
        WS_URL = `ws://${baseUrl}`;
      }
    }
    
    // Fallback to default if still not set
    if (!WS_URL) {
      WS_URL = "ws://localhost:3000";
    }
    
    const newSocket = io(WS_URL, {
      query: {
        chatbotId,
        visitorId,
      },
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
    });

    // Connection events
    newSocket.on("connect", () => {
      console.log("Socket connected");
      setIsConnected(true);
      setError(null);
    });

    newSocket.on("disconnect", () => {
      console.log("Socket disconnected");
      setIsConnected(false);
    });

    newSocket.on("connect_error", (err) => {
      console.error("Socket connection error:", err);
      setError("Failed to connect to chat server");
      setIsConnected(false);
    });

    // Receive conversation history
    newSocket.on("history", (data: { messages: Message[] }) => {
      if (data.messages && data.messages.length > 0) {
        const formattedMessages = data.messages.map((msg) => ({
          ...msg,
          timestamp: msg.timestamp ? new Date(msg.timestamp) : new Date(),
        }));
        setMessages(formattedMessages);
      }
    });

    // Receive streaming message chunks
    newSocket.on("message", (data: { type: string; content: string; role?: string }) => {
      if (data.type === "chunk") {
        // Update the last message if it's streaming, or create a new one
        setMessages((prev) => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage && lastMessage.role === "assistant" && !lastMessage.timestamp) {
            // Update streaming message
            return [
              ...prev.slice(0, -1),
              {
                ...lastMessage,
                content: lastMessage.content + data.content,
              },
            ];
          } else {
            // Create new streaming message
            return [
              ...prev,
              {
                role: "assistant" as const,
                content: data.content,
              },
            ];
          }
        });
      } else if (data.type === "complete") {
        // Finalize the message
        setMessages((prev) => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage && lastMessage.role === "assistant") {
            return [
              ...prev.slice(0, -1),
              {
                role: "assistant" as const,
                content: data.content,
                timestamp: new Date(),
              },
            ];
          } else {
            return [
              ...prev,
              {
                role: "assistant" as const,
                content: data.content,
                timestamp: new Date(),
              },
            ];
          }
        });
      }
    });

    // Handle errors
    newSocket.on("error", (data: { message: string }) => {
      console.error("Socket error:", data);
      setError(data.message || "An error occurred");
    });

    setSocket(newSocket);

    // Cleanup on unmount
    return () => {
      newSocket.close();
      setSocket(null);
      setIsConnected(false);
    };
  }, [chatbotId, visitorId, enabled]);

  const sendMessage = useCallback(
    (content: string) => {
      if (!socket || !isConnected || !content.trim()) {
        return;
      }

      // Add user message immediately
      const userMessage: Message = {
        role: "user",
        content: content.trim(),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);

      // Send to server
      socket.emit("message", { content: content.trim() });
    },
    [socket, isConnected]
  );

  return {
    socket,
    isConnected,
    messages,
    sendMessage,
    error,
  };
};

