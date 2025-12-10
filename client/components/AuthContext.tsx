import { createContext, useState, useContext, ReactNode } from "react";

export type AuthModalType = "login" | "signup" | null;

interface AuthContextType {
  authModal: AuthModalType;
  openLoginModal: () => void;
  openSignupModal: () => void;
  closeAuthModal: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authModal, setAuthModal] = useState<AuthModalType>(null);

  const openLoginModal = () => setAuthModal("login");
  const openSignupModal = () => setAuthModal("signup");
  const closeAuthModal = () => setAuthModal(null);

  return (
    <AuthContext.Provider
      value={{
        authModal,
        openLoginModal,
        openSignupModal,
        closeAuthModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
