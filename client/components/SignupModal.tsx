import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "./AuthContext";

const SignupModal = () => {
  const { authModal, closeAuthModal, openLoginModal } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const isOpen = authModal === "signup";

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
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSwitchToLogin = () => {
    closeAuthModal();
    setTimeout(() => openLoginModal(), 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto">
          {/* Dark Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeAuthModal}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md my-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-blue-500/30 shadow-2xl overflow-hidden"
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
            <div className="relative p-8 sm:p-10 z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  Sign Up
                </h2>
              </div>

              {/* Form */}
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-white">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Placeholder"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/70 focus:bg-slate-700/70 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-white">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Placeholder"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/70 focus:bg-slate-700/70 transition-all"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Placeholder"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/70 focus:bg-slate-700/70 transition-all"
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
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Placeholder"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/70 focus:bg-slate-700/70 transition-all"
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
                </div>

                {/* Register Button */}
                <button
                  type="submit"
                  className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all shadow-lg"
                >
                  Register
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-600/50" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-gradient-to-br from-slate-900 to-slate-800 text-gray-400">
                    Or sign up with:
                  </span>
                </div>
              </div>

              {/* Social Signup Buttons */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    name: "Google",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.37568 10.068C6.16293 10.6899 6.05479 11.3427 6.05568 12C6.05568 12.734 6.18768 13.437 6.43168 14.086C6.73579 14.8972 7.21347 15.6321 7.83131 16.2393C8.44915 16.8466 9.19222 17.3115 10.0085 17.6015C10.8248 17.8916 11.6947 17.9998 12.5571 17.9185C13.4196 17.8372 14.2539 17.5684 15.0017 17.131H15.0027C16.1807 16.4404 17.0859 15.3661 17.5667 14.088H12.2197V10.132H21.8247C22.0731 11.4405 22.0581 12.7854 21.7807 14.088C21.2999 16.3399 20.0565 18.3568 18.2607 19.798C16.4869 21.2264 14.2771 22.0035 11.9997 22C10.2826 22.001 8.5943 21.5597 7.09731 20.7187C5.60032 19.8778 4.34513 18.6655 3.45269 17.1986C2.56024 15.7317 2.06061 14.0597 2.00193 12.3437C1.94326 10.6276 2.32751 8.92542 3.11768 7.401C3.96065 5.77291 5.23506 4.40796 6.80155 3.4554C8.36805 2.50284 10.1663 1.99936 11.9997 2C14.4257 2 16.6507 2.864 18.3827 4.302L15.1427 6.954C14.3837 6.48164 13.528 6.18643 12.6392 6.09034C11.7504 5.99424 10.8514 6.09972 10.009 6.39894C9.16658 6.69816 8.40245 7.18342 7.77342 7.81864C7.14439 8.45386 6.66663 9.2227 6.37568 10.068Z" fill="currentColor" />
                      </svg>
                    ),
                  },
                  {
                    name: "Apple",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.123 12.627C17.098 10.094 19.189 8.879 19.282 8.819C18.107 7.099 16.277 6.864 15.625 6.837C14.068 6.679 12.586 7.754 11.795 7.754C11.007 7.754 9.78701 6.86 8.49501 6.884C6.79901 6.909 5.23401 7.87 4.36001 9.39C2.59601 12.45 3.90801 16.985 5.62701 19.467C6.46701 20.682 7.46901 22.047 8.78401 21.997C10.05 21.947 10.529 21.178 12.06 21.178C13.591 21.178 14.022 21.998 15.362 21.973C16.725 21.947 17.588 20.734 18.422 19.516C19.387 18.106 19.784 16.741 19.808 16.671C19.778 16.658 17.15 15.651 17.124 12.626L17.123 12.627ZM14.605 5.194C15.303 4.347 15.774 3.172 15.645 2C14.64 2.04 13.421 2.67 12.7 3.515C12.053 4.265 11.486 5.46 11.638 6.609C12.76 6.697 13.906 6.039 14.605 5.194Z" fill="currentColor" />
                      </svg>
                    ),
                  },
                  {
                    name: "Twitter",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 5.90692C21.2504 6.2343 20.4565 6.44896 19.644 6.54392C20.4968 6.04315 21.138 5.24903 21.448 4.30992C20.64 4.78025 19.7587 5.11152 18.841 5.28992C18.4545 4.88513 17.9897 4.56331 17.4748 4.3441C16.9598 4.12489 16.4056 4.01289 15.846 4.01492C13.58 4.01492 11.743 5.82492 11.743 8.05492C11.743 8.37092 11.779 8.67992 11.849 8.97492C10.2236 8.89761 8.63212 8.48233 7.17617 7.75556C5.72022 7.02879 4.43176 6.0065 3.393 4.75392C3.02883 5.36832 2.83742 6.0697 2.839 6.78392C2.8397 7.45189 3.00683 8.10915 3.32529 8.69631C3.64375 9.28348 4.1035 9.78203 4.663 10.1469C4.01248 10.1259 3.37602 9.95225 2.805 9.63992V9.68992C2.805 11.6479 4.22 13.2809 6.095 13.6529C5.74261 13.7464 5.37958 13.7938 5.015 13.7939C4.75 13.7939 4.493 13.7689 4.242 13.7189C4.51008 14.5268 5.02311 15.2312 5.70982 15.7343C6.39653 16.2373 7.22284 16.514 8.074 16.5259C6.61407 17.6505 4.82182 18.258 2.979 18.2529C2.647 18.2529 2.321 18.2329 2 18.1969C3.88125 19.3876 6.06259 20.0182 8.289 20.0149C15.836 20.0149 19.962 13.8579 19.962 8.51892L19.948 7.99592C20.7529 7.42959 21.4481 6.72177 22 5.90692Z" fill="currentColor" />
                      </svg>
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

              {/* Login Link */}
              <div className="text-center mt-6 pt-4 border-t border-slate-600/50">
                <p className="text-sm text-gray-400">
                  Already have an account?{" "}
                  <button
                    onClick={handleSwitchToLogin}
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    Log In
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

export default SignupModal;
