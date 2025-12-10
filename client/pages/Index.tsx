import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatBox from "@/components/ChatBox";
import ChatboxModal from "@/components/ChatboxModal";
import { ChatboxProvider } from "@/components/ChatboxContext";
import { AuthProvider } from "@/components/AuthContext";
import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";

export default function Index() {
  return (
    <AuthProvider>
      <>
        <main className="min-h-screen bg-background">
          <Header />
          <HeroSection />
          <HowItWorks />
          <FeaturesSection />
          <ComparisonSection />
          <PricingSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
        <ChatboxProvider>
          <ChatBox />
          <ChatboxModal />
        </ChatboxProvider>
        <LoginModal />
        <SignupModal />
      </>
    </AuthProvider>
  );
}
