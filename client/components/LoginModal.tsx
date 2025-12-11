import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "./AuthContext";

const LoginModal = () => {
  const { authModal, closeAuthModal, openSignupModal } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const isOpen = authModal === "login";

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.0, 0.0, 0.58, 1.0] as const,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.2,
        ease: [0.42, 0.0, 1.0, 1.0] as const,
      },
    },
  };

  const handleSwitchToSignup = () => {
    closeAuthModal();
    setTimeout(() => openSignupModal(), 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex  items-center justify-center px-4">
          {/* Dark Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeAuthModal}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-[680px] backdrop-blur-md bg-[#0000001A]  rounded-2xl border border-[#0055FF80] shadow-2xl overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Decorative gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative p-[4.5rem] z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold font-[Roboto] line-height-[110px] text-white mb-10">
                  Welcome Back
                </h2>
                <p className="text-gray-400 text-sm sm:text-base">
                  Please log in to continue
                </p>
              </div>

              {/* Form */}
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Placeholder"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-transparent border border-slate-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none  transition-all"
                  />
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Placeholder"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-transparent border border-slate-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                      aria-label="Toggle password visibility"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 12.0001C20 10.1901 16.24 8.01508 11.993 8.00008C7.775 7.98508 4 10.1781 4 12.0001C4 13.8251 7.754 16.0061 11.997 16.0001C16.252 15.9941 20 13.8201 20 12.0001ZM12 18.0001C6.958 18.0071 2 15.3141 2 12.0001C2 8.68608 6.984 5.98308 12 6.00008C17.016 6.01708 22 8.68608 22 12.0001C22 15.3141 17.042 17.9931 12 18.0001ZM12 16.0001C10.9391 16.0001 9.92172 15.5787 9.17157 14.8285C8.42143 14.0784 8 13.0609 8 12.0001C8 10.9392 8.42143 9.9218 9.17157 9.17165C9.92172 8.42151 10.9391 8.00008 12 8.00008C13.0609 8.00008 14.0783 8.42151 14.8284 9.17165C15.5786 9.9218 16 10.9392 16 12.0001C16 13.0609 15.5786 14.0784 14.8284 14.8285C14.0783 15.5787 13.0609 16.0001 12 16.0001ZM12 14.0001C12.5304 14.0001 13.0391 13.7894 13.4142 13.4143C13.7893 13.0392 14 12.5305 14 12.0001C14 11.4696 13.7893 10.9609 13.4142 10.5859C13.0391 10.2108 12.5304 10.0001 12 10.0001C11.4696 10.0001 10.9609 10.2108 10.5858 10.5859C10.2107 10.9609 10 11.4696 10 12.0001C10 12.5305 10.2107 13.0392 10.5858 13.4143C10.9609 13.7894 11.4696 14.0001 12 14.0001Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    It must be a combination of minimum 8 letters, numbers, and symbols.
                  </p>
                </div>

                {/* Remember me & Forgot Password */}
                <div className="flex items-center justify-between gap-4 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 bg-slate-700/50 border border-slate-600/50 rounded cursor-pointer accent-blue-500"
                    />
                    <span className="text-sm text-white">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    Forgot Password?
                  </a>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all shadow-lg"
                >
                  Log In
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-600/50" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-gradient-to-br from-slate-900 to-slate-800 text-gray-400">
                    Or log in with:
                  </span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    name: "Google",
                    icon: (
                      
                      <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" width={20} height={20} />
                      
                    ),
                  },
                  {
                    name: "Apple",
                    icon: (
                      <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/apple.svg" alt="apple" width={20} height={20} />

                    ),
                  },
                  {
                    name: "Twitter",
                    icon: (
                      <img src="https://abs.twimg.com/responsive-web/client-web/icon-ios.8ea219d5.png" alt="Twitter" width={20} className="rounded-full overflow-hidden" height={20} />
                    ),
                  },
                ].map((social) => (
                  <button
                    key={social.name}
                    type="button"
                    className="p-3 bg-slate-700/30 border border-slate-600/50 rounded-lg text-gray-300 hover:bg-slate-700/50 hover:text-blue-400 transition-all flex items-center justify-center"
                    title={social.name}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>

              {/* Sign Up Link */}
              <div className="text-center mt-6 pt-4 border-t border-slate-600/50">
                <p className="text-sm text-gray-400">
                  No account yet?{" "}
                  <button
                    onClick={handleSwitchToSignup}
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
