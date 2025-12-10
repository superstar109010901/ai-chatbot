import TrustedByCompanies from "./TrustedByCompanies";
import { useAuth } from "./AuthContext";
import Starfield from "./Starfield";
import SequentialReveal from "./SequentialReveal";
import AnimatedChatBubble from "./AnimatedChatBubble";
import { motion } from "framer-motion";

const BotIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <rect width="42" height="42" rx="21" fill="url(#paint0_linear)" />
    <path
      d="M15.5402 22.86C14.9196 22.86 14.3244 23.1065 13.8856 23.5454C13.4467 23.9842 13.2002 24.5794 13.2002 25.2V25.746C13.2002 27.7818 14.1362 29.256 15.6244 30.1811C17.0674 31.0781 18.9878 31.44 21.0002 31.44C23.0235 31.44 24.9439 31.0796 26.3853 30.1811C27.8736 29.256 28.8002 27.7787 28.8002 25.746V25.2C28.8002 24.5794 28.5537 23.9842 28.1148 23.5454C27.676 23.1065 27.0808 22.86 26.4602 22.86H15.5402Z"
      fill="white"
    />
    <path
      d="M21.7807 10.38C21.7807 10.1731 21.6985 9.97474 21.5522 9.82846C21.406 9.68218 21.2076 9.60001 21.0007 9.60001C20.7938 9.60001 20.5954 9.68218 20.4492 9.82846C20.3029 9.97474 20.2207 10.1731 20.2207 10.38V11.94H21.7807V10.38Z"
      fill="white"
    />
    <path
      d="M24.8998 11.16C25.5204 11.16 26.1156 11.4065 26.5544 11.8454C26.9932 12.2842 27.2398 12.8794 27.2398 13.5V18.18C27.2398 18.8006 26.9932 19.3958 26.5544 19.8346C26.1156 20.2735 25.5204 20.52 24.8998 20.52H17.0998C16.4792 20.52 15.884 20.2735 15.4451 19.8346C15.0063 19.3958 14.7598 18.8006 14.7598 18.18V13.5C14.7598 12.8794 15.0063 12.2842 15.4451 11.8454C15.884 11.4065 16.4792 11.16 17.0998 11.16H24.8998Z"
      fill="white"
    />
    <path
      d="M23.3399 14.67C23.0296 14.67 22.732 14.7933 22.5126 15.0127C22.2932 15.2321 22.1699 15.5297 22.1699 15.84C22.1699 16.1503 22.2932 16.4479 22.5126 16.6673C22.732 16.8867 23.0296 17.01 23.3399 17.01C23.6502 17.01 23.9478 16.8867 24.1672 16.6673C24.3867 16.4479 24.5099 16.1503 24.5099 15.84C24.5099 15.5297 24.3867 15.2321 24.1672 15.0127C23.9478 14.7933 23.6502 14.67 23.3399 14.67Z"
      fill="#3A4FCC"
    />
    <path
      d="M17.4902 15.84C17.4902 15.5297 17.6135 15.2321 17.8329 15.0127C18.0523 14.7933 18.3499 14.67 18.6602 14.67C18.9705 14.67 19.2681 14.7933 19.4875 15.0127C19.707 15.2321 19.8302 15.5297 19.8302 15.84C19.8302 16.1503 19.707 16.4479 19.4875 16.6673C19.2681 16.8867 18.9705 17.01 18.6602 17.01C18.3499 17.01 18.0523 16.8867 17.8329 16.6673C17.6135 16.4479 17.4902 16.1503 17.4902 15.84Z"
      fill="#3A4FCC"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="21"
        y1="0"
        x2="21"
        y2="49"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#435CED" />
        <stop offset="1" stopColor="#263487" />
      </linearGradient>
    </defs>
  </svg>
);

