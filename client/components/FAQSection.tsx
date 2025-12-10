import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

interface FAQItem {
  id: string;
  question: string;
}

const FAQ_ITEMS: FAQItem[] = [
  { id: "1", question: "Can I try the chatbot for free?" },
  { id: "2", question: "What do I need to get started?" },
  { id: "3", question: "What kind of customization is available?" },
  { id: "4", question: "How easy is it to edit for beginners?" },
  { id: "5", question: "Do I need to know how to code?" },
  { id: "6", question: "Do I save cost by using Pulsechatai?" },
];

const FAQSection = () => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggleFAQ = (id: string) => {
    const newOpenIds = new Set(openIds);
    if (newOpenIds.has(id)) {
      newOpenIds.delete(id);
    } else {
      newOpenIds.add(id);
    }
    setOpenIds(newOpenIds);
  };

  return (
    <section className="relative w-full bg-background overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Side Globe Technology Background Effect */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/4daf5b0de7b5b1949d84c44d602099bc74cc77ed?width=1208"
          alt=""
          className="absolute left-0 top-1/4 w-[600px] max-w-[45vw] h-auto opacity-[0.06] object-contain"
          style={{ aspectRatio: '604/373' }}
        />

        {/* Background Image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/e83277515c7bd63726733a0bf0ed0b218303251f?width=1208"
          alt=""
          className="absolute top-32 left-1/4 w-96 h-auto opacity-5"
        />

        {/* Blur Orbs */}
        <div className="absolute left-0 top-1/3 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute left-1/3 top-1/3 w-72 h-72 bg-blue-900/30 rounded-full blur-3xl opacity-60" />
        <div className="absolute left-1/2 top-1/4 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute right-1/4 top-1/3 w-72 h-72 bg-blue-900/15 rounded-full blur-3xl opacity-60" />

        {/* Bottom Gradient Orbs */}
        <div className="absolute left-12 bottom-0 w-96 h-80 bg-gradient-to-t from-blue-600 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute left-1/3 bottom-0 w-96 h-80 bg-gradient-to-t from-blue-600 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute left-1/2 bottom-0 w-80 h-80 bg-gradient-to-t from-blue-600 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <ScrollAnimation>
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* FAQ Badge */}
            <div className="inline-flex items-center gap-2 w-fit">
              <div className="px-4 py-2 rounded-full border-l-[2px] border-[#2934FF] bg-blue-500/5 backdrop-blur-sm">
                <span className="text-sm font-semibold text-blue-400">FAQ</span>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl font-light leading-tight">
                <span className="text-white">Frequently</span>
              </h2>
              <p className="text-4xl sm:text-5xl font-light leading-tight text-white/60">
                Asked Questions
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/60 max-w-md leading-relaxed">
              Have questions? Our FAQ section has you covered with quick answers
              to the most common inquiries.
            </p>
          </div>
          </ScrollAnimation>

          {/* Right Column - FAQ Items */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIds.has(item.id);
              return (
                <ScrollAnimation key={item.id} delay={index * 0.1}>
                <motion.div
                  className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:bg-white/8"
                  initial={false}
                  animate={{
                    borderColor: isOpen ? "rgba(59, 130, 246, 0.3)" : "rgba(255, 255, 255, 0.1)",
                    backgroundColor: isOpen ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.05)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Inner border effect */}
                  <div className="absolute inset-0 rounded-xl border border-blue-500/10" />

                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="relative w-full flex items-center justify-between px-6 py-6 sm:py-7 text-left transition-colors duration-300"
                  >
                    {/* Question Text */}
                    <span className="flex-1 text-base sm:text-lg font-medium text-white pr-4 leading-normal">
                      {item.question}
                    </span>

                    {/* Toggle Icon with Rotation Animation */}
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg border border-white/20 bg-white/5 transition-all duration-300 group-hover:border-blue-500/50 group-hover:bg-blue-500/10"
                      animate={{
                        rotate: isOpen ? 180 : 0,
                        scale: isOpen ? 1.1 : 1,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      <motion.div
                        animate={{
                          rotate: isOpen ? 0 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {isOpen ? (
                          <Minus className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
                        ) : (
                          <Plus className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
                        )}
                      </motion.div>
                    </motion.div>
                  </button>

                  {/* Answer (Expandable) with Smooth Animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: {
                            duration: 0.4,
                            ease: [0.4, 0, 0.2, 1],
                          },
                          opacity: {
                            duration: 0.3,
                            ease: "easeInOut",
                          },
                        }}
                        className="relative overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          transition={{
                            duration: 0.3,
                            ease: "easeOut",
                          }}
                          className="px-6 pb-6 pt-2 border-t border-white/10"
                        >
                          <p className="text-base text-white/70 leading-relaxed">
                            This is a placeholder answer for the question. You can customize
                            this content with actual answers about your product or service.
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
