import ComparisonCard from "./ComparisonCard";
import ScrollAnimation from "./ScrollAnimation";

export default function ComparisonSection() {
  const pulsechatFeatures = [
    "Community support",
    "Faster responses and connectivity.",
    "Advanced dashboard control",
    "Priority support",
    "Latest automation solutions",
  ];

  const othersFeatures = [
    "Limited community collaboration",
    "Rigid and non-scalable options",
    "Basic dashboard functionalities",
    "Lack of support",
    "Outdated and complex interfaces",
  ];

  const PulseChatLogo = () => (
    <div className="flex items-center gap-[7px] justify-center">
      <img src="/logo.svg" alt="PulseChat"  />
      <span className="text-white font-[Inter] text-[21px] font-semibold leading-[21px] tracking-[-0.4px]">
        PulseChat
      </span>
    </div>
  );

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://api.builder.io/api/v1/image/assets/TEMP/f0d3d711a0e082279a05c84f6bfdf77291487bb4?width=3038')",
          backgroundSize: "100% 123.317%",
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-[150px] blur-[20px]"
        style={{ backdropFilter: "blur(20px)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[150px] blur-[20px]"
        style={{ backdropFilter: "blur(20px)" }}
      />

      <div className="relative z-10 container mx-auto px-4 max-w-[1000px]">
        <ScrollAnimation>
        <div className="flex flex-col items-center gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="inline-flex justify-center items-center rounded-[60px] bg-black backdrop-blur-[34px] px-4 py-2 border-l-[2px] border-[#2934FF] ">
            <span
              className="font-[Poppins] text-sm sm:text-base font-semibold leading-[25.6px] tracking-[-0.32px]"
              style={{
                background: "linear-gradient(135deg, #8AA5FF 0%, #435CED 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              COMPARISON
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 max-w-[640px]">
            <h2 className="text-white text-center font-[Poppins] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-medium leading-tight md:leading-[52.8px] tracking-[-0.44px]">
              Why Pulsechat Stands Out
            </h2>
            <p className="text-[rgba(230,236,255,0.7)] text-center font-[Poppins] text-sm sm:text-base font-normal leading-[25.6px] tracking-[-0.32px] max-w-[467px]">
              See how we compare against others in performance, growth
            </p>
          </div>
        </div>
        </ScrollAnimation>

        {/* Mobile Two Column Layout */}
        <ScrollAnimation delay={0.2}>
        <div className="lg:hidden flex-col gap-3 sm:gap-4 items-center justify-center overflow-x-auto pb-4">
          <ComparisonCard
            type="positive"
            features={pulsechatFeatures}
            logo={<PulseChatLogo />}
          />
          <ComparisonCard
            type="negative"
            title="Others"
            features={othersFeatures}
          />
        </div>
        </ScrollAnimation>

        {/* Desktop Two Column Layout */}
        <ScrollAnimation delay={0.2}>
        <div className="hidden lg:flex lg:flex-row gap-6 lg:gap-8 items-start justify-center">
          <ComparisonCard
            type="positive"
            features={pulsechatFeatures}
            logo={<PulseChatLogo />}
          />
          <ComparisonCard
            type="negative"
            title="Others"
            features={othersFeatures}
          />
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
