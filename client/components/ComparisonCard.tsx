interface ComparisonCardProps {
  type: "positive" | "negative" | "mobile";
  title?: string;
  features: string[];
  othersFeatures?: string[];
  logo?: React.ReactNode;
}

const CheckIcon = () => (
  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.74999 8.54395L3.16699 10.127L7.91699 14.877L15.833 6.95995L14.25 5.37695L7.91699 11.71L4.74999 8.54395Z" fill="#8AA5FF"/>
  </svg>
);

const XIcon = () => (
  <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.49994 2.21289L5.99994 6.71289L10.4999 2.21289L11.9139 3.62689L7.41394 8.12689L11.9139 12.6269L10.4999 14.0409L5.99994 9.54089L1.49994 14.0409L0.0859375 12.6269L4.58594 8.12689L0.0859375 3.62689L1.49994 2.21289Z" fill="#8AA5FF"/>
  </svg>
);

export default function ComparisonCard({
  type,
  title,
  features,
  othersFeatures,
  logo,
}: ComparisonCardProps) {
  const Icon = type === "positive" || type === "mobile" ? CheckIcon : XIcon;

  // Mobile layout - single card with both sections
  if (type === "mobile") {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="rounded-[16px] border border-white/[0.07] bg-gradient-to-b from-[#121426] to-[#000000] backdrop-blur-sm overflow-hidden">
          {/* PulseChat Section */}
          <div className="px-6 py-6 sm:px-8 sm:py-8 ">
            {/* Header */}
            <div className="mb-6">{logo}</div>

            {/* Features */}
            <div className="flex flex-col gap-5">
              {features.map((feature, index) => (
                <div key={`pulsechat-${index}`} className="flex flex-col">
                  <div className="flex items-center gap-2.5">
                    <div className="flex-shrink-0">
                      <CheckIcon />
                    </div>
                    <p className="text-[rgba(230,236,255,0.7)] font-poppins text-sm sm:text-base font-normal leading-[25.6px] tracking-[-0.32px]">
                      {feature}
                    </p>
                  </div>
                  {index < features.length - 1 && (
                    <div className="w-full h-px bg-white/10 mt-5" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10" />

          {/* Others Section */}
          <div className="px-6 py-6 sm:px-8 sm:py-8">
            {/* Header */}
            <h3 className="text-white text-lg sm:text-xl font-medium font-poppins tracking-[-0.48px] mb-6" style = {{marginLeft:"50%", transform:"translateX(-15%)"}}>
              Others
            </h3>

            {/* Features */}
            <div className="flex flex-col gap-5">
              {othersFeatures?.map((feature, index) => (
                <div key={`others-${index}`} className="flex flex-col">
                  <div className="flex items-center gap-2.5">
                    <div className="flex-shrink-0">
                      <XIcon />
                    </div>
                    <p className="text-[rgba(230,236,255,0.7)] font-poppins text-sm sm:text-base font-normal leading-[25.6px] tracking-[-0.32px]">
                      {feature}
                    </p>
                  </div>
                  {index < (othersFeatures?.length || 0) - 1 && (
                    <div className="w-full h-px bg-white/10 mt-5" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout - separate cards
  return (
    <div className="w-full max-w-[488px] flex flex-col">
      {/* Header */}
      <div className="h-16 flex items-center justify-center mb-1 px-6">
        {logo ? (
          logo
        ) : (
          <h3 className="text-white text-2xl font-medium font-poppins tracking-[-0.48px]">
            {title}
          </h3>
        )}
      </div>

      {/* Card Container */}
      <div className="rounded-[16px] border border-white/[0.07] bg-gradient-to-b from-[#121426] to-[#000000] backdrop-blur-sm overflow-hidden">
        {/* Points Container */}
        <div className="flex flex-col px-7 py-8 gap-5">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              {/* Point Item */}
              <div className="flex items-center gap-2.5 h-[26px]">
                <div className="flex-shrink-0">
                  <Icon />
                </div>
                <p className="text-[rgba(230,236,255,0.7)] font-poppins text-base font-normal leading-[25.6px] tracking-[-0.32px]">
                  {feature}
                </p>
              </div>

              {/* Separator */}
              {index < features.length - 1 && (
                <div className="w-full h-px bg-white/10 mt-5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
