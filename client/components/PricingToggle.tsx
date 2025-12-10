import { useState } from "react";

interface PricingToggleProps {
  onToggle?: (isYearly: boolean) => void;
}

export default function PricingToggle({ onToggle }: PricingToggleProps) {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = (yearly: boolean) => {
    setIsYearly(yearly);
    onToggle?.(yearly);
  };

  return (
    <div className="w-[300px] h-[52px] rounded-[34px] shadow-[0_1px_6px_0_rgba(45,24,93,0.1)] bg-card/40 backdrop-blur-sm border border-white/5 relative flex items-center">
      {/* Monthly Button */}
      <button
        onClick={() => handleToggle(false)}
        className={`relative flex items-center justify-center px-[33px] h-full transition-all ${
          !isYearly ? "text-white" : "text-[rgba(230,236,255,0.7)] opacity-90"
        }`}
      >
        <span className="font-[Poppins] text-base font-normal leading-[25.6px] tracking-[-0.32px]">
          Monthly
        </span>
        {!isYearly && (
          <div className="absolute bottom-[1px] left-[30px] w-[67px] h-[2px] bg-white/50" />
        )}
      </button>

      {/* Vertical Divider */}
      <div className="w-[2px] h-[27px] bg-white/25" />

      {/* Yearly Button with Discount Badge */}
      <button
        onClick={() => handleToggle(true)}
        className={`relative flex items-center justify-center flex-1 h-full transition-all ${
          isYearly ? "text-white" : "text-[rgba(230,236,255,0.7)]"
        }`}
      >
        <div className="flex items-center justify-center gap-[5.41px] w-full px-2">
          <span className="font-[Poppins] text-base font-normal leading-[25.6px] tracking-[-0.32px] opacity-90">
            Yearly
          </span>
          <div className="flex items-center justify-center h-[38px] px-4 rounded-[192px] bg-primary/10">
            <span className="text-[rgba(230,236,255,0.7)] font-[Poppins] text-base font-normal leading-[25.6px] tracking-[-0.32px] opacity-90 whitespace-nowrap">
              30% off
            </span>
          </div>
        </div>
        {isYearly && (
          <div className="absolute bottom-[1px] left-[10px] w-[48px] h-[2px] bg-white/50" />
        )}
      </button>
    </div>
  );
}
