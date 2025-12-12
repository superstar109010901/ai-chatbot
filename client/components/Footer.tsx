const Footer = () => {
  const navigationLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Faq", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy", href: "#privacy" },
    { label: "pulsechat@mail.com", href: "#pulsechat@mail.com" },

  ];

  const socialLinks = [
    { label: "Instagram", href: "#" },
    { label: "Twitter/ X", href: "#" },
    { label: "Facebook", href: "#" },
  ];

  return (
    <footer className="relative w-full bg-background overflow-hidden border-t border-white/10">
      {/* Mobile Layout */}
     

      {/* Desktop Layout */}
      <div className="block">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Top Navigation Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-white/10">
            {/* Logo and Left Navigation */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-4">
              {/* Logo */}
              <nav className="flex flex-wrap gap-y-10">
              <div className="flex items-center gap-2 pr-10">
                <img src="/logo.svg" alt="PulseChat"  />
                <span className="text-[21px] sm:text-xl font-semibold text-white">
                  PulseChat
                </span>
              </div>

              {/* Separator */}
              {/* <div className="block w-px h-8 bg-white/10" /> */}

              {/* Navigation Links */}
                {navigationLinks.map((link, idx) => (
                  <div key={link.label} className="flex items-center">
                    {idx < navigationLinks.length  && (
                      <div className="block w-px h-[45.59px] bg-white/10" />
                    )}
                    <a
                      href={link.href}
                      className="text-[16px] text-white/70 hover:text-white px-10 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </div>
                ))}
              </nav>
            </div>

            {/* Right Section - Email and Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              

              {/* Separator */}
              <div className="hidden md:block w-px h-8 bg-white/10" />

              {/* Book Demo Button */}
              <button className="px-6 py-2.5 rounded-xl border border-blue-500/20 bg-[#031457] hover:bg-blue-700 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 whitespace-nowrap">
                Book a Demo
              </button>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="py-12 border-b border-white/10">
            <div className="grid grid-cols-3 justify-around gap-8 sm:gap-6">
              {socialLinks.map((social) => (
                <div key={social.label} className="flex flex-col gap-4">
                  {/* Link Title */}
                  <a
                    href={social.href}
                    className="text-sm text-white/70 text-center md:text-start hover:text-white transition-colors duration-300 font-medium"
                  >
                    {social.label}
                  </a>

                  {/* Decorative Line */}
                  {/* <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent sm:hidden" /> */}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center md:items-start justify-between gap-4">
            <p className="text-sm  text-white/70">
              pulsecaht© 2025 — Copyright
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