const HeroSection = () => {
  const { openLoginModal } = useAuth();
  return (
    <>
    <section className="relative w-full bg-background overflow-hidden pt-12 sm:pt-20 pb-4 sm:pb-4 lg:min-h-screen lg:pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background Image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/0f0b6dbb6b1f4f4c07b12c550fea9277a34e5633?width=3040"
          alt="Background"
          className="absolute top-0 left-0 w-full h-auto opacity-75 object-cover"
        />

        {/* Gradient Blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-black rounded-full blur-3xl" />
        <div className="absolute -top-32 right-1/4 w-96 h-80 bg-blue-900/5 rounded-full blur-3xl" />

        {/* Starfield Animation */}
        <Starfield />
      </div>

      {/* Content */}
      <div className="relative sm:mt-12 lg:mt-24 mt-12 z-10  lg:mx-20 max-w-10xl w-full mx-auto sm:px-0 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center gap-6 sm:gap-8">
          <SequentialReveal className="flex flex-col items-center gap-6 sm:gap-8 w-full" staggerDelay={0.2} initialDelay={0.3}>
            {/* Social Proof */}
            <div className="flex flex-col items-center gap-3">
              {/* Avatar Stack */}
              <div className="flex -space-x-2 sm:-space-x-3">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d6fd3904986314045e729c8f81c54daf766ebb9b?width=56"
                  alt="User"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-background"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7b6b77d6516d0747ab0403572b526c523fecdcfd?width=56"
                  alt="User"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-background"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ca4514538c8daff5fe25560d1f805f0f66103458?width=56"
                  alt="User"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-background"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/665f1934ea3f3c41e68565af106b3344f28f063a?width=56"
                  alt="User"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-background"
                />
              </div>

              {/* Stats Text */}
              <div className="text-center">
                <p className="text-xs sm:text-sm text-foreground/70">
                  Join <span className="text-white font-semibold">15,725</span> + other loving customers
                </p>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4 text-center max-w-md">
              <h1 className="text-3xl sm:text-4xl font-medium leading-tight">
                <span className="text-white">AI Chatbots</span> <br/>
                <span> That Empower Your </span>
                <span className="text-primary">Business</span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                Engage customers, automate tasks, and boost sales with our
                intelligent AI chatbot — ready to deploy on any website or
                messaging platform
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-2.5 max-w-sm mx-auto">
              <button
                onClick={openLoginModal}
                className="flex-1 px-6 py-3 sm:py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium text-sm sm:text-base hover:shadow-lg transition-all shadow-[0_8px_40px_0_rgba(0,85,254,0.5),0_0_0_1px_rgba(0,32,158,0.12)]"
              >
                Get Started
              </button>
              <button className="flex-1 px-6 py-3 sm:py-3.5 rounded-lg border border-blue-500 bg-transparent text-white font-medium text-sm sm:text-base hover:bg-blue-500/10 transition-colors">
                Book Demo
              </button>
            </div>
          </SequentialReveal>

          {/* Bottom Image */}
          <div className="w-full pt-8 sm:pt-12">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0d07cf4c49c9cefbc58746eab2c8a65b6f7d08af?width=2244"
              alt="Feature showcase"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-12 lg:gap-8 items-center lg:px-8 py-12 lg:py-20">
          {/* Left Content */}
          <SequentialReveal className="flex flex-col gap-8" staggerDelay={0.2} initialDelay={0.3}>
            {/* Social Proof */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                {/* Avatar Stack */}
                <div className="flex -space-x-3 gap-2">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/d6fd3904986314045e729c8f81c54daf766ebb9b?width=56"
                    alt="User"
                    className="w-7 h-7 rounded-full border-2 border-background"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/7b6b77d6516d0747ab0403572b526c523fecdcfd?width=56"
                    alt="User"
                    className="w-7 h-7 rounded-full border-2 border-background"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/ca4514538c8daff5fe25560d1f805f0f66103458?width=56"
                    alt="User"
                    className="w-7 h-7 rounded-full border-2 border-background"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/665f1934ea3f3c41e68565af106b3344f28f063a?width=56"
                    alt="User"
                    className="w-7 h-7 rounded-full border-2 border-background"
                  />
                </div>

                {/* Stats */}
                <div className="flex items-center gap-1 text-md">
                  <span className="text-foreground/70">Join</span>
                  <span className="text-white font-semibold">15,725</span>
                  <span className="text-white">+</span>
                  <span className="text-foreground/70">other loving customers</span>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl font-medium leading-tight max-w-md" style={{letterSpacing:1.5}}>
                <span className="text-white">AI Chatbots <br/>That Empower  </span><br/>
                Your  <span className="text-primary">Business</span>
              </h1>

              {/* Subheading */}
              <p className="text-base text-foreground/70 max-w-[320px] leading-relaxed">
                Engage customers, automate tasks, and boost sales with our
                intelligent AI chatbot — ready to deploy on any website or
                messaging platform
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex gap-4">
              <button
                onClick={openLoginModal}
                className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium text-sm hover:shadow-lg transition-all shadow-[0_8px_40px_0_rgba(0,85,254,0.5),0_0_0_1px_rgba(0,32,158,0.12)]"
              >
                Get Started
              </button>
              <button className="px-8 py-3.5 rounded-lg border border-blue-500 bg-transparent text-white font-medium text-sm hover:bg-blue-500/10 transition-colors">
                Book Demo
              </button>
            </div>
          </SequentialReveal>

          {/* Right Content - AI Robot Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm">
              {/* Animated Robot Image */}
              <motion.img
                src="https://api.builder.io/api/v1/image/assets/TEMP/613734487e95b2277ece618cc2f03990d711b623"
                alt="AI Chatbot"
                className="w-[334px] h-auto drop-shadow-2xl "
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Chat Bubbles - Sequential Appearance */}
              <AnimatedChatBubble
                delay={1.0}
                className="absolute flex items-center gap-3 pointer-events-none"
                style={{ left: "-160px", top: "90px" }}
              >
                <BotIcon />
                <div className="bg-[#12142633] border rounded-lg px-6 py-2 text-xs text-white whitespace-nowrap">
                  Ready to go?
                </div>
              </AnimatedChatBubble>

              <AnimatedChatBubble
                delay={1.8}
                className="absolute flex items-center gap-3 pointer-events-none"
                style={{ left: "-220px", bottom: "250px" }}
              >
                <BotIcon />
                <div className="bg-[#12142633] border border-[#121426] rounded-lg px-6 py-2 text-xs text-white whitespace-nowrap">
                  Thanks for reaching out
                </div>
              </AnimatedChatBubble>

              <AnimatedChatBubble
                delay={2.6}
                className="absolute flex items-center gap-3 pointer-events-none"
                style={{ right: "-140px", bottom: "100px" }}
              >
                <div className="bg-[#12142633] border border-[#121426] rounded-xl px-6 py-3 text-xs text-white max-w-sm">
                  I&apos;m ready yo go, we can get <br/> started right now.
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d6fd3904986314045e729c8f81c54daf766ebb9b?width=56"
                  alt="User"
                  className="w-10 h-10 rounded-full flex-shrink-0"
                />
              </AnimatedChatBubble>

              <AnimatedChatBubble
                delay={3.4}
                className="absolute flex items-center gap-3 pointer-events-none"
                style={{ right: "-190px", top: "200px" }}
              >
                <div className="bg-[#12142633] border border-[#121426] rounded-xl px-6 py-3 text-xs text-white max-w-sm">
                  I&apos;m ready yo go, we can get <br/> started right now.
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d6fd3904986314045e729c8f81c54daf766ebb9b?width=56"
                  alt="User"
                  className="w-10 h-10 rounded-full flex-shrink-0"
                />
              </AnimatedChatBubble>
            </div>
          </div>
        </div>
      </div>
       <TrustedByCompanies />
    </section>
   
    </>
  );
};

export default HeroSection;
