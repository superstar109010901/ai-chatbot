import React from "react";

interface Step {
  id: number;
  label: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

interface HowItWorksDesktopProps {
  steps: Step[];
  activeStep: number;
  onStepChange: (id: number) => void;
}

const HowItWorksDesktop = ({
  steps,
  activeStep,
  onStepChange,
}: HowItWorksDesktopProps) => {
  const currentStep = steps.find((s) => s.id === activeStep) || steps[0];

  return (
    <div className="space-y-1">
      {/* Steps Tab Navigation */}
      <div className="relative bg-gradient-to-b from-[#121426] to-black rounded-t-[16px] border border-white/8 h-[112.17px] overflow-x-auto">
        {/* Gradient background effect */}
        <div className="absolute inset-0 rounded-3xl bg-radial-gradient opacity-20" />
        
        <div className="relative flex justify-center items-center w-full px-[48px] h-full gap-8">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => onStepChange(step.id)}
              className={`flex-shrink-0 flex-1 h-[81px] rounded-3xl w-full p-[22px_21px] transition-all duration-300 flex items-center gap-4 whitespace-nowrap ${
                activeStep === step.id
                  ? "bg-card/40  shadow-[0px_0px_4px_0px_#2934FF54] "
                  : "hover:bg-white/5"
              }`}
            >
              <div className="flex-shrink-0 w-8 h-8">{step.icon}</div>
              <div className="text-left flex justify-between gap-16 w-full items-center">
                <div className="text-foreground font-normal text-lg">
                  {step.label} 
                </div>
                <div className="text-foreground/80 text-base font-semibold">
                  {String(step.id).padStart(2, "0")}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex gap-16 items-center pt-[115.87px]   bg-gradient-to-b from-[#121426] to-[#000210]">
        {/* Left Content */}
        <div className="flex flex-col w-[35%] justify-center pl-[48px] space-y-8">
          {/* Step Number */}
          <div className="text-[48px] font-bold text-gray-500 leading-none">
            {String(currentStep.id).padStart(2, "0")}.
          </div>

          {/* Title */}
          <div>
            <h3 className="text-[48px] font-semi-bold text-white leading-tight">
              {currentStep.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-xl text-white/70 leading-relaxed max-w-md font-medium">
            {currentStep.description}
          </p>

          {/* CTA Button */}
          <div>
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0055FE] to-[#0055FE] text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Content - Dynamic based on step */}
          <img src={"/step-" + activeStep + ".png"} className="w-[65%] h-full object-cover" alt="howtodoit" />
      </div>
    </div>
  );
};

// Step 1: Register Content
const Step1Content = () => (
  <div className="relative w-full max-w-md">
    {/* Main container */}
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-gradient-to-b from-[#1A2A4A]/60 to-black/80 rounded-2xl border border-white/10 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-[#435CED] to-[#263487] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10C0 4.47715 4.47715 0 10 0H14C19.5228 0 24 4.47715 24 10V24H10C4.47715 24 0 19.5228 0 14V10Z" fill="url(#paint0_linear)" />
                <path d="M8.96387 8L14.4639 17H3.46387L8.96387 8Z" fill="white" />
                <path d="M15.9639 15L10.4639 6L21.4639 6L15.9639 15Z" fill="white" />
                <defs>
                  <linearGradient id="paint0_linear" x1="12" y1="0" x2="12" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#435CED" />
                    <stop offset="1" stopColor="#263487" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <h4 className="text-white font-semibold">Pulsechat AI</h4>
              <p className="text-xs text-gray-400">Get Started by registering to join the league of elite businesses using our services</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-300 transition-colors opacity-50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9998 13.4L7.0998 18.3C6.91647 18.4834 6.68314 18.575 6.3998 18.575C6.11647 18.575 5.88314 18.4834 5.6998 18.3C5.51647 18.1167 5.4248 17.8834 5.4248 17.6C5.4248 17.3167 5.51647 17.0834 5.6998 16.9L10.5998 12L5.6998 7.10005C5.51647 6.91672 5.4248 6.68338 5.4248 6.40005C5.4248 6.11672 5.51647 5.88338 5.6998 5.70005C5.88314 5.51672 6.11647 5.42505 6.3998 5.42505C6.68314 5.42505 6.91647 5.51672 7.0998 5.70005L11.9998 10.6L16.8998 5.70005C17.0831 5.51672 17.3165 5.42505 17.5998 5.42505C17.8831 5.42505 18.1165 5.51672 18.2998 5.70005C18.4831 5.88338 18.5748 6.11672 18.5748 6.40005C18.5748 6.68338 18.4831 6.91672 18.2998 7.10005L13.3998 12L18.2998 16.9C18.4831 17.0834 18.5748 17.3167 18.5748 17.6C18.5748 17.8834 18.4831 18.1167 18.2998 18.3C18.1165 18.4834 17.8831 18.575 17.5998 18.575C17.3165 18.575 17.0831 18.4834 16.8998 18.3L11.9998 13.4Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right side interactive content */}
      <div className="space-y-4">
        {/* Sign up section */}
        <div className="bg-gradient-to-b from-[#1A2A4A]/40 to-black/60 rounded-2xl border border-white/10 p-5 space-y-3">
          <h5 className="text-white font-medium text-sm">Sign up for Free</h5>
          <p className="text-xs text-gray-400">No training, no script, just one line of code and real conversation begins</p>
          
          {/* Email Input */}
          <div className="flex items-center gap-2 p-3 rounded-lg border border-white/10 bg-white/5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 19V5H21V19H3ZM12 12.116L4 6.885V18H20V6.885L12 12.116ZM12 11L19.692 6H4.308L12 11ZM4 6.885V6V18V6.885Z" fill="white" fillOpacity="0.35" />
            </svg>
            <input type="email" placeholder="Enter Email Address" className="bg-transparent text-xs text-gray-300 placeholder:text-gray-600 outline-none w-full" />
          </div>

          {/* Buttons */}
          <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#435CED] to-[#263487] text-white text-xs font-medium hover:opacity-90 transition-opacity">
            Send Verification Code
          </button>

          <button className="w-full py-2.5 rounded-lg bg-[#050505] text-white text-xs font-medium flex items-center justify-center gap-2 hover:bg-[#111111] transition-colors border border-white/10">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.987" fillRule="evenodd" clipRule="evenodd" d="M7.20924 1.06099C7.93424 0.979994 8.36324 0.979994 9.14224 1.06099C10.5212 1.26509 11.7995 1.90248 12.7922 2.88099C12.1214 3.51513 11.4593 4.15852 10.8062 4.81099C9.55558 3.75099 8.15958 3.50633 6.61824 4.07699C5.48758 4.59699 4.70024 5.43966 4.25624 6.60499C3.53068 6.06482 2.81457 5.51207 2.10824 4.94699C2.05915 4.92116 2.00309 4.9117 1.94824 4.91999C3.07024 2.75666 4.82358 1.46999 7.20824 1.05999" fill="#F44336" />
              <path opacity="0.997" fillRule="evenodd" clipRule="evenodd" d="M1.94625 4.91994C2.00292 4.91127 2.05659 4.92027 2.10725 4.94694C2.81358 5.51202 3.52969 6.06477 4.25525 6.60494C4.14108 7.059 4.0691 7.52263 4.04025 7.98994C4.06492 8.44194 4.13659 8.8856 4.25525 9.32094L2.00025 11.1159C1.01825 9.06394 1.00025 6.9986 1.94625 4.91994Z" fill="#FFC107" />
              <path opacity="0.999" fillRule="evenodd" clipRule="evenodd" d="M12.6851 13.29C11.9829 12.6708 11.2479 12.0899 10.4831 11.55C11.2497 11.0087 11.7151 10.266 11.8791 9.32199H8.12207V6.71299C10.2887 6.69499 12.4544 6.71332 14.6191 6.76799C15.0297 8.99799 14.5554 11.0087 13.1961 12.8C13.0344 12.9718 12.8632 13.1354 12.6851 13.29Z" fill="#448AFF" />
              <path opacity="0.993" fillRule="evenodd" clipRule="evenodd" d="M4.255 9.32202C5.075 11.36 6.57833 12.3114 8.765 12.176C9.37883 12.105 9.96735 11.8905 10.483 11.55C11.2483 12.0914 11.9823 12.6714 12.685 13.29C11.5716 14.2905 10.1521 14.8841 8.658 14.974C8.31854 15.0012 7.97746 15.0012 7.638 14.974C5.09267 14.674 3.21333 13.388 2 11.116L4.255 9.32202Z" fill="#43A047" />
            </svg>
            Sign up with Google
          </button>
        </div>

        {/* Benefits Tags */}
        <div className="space-y-2">
          {["Easy registration", "Quick onboarding", "Customizate with ease"].map((benefit, idx) => (
            <div key={idx} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 inline-block mr-2">
              <span className="text-xs text-gray-400">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Step 2: Customize Content
const Step2Content = () => (
  <div className="relative w-full max-w-4xl space-y-6">
    {/* Header */}
    <div className="flex items-start gap-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
        <path d="M4.75 7.75L2.5 10M2.5 10L4.75 12.25M2.5 10H17.5M17.5 10L15.25 7.75M17.5 10L15.25 12.25M7.75 4.75L10 2.5M10 2.5L12.25 4.75M10 2.5V17.5M10 17.5L12.25 15.25M10 17.5L7.75 15.25" stroke="#7A7979" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div>
        <h4 className="text-white font-medium text-2xl">Easily move things around</h4>
        <p className="text-xs text-gray-400 mt-1">Connect to Google, Apple, Yahoo, and other integrations</p>
      </div>
    </div>

    {/* Three Column Layout */}
    <div className="grid grid-cols-3 gap-4">
      {/* Left Column: Connect To */}
      <div className="rounded-xl border border-white/10 bg-gradient-to-b from-[#1A1A1A]/80 to-black/80 p-5 shadow-lg shadow-black/40 relative overflow-hidden">
        {/* Move Icon */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-3 right-3 text-gray-600">
          <path d="M4.75 7.75L2.5 10M2.5 10L4.75 12.25M2.5 10H17.5M17.5 10L15.25 7.75M17.5 10L15.25 12.25M7.75 4.75L10 2.5M10 2.5L12.25 4.75M10 2.5V17.5M10 17.5L12.25 15.25M10 17.5L7.75 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        <div className="space-y-3">
          <p className="text-xs text-gray-500 font-medium">Connect to</p>

          {/* Google Button */}
          <div className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.987" fillRule="evenodd" clipRule="evenodd" d="M7.20924 1.06099C7.93424 0.979994 8.36324 0.979994 9.14224 1.06099C10.5212 1.26509 11.7995 1.90248 12.7922 2.88099C12.1214 3.51513 11.4593 4.15852 10.8062 4.81099C9.55558 3.75099 8.15958 3.50633 6.61824 4.07699C5.48758 4.59699 4.70024 5.43966 4.25624 6.60499C3.53068 6.06482 2.81457 5.51207 2.10824 4.94699C2.05915 4.92116 2.00309 4.9117 1.94824 4.91999C3.07024 2.75666 4.82358 1.46999 7.20824 1.05999" fill="#F44336"/>
              <path opacity="0.997" fillRule="evenodd" clipRule="evenodd" d="M1.94625 4.91994C2.00292 4.91127 2.05659 4.92027 2.10725 4.94694C2.81358 5.51202 3.52969 6.06477 4.25525 6.60494C4.14108 7.059 4.0691 7.52263 4.04025 7.98994C4.06492 8.44194 4.13659 8.8856 4.25525 9.32094L2.00025 11.1159C1.01825 9.06394 1.00025 6.9986 1.94625 4.91994Z" fill="#FFC107"/>
              <path opacity="0.999" fillRule="evenodd" clipRule="evenodd" d="M12.6851 13.29C11.9829 12.6708 11.2479 12.0899 10.4831 11.55C11.2497 11.0087 11.7151 10.266 11.8791 9.32199H8.12207V6.71299C10.2887 6.69499 12.4544 6.71332 14.6191 6.76799C15.0297 8.99799 14.5554 11.0087 13.1961 12.8C13.0344 12.9718 12.8632 13.1354 12.6851 13.29Z" fill="#448AFF"/>
              <path opacity="0.993" fillRule="evenodd" clipRule="evenodd" d="M4.255 9.32202C5.075 11.36 6.57833 12.3114 8.765 12.176C9.37883 12.105 9.96735 11.8905 10.483 11.55C11.2483 12.0914 11.9823 12.6714 12.685 13.29C11.5716 14.2905 10.1521 14.8841 8.658 14.974C8.31854 15.0012 7.97746 15.0012 7.638 14.974C5.09267 14.674 3.21333 13.388 2 11.116L4.255 9.32202Z" fill="#43A047"/>
            </svg>
            <span className="text-xs text-white font-medium">Google</span>
          </div>

          {/* Apple Button */}
          <div className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.5371 2.73706H11.4624V2.75606C11.4622 3.39639 11.2296 3.99331 10.7646 4.54681C10.2036 5.20431 9.52512 5.58431 8.78962 5.52431C8.77971 5.44386 8.7747 5.36287 8.77462 5.28181C8.77462 4.66756 9.04137 4.00981 9.51512 3.47231C9.75178 3.19998 10.0525 2.97356 10.4171 2.79306C10.4571 2.77356 10.4971 2.75489 10.5371 2.73706ZM4.05762 7.71381C4.10512 7.61456 4.16087 7.51806 4.21687 7.42431C4.50762 6.92631 5.02062 6.53356 5.50512 6.24531C5.98962 5.95706 6.08762 5.93831 6.65112 5.92881C6.95962 5.92881 7.35162 6.09081 7.85412 6.27881C8.35537 6.46731 8.72762 6.54881 8.86862 6.54881C8.97412 6.54881 9.33162 6.47331 9.93762 6.25031C10.5109 6.04356 10.9946 5.94906 11.3909 5.98281C12.4646 6.06981 12.9324 6.23656 13.4689 7.00131C13.1481 7.19631 12.9474 7.45231 12.7349 7.69931L4.05762 7.71381Z" fill="#5C9E31"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M13.1657 7.23413C12.5927 7.71913 12.3004 8.27238 12.1804 8.98063L3.63867 8.92063C3.71242 8.34613 3.89642 7.99063 4.16492 7.54138C4.20792 7.46788 4.28267 7.31888 4.32992 7.25013L13.1657 7.23413Z" fill="#FCEA2B"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M12.2992 8.53589C12.2397 8.77089 12.1383 9.04589 12.1407 9.31039C12.1455 9.77089 12.1622 10.1874 12.349 10.5604L3.709 10.5666C3.64425 10.1914 3.625 9.84764 3.625 9.48414C3.625 9.17114 3.63825 8.83539 3.6875 8.55414L12.2992 8.53589Z" fill="#F4AA41"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M12.3452 10.5571C12.486 10.9944 12.7415 11.2926 13.0987 11.6246C13.362 11.8746 13.5142 12.0994 13.8412 12.2369C13.8395 12.2419 13.8395 12.2504 13.838 12.2551L4.16348 12.2514C4.14298 12.1954 3.99048 11.7599 3.97098 11.7029C3.78648 11.1646 3.76923 11.0774 3.70898 10.5619L12.3452 10.5571Z" fill="#EA5A47"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M13.0156 13.9932C13.2546 13.6356 13.4602 13.2567 13.6296 12.8614C13.7091 12.6717 13.8251 12.4742 13.8961 12.2682C14.1199 12.3622 14.0779 12.3487 13.8411 12.2432L4.16113 12.2499C4.39863 12.9064 4.78788 13.4929 5.14013 14.0034L13.0156 13.9932Z" fill="#8967AA"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M6.63993 15.2988C6.36518 15.2325 6.19293 15.1373 5.91918 14.882C5.68718 14.679 5.46893 14.4668 5.12793 13.9908L13.0374 13.9783C12.6934 14.4658 12.6034 14.6198 12.3837 14.8113C12.0937 15.0788 11.8047 15.228 11.4797 15.282L11.0967 15.307C10.8642 15.2733 10.5892 15.211 10.2967 15.0905C9.88743 14.923 9.39143 14.828 9.04718 14.828C8.68643 14.828 8.31168 14.8563 7.89768 15.0238C7.61768 15.1375 7.19268 15.2913 6.98543 15.332L6.63993 15.2988Z" fill="#61B2E4"/>
              <path d="M8.78939 5.52425C8.77956 5.44379 8.77464 5.36281 8.77464 5.28175C8.77464 4.6675 9.04139 4.00975 9.51514 3.47225C9.75181 3.19992 10.0525 2.9735 10.4171 2.793C10.7811 2.61525 11.1254 2.51675 11.4491 2.5C11.4583 2.58567 11.4627 2.671 11.4624 2.756C11.4622 3.39633 11.2296 3.99325 10.7646 4.54675C10.5571 4.79 10.3334 4.9955 10.0966 5.1545M13.9251 12.7102C13.7387 13.1447 13.5088 13.5591 13.2389 13.9473C12.8781 14.4633 12.5826 14.8203 12.3551 15.0185C12.0023 15.3437 11.6236 15.5108 11.2191 15.52C10.9284 15.52 10.5779 15.4373 10.1696 15.269C9.76047 15.1017 9.38397 15.0182 9.04014 15.0185C8.67947 15.0182 8.29222 15.1017 7.87839 15.269C7.46422 15.437 7.12964 15.5252 6.87464 15.5335C6.48647 15.5502 6.09922 15.3785 5.71289 15.0185C5.46622 14.8027 5.15814 14.433 4.78864 13.9095C4.39197 13.3503 4.06606 12.7012 3.81089 11.962C3.53722 11.1637 3.40039 10.3902 3.40039 9.6415C3.40039 8.784 3.58539 8.044 3.95539 7.424C4.24622 6.9265 4.63372 6.53358 5.11789 6.24525C5.59296 5.96036 6.13523 5.80687 6.68914 5.8005C6.99764 5.8005 7.40214 5.89625 7.90464 6.08425C8.40589 6.27275 8.72764 6.3685 8.86864 6.3685C8.97414 6.3685 9.33164 6.25675 9.93764 6.0335C10.5106 5.82683 10.9951 5.74067 11.3909 5.775C12.4646 5.86175 13.2711 6.28625 13.8076 7.051C12.8478 7.63483 12.3726 8.45117 12.3819 9.5C12.3904 10.3165 12.6859 10.996 13.2664 11.5355C13.5229 11.7819 13.8226 11.979 14.1504 12.117C14.0819 12.3172 14.0068 12.5151 13.9251 12.7102Z" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs text-white font-medium">Apple</span>
          </div>

          {/* Yahoo Button - Added from Figma design */}
          <div className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="2" y="14" fontSize="12" fill="#5F01D1" fontWeight="bold">Y</text>
            </svg>
            <span className="text-xs text-white font-medium">yahoo/</span>
          </div>
        </div>
      </div>

      {/* Middle Column: Audio */}
      <div className="rounded-xl border border-white/10 bg-gradient-to-b from-[#1A1A1A]/80 to-black/80 p-5 shadow-lg shadow-black/40 relative overflow-hidden">
        {/* Move Icon */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-3 right-3 text-gray-600">
          <path d="M4.75 7.75L2.5 10M2.5 10L4.75 12.25M2.5 10H17.5M17.5 10L15.25 7.75M17.5 10L15.25 12.25M7.75 4.75L10 2.5M10 2.5L12.25 4.75M10 2.5V17.5M10 17.5L12.25 15.25M10 17.5L7.75 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        <div className="space-y-3">
          <p className="text-xs text-gray-500 font-medium">Audio</p>
          <p className="text-xs text-gray-500">Listening.........</p>

          {/* Waveform Visualization */}
          <div className="flex items-center justify-center gap-1 py-6 px-2 bg-black/40 rounded-lg">
            {[15, 25, 40, 55, 70, 60, 45, 30, 25, 35, 50, 65].map((height, idx) => (
              <div
                key={idx}
                className="w-1 bg-white/25 rounded-sm"
                style={{ height: `${height}px` }}
              />
            ))}
          </div>

          {/* Time Display */}
          <div className="flex justify-center items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5">
            <span className="text-xs text-gray-500">02:14</span>
          </div>
        </div>
      </div>

      {/* Right Column: Stats */}
      <div className="rounded-xl border border-white/10 bg-gradient-to-b from-[#1A1A1A]/80 to-black/80 p-5 shadow-lg shadow-black/40 relative overflow-hidden">
        {/* Move Icon */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-3 right-3 text-gray-600">
          <path d="M4.75 7.75L2.5 10M2.5 10L4.75 12.25M2.5 10H17.5M17.5 10L15.25 7.75M17.5 10L15.25 12.25M7.75 4.75L10 2.5M10 2.5L12.25 4.75M10 2.5V17.5M10 17.5L12.25 15.25M10 17.5L7.75 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        <div className="space-y-3">
          <p className="text-xs text-gray-500 font-medium">Stats</p>

          {/* Stats Cards */}
          <div className="space-y-2">
            {/* PulseChat Card */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <svg width="11" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4.64286C0 2.07868 2.07868 0 4.64286 0H6.5C9.06418 0 11.1429 2.07868 11.1429 4.64286V11.1429H4.64286C2.07868 11.1429 0 9.06418 0 6.5V4.64286Z" fill="url(#paint0_linear)"/>
                <path d="M4.85833 4.17871L6.46667 6.96443H3.25L4.85833 4.17871Z" fill="white"/>
                <path d="M6.71589 6.5L5.10755 3.71429L8.32422 3.71429L6.71589 6.5Z" fill="white"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="5.57143" y1="0" x2="5.57143" y2="13" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#435CED"/>
                    <stop offset="1" stopColor="#263487"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xs text-white font-medium">PulseChat</span>
              <svg width="7" height="7" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.59026 1.01657L3.71369 0.168701L2.83712 1.01657L1.62964 0.845714L1.41894 2.04712L0.341797 2.61844L0.877329 3.71416L0.341797 4.80987L1.41894 5.38119L1.62964 6.5826L2.83712 6.41174L3.71369 7.25961L4.59026 6.41174L5.79775 6.5826L6.00845 5.38119L7.08559 4.80987L6.55006 3.71416L7.08559 2.61844L6.00845 2.04712L5.79775 0.845714L4.59026 1.01657ZM2.02538 3.84584L3.28824 5.1087L5.38174 2.82273L4.88538 2.36351L3.2646 4.12948L2.50149 3.36636L2.02538 3.84584Z" fill="url(#paint1)"/>
                <defs>
                  <linearGradient id="paint1" x1="1.35006" y1="0.506363" x2="6.58382" y2="7.42844" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F4E72A"/>
                    <stop offset="0.539" stopColor="#CD8105"/>
                    <stop offset="0.68" stopColor="#CB7B00"/>
                    <stop offset="1" stopColor="#F4E72A"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Robinson jr Card */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0341072a91e1fdce8796ae3298ef641b1473f3d9?width=20"
                alt="Robinson jr"
                className="w-5 h-5 rounded-full flex-shrink-0"
              />
              <span className="text-xs text-white font-medium">Robinson jr</span>
              <svg width="7" height="7" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto">
                <path d="M6.88734 3.71442C6.8813 3.49617 6.8147 3.28389 6.69496 3.1013C6.57523 2.91872 6.40708 2.77303 6.20932 2.6805C6.28432 2.47545 6.3006 2.25354 6.25634 2.03974C6.21207 1.82594 6.10902 1.62874 5.95877 1.47032C5.80036 1.32007 5.60315 1.21702 5.38935 1.17275C5.17555 1.12849 4.95364 1.14477 4.74859 1.21977C4.65667 1.02155 4.51112 0.853003 4.32841 0.733182C4.14569 0.613362 3.9331 0.547051 3.71467 0.541748C3.49671 0.547417 3.28468 0.613912 3.10252 0.733722C2.92035 0.853533 2.77532 1.02189 2.68378 1.21977C2.47832 1.14438 2.25584 1.128 2.04155 1.1725C1.82714 1.2164 1.6296 1.31972 1.4709 1.47032C1.32067 1.62875 1.21782 1.82609 1.17401 2.03999C1.13021 2.25388 1.1472 2.47577 1.22306 2.6805C1.02479 2.77269 0.856086 2.91822 0.735807 3.10082C0.615528 3.28341 0.548421 3.49587 0.541992 3.71442C0.548651 3.93292 0.615851 4.14528 0.736103 4.32784C0.856355 4.51039 1.02493 4.65597 1.22306 4.74835C1.14755 4.9531 1.13071 5.17488 1.17444 5.38869C1.21817 5.6025 1.32073 5.79986 1.47056 5.95853C1.62931 6.10824 1.8265 6.21093 2.04018 6.25517C2.25385 6.2994 2.47561 6.28345 2.68075 6.20907C2.77327 6.40684 2.91896 6.57498 3.10155 6.69472C3.28413 6.81445 3.49641 6.88106 3.71467 6.8871C3.93299 6.88152 4.14543 6.81513 4.32808 6.69541C4.51074 6.57569 4.65636 6.40738 4.74859 6.20941C4.95278 6.28997 5.17606 6.30911 5.39097 6.26445C5.60589 6.2198 5.80307 6.11331 5.95827 5.95808C6.11346 5.80285 6.21991 5.60564 6.26451 5.39072C6.30911 5.17579 6.28993 4.95251 6.20932 4.74835C6.40708 4.65582 6.57523 4.51013 6.69496 4.32754C6.8147 4.14496 6.8813 3.93268 6.88734 3.71442ZM3.26288 5.01442L2.10503 3.85692L2.54163 3.41728L3.24126 4.11692L4.72698 2.49816L5.18181 2.91889L3.26288 5.01442Z" fill="#1D9BF0"/>
              </svg>
            </div>

            {/* Crystalio Card */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-5 h-5 rounded-full bg-gradient-to-b from-[#FF015A] to-[#990136] flex items-center justify-center flex-shrink-0 text-xs font-bold text-white">
                C
              </div>
              <span className="text-xs text-white font-medium">Crystalio</span>
              <svg width="7" height="7" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.59124 1.01657L3.71467 0.168701L2.8381 1.01657L1.63062 0.845714L1.41992 2.04712L0.342773 2.61844L0.878306 3.71416L0.342773 4.80987L1.41992 5.38119L1.63062 6.5826L2.8381 6.41174L3.71467 7.25961L4.59124 6.41174L5.79872 6.5826L6.00942 5.38119L7.08657 4.80987L6.55103 3.71416L7.08657 2.61844L6.00942 2.04712L5.79872 0.845714L4.59124 1.01657ZM2.02636 3.84584L3.28921 5.1087L5.38272 2.82273L4.88636 2.36351L3.26558 4.12948L2.50246 3.36636L2.02636 3.84584Z" fill="url(#paint1_crystalio)"/>
                <defs>
                  <linearGradient id="paint1_crystalio" x1="1.35103" y1="0.506363" x2="6.5848" y2="7.42844" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F4E72A"/>
                    <stop offset="0.539" stopColor="#CD8105"/>
                    <stop offset="0.68" stopColor="#CB7B00"/>
                    <stop offset="1" stopColor="#F4E72A"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Section: Ask Anything Input */}
    <div className="rounded-xl border border-white/10 bg-gradient-to-b from-[#1A1A1A]/80 to-black/80 p-6 shadow-lg shadow-black/40 relative overflow-hidden">
      {/* Inset shadow effect */}
      <div className="absolute inset-0 rounded-xl shadow-inner opacity-40 pointer-events-none" />

      <div className="relative space-y-4">
        <p className="text-sm text-gray-400">Ask anything.......</p>
        <p className="text-xs text-gray-500">Attach File</p>
      </div>
    </div>
  </div>
);

// Step 3: Actionable Insights Content
const Step3Content = () => {
  const chartData = [
    { label: "Figma", value: 35.13 },
    { label: "Sketch", value: 76.93 },
    { label: "XD", value: 19.93 },
    { label: "PS", value: 32.51 },
    { label: "AI", value: 82.07 },
    { label: "CorelDRAW", value: 20.02 },
    { label: "InDesign", value: 27.27 },
    { label: "Canva", value: 85.97 },
    { label: "Webflow", value: 80.37 },
    { label: "Affinity", value: 72.22 },
    { label: "Marker", value: 28.57 },
    { label: "Figma", value: 73.13 },
  ];

  const maxValue = 100;

  return (
    <div className="relative w-full max-w-2xl">
      {/* Chart Container */}
      <div className="bg-gradient-to-b from-[#1A2A4A]/40 to-black/60 rounded-3xl border border-[#0055FE]/30 p-6 shadow-lg shadow-[#0055FE]/25">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21H3.8C3.58783 21 3.38434 20.9157 3.23431 20.7657C3.08429 20.6157 3 20.4122 3 20.2V3M6 14L10 10L14 14L21 7" stroke="#7A7979" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <h4 className="text-white font-medium text-xl">Get insight on your performance</h4>
              <p className="text-sm text-gray-400 mt-1">Watch your bot engage visitors, schedule appointments, and provide instant support.</p>
            </div>
          </div>
        </div>

        {/* Horizontal Bar Chart */}
        <div className="space-y-3">
          {/* Y-Axis Labels and Bars */}
          {chartData.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              {/* Label */}
              <div className="w-20 text-right">
                <span className="text-xs text-white/80 font-medium">{item.label}</span>
              </div>

              {/* Bar Container */}
              <div className="flex-1 flex items-center gap-2">
                {/* Bar */}
                <div className="flex-1 bg-black/40 rounded-sm h-5 relative overflow-hidden border border-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-[#435CED] via-[#5F7FFF] to-[#7FA5FF] rounded-sm transition-all"
                    style={{ width: `${(item.value / maxValue) * 100}%` }}
                  />
                </div>

                {/* Value */}
                <div className="w-12 text-right">
                  <span className="text-xs text-white/80 font-medium">{item.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksDesktop;
