import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import PricingCard from "./PricingCard";
import PricingToggle from "./PricingToggle";
import ScrollAnimation from "./ScrollAnimation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

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
    <section id="pricing" className="relative w-full py-16 lg:py-24 overflow-hidden">
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
          <div className="inline-flex items-center rounded-[60px] backdrop-blur-[34px] px-4 py-2 bg-black border-l-[2px] border-[#2934FF]">
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

        {/* Swiper Carousel - All Screen Sizes */}
        <ScrollAnimation delay={0.2}>
          <div className="w-full">
            <Swiper
              onSwiper={setSwiper}
              modules={[Pagination]}
              spaceBetween={24}
              slidesPerView="auto"
              centeredSlides={false}
              initialSlide={0}
              grabCursor={true}
              loop={false}
              speed={600}
              resistance={true}
              resistanceRatio={0.85}
              watchSlidesProgress={true}
              
              pagination={{
                clickable: true,
                dynamicBullets: false,
              }}
              className="!pb-12 !overflow-visible"
              style={{
                paddingLeft: "0",
                paddingRight: "0",
              }}
            >
              {pricingPlans.map((plan, index) => (
                <SwiperSlide key={index} className="!h-auto w-[375px]">
                  <div className="h-full w-full">
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
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
