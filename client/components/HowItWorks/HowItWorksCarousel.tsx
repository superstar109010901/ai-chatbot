import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
      {/* Icon Buttons - Top Navigation */}
      <div className="flex justify-center gap-4 md:gap-6">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => onStepChange(step.id)}
            className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl transition-all duration-300 flex items-center justify-center ${
              activeStep === step.id
                ? "bg-blue-600/20 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20"
                : "bg-blue-600/10 border-2 border-transparent hover:bg-blue-600/15"
            }`}
            aria-label={step.label}
          >
            <div className="flex items-center justify-center">
              {step.icon}
            </div>
            {activeStep === step.id && (
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-blue-500/50 animate-pulse" />
            )}
          </button>
        ))}
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
