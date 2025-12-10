import { useState } from "react";
import PricingCard from "./PricingCard";
import PricingToggle from "./PricingToggle";
import ScrollAnimation from "./ScrollAnimation";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const pricingPlans = [
    {
      planName: "Free Plan",
      monthlyPrice: 0,
      yearlyPrice: 0,
      buttonText: "Start For Free",
      features: [
        "Basic chatbot widget",
        "Limited automation flows",
        "Up to 100 chats/month",
        "Google Calendar sync",
        "Community support",
      ],
    },
    {
      planName: "Starter",
      monthlyPrice: 12,
      yearlyPrice: 144,
      buttonText: "Get the Starter Plan",
      features: [
        "Everything in Free",
        "Unlimited chats",
        "Advanced automation",
        "Email support",
        "WhatsApp integration (limited)",
      ],
    },
    {
      planName: "Pro",
      monthlyPrice: 79,
      yearlyPrice: 948,
      buttonText: "Go Pro",
      isPopular: true,
      variant: "highlighted" as const,
      features: [
        "Everything in Starter",
        "SMS integration",
        "Priority email support",
        "Multi-channel automation flows",
        "Analytics dashboard",
      ],
    },
    {
      planName: "Enterprise",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      buttonText: "Customise Now",
      features: [
        "Fully customised bots",
        "All integrations",
        "Dedicated account manager",
        "24/7 phone & chat support",
        "SLA guarantees",
      ],
    },
  ];

  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-23 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #1A5F8F 0%, #050C18 100%)",
        }}
      />

      <div
        className="absolute -left-[361px] top-[36px] w-[642px] h-[642px] rounded-full opacity-88 blur-[100px] pointer-events-none"
        style={{ background: "#000" }}
      />
      <div
        className="absolute -right-[107px] top-[36px] w-[642px] h-[642px] rounded-full opacity-88 blur-[100px] pointer-events-none"
        style={{ background: "#000" }}
      />

      <div className="relative z-10 container mx-auto px-4 max-w-[1400px]">
        <ScrollAnimation>
          <div className="flex flex-col items-center gap-12 mb-12 lg:mb-16">
          <div className="inline-flex items-center rounded-[60px] backdrop-blur-[34px] px-4 py-2 border-l-[2px] border-[#2934FF]">
            <span
              className="font-[Poppins] text-base font-semibold leading-[25.6px] tracking-[-0.32px]"
              style={{
                background: "linear-gradient(135deg, #8AA5FF 0%, #435CED 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              PRICING
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 max-w-[640px]">
            <h2 className="text-white text-center font-[Poppins] text-3xl md:text-4xl lg:text-[44px] font-medium leading-tight md:leading-[52.8px] tracking-[-0.44px]">
              Flexible Pricing Plans
            </h2>
            <p className="text-[rgba(230,236,255,0.7)] text-center font-[Inter] text-sm md:text-base font-normal leading-[25.6px] tracking-[-0.32px]">
              Choose a plan that fits your business needs and unlock the full
              potential of our platform
            </p>
          </div>

          <PricingToggle onToggle={setIsYearly} />
        </div>
        </ScrollAnimation>

        {/* Desktop Grid View */}
        <ScrollAnimation delay={0.2}>
          <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {pricingPlans.map((plan, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
            <PricingCard
              planName={plan.planName}
              monthlyPrice={plan.monthlyPrice}
              yearlyPrice={plan.yearlyPrice}
              isYearly={isYearly}
              buttonText={plan.buttonText}
              features={plan.features}
              isPopular={plan.isPopular}
              variant={plan.variant}
            />
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>

        {/* Mobile Carousel View */}
        <ScrollAnimation delay={0.2}>
          <div className="lg:hidden flex flex-col items-center gap-8">
          <div className="w-full max-w-md">
            <PricingCard
              planName={pricingPlans[currentSlide].planName}
              monthlyPrice={pricingPlans[currentSlide].monthlyPrice}
              yearlyPrice={pricingPlans[currentSlide].yearlyPrice}
              isYearly={isYearly}
              buttonText={pricingPlans[currentSlide].buttonText}
              features={pricingPlans[currentSlide].features}
              isPopular={pricingPlans[currentSlide].isPopular}
              variant={pricingPlans[currentSlide].variant}
            />
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {pricingPlans.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all ${
                  index === currentSlide
                    ? "w-12 h-2 rounded-full shadow-[0_2px_4px_0_rgba(41,52,255,0.25),0_-2px_4px_0_rgba(41,52,255,0.25)]"
                    : "w-2.5 h-2.5 rounded-full border border-[rgba(41,52,255,0.53)]"
                }`}
                style={{
                  background:
                    index === currentSlide
                      ? "linear-gradient(135deg, #1A47E0 0%, #2934FF 100%)"
                      : "transparent",
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
