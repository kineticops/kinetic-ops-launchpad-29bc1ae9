import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustBar from "@/components/landing/TrustBar";
import CaseStudies from "@/components/landing/CaseStudies";
import PainPoints from "@/components/landing/PainPoints";
import StatsSection from "@/components/landing/StatsSection";
import FeaturesTabs from "@/components/landing/FeaturesTabs";
import CustomerJourney from "@/components/landing/CustomerJourney";
import Integrations from "@/components/landing/Integrations";
import Partners from "@/components/landing/Partners";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <CaseStudies />
      <PainPoints />
      <StatsSection />
      <FeaturesTabs />
      <CustomerJourney />
      <Integrations />
      <Partners />
      <FinalCTA />
      <Footer />
    </div>
  );
}
