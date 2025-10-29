'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AfterCourseSection from './components/AfterCourseSection';
import BenefitsSection from './components/BenefitsSection';
import BonusesSection from './components/BonusesSection';
import FAQSection from './components/FAQSection';
import ForWhoSection from './components/ForWhoSection';
import HeroSection from './components/HeroSection';
import PlanSection from './components/PlanSection';
import ResultsSection from './components/ResultsSection';
import ScrollIndicator from './components/ScrollIndicator';
import SpeakerSection from './components/SpeakerSection';

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);


  return (
    <main ref={ref} className="relative overflow-hidden text-light">
      {/* === CONTENT === */}
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
    </main>
  );
}
