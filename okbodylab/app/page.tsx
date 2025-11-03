import AfterCourseSection from './components/AfterCourseSection';
import BenefitsSection from './components/BenefitsSection';
import BonusesSection from './components/BonusesSection';
import FAQSection from './components/FAQSection';
import ForWhoSection from './components/ForWhoSection';
import HeroSection from './components/HeroSection';
import PlanSection from './components/PlanSection';
import ResultsSection from './components/ResultsSection';
import SpeakerSection from './components/SpeakerSection';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <ForWhoSection />
      <SpeakerSection />
      <ResultsSection />
      <PlanSection />
      <BonusesSection />
      <BenefitsSection />
      <AfterCourseSection />
      <FAQSection />
    </main>
  );
}
