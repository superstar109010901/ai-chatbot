import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear token and redirect to login if unauthorized
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: async (data: { email: string; password: string; name: string }) => {
    const response = await api.post("/auth/register", data);
    return response.data;
  },

  login: async (data: { email: string; password: string }) => {
    const response = await api.post("/auth/login", data);
    return response.data;
  },

  getMe: async () => {
    const response = await api.get("/auth/me");
    return response.data;
  },

  logout: async () => {
    const response = await api.post("/auth/logout");
    return response.data;
  },
};

// Chatbot API
export interface WidgetSettings {
  primaryColor: string;
  avatarUrl?: string;
  greetingMessage: string;
  position: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  showAvatar: boolean;
}

export interface Chatbot {
  _id: string;
  name: string;
  userId: string;
  widgetSettings: WidgetSettings;
  embedCode: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateChatbotData {
  name: string;
  widgetSettings?: Partial<WidgetSettings>;
}

export interface UpdateChatbotData {
  name?: string;
  widgetSettings?: Partial<WidgetSettings>;
  isActive?: boolean;
}

export const chatbotAPI = {
  // Get all chatbots for the authenticated user
  getChatbots: async (): Promise<{ success: boolean; data: { chatbots: Chatbot[] } }> => {
    const response = await api.get("/chatbots");
    return response.data;
  },

  // Get default demo chatbot (public endpoint)
  getDefaultChatbot: async (): Promise<{ success: boolean; data: { chatbot: Chatbot } }> => {
    // This will be a public endpoint that returns the demo chatbot
    // For now, we'll fetch it by name or use a known embedCode
    const response = await api.get("/chatbots/default");
    return response.data;
  },

  // Get a single chatbot by ID
  getChatbot: async (id: string): Promise<{ success: boolean; data: { chatbot: Chatbot } }> => {
    const response = await api.get(`/chatbots/${id}`);
    return response.data;
  },

  // Create a new chatbot
  createChatbot: async (data: CreateChatbotData): Promise<{ success: boolean; message: string; data: { chatbot: Chatbot } }> => {
    const response = await api.post("/chatbots", data);
    return response.data;
  },

  // Update a chatbot
  updateChatbot: async (id: string, data: UpdateChatbotData): Promise<{ success: boolean; message: string; data: { chatbot: Chatbot } }> => {
    const response = await api.patch(`/chatbots/${id}`, data);
    return response.data;
  },

  // Delete a chatbot
  deleteChatbot: async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/chatbots/${id}`);
    return response.data;
  },
};

// Upload API
export interface UploadedFile {
  filename: string;
  originalName: string;
  mimetype: string;
  size: number;
  url: string;
}

export const uploadAPI = {
  uploadFile: async (file: File): Promise<{ success: boolean; data: { file: UploadedFile } }> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
};

export default api;

