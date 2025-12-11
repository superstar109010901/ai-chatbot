import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import HowItWorksCarousel from "./HowItWorks/HowItWorksCarousel";
import HowItWorksDesktop from "./HowItWorks/HowItWorksDesktop";

interface Step {
  id: number;
  label: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps: Step[] = [
    {
      id: 1,
      label: "Get Registered",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9997 5.33331C18.5852 5.33331 17.2286 5.89522 16.2284 6.89541C15.2282 7.8956 14.6663 9.25216 14.6663 10.6666C14.6663 12.0811 15.2282 13.4377 16.2284 14.4379C17.2286 15.4381 18.5852 16 19.9997 16C21.4142 16 22.7707 15.4381 23.7709 14.4379C24.7711 13.4377 25.333 12.0811 25.333 10.6666C25.333 9.25216 24.7711 7.8956 23.7709 6.89541C22.7707 5.89522 21.4142 5.33331 19.9997 5.33331ZM19.9997 7.86665C20.3674 7.86665 20.7315 7.93907 21.0712 8.07978C21.4109 8.2205 21.7196 8.42674 21.9796 8.68675C22.2396 8.94675 22.4458 9.25542 22.5865 9.59513C22.7273 9.93484 22.7997 10.2989 22.7997 10.6666C22.7997 11.0343 22.7273 11.3984 22.5865 11.7382C22.4458 12.0779 22.2396 12.3865 21.9796 12.6465C21.7196 12.9065 21.4109 13.1128 21.0712 13.2535C20.7315 13.3942 20.3674 13.4666 19.9997 13.4666C19.632 13.4666 19.2679 13.3942 18.9282 13.2535C18.5884 13.1128 18.2798 12.9065 18.0198 12.6465C17.7598 12.3865 17.5535 12.0779 17.4128 11.7382C17.2721 11.3984 17.1997 11.0343 17.1997 10.6666C17.1997 9.92404 17.4947 9.21185 18.0198 8.68675C18.5449 8.16165 19.2571 7.86665 19.9997 7.86665ZM5.33301 9.33331V13.3333H1.33301V16H5.33301V20H7.99967V16H11.9997V13.3333H7.99967V9.33331H5.33301ZM19.9997 17.3333C16.4397 17.3333 9.33301 19.1066 9.33301 22.6666V26.6666H30.6663V22.6666C30.6663 19.1066 23.5597 17.3333 19.9997 17.3333ZM19.9997 19.8666C23.9597 19.8666 28.133 21.8133 28.133 22.6666V24.1333H11.8663V22.6666C11.8663 21.8133 15.9997 19.8666 19.9997 19.8666Z"
            fill="#8AA5FF"
          />
        </svg>
      ),
      title: "Register by signing up",
      description: "Sign up and pick a plan that fits your needs.",
      benefits: [
        "Easy registration",
        "Quick onboarding",
        "Customizate with ease",
      ],
    },
    {
      id: 2,
      label: "Customize",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.3917 25.64L22.249 24.488C21.7601 24.3769 21.3477 24.2302 21.0117 24.048C20.6757 23.8658 20.3512 23.6004 20.0383 23.252L18.9517 23.6973L18.233 22.6107L19.177 21.8413C19.0126 21.3862 18.9303 20.9347 18.9303 20.4867C18.9303 20.0387 19.0126 19.5791 19.177 19.108L18.233 18.3133L18.9517 17.2253L20.0383 17.672C20.3343 17.3404 20.6632 17.0791 21.025 16.888C21.3868 16.6969 21.7948 16.5462 22.249 16.436L22.3917 15.2827H23.725L23.869 16.436C24.3232 16.5302 24.7268 16.6769 25.0797 16.876C25.4335 17.0751 25.7668 17.3404 26.0797 17.672L27.1663 17.2253L27.885 18.312L26.941 19.108C27.1215 19.5969 27.2077 20.0609 27.1997 20.5C27.1917 20.9391 27.097 21.3862 26.9157 21.8413L27.8837 22.6107L27.1663 23.6973L26.0797 23.252C25.7668 23.5836 25.4423 23.8444 25.1063 24.0347C24.7703 24.2258 24.3579 24.3769 23.869 24.488L23.725 25.6413L22.3917 25.64ZM7.48767 25.3333C6.87345 25.3333 6.36101 25.128 5.95034 24.7173C5.53967 24.3067 5.3339 23.7938 5.33301 23.1787V6.15467C5.33301 5.54044 5.53879 5.028 5.95034 4.61733C6.3619 4.20667 6.87434 4.00089 7.48767 4H24.513C25.1263 4 25.6388 4.20578 26.0503 4.61733C26.4619 5.02889 26.6672 5.54133 26.6663 6.15467V13.636C26.4495 13.5044 26.2343 13.3947 26.021 13.3067C25.8068 13.2178 25.5775 13.1404 25.333 13.0747V6.15467C25.333 5.91467 25.2561 5.71778 25.1023 5.564C24.9486 5.41022 24.7521 5.33333 24.513 5.33333H7.48634C7.24723 5.33333 7.05079 5.41022 6.89701 5.564C6.74323 5.71778 6.66634 5.91467 6.66634 6.15467V18.1547H12.2663C12.4832 18.7884 12.8255 19.3231 13.294 19.7587C13.7598 20.1942 14.3073 20.5009 14.9367 20.6787C15.0104 21.5542 15.2135 22.3889 15.546 23.1827C15.8784 23.9764 16.3487 24.6933 16.9567 25.3333H7.48767ZM23.0593 23.3333C23.8442 23.3333 24.5193 23.0507 25.0847 22.4853C25.6491 21.9209 25.9313 21.2462 25.9313 20.4613C25.9313 19.6764 25.6487 19.0018 25.0833 18.4373C24.518 17.8729 23.8433 17.5902 23.0593 17.5893C22.2753 17.5884 21.6007 17.8711 21.0353 18.4373C20.47 19.0036 20.1873 19.6782 20.1873 20.4613C20.1873 21.2462 20.47 21.9209 21.0353 22.4853C21.6007 23.0507 22.2753 23.3333 23.0593 23.3333Z"
            fill="#8AA5FF"
          />
        </svg>
      ),
      title: "Start Customizing",
      description: "Customise your bot and connect it to your website and favourite channels.",
      benefits: [
        "Easy registration",
        "Quick onboarding",
        "Customizate with ease",
      ],
    },
    {
      id: 3,
      label: "Actionable Insights",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.9997 10.6667C26.0663 10.6667 24.9863 12.5867 25.4263 14.0134L20.693 18.76C20.293 18.64 19.7063 18.64 19.3063 18.76L15.9063 15.36C16.3597 13.9334 15.2797 12 13.333 12C11.3997 12 10.3063 13.92 10.7597 15.36L4.67967 21.4267C3.25301 20.9867 1.33301 22.0667 1.33301 24C1.33301 25.4667 2.53301 26.6667 3.99967 26.6667C5.93301 26.6667 7.01301 24.7467 6.57301 23.32L12.6397 17.24C13.0397 17.36 13.6263 17.36 14.0263 17.24L17.4263 20.64C16.973 22.0667 18.053 24 19.9997 24C21.933 24 23.0263 22.08 22.573 20.64L27.3197 15.9067C28.7463 16.3467 30.6663 15.2667 30.6663 13.3334C30.6663 11.8667 29.4663 10.6667 27.9997 10.6667Z"
            fill="#8AA5FF"
          />
          <path
            d="M19.9997 12L21.253 9.24L23.9997 8L21.253 6.76L19.9997 4L18.773 6.76L15.9997 8L18.773 9.24L19.9997 12ZM4.66634 14.6667L5.33301 12L7.99967 11.3333L5.33301 10.6667L4.66634 8L3.99967 10.6667L1.33301 11.3333L3.99967 12L4.66634 14.6667Z"
            fill="#8AA5FF"
          />
        </svg>
      ),
      title: "Actionable Insights",
      description: "Watch your bot engage visitors, schedule appointments, and provide instant support.",
      benefits: [
        "Easy registration",
        "Quick onboarding",
        "Customizate with ease",
      ],
    },
  ];

  return (
    <section className="relative bg-background py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/0f0b6dbb6b1f4f4c07b12c550fea9277a34e5633?width=3040"
          alt="Background"
          className="absolute top-0 left-0 w-full h-auto opacity-20 object-cover"
        />

        {/* Gradient Blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-black rounded-full blur-3xl" />
        <div className="absolute -top-32 right-1/4 w-96 h-80 bg-blue-900/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 lg:mx-24 mx-auto">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full backdrop-blur-[34px] bg-black border-l-[2px] border-[#2934FF] mb-4">
              <span
                className="font-semibold text-xs sm:text-sm uppercase tracking-wider"
                style={{
                  background: "linear-gradient(135deg, #8AA5FF 0%, #435CED 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                SIMPLE THREE STEPS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium text-foreground mb-4">
              How It Works
            </h2>
          </div>
        </ScrollAnimation>

        {/* Mobile Carousel - Hidden on lg screens */}
        <ScrollAnimation delay={0.1} className="lg:hidden">
          <div className="px-4 sm:px-0">
            <HowItWorksCarousel
              steps={steps}
              activeStep={activeStep}
              onStepChange={setActiveStep}
            />
          </div>
        </ScrollAnimation>

        {/* Desktop Layout - Hidden on sm/md screens */}
        <ScrollAnimation delay={0.1} className="hidden lg:block">
          <HowItWorksDesktop
            steps={steps}
            activeStep={activeStep}
            onStepChange={setActiveStep}
          />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HowItWorks;
