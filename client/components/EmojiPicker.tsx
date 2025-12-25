import { useState, useRef, useEffect } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

interface EmojiPickerButtonProps {
  onEmojiClick: (emoji: string) => void;
  disabled?: boolean;
}

export const EmojiPickerButton = ({ onEmojiClick, disabled = false }: EmojiPickerButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        buttonRef.current &&
        !pickerRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && buttonRef.current && pickerRef.current) {
      const updatePosition = () => {
        if (buttonRef.current && pickerRef.current) {
          const buttonRect = buttonRef.current.getBoundingClientRect();
          const pickerWidth = 350;
          const pickerHeight = 435;
          const spacing = 8;

          // Calculate position - center horizontally, above the button
          let left = buttonRect.left - pickerWidth / 2 + buttonRect.width / 2;
          let top = buttonRect.top - pickerHeight - spacing;

          // Adjust if going off-screen horizontally
          if (left < 16) {
            left = 16;
          } else if (left + pickerWidth > window.innerWidth - 16) {
            left = window.innerWidth - pickerWidth - 16;
          }

          // Adjust if going off-screen vertically (show above, or below if not enough space)
          if (top < 16) {
            // Not enough space above, show below
            top = buttonRect.bottom + spacing;
          }

          pickerRef.current.style.left = `${left}px`;
          pickerRef.current.style.top = `${top}px`;
        }
      };

      updatePosition();
      window.addEventListener("resize", updatePosition);
      window.addEventListener("scroll", updatePosition, true);

      return () => {
        window.removeEventListener("resize", updatePosition);
        window.removeEventListener("scroll", updatePosition, true);
      };
    }
  }, [isOpen]);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    onEmojiClick(emojiData.emoji);
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative flex items-center justify-center">
        <button
          ref={buttonRef}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className="flex-shrink-0 flex items-center justify-center text-[#FFFFFF17] hover:text-white/50 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
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
              stroke="currentColor"
              strokeOpacity="0.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.50065 8.95833C8.07595 8.95833 8.54232 8.49196 8.54232 7.91667C8.54232 7.34137 8.07595 6.875 7.50065 6.875C6.92535 6.875 6.45898 7.34137 6.45898 7.91667C6.45898 8.49196 6.92535 8.95833 7.50065 8.95833Z"
              fill="currentColor"
              fillOpacity="0.5"
            />
            <path
              d="M12.5007 8.95833C13.0759 8.95833 13.5423 8.49196 13.5423 7.91667C13.5423 7.34137 13.0759 6.875 12.5007 6.875C11.9254 6.875 11.459 7.34137 11.459 7.91667C11.459 8.49196 11.9254 8.95833 12.5007 8.95833Z"
              fill="currentColor"
              fillOpacity="0.5"
            />
            <path
              d="M12.8866 11.875C12.594 12.3817 12.1733 12.8024 11.6665 13.095C11.1598 13.3875 10.585 13.5415 9.99995 13.5415C9.41485 13.5415 8.84007 13.3875 8.33335 13.095C7.82664 12.8024 7.40585 12.3817 7.11328 11.875"
              stroke="currentColor"
              strokeOpacity="0.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          ref={pickerRef}
          className="fixed z-[200]"
          style={{
            left: "0px",
            top: "0px",
          }}
        >
          <div className="bg-[#1a1a1a] rounded-lg shadow-2xl border border-white/10 overflow-hidden">
            <EmojiPicker
              onEmojiClick={handleEmojiClick}
              theme={"dark" as any}
              width={350}
              height={435}
              previewConfig={{
                showPreview: false,
              }}
              skinTonesDisabled
            />
          </div>
        </div>
      )}
    </>
  );
};
