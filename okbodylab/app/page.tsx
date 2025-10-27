import AfterCourseSection from "./components/AfterCourseSection";
import BenefitsSection from "./components/BenefitsSection";
import BonusesSection from "./components/BonusesSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import ForWhoSection from "./components/ForWhoSection";
import HeroSection from "./components/HeroSection";
import PlanSection from "./components/PlanSection";
import ResultsSection from "./components/ResultsSection";
import ScrollIndicator from "./components/ScrollIndicator";
import SpeakerSection from "./components/SpeakerSection";
import StickyCTA from "./components/StickyCTA";

export default function Home() {
  return (
    <main className="">
      <ScrollIndicator />
      <HeroSection />
      <ForWhoSection />
      <SpeakerSection />
      <ResultsSection />
      <PlanSection />
      <BonusesSection />
      <BenefitsSection />
      <AfterCourseSection />
      <FAQSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
