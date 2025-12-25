import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import chatbotReducer from "./slices/chatbotSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chatbot: chatbotReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

