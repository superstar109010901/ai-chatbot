import { createContext, useState, ReactNode } from "react";

interface ChatboxContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggleModal: () => void;
}

export const ChatboxContext = createContext<ChatboxContextType | undefined>(
  undefined
);

export const ChatboxProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ChatboxContext.Provider value={{ isOpen, setIsOpen, toggleModal }}>
      {children}
    </ChatboxContext.Provider>
  );
};

export const useChatbox = (): ChatboxContextType => {
  const context = window.React?.useContext?.(ChatboxContext);
  if (!context) {
    const React = require("react");
    const ctx = React.useContext(ChatboxContext);
    if (!ctx) {
      throw new Error("useChatbox must be used within ChatboxProvider");
    }
    return ctx;
  }
  return context;
};
