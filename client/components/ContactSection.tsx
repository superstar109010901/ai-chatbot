import { useState, FormEvent } from "react";
import ScrollAnimation from "./ScrollAnimation";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="relative w-full bg-[radial-gradient(circle_at_center,_#1A5F8F_0%,_#050C18_0%,_#000102_100%)] overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Effects */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-40 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-blue-900/15 rounded-full blur-3xl" />
      </div> */}

      {/* Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout: Centered single column */}
        <ScrollAnimation>
        <div className="lg:hidden flex flex-col items-center gap-8 mb-12">
          {/* Contact Badge */}
          <div className="inline-flex items-center gap-2 w-fit">
            <div className="px-4 py-2 rounded-full border-l-[2px] border-[#2934FF] bg-black backdrop-blur-sm">
              <span className="text-sm font-semibold text-blue-400">
                CONTACT US
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-light leading-tight text-white">
              Need Help? Reach out to us
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-center text-sm sm:text-base text-blue-300/70">
            Reach out to us with your questions
          </p>

          {/* Contact Details */}
          <div className="flex flex-col px-6 justify-center h-[127px] bg-[#FFFFFF0F] border-l-[9px] border-[#6A99F757] items-center gap-4">
            <p className="text-sm text-[#E6ECFFB2] border-b-[1px] border-[#FFFFFF30] text-[16px] w-full">Contacts</p>
            <div className="flex flex-col gap-2 ">
              <a
                href="mailto:Help@pulsechatai.com"
                className="text-base text-white hover:text-blue-400 transition-colors"
              >
                Help@pulsechatai.com
              </a>
              <a
                href="tel:+123-78765-76755"
                className="text-base text-white hover:text-blue-400 transition-colors"
              >
                +123-78765-76755
              </a>
            </div>
          </div>
        </div>
        </ScrollAnimation>

        {/* Mobile Contact Form: Full width, max-width constrained */}
        <ScrollAnimation delay={0.2}>
        <div className="lg:hidden max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name Field */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className="text-base text-white font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Full Name"
                className="w-full px-5 py-4 rounded-lg border border-gray-700 bg-gray-900/60 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-gray-800 focus:ring-1 focus:ring-blue-500/50"
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="text-base text-white font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full px-5 py-4 rounded-lg border border-gray-700 bg-gray-900/60 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-gray-800 focus:ring-1 focus:ring-blue-500/50"
                required
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="message"
                className="text-base text-white font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message..."
                rows={5}
                className="w-full px-5 py-4 rounded-lg border border-gray-700 bg-gray-900/60 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-gray-800 focus:ring-1 focus:ring-blue-500/50 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 mt-2 rounded-xl bg-blue-600 text-white font-medium text-lg transition-all duration-300 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        </ScrollAnimation>

        {/* Desktop Layout: Original 2-column grid */}
        <div className="hidden lg:grid grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <ScrollAnimation>
          <div className="flex flex-col gap-8 justify-center">
            {/* Contact Badge */}
            <div className="inline-flex items-center gap-2 w-fit">
              <div className="px-4 py-2 rounded-full border-l-[2px] border-[#2934FF] bg-black backdrop-blur-sm">
                <span className="text-sm font-semibold text-blue-400">
                  CONTACT US
                </span>
              </div>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-5xl font-light leading-tight text-white">
                Need Help? Reach <br />
                out to us
              </h2>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-2">
              <p className="text-base text-blue-300 font-medium">Contacts</p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:Help@pulsechatai.com"
                  className="text-lg text-white hover:text-blue-400 transition-colors"
                >
                  Help@pulsechatai.com
                </a>
                <a
                  href="tel:+123-78765-76755"
                  className="text-lg text-white hover:text-blue-400 transition-colors"
                >
                  +123-78765-76755
                </a>
              </div>
            </div>
          </div>
          </ScrollAnimation>

          {/* Right Column - Contact Form */}
          <ScrollAnimation delay={0.2}>
          <div className="flex flex-col gap-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="name"
                  className="text-base text-white font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Full Name"
                  className="w-full px-6 py-4 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-white/25 transition-all duration-300 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="email"
                  className="text-base text-white font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-white/25 transition-all duration-300 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="message"
                  className="text-base text-white font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message..."
                  rows={5}
                  className="w-full px-6 py-4 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-white/25 transition-all duration-300 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium text-lg border border-blue-500/30 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:from-blue-500 hover:to-blue-600"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
