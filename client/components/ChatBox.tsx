import { useContext } from "react";
import { ChatboxContext } from "./ChatboxContext";

const ChatBox = () => {
  const context = useContext(ChatboxContext);

  if (!context) {
    throw new Error("ChatBox must be used within ChatboxProvider");
  }

  const { isOpen, toggleModal } = context;

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <div className="w-[70px] h-[70px] bg-gradient-to-r from-[#435CED] to-[#263487] rounded-full flex items-center justify-center">
        <img src="/chat.svg" alt="chatbox" onClick={toggleModal} className="w-[50px] h-[50px] cursor-pointer hover:scale-110 transition-transform duration-300" />
      </div>
    </div>
  );
};

export default ChatBox;
