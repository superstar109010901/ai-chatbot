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
    <section id="faq" className="relative w-full bg-[linear-gradient(#000102_20%,#1A5F8F,#00010212_85%)] overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
        {/* Bottom Gradient Orbs */}
        <img src="/blurred.png" className="absolute scale-110 left-[110px] bottom-12 " />
        <img src="/blurred.png" className="absolute scale-110 left-1/4 bottom-12  " />
        <img src="/blurred.png" className="absolute scale-110 left-1/3 bottom-12  " />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <ScrollAnimation>
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* FAQ Badge */}
            <div className="inline-flex items-center gap-2 w-fit">
              <div className="px-4 py-2 rounded-full border-l-[2px] border-[#2934FF] bg-[#000000] backdrop-blur-sm">
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
                  className="group relative overflow-hidden transition-all duration-300 "
                  initial={false}
                  animate={{
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Inner border effect */}
                  <div className="absolute inset-0" />

                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="relative rounded-xl bg-[#12142694] border border-[#FFFFFF12] shadow-[0px_1px_0px_0px_#8AA5FF33] overflow-hidden  w-full flex items-center justify-between px-6 py-6 sm:py-7 text-left transition-colors duration-300"
                  >
                    {/* Question Text */}
                    <span className="flex-1 text-base sm:text-lg font-medium text-white pr-4 leading-normal">
                      {item.question}
                    </span>

                    {/* Toggle Icon with Rotation Animation */}
                    
                        {isOpen ? (
                          <Minus className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
                        ) : (
                          <Plus className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
                        )}
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
                          className="px-6 pb-6 pt-2 "
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
