import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X, MessageCircle, Monitor, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatbotSettingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type ToneStyle = "friendly" | "formal" | "professional" | "playful";
type WidgetPosition = "bottom-left" | "bottom-right";
type WidgetShape = "round" | "square";

export function ChatbotSettingsModal({ open, onOpenChange }: ChatbotSettingsModalProps) {
  const [businessName, setBusinessName] = useState("Acme Corporation");
  const [greetingMessage, setGreetingMessage] = useState("Hi there! 👋 How can I help you today");
  const [toneStyle, setToneStyle] = useState<ToneStyle>("friendly");
  const [questions, setQuestions] = useState([
    "What are your business hours?",
    "How can I contact support?",
    "What services do you offer?",
  ]);
  const [buttonText, setButtonText] = useState("Chat Now");
  const [widgetPosition, setWidgetPosition] = useState<WidgetPosition>("bottom-right");
  const [widgetShape, setWidgetShape] = useState<WidgetShape>("round");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const removeQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const addQuestion = () => {
    setQuestions([...questions, ""]);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Lock body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      // Scroll modal to top when opened
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = 0;
        }
      }, 0);

      return () => {
        // Restore body scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col">
      {/* Blurred Background */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-lg"
        onClick={() => onOpenChange(false)}
      />
      
      {/* Full Screen Modal Container */}
      <div className="relative w-full h-full flex flex-col overflow-hidden bg-gradient-to-br from-[#0a0a0f]/95 via-[#0f0f1a]/95 to-[#0a0a0f]/95 backdrop-blur-[100px]">
        {/* Header - Fixed/Sticky */}
        <div className="flex-shrink-0 flex items-center justify-center px-6 sm:px-12 lg:px-20 py-6 sm:py-8 border-b border-slate-800/50 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] z-10">
          <div className="w-full max-w-[1280px] flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-normal text-white font-['Poppins'] tracking-tight">
              Chatbot Settings
            </h1>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="h-[46px] px-4 sm:px-6 bg-transparent border-[#0055FE] text-white hover:bg-[#0055FE]/10 font-medium text-sm sm:text-base"
              >
                Cancel
              </Button>
              <Button
                onClick={() => onOpenChange(false)}
                className="h-[46px] px-4 sm:px-6 bg-[#0055FE] hover:bg-[#0055FE]/90 text-white font-medium shadow-sm text-sm sm:text-base"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 flex flex-col items-center justify-start px-6 sm:px-12 lg:px-20 pt-6 sm:pt-8 pb-6 sm:pb-8 overflow-y-auto overflow-x-hidden modal-scrollbar"
        >
          <div className="w-full max-w-[1280px] flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div className="flex-1 max-w-full sm:max-w-[624px] space-y-6 bg-black/20 border border-[#0055FE]/35 rounded-xl p-6 sm:p-8 shadow-lg h-fit">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white font-['Inter']">
                  Business Name
                </label>
                <Input
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="h-[46px] bg-transparent border-[#1B1B1B] text-white text-base tracking-tight focus-visible:ring-[#0055FE] focus-visible:border-[#0055FE]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white font-['Inter']">
                  Greeting Message
                </label>
                <Textarea
                  value={greetingMessage}
                  onChange={(e) => setGreetingMessage(e.target.value)}
                  className="min-h-[125px] bg-transparent border-[#1B1B1B] text-white text-base leading-6 focus-visible:ring-[#0055FE] focus-visible:border-[#0055FE]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white font-['Inter']">
                  Tone Style
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <ToneButton
                    icon={<SmileFriendlyIcon />}
                    label="Friendly"
                    active={toneStyle === "friendly"}
                    onClick={() => setToneStyle("friendly")}
                  />
                  <ToneButton
                    icon={<BriefcaseIcon />}
                    label="Formal"
                    active={toneStyle === "formal"}
                    onClick={() => setToneStyle("formal")}
                  />
                  <ToneButton
                    icon={<UserProfessionalIcon />}
                    label="Professional"
                    active={toneStyle === "professional"}
                    onClick={() => setToneStyle("professional")}
                  />
                  <ToneButton
                    icon={<StarPlayfulIcon />}
                    label="Playful"
                    active={toneStyle === "playful"}
                    onClick={() => setToneStyle("playful")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white font-['Inter']">
                  Predefined Questions
                </label>
                <div className="space-y-2.5">
                  {questions.map((question, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input
                        value={question}
                        onChange={(e) => {
                          const newQuestions = [...questions];
                          newQuestions[index] = e.target.value;
                          setQuestions(newQuestions);
                        }}
                        className="h-[42px] bg-transparent border-2 border-[#121426] text-white text-sm focus-visible:ring-[#0055FE] focus-visible:border-[#0055FE]"
                      />
                      <button
                        onClick={() => removeQuestion(index)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-slate-800/50 rounded transition-colors"
                      >
                        <X className="w-3 h-4 text-slate-400" />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={addQuestion}
                    className="w-full h-[42px] flex items-center justify-center gap-2 border border-dashed border-[#1B1B1B] rounded-lg text-white text-sm font-medium hover:bg-slate-800/30 transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                    Add Question
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white font-['Inter']">
                  Button Text
                </label>
                <Input
                  value={buttonText}
                  onChange={(e) => setButtonText(e.target.value)}
                  className="h-[46px] bg-transparent border-2 border-[#121426] text-white text-base leading-6 focus-visible:ring-[#0055FE] focus-visible:border-[#0055FE]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white font-['Inter']">
                  Widget Position
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <PositionButton
                    icon={<SupportIcon />}
                    label="Bottom Left"
                    active={widgetPosition === "bottom-left"}
                    onClick={() => setWidgetPosition("bottom-left")}
                  />
                  <PositionButton
                    icon={<SupportIcon />}
                    label="Bottom Right"
                    active={widgetPosition === "bottom-right"}
                    onClick={() => setWidgetPosition("bottom-right")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white font-['Inter']">
                  Widget Shape
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <ShapeButton
                    icon={<CircleIcon />}
                    label="Round"
                    active={widgetShape === "round"}
                    onClick={() => setWidgetShape("round")}
                  />
                  <ShapeButton
                    icon={<SquareIcon />}
                    label="Square"
                    active={widgetShape === "square"}
                    onClick={() => setWidgetShape("square")}
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 max-w-full sticky top-0  sm:max-w-[624px] space-y-6 bg-black/20 border-2 border-[#0055FE]/35 rounded-xl p-6 sm:p-8 shadow-lg h-fit">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white font-['Inter']">
                  Live Preview
                </h2>
                <span className="px-4 py-1 bg-[#0055FE] rounded-full text-xs font-semibold text-white">
                  Active
                </span>
              </div>

              <div className="w-full h-[560px] border-2 border-[#121426] rounded-xl bg-black flex items-center justify-center relative overflow-hidden">
                <div className="text-center space-y-3">
                  <Monitor className="w-14 h-12 mx-auto text-slate-400" />
                  <p className="text-sm text-slate-400">Your website preview</p>
                </div>

                <button
                  className={cn(
                    "absolute bottom-6 w-16 h-16 flex items-center justify-center bg-[#6366F1] hover:bg-[#6366F1]/90 shadow-2xl transition-all",
                    widgetShape === "round" ? "rounded-full" : "rounded-lg",
                    widgetPosition === "bottom-right" ? "right-6" : "left-6"
                  )}
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="flex items-start gap-3 p-4 border-2 border-[#121426] rounded-lg bg-black/40">
                <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="8" fill="#2563EB" />
                    <path
                      d="M8 4C8.26522 4 8.51957 4.10536 8.70711 4.29289C8.89464 4.48043 9 4.73478 9 5C9 5.26522 8.89464 5.51957 8.70711 5.70711C8.51957 5.89464 8.26522 6 8 6C7.73478 6 7.48043 5.89464 7.29289 5.70711C7.10536 5.51957 7 5.26522 7 5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4ZM6.75 10.5H7.5V8.5H6.75C6.33437 8.5 6 8.16563 6 7.75C6 7.33437 6.33437 7 6.75 7H8.25C8.66563 7 9 7.33437 9 7.75V10.5H9.25C9.66563 10.5 10 10.8344 10 11.25C10 11.6656 9.66563 12 9.25 12H6.75C6.33437 12 6 11.6656 6 11.25C6 10.8344 6.33437 10.5 6.75 10.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-semibold text-white">Preview Tips</p>
                  <p className="text-xs text-white/90 leading-tight">
                    Changes are reflected in real-time. Click the widget to see the chat interface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToneButton({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "h-[52px] flex items-center justify-center gap-2 rounded-lg font-medium text-white transition-all",
        active
          ? "border-2 border-[#1B1B1B] bg-[#1B1B1B]/30"
          : "border border-[#1B1B1B] hover:bg-[#1B1B1B]/20"
      )}
    >
      {icon}
      <span className="text-base">{label}</span>
    </button>
  );
}

function PositionButton({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "h-[52px] flex items-center justify-center gap-2 rounded-lg font-medium transition-all",
        active
          ? "border-2 border-[#1B1B1B] bg-[#1B1B1B]/30 text-[#EEF2FF]"
          : "border border-[#1B1B1B] text-white hover:bg-[#1B1B1B]/20"
      )}
    >
      {icon}
      <span className="text-base">{label}</span>
    </button>
  );
}

function ShapeButton({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "h-[52px] flex items-center justify-center gap-2 rounded-lg font-medium text-white transition-all",
        active
          ? "border-2 border-[#1B1B1B] bg-[#1B1B1B]/30"
          : "border border-[#1B1B1B] hover:bg-[#1B1B1B]/20"
      )}
    >
      {icon}
      <span className="text-base">{label}</span>
    </button>
  );
}

function SmileFriendlyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="#4338CA" />
      <path
        d="M5.12813 10.1719C5.6875 10.8188 6.64375 11.5 8 11.5C9.35625 11.5 10.3125 10.8188 10.8719 10.1719C11.0531 9.9625 11.3688 9.94062 11.5781 10.1219C11.7875 10.3031 11.8094 10.6188 11.6281 10.8281C10.9313 11.6281 9.72187 12.5 8 12.5C6.27813 12.5 5.06875 11.6281 4.37187 10.8281C4.19062 10.6188 4.2125 10.3031 4.42188 10.1219C4.63125 9.94062 4.94688 9.9625 5.12813 10.1719ZM5.5125 5.5C5.77772 5.5 6.03207 5.60536 6.21961 5.79289C6.40714 5.98043 6.5125 6.23478 6.5125 6.5C6.5125 6.76522 6.40714 7.01957 6.21961 7.20711C6.03207 7.39464 5.77772 7.5 5.5125 7.5C5.24728 7.5 4.99293 7.39464 4.80539 7.20711C4.61786 7.01957 4.5125 6.76522 4.5125 6.5C4.5125 6.23478 4.61786 5.98043 4.80539 5.79289C4.99293 5.60536 5.24728 5.5 5.5125 5.5ZM10.5125 5.5C10.7777 5.5 11.0321 5.60536 11.2196 5.79289C11.4071 5.98043 11.5125 6.23478 11.5125 6.5C11.5125 6.76522 11.4071 7.01957 11.2196 7.20711C11.0321 7.39464 10.7777 7.5 10.5125 7.5C10.2473 7.5 9.99293 7.39464 9.80539 7.20711C9.61786 7.01957 9.5125 6.76522 9.5125 6.5C9.5125 6.23478 9.61786 5.98043 9.80539 5.79289C9.99293 5.60536 10.2473 5.5 10.5125 5.5Z"
        fill="white"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M5.75 1.5H10.25C10.3875 1.5 10.5 1.6125 10.5 1.75V3H5.5V1.75C5.5 1.6125 5.6125 1.5 5.75 1.5ZM4 1.75V3H2C0.896875 3 0 3.89688 0 5V8H6H10H16V5C16 3.89688 15.1031 3 14 3H12V1.75C12 0.784375 11.2156 0 10.25 0H5.75C4.78438 0 4 0.784375 4 1.75ZM16 9H10V10C10 10.5531 9.55313 11 9 11H7C6.44687 11 6 10.5531 6 10V9H0V13C0 14.1031 0.896875 15 2 15H14C15.1031 15 16 14.1031 16 13V9Z"
        fill="#0660DF"
      />
    </svg>
  );
}

function UserProfessionalIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
      <path
        d="M7 8C5.93913 8 4.92172 7.57857 4.17157 6.82843C3.42143 6.07828 3 5.06087 3 4C3 2.93913 3.42143 1.92172 4.17157 1.17157C4.92172 0.421427 5.93913 0 7 0C8.06087 0 9.07828 0.421427 9.82843 1.17157C10.5786 1.92172 11 2.93913 11 4C11 5.06087 10.5786 6.07828 9.82843 6.82843C9.07828 7.57857 8.06087 8 7 8ZM6.53438 11.225L5.95312 10.2563C5.75312 9.92188 5.99375 9.5 6.38125 9.5H7H7.61562C8.00312 9.5 8.24375 9.925 8.04375 10.2563L7.4625 11.225L8.50625 15.0969L9.63125 10.5063C9.69375 10.2531 9.9375 10.0875 10.1906 10.1531C12.3813 10.7031 14 12.6844 14 15.0406C14 15.5719 13.5687 16 13.0406 16H8.92188C8.85625 16 8.79688 15.9875 8.74063 15.9656L8.75 16H5.25L5.25938 15.9656C5.20313 15.9875 5.14062 16 5.07812 16H0.959375C0.43125 16 0 15.5687 0 15.0406C0 12.6812 1.62188 10.7 3.80938 10.1531C4.0625 10.0906 4.30625 10.2563 4.36875 10.5063L5.49375 15.0969L6.5375 11.225H6.53438Z"
        fill="#0660DF"
      />
    </svg>
  );
}

function StarPlayfulIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="#0660DF" />
      <path
        d="M12.7312 10.3594C12.8875 9.99062 12.5125 9.65625 12.1281 9.775C10.8875 10.1562 9.4875 10.3687 8.00937 10.3687C6.53125 10.3687 5.13125 10.1562 3.89062 9.775C3.50625 9.65625 3.13125 9.99062 3.2875 10.3594C4.06875 12.2062 5.8875 13.5 8.00937 13.5C10.1312 13.5 11.9531 12.2062 12.7312 10.3594ZM5 3.75L5.225 3.89062L5.74375 4.975L6.93437 5.13125L7.075 5.5625L6.20312 6.39062L6.42188 7.57188L6.05625 7.8375L5 7.26562L3.94375 7.84062L3.57812 7.575L3.79688 6.39375L2.925 5.56563L3.06562 5.13438L4.25625 4.97813L4.775 3.89375L5 3.75ZM11 3.75L11.225 3.89062L11.7437 4.975L12.9344 5.13125L13.075 5.5625L12.2031 6.39062L12.4219 7.57188L12.0562 7.8375L11 7.26562L9.94375 7.84062L9.57813 7.575L9.79688 6.39375L8.925 5.56563L9.06563 5.13438L10.2563 4.97813L10.775 3.89375L11 3.75Z"
        fill="white"
      />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7.5" stroke="#4338CA" strokeDasharray="2 2" />
      <circle cx="8" cy="11.5" r="0.875" fill="#4338CA" />
      <path
        d="M8.24063 9.75H7.74063C7.53438 9.75 7.36563 9.58125 7.36563 9.375C7.36563 7.15625 9.78438 7.37812 9.78438 6.00625C9.78438 5.38125 9.22813 4.75 7.99063 4.75C7.08126 4.75 6.60626 5.05 6.14063 5.64687C6.01876 5.80312 5.79376 5.83438 5.63438 5.72188L5.22501 5.43437C5.05001 5.3125 5.00938 5.06562 5.14376 4.89687C5.80626 4.04687 6.59376 3.5 7.99376 3.5C9.62813 3.5 11.0375 4.43125 11.0375 6.00625C11.0375 8.11875 8.61876 7.99063 8.61876 9.375C8.61563 9.58125 8.44688 9.75 8.24063 9.75Z"
        fill="#4338CA"
      />
    </svg>
  );
}

function CircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="#4338CA" />
    </svg>
  );
}

function SquareIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
      <rect x="0" y="1" width="14" height="14" rx="2" fill="#0660DF" />
    </svg>
  );
}
