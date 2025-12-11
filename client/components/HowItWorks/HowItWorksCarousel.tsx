
interface Step {
  id: number;
  label: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

interface HowItWorksCarouselProps {
  steps: Step[];
  activeStep: number;
  onStepChange: (id: number) => void;
}

const HowItWorksCarousel = ({
  steps,
  activeStep,
  onStepChange,
}: HowItWorksCarouselProps) => {
  const currentStep = steps.find((s) => s.id === activeStep) || steps[0];

  return (
    <div className="flex flex-col gap-6">
      {/* Tab Navigation - Matching Desktop Style */}
      <div className="relative bg-gradient-to-b from-[#121426] to-black rounded-t-[16px] border border-white/8 h-[112px] overflow-x-auto">
        {/* Gradient background effect */}
        <div className="absolute inset-0 rounded-3xl bg-radial-gradient opacity-20" />
        
        <div className="relative flex items-center justify-center w-full px-4 sm:px-6 lg:px-[48px] h-full gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => onStepChange(step.id)}
              className={`flex-shrink-0 flex-1 h-[81px] rounded-3xl p-4 sm:p-[22px_21px] transition-all duration-300 flex items-center justify-center gap-3 sm:gap-4 whitespace-nowrap ${
                activeStep === step.id
                  ? "bg-card/40 shadow-[0px_0px_4px_0px_#2934FF54]"
                  : "hover:bg-white/5"
              }`}
              aria-label={step.label}
            >
              <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8">{step.icon}</div>
              
            </button>
          ))}
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-gradient-to-b from-[#121426]/80 to-black/80 rounded-3xl border border-white/10 p-8 md:p-10 min-h-96">
        {/* Step Number */}
        <div className="text-5xl md:text-6xl font-bold text-gray-400 mb-2">
          {String(currentStep.id).padStart(2, "0")}.
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {currentStep.title}
        </h3>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          {currentStep.description}
        </p>

        {/* Get Started Button */}
        <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HowItWorksCarousel;
