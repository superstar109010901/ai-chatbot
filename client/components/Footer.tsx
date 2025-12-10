const Footer = () => {
  const navigationLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Faq", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy", href: "#privacy" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "#" },
    { label: "Twitter/ X", href: "#" },
    { label: "Facebook", href: "#" },
  ];

  return (
    <footer className="relative w-full bg-background overflow-hidden border-t border-white/10">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path
                d="M0 10C0 4.47715 4.47715 0 10 0H14C19.5228 0 24 4.47715 24 10V24H10C4.47715 24 0 19.5228 0 14V10Z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M10.4641 9L13.9282 15H7L10.4641 9Z"
                fill="white"
              />
              <path
                d="M14.4636 14L10.9995 8L17.9277 8L14.4636 14Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="12"
                  y1="0"
                  x2="12"
                  y2="28"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#435CED" />
                  <stop offset="1" stopColor="#263487" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-lg font-semibold text-white">
              PulseChat
            </span>
          </div>

          {/* Separator Line */}
          <div className="w-px h-6 bg-white/10 mb-8" />

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Separator Line */}
          <div className="w-full h-px bg-white/10 mb-8" />

          {/* Email and Button */}
          <div className="space-y-4 mb-8">
            {/* Email */}
            <a
              href="mailto:pulsechat@mail.com"
              className="block text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              pulsechat@mail.com
            </a>

            {/* Book Demo Button */}
            <button className="w-full px-6 py-3 rounded-xl border border-blue-500/20 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30">
              Book a Demo
            </button>
          </div>

          {/* Separator Line */}
          <div className="w-full h-px bg-white/10 mb-8" />

          {/* Social Media Links */}
          <div className="flex justify-around items-center mb-8 text-sm text-white/70">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="hover:text-white transition-colors duration-300"
              >
                {social.label}
              </a>
            ))}
          </div>

          {/* Separator Line */}
          <div className="w-full h-px bg-white/10 mb-8" />

          {/* Copyright */}
          <p className="text-sm text-white/70 text-center">
            pulsecaht© 2025 — Copyright
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Top Navigation Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-white/10">
            {/* Logo and Left Navigation */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-4">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img src="/logo.svg" alt="PulseChat"  />
                <span className="text-lg sm:text-xl font-semibold text-white">
                  PulseChat
                </span>
              </div>

              {/* Separator */}
              <div className="hidden sm:block w-px h-8 bg-white/10" />

              {/* Navigation Links */}
              <nav className="flex flex-wrap gap-4 sm:gap-6">
                {navigationLinks.map((link, idx) => (
                  <div key={link.label} className="flex items-center gap-4 sm:gap-6">
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                    {idx < navigationLinks.length - 1 && (
                      <div className="hidden sm:block w-px h-6 bg-white/10" />
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Right Section - Email and Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Email */}
              <a
                href="mailto:pulsechat@mail.com"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                pulsechat@mail.com
              </a>

              {/* Separator */}
              <div className="hidden sm:block w-px h-8 bg-white/10" />

              {/* Book Demo Button */}
              <button className="px-6 py-2.5 rounded-xl border border-blue-500/20 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 whitespace-nowrap">
                Book a Demo
              </button>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="py-12 border-b border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
              {socialLinks.map((social) => (
                <div key={social.label} className="flex flex-col gap-4">
                  {/* Link Title */}
                  <a
                    href={social.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {social.label}
                  </a>

                  {/* Decorative Line */}
                  <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent sm:hidden" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-white/70">
              pulsecaht© 2025 — Copyright
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
