import { useRef, useEffect } from "react";

interface ChatMessage {
  id: string;
  type: "bot" | "user";
  text: string;
  timestamp?: string;
}

interface ChatDialogProps {
  onBack: () => void;
}

const ChatDialog = ({ onBack }: ChatDialogProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const messages: ChatMessage[] = [
    {
      id: "1",
      type: "bot",
      text: "Hi, there nice to meet you, hope you are doing great",
    },
    {
      id: "2",
      type: "bot",
      text: "Ready to go?",
    },
    {
      id: "3",
      type: "user",
      text: "I'm ready yo go, we can get started right now.",
    },
    {
      id: "4",
      type: "bot",
      text: "Hi, there nice to meet you, hope you are doing great",
    },
    {
      id: "5",
      type: "bot",
      text: "Ready to go?",
    },
    {
      id: "6",
      type: "user",
      text: "I'm ready yo go, we can get started right now.",
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="w-full h-full flex flex-col bg-[#030306]">
      {/* Header */}
      <div className="flex-shrink-0 border-b border-white/20 bg-[#030306]">
        <div className="flex items-center justify-between p-4 md:p-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
            aria-label="Go back"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.4395 15.853L19.1455 23.561L20.5615 22.147L14.2675 15.853L20.5615 9.56099L19.1455 8.14499L11.4395 15.853Z"
                fill="white"
                transform="rotate(180 15.5 15.5)"
              />
            </svg>
          </button>

          <h2 className="text-white font-poppins font-normal text-base md:text-lg flex-1 ml-4">
            Hi there
          </h2>

          <button
            className="text-white opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
            aria-label="More options"
          >
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
        </div>

        {/* Time Divider */}
        {/* <div className="flex items-center justify-center py-2 md:py-3">
          <span className="text-gray-500 font-poppins text-xs md:text-sm">
            Today 10:25pm
          </span>
        </div> */}
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4 md:py-6 space-y-4 md:space-y-6 scrollbar-hide">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-end gap-2 md:gap-3 ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.type === "bot" && (
              <div className="flex-shrink-0">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 md:w-9 md:h-9"
                >
                  <rect width="35" height="35" rx="17.5" fill="url(#paint0_linear)" />
                  <path
                    d="M12.95 19.05C12.4328 19.05 11.9368 19.2555 11.5711 19.6212C11.2054 19.9869 11 20.4828 11 21V21.455C11 23.1515 11.78 24.38 13.0202 25.1509C14.2227 25.8984 15.823 26.2 17.5 26.2C19.1861 26.2 20.7864 25.8997 21.9876 25.1509C23.2278 24.38 24 23.1489 24 21.455V21C24 20.4828 23.7946 19.9869 23.4289 19.6212C23.0632 19.2555 22.5672 19.05 22.05 19.05H12.95Z"
                    fill="url(#paint1_radial)"
                  />
                  <path
                    d="M12.95 19.05C12.4328 19.05 11.9368 19.2555 11.5711 19.6212C11.2054 19.9869 11 20.4828 11 21V21.455C11 23.1515 11.78 24.38 13.0202 25.1509C14.2227 25.8984 15.823 26.2 17.5 26.2C19.1861 26.2 20.7864 25.8997 21.9876 25.1509C23.2278 24.38 24 23.1489 24 21.455V21C24 20.4828 23.7946 19.9869 23.4289 19.6212C23.0632 19.2555 22.5672 19.05 22.05 19.05H12.95Z"
                    fill="white"
                  />
                  <path
                    d="M18.1496 8.65C18.1496 8.47761 18.0811 8.31228 17.9592 8.19038C17.8373 8.06848 17.672 8 17.4996 8C17.3272 8 17.1619 8.06848 17.04 8.19038C16.9181 8.31228 16.8496 8.47761 16.8496 8.65V9.95H18.1496V8.65Z"
                    fill="white"
                  />
                  <path
                    d="M20.7498 9.30002C21.267 9.30002 21.763 9.50546 22.1287 9.87116C22.4944 10.2369 22.6998 10.7328 22.6998 11.25V15.15C22.6998 15.6672 22.4944 16.1632 22.1287 16.5289C21.763 16.8946 21.267 17.1 20.7498 17.1H14.2498C13.7326 17.1 13.2366 16.8946 12.8709 16.5289C12.5053 16.1632 12.2998 15.6672 12.2998 15.15V11.25C12.2998 10.7328 12.5053 10.2369 12.8709 9.87116C13.2366 9.50546 13.7326 9.30002 14.2498 9.30002H20.7498Z"
                    fill="white"
                  />
                  <path
                    d="M19.4496 12.225C19.191 12.225 18.943 12.3277 18.7602 12.5106C18.5773 12.6934 18.4746 12.9414 18.4746 13.2C18.4746 13.4586 18.5773 13.7066 18.7602 13.8894C18.943 14.0723 19.191 14.175 19.4496 14.175C19.7082 14.175 19.9562 14.0723 20.139 13.8894C20.3219 13.7066 20.4246 13.4586 20.4246 13.2C20.4246 12.9414 20.3219 12.6934 20.139 12.5106C19.9562 12.3277 19.7082 12.225 19.4496 12.225Z"
                    fill="#3A4FCC"
                  />
                  <path
                    d="M14.5752 13.2C14.5752 12.9414 14.6779 12.6934 14.8608 12.5106C15.0436 12.3277 15.2916 12.225 15.5502 12.225C15.8088 12.225 16.0568 12.3277 16.2396 12.5106C16.4225 12.6934 16.5252 12.9414 16.5252 13.2C16.5252 13.4586 16.4225 13.7066 16.2396 13.8894C16.0568 14.0723 15.8088 14.175 15.5502 14.175C15.2916 14.175 15.0436 14.0723 14.8608 13.8894C14.6779 13.7066 14.5752 13.4586 14.5752 13.2Z"
                    fill="#3A4FCC"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="17.5"
                      y1="0"
                      x2="17.5"
                      y2="40.8333"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#435CED" />
                      <stop offset="1" stopColor="#263487" />
                    </linearGradient>
                    <radialGradient
                      id="paint1_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(7.9996 16.8491) rotate(32.84) scale(18.5598 30.8568)"
                    >
                      <stop stopColor="#F08AF4" />
                      <stop offset="0.535" stopColor="#9C6CFE" />
                      <stop offset="1" stopColor="#4E44DB" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            )}

            <div
              className={`max-w-xs md:max-w-sm flex justify-center items-center px-3 md:px-4 py-2 md:py-3 rounded-xl ${
                message.type === "bot"
                  ? "bg-white/10 text-white rounded-bl-none"
                  : "bg-white/15 text-white rounded-br-none"
              }`}
            >
              <p className="font-poppins text-xs md:text-sm leading-tight md:leading-snug font-normal break-words">
                {message.text}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="flex-shrink-0  bg-[#030306] p-4 md:p-6">
        <div className="flex items-center gap-2 md:gap-3">
          {/* Attachment Icon */}
          <button
            className="flex-shrink-0 text-[#FFFFFF17] transition-opacity"
            aria-label="Attach file"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.38379 11.3542L10.1688 3.56915C10.5723 3.15707 11.0535 2.8291 11.5846 2.6042C12.1157 2.3793 12.6861 2.26194 13.2629 2.25891C13.8396 2.25588 14.4112 2.36725 14.9446 2.58656C15.4781 2.80587 15.9627 3.12878 16.3705 3.5366C16.7783 3.94442 17.1012 4.42906 17.3205 4.96248C17.5399 5.4959 17.6512 6.06751 17.6482 6.64425C17.6452 7.22099 17.5278 7.7914 17.3029 8.32249C17.078 8.85358 16.75 9.3348 16.338 9.73832L9.06629 17.0083C8.61581 17.4442 8.01208 17.6856 7.38527 17.6804C6.75847 17.6752 6.15879 17.424 5.71556 16.9807C5.27232 16.5375 5.02103 15.9378 5.01587 15.311C5.01071 14.6842 5.25208 14.0805 5.68796 13.63L12.6646 6.65249"
                stroke="white"
                strokeOpacity="0.09"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Emoji Icon */}
          <button
            className="flex-shrink-0 text-[#FFFFFF17] transition-opacity"
            aria-label="Add emoji"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0003 17.7083C14.2575 17.7083 17.7087 14.2572 17.7087 9.99999C17.7087 5.74279 14.2575 2.29166 10.0003 2.29166C5.74313 2.29166 2.29199 5.74279 2.29199 9.99999C2.29199 14.2572 5.74313 17.7083 10.0003 17.7083Z"
                stroke="white"
                strokeOpacity="0.09"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.50065 8.95833C8.07595 8.95833 8.54232 8.49196 8.54232 7.91667C8.54232 7.34137 8.07595 6.875 7.50065 6.875C6.92535 6.875 6.45898 7.34137 6.45898 7.91667C6.45898 8.49196 6.92535 8.95833 7.50065 8.95833Z"
                fill="white"
                fillOpacity="0.09"
              />
              <path
                d="M12.5007 8.95833C13.0759 8.95833 13.5423 8.49196 13.5423 7.91667C13.5423 7.34137 13.0759 6.875 12.5007 6.875C11.9254 6.875 11.459 7.34137 11.459 7.91667C11.459 8.49196 11.9254 8.95833 12.5007 8.95833Z"
                fill="white"
                fillOpacity="0.09"
              />
              <path
                d="M12.8866 11.875C12.594 12.3817 12.1733 12.8024 11.6665 13.095C11.1598 13.3875 10.585 13.5415 9.99995 13.5415C9.41485 13.5415 8.84007 13.3875 8.33335 13.095C7.82664 12.8024 7.40585 12.3817 7.11328 11.875"
                stroke="white"
                strokeOpacity="0.09"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Divider */}
          <div className="flex-shrink-0 w-px h-5 bg-white/15" />

          {/* Input Field */}
          <input
            type="text"
            placeholder="Type your text here......"
            className="flex-1 bg-transparent text-white placeholder-white/30 font-poppins text-xs md:text-sm outline-none"
          />

          {/* Send Button */}
          <button
            className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/30 hover:bg-white/40 transition-colors flex items-center justify-center"
            aria-label="Send message"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0264 11.8905C10.866 11.3084 11.4831 10.8111 12.0449 11.0705L24.5848 16.8624C25.1384 17.1178 25.1384 17.8819 24.5848 18.1373L12.0443 23.9297C11.4825 24.1886 10.8654 23.6913 11.0258 23.1092L12.5763 17.4998L11.0264 11.8905ZM13.3643 17.9237L11.9539 23.0323L23.9321 17.4998L11.9539 11.9674L13.3643 17.076H19.8968C20.0128 17.076 20.1241 17.1207 20.2061 17.2002C20.2882 17.2796 20.3343 17.3874 20.3343 17.4998C20.3343 17.6123 20.2882 17.7201 20.2061 17.7995C20.1241 17.879 20.0128 17.9237 19.8968 17.9237H13.3643Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatDialog;
