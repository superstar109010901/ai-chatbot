import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatboxContext } from "./ChatboxContext";
import ChatDialog from "./ChatDialog";

const ChatboxModal = () => {
  const context = useContext(ChatboxContext);

  if (!context) {
    throw new Error("ChatboxModal must be used within ChatboxProvider");
  }

  const { isOpen } = context;
  const [activeTab, setActiveTab] = useState<"home" | "chat">("home");

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
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
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.2,
        ease: [0.42, 0.0, 1.0, 1.0] as const,
      },
    },
  };

  const menuItems = [
    { title: "What is Pulseai" },
    { title: "Discover our premium services" },
    { title: "Help Center" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-32 right-8 w-96 h-[700px] bg-[#030306] rounded-2xl shadow-2xl overflow-hidden z-[100] flex flex-col min-h-0"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {activeTab === "chat" ? (
            <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
              <ChatDialog onBack={() => setActiveTab("home")} />
            </div>
          ) : (
            <>
              {/* Header Image Section */}
          <div className="relative h-64 w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1ff276358ca4150d0e5ecf582944d5ffb9f2a32a?width=796"
              alt="chatbot background"
              className="w-full h-full object-cover"
            />

            {/* Logo Badge - Top Left */}
            <div className="absolute top-4 left-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 11.6498C0 5.21579 5.21578 0 11.6498 0H16.3097C22.7437 0 27.9595 5.21578 27.9595 11.6498V27.9595H11.6498C5.21579 27.9595 0 22.7437 0 16.3097V11.6498Z"
                  fill="url(#paint0_linear_313_142)"
                />
                <path
                  d="M10.2645 10.2917L16.0876 19.8204H4.44141L10.2645 10.2917Z"
                  fill="white"
                />
                <path
                  d="M17.6749 17.7029L11.8518 8.17415L23.498 8.17415L17.6749 17.7029Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_313_142"
                    x1="13.9797"
                    y1="0"
                    x2="13.9797"
                    y2="32.6194"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#435CED" />
                    <stop offset="1" stopColor="#263487" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* More Options Button - Top Right */}
            <button className="absolute top-4 right-6 text-white opacity-70 hover:opacity-100 transition-opacity">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16.5C12.3978 16.5 12.7794 16.658 13.0607 16.9393C13.342 17.2206 13.5 17.6022 13.5 18C13.5 18.3978 13.342 18.7794 13.0607 19.0607C12.7794 19.342 12.3978 19.5 12 19.5C11.6022 19.5 11.2206 19.342 10.9393 19.0607C10.658 18.7794 10.5 18.3978 10.5 18C10.5 17.6022 10.658 17.2206 10.9393 16.9393C11.2206 16.658 11.6022 16.5 12 16.5ZM12 10.5C12.3978 10.5 12.7794 10.658 13.0607 10.9393C13.342 11.2206 13.5 11.6022 13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5C11.6022 13.5 11.2206 13.342 10.9393 13.0607C10.658 12.7794 10.5 12.3978 10.5 12C10.5 11.6022 10.658 11.2206 10.9393 10.9393C11.2206 10.658 11.6022 10.5 12 10.5ZM12 4.5C12.3978 4.5 12.7794 4.65804 13.0607 4.93934C13.342 5.22064 13.5 5.60218 13.5 6C13.5 6.39782 13.342 6.77936 13.0607 7.06066C12.7794 7.34196 12.3978 7.5 12 7.5C11.6022 7.5 11.2206 7.34196 10.9393 7.06066C10.658 6.77936 10.5 6.39782 10.5 6C10.5 5.60218 10.658 5.22064 10.9393 4.93934C11.2206 4.65804 11.6022 4.5 12 4.5Z"
                  fill="white"
                />
              </svg>
            </button>

            {/* Greeting Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h2 className="text-white font-poppins font-bold text-lg">
                Hi there!
              </h2>
              <p className="text-white font-poppins text-xs text-white/80">
                AI chat powered by pulsechatai
              </p>
            </div>
          </div>

              {/* Menu Section */}
              <div className="flex-1 flex flex-col justify-start overflow-y-auto">
              <div className="p-6 space-y-0">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <button className="w-full flex items-center justify-between py-4 hover:bg-white/5 transition-colors rounded">
                      <span className="text-white font-poppins text-sm">
                        {item.title}
                      </span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.8507 9.90812L8.03441 5.09062L7.14941 5.97437L11.0832 9.90812L7.14941 13.8406L8.03441 14.7256L12.8507 9.90812Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    {index < menuItems.length - 1 && (
                      <div className="h-px bg-white/10 w-full" />
                    )}
                  </div>
                ))}
              </div>

              {/* Chat Section */}
              <div className="px-6 py-4 border-t border-white/10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-white font-poppins font-medium text-sm mb-1">
                      Chat with Pulsechatai
                    </h3>
                    <p className="text-gray-400 font-poppins text-xs leading-relaxed">
                      Get to chat with our Ai assistant which would help you
                      through
                    </p>
                  </div>
                  <button onClick={() => setActiveTab("chat")} className="flex-shrink-0 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 40 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28 10H12C10.9 10 10.01 10.945 10.01 12.1L10 31L14 26.8H28C29.1 26.8 30 25.855 30 24.7V12.1C30 10.945 29.1 10 28 10ZM25 22.6H15C14.45 22.6 14 22.1275 14 21.55C14 20.9725 14.45 20.5 15 20.5H25C25.55 20.5 26 20.9725 26 21.55C26 22.1275 25.55 22.6 25 22.6ZM25 19.45H15C14.45 19.45 14 18.9775 14 18.4C14 17.8225 14.45 17.35 15 17.35H25C25.55 17.35 26 17.8225 26 18.4C26 18.9775 25.55 19.45 25 19.45ZM25 16.3H15C14.45 16.3 14 15.8275 14 15.25C14 14.6725 14.45 14.2 15 14.2H25C25.55 14.2 26 14.6725 26 15.25C26 15.8275 25.55 16.3 25 16.3Z"
                        fill="#0055FF"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

              {/* Footer Navigation */}
              <div className="border-t border-white/10 bg-black/40 p-4">
            <div className="flex items-center justify-around">
                <button
                  onClick={() => setActiveTab("home")}
                  className={`flex flex-col items-center gap-2 py-2 px-4 rounded transition-opacity ${
                    activeTab === "home" ? "opacity-100" : "opacity-50"
                  }`}
                >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.612 2.21402C16.4346 2.07568 16.216 2.00055 15.991 2.00055C15.766 2.00055 15.5474 2.07568 15.37 2.21402L1 13.419L2.243 14.991L4 13.621V26C4.00106 26.5301 4.21211 27.0382 4.58695 27.4131C4.9618 27.7879 5.46989 27.999 6 28H26C26.5301 27.999 27.0382 27.7879 27.413 27.4131C27.7879 27.0382 27.9989 26.5301 28 26V13.63L29.757 15L31 13.428L16.612 2.21402ZM18 26H14V18H18V26ZM20 26V18C20 17.4696 19.7893 16.9609 19.4142 16.5858C19.0391 16.2107 18.5304 16 18 16H14C13.4696 16 12.9609 16.2107 12.5858 16.5858C12.2107 16.9609 12 17.4696 12 18V26H6V12.062L16 4.27202L26 12.072V26H20Z"
                    fill="#0055FF"
                  />
                </svg>
                  <span className="text-white font-poppins text-xs">Home</span>
                </button>

                <button
                  onClick={() => setActiveTab("chat")}
                  className={`flex flex-col items-center gap-2 py-2 px-4 rounded transition-opacity ${
                    (activeTab as "home" | "chat") === "chat" ? "opacity-100" : "opacity-50"
                  }`}
                >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10267 22.6667L5.83067 24.9387C5.49378 25.2756 5.10444 25.3529 4.66267 25.1707C4.22089 24.9884 4 24.6573 4 24.1773V6.15467C4 5.54044 4.20578 5.028 4.61733 4.61733C5.02889 4.20667 5.54133 4.00089 6.15467 4H25.8467C26.46 4 26.9724 4.20578 27.384 4.61733C27.7956 5.02889 28.0009 5.54133 28 6.15467V20.5133C28 21.1267 27.7947 21.6391 27.384 22.0507C26.9733 22.4622 26.4609 22.6676 25.8467 22.6667H8.10267ZM7.53333 21.3333H25.8467C26.0511 21.3333 26.2391 21.248 26.4107 21.0773C26.5822 20.9067 26.6676 20.7187 26.6667 20.5133V6.15333C26.6667 5.94889 26.5813 5.76089 26.4107 5.58933C26.24 5.41778 26.052 5.33244 25.8467 5.33333H6.15333C5.94889 5.33333 5.76089 5.41867 5.58933 5.58933C5.41778 5.76 5.33244 5.948 5.33333 6.15333V23.5267L7.53333 21.3333ZM9.33333 18H17.3333C17.5236 18 17.6822 17.9364 17.8093 17.8093C17.9364 17.6822 18 17.5236 18 17.3333C18 17.1431 17.9364 16.9844 17.8093 16.8573C17.6822 16.7302 17.5236 16.6667 17.3333 16.6667H9.33333C9.144 16.6667 8.98533 16.7302 8.85733 16.8573C8.72933 16.9844 8.66578 17.1431 8.66667 17.3333C8.66756 17.5236 8.73111 17.6822 8.85733 17.8093C8.98356 17.9364 9.14222 18 9.33333 18ZM9.33333 14H22.6667C22.8569 14 23.0156 13.9364 23.1427 13.8093C23.2698 13.6822 23.3333 13.5236 23.3333 13.3333C23.3333 13.1431 23.2698 12.9844 23.1427 12.8573C23.0156 12.7302 22.8569 12.6667 22.6667 12.6667H9.33333C9.144 12.6667 8.98533 12.7302 8.85733 12.8573C8.72933 12.9844 8.66578 13.1431 8.66667 13.3333C8.66756 13.5236 8.73111 13.6822 8.85733 13.8093C8.98356 13.9364 9.14222 14 9.33333 14Z"
                    fill="white"
                    fillOpacity="0.41"
                  />
                </svg>
                  <span className="text-white/40 font-poppins text-xs">Chat</span>
                </button>
              </div>

              <div className="h-px bg-white/10 my-3 w-full" />

              <p className="text-center text-white/30 font-poppins text-xs">
                Powered by Pulsechatai
              </p>
            </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatboxModal;
