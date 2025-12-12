import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./AuthContext";

const navigationItems = [
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openLoginModal } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className="fusion-header fixed top-0 left-0 right-0 z-50 bg-[#00000050] backdrop-blur-md border-b-[1px] border-[#353535]"
      >
        <nav className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0 z-10">
            <img src="/logo.svg" alt="PulseChat" className="h-8 w-auto" />
            <span className="text-[21px] font-semi-bold text-foreground hidden sm:inline" style={{fontFamily:'Inter'}}>
              PulseChat
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary text-lg transition-colors" style={{fontFamily:'poppins'}}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Get Started Button */}
          <button
            onClick={openLoginModal}
            className="hidden md:flex items-center justify-center px-6 h-10 rounded-lg bg-primary text-primary-foreground font-medium text-md hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground relative z-20 flex-shrink-0"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
            >
              {isMenuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>

          {/* Mobile Dropdown Menu - Positioned relative to nav */}
          <div
            className={`absolute left-0 right-0 top-full md:hidden  backdrop-blur-md border-b border-border overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
        <div className="max-w-9xl mx-auto backdrop-blur-md bg-[#000000B8] px-4 sm:px-6 py-4 flex flex-col gap-2">
          {navigationItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 text-base font-medium ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 opacity-0 pointer-events-none"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              openLoginModal();
              closeMenu();
            }}
            className={`w-full mt-4 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-base hover:opacity-90 transition-all duration-200 ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0 pointer-events-none"
            }`}
            style={{
              transitionDelay: isMenuOpen ? `${navigationItems.length * 50}ms` : "0ms",
            }}
          >
            Get Started
          </button>
        </div>
        </div>
      </nav>
      </header>
    </>
  );
};

export default Header;
