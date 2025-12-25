import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { chatbotAPI, Chatbot, CreateChatbotData, UpdateChatbotData } from "../../services/api";

interface ChatbotState {
  chatbots: Chatbot[];
  currentChatbot: Chatbot | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ChatbotState = {
  chatbots: [],
  currentChatbot: null,
  isLoading: false,
  error: null,
};

// Async thunks
export const fetchChatbots = createAsyncThunk(
  "chatbot/fetchChatbots",
  async (_, { rejectWithValue }) => {
    try {
      const response = await chatbotAPI.getChatbots();
      return response.data.chatbots;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.error?.message || "Failed to fetch chatbots"
      );
    }
  }
);

export const fetchChatbot = createAsyncThunk(
  "chatbot/fetchChatbot",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await chatbotAPI.getChatbot(id);
      return response.data.chatbot;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.error?.message || "Failed to fetch chatbot"
      );
    }
  }
);

export const createChatbot = createAsyncThunk(
  "chatbot/createChatbot",
  async (data: CreateChatbotData, { rejectWithValue }) => {
    try {
      const response = await chatbotAPI.createChatbot(data);
      return response.data.chatbot;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.error?.message || "Failed to create chatbot"
      );
    }
  }
);

export const updateChatbot = createAsyncThunk(
  "chatbot/updateChatbot",
  async ({ id, data }: { id: string; data: UpdateChatbotData }, { rejectWithValue }) => {
    try {
      const response = await chatbotAPI.updateChatbot(id, data);
      return response.data.chatbot;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.error?.message || "Failed to update chatbot"
      );
    }
  }
);

export const deleteChatbot = createAsyncThunk(
  "chatbot/deleteChatbot",
  async (id: string, { rejectWithValue }) => {
    try {
      await chatbotAPI.deleteChatbot(id);
      return id;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.error?.message || "Failed to delete chatbot"
      );
    }
  }
);

const chatbotSlice = createSlice({
  name: "chatbot",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setCurrentChatbot: (state, action: PayloadAction<Chatbot | null>) => {
      state.currentChatbot = action.payload;
    },
    clearCurrentChatbot: (state) => {
      state.currentChatbot = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch chatbots
    builder
      .addCase(fetchChatbots.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchChatbots.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chatbots = action.payload;
      })
      .addCase(fetchChatbots.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Fetch single chatbot
    builder
      .addCase(fetchChatbot.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchChatbot.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentChatbot = action.payload;
        // Update in list if exists
        const index = state.chatbots.findIndex((c) => c._id === action.payload._id);
        if (index !== -1) {
          state.chatbots[index] = action.payload;
        }
      })
      .addCase(fetchChatbot.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Create chatbot
    builder
      .addCase(createChatbot.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createChatbot.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chatbots.unshift(action.payload);
        state.currentChatbot = action.payload;
      })
      .addCase(createChatbot.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Update chatbot
    builder
      .addCase(updateChatbot.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateChatbot.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.chatbots.findIndex((c) => c._id === action.payload._id);
        if (index !== -1) {
          state.chatbots[index] = action.payload;
        }
        if (state.currentChatbot?._id === action.payload._id) {
          state.currentChatbot = action.payload;
        }
      })
      .addCase(updateChatbot.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Delete chatbot
    builder
      .addCase(deleteChatbot.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteChatbot.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chatbots = state.chatbots.filter((c) => c._id !== action.payload);
        if (state.currentChatbot?._id === action.payload) {
          state.currentChatbot = null;
        }
      })
      .addCase(deleteChatbot.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, setCurrentChatbot, clearCurrentChatbot } = chatbotSlice.actions;
export default chatbotSlice.reducer;

