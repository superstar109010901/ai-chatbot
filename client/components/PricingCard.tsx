interface PricingCardProps {
  planName: string;
  price?: string | number;
  monthlyPrice?: string | number;
  yearlyPrice?: string | number;
  isYearly?: boolean;
  period?: string;
  buttonText: string;
  features: string[];
  isPopular?: boolean;
  variant?: "default" | "highlighted";
}

export default function PricingCard({
  planName,
  price,
  monthlyPrice,
  yearlyPrice,
  isYearly = false,
  period,
  buttonText,
  features,
  isPopular = false,
  variant = "default",
}: PricingCardProps) {
  // Use ternary operator to determine the price to display
  const displayPrice = monthlyPrice !== undefined && yearlyPrice !== undefined
    ? isYearly ? yearlyPrice : monthlyPrice
    : price;

  // Set the period text based on yearly/monthly selection
  const displayPeriod = period || (isYearly ? "/ Year" : "/ month");
  const isPro = variant === "highlighted";

  return (
    <div
      className={`flex flex-col w-full items-center bg-[radial-gradient(circle_at_top,_#121426,_#000000)] rounded-[16px] border-t border-r h-full border-[#8AA5FF] relative`}
    >
      <div
        className={`flex flex-col justify-center items-start gap-6 rounded-[16px] w-full p-6 lg:p-8 `}
      >
        <div className="flex flex-col justify-center items-start gap-4 w-full">
          <div className="flex items-end gap-2 w-full flex-wrap">
            <span className="text-white font-[Poppins] text-base font-normal leading-[25.6px] tracking-[-0.32px]">
              {planName}
            </span>
            {isPopular && (
              <div className="flex justify-center items-center rounded-[99px] px-3 h-[22px] bg-gradient-to-r from-purple-600 to-purple-800 shadow-lg">
                <span className="text-white font-[Poppins] text-sm font-normal leading-[22.4px] tracking-[-0.28px]">
                  Popular
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <h3 className="text-white text-center font-[Poppins] text-[44px] font-medium leading-[52.8px] tracking-[-0.44px]">
              {typeof displayPrice === "number" ? `$${displayPrice}` : displayPrice}
            </h3>
            {typeof displayPrice === "number" && (
              <span className="text-[rgba(230,236,255,0.7)] font-[Poppins] text-base font-normal leading-[25.6px] tracking-[-0.32px] opacity-80 mt-3">
                {displayPeriod}
              </span>
            )}
          </div>
        </div>

        <button
          className={`w-full h-[46px] rounded-[10px] flex justify-center items-center text-white font-[Poppins] text-base font-normal leading-[25.6px] tracking-[-0.32px] transition-all ${
            isPro
              ? "bg-gradient-to-r from-blue-600 to-blue-700 shadow-[0_8px_40px_0_rgba(17,0,255,0.5),0_0_0_1px_rgba(0,85,255,0.12)] hover:shadow-[0_8px_50px_0_rgba(17,0,255,0.6)] border-2 border-blue-500/20"
              : "bg-gradient-to-r from-blue-600 to-blue-700 shadow-[0_8px_40px_0_rgba(17,0,255,0.5),0_0_0_1px_rgba(0,85,255,0.12)] hover:shadow-[0_8px_50px_0_rgba(17,0,255,0.6)] border-2 border-white/20"
          }`}
        >
          {buttonText}
        </button>

        <div className="flex flex-col justify-center items-start gap-4 w-full">
          <span className="text-[rgba(230,236,255,0.7)] font-[Poppins] text-base font-normal leading-[25.6px] tracking-[-0.32px]">
            Includes:
          </span>

          <div className="flex flex-col gap-4 w-full">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start w-full gap-3">
                <svg
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" stroke="#2934FF" strokeWidth="2" />
                  <path
                    d="M8 12L11 15L16 9"
                    stroke="#2934FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[rgba(230,236,255,0.7)] font-[Poppins] text-base font-normal leading-[25.6px] tracking-[-0.32px]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
