# Frontend-Backend Integration Guide

## Overview

The frontend has been integrated with the backend API for authentication (signup and signin) using:
- **Axios** for HTTP requests
- **Redux Toolkit** for state management
- **React Redux** for connecting React components to Redux store

## What Was Integrated

### 1. Authentication Features
- ✅ User Signup (Registration)
- ✅ User Login
- ✅ Token storage in localStorage
- ✅ Automatic token attachment to API requests
- ✅ Error handling and user feedback via toasts

### 2. Files Created

#### Redux Store
- `client/store/store.ts` - Redux store configuration
- `client/store/slices/authSlice.ts` - Authentication slice with async thunks
- `client/store/hooks.ts` - Typed Redux hooks

#### API Service
- `client/services/api.ts` - Axios instance with interceptors for auth

### 3. Files Modified

- `client/App.tsx` - Added Redux Provider
- `client/components/LoginModal.tsx` - Integrated with Redux auth actions
- `client/components/SignupModal.tsx` - Integrated with Redux auth actions

## Setup

### 1. Environment Variables

Create a `.env` file in the `ai-chatbot` folder:

```env
VITE_API_URL=http://localhost:3000/api
```

**Note**: Vite requires the `VITE_` prefix for environment variables to be exposed to the client.

### 2. Backend Setup

Make sure your backend is running on `http://localhost:3000` (or update the `.env` file accordingly).

The backend should have:
- MongoDB running
- Environment variables configured (see `backend/ENV_VARIABLES.md`)
- Server started: `npm run dev` in the `backend` folder

## Usage

### How It Works

1. **User Registration**:
   - User fills out the signup form (first name, last name, email, password)
   - Form data is sent to `/api/auth/register`
   - On success, user data and JWT token are stored in Redux and localStorage
   - Modal closes and success toast is shown

2. **User Login**:
   - User enters email and password
   - Credentials are sent to `/api/auth/login`
   - On success, user data and JWT token are stored in Redux and localStorage
   - Modal closes and success toast is shown

3. **Token Management**:
   - JWT token is automatically stored in localStorage on successful auth
   - Token is automatically attached to all API requests via axios interceptor
   - Token is cleared on logout or 401 errors

### Accessing Auth State in Components

```typescript
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { logout, getMe } from "@/store/slices/authSlice";

function MyComponent() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, isLoading } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}
```

### Available Redux Actions

```typescript
// Dispatch these actions in your components
import { register, login, logout, getMe, clearError } from "@/store/slices/authSlice";

// Register a new user
dispatch(register({ email, password, name }));

// Login
dispatch(login({ email, password }));

// Logout
dispatch(logout());

// Get current user (requires authentication)
dispatch(getMe());

// Clear error messages
dispatch(clearError());
```

### Redux State Structure

```typescript
{
  auth: {
    user: {
      id: string;
      email: string;
      name: string;
      plan: "free" | "pro" | "enterprise";
      createdAt?: string;
    } | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
  }
}
```

## API Endpoints Used

### POST /api/auth/register
**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "...",
      "email": "user@example.com",
      "name": "John Doe",
      "plan": "free"
    },
    "token": "jwt-token-here"
  }
}
```

### POST /api/auth/login
**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "...",
      "email": "user@example.com",
      "name": "John Doe",
      "plan": "free"
    },
    "token": "jwt-token-here"
  }
}
```

## Error Handling

- Errors are automatically displayed via toast notifications
- Error messages come from the backend API response
- Network errors and validation errors are handled
- Token expiration (401) automatically clears auth state

## Testing

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend:
   ```bash
   cd ai-chatbot
   npm run dev
   ```

3. Test Signup:
   - Click "Sign Up" button
   - Fill in the form
   - Submit and verify success toast appears

4. Test Login:
   - Click "Log In" button
   - Enter credentials
   - Submit and verify success toast appears

## Next Steps

To add more API integrations:

1. Add new API functions in `client/services/api.ts`
2. Create new Redux slices in `client/store/slices/`
3. Add slices to `client/store/store.ts`
4. Use actions in your components

Example for chatbots:
```typescript
// In services/api.ts
export const chatbotAPI = {
  getChatbots: async () => {
    const response = await api.get("/chatbots");
    return response.data;
  },
  createChatbot: async (data) => {
    const response = await api.post("/chatbots", data);
    return response.data;
  },
};
```

## Notes

- The `AuthContext` is still used for modal management (opening/closing login/signup modals)
- Authentication state is managed entirely by Redux
- Tokens are stored in localStorage for persistence across page reloads
- The API service automatically attaches the JWT token to all requests

