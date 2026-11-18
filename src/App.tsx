import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { defaultClinicConfig } from './config/clinicConfig';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { CareJourneySection } from './components/CareJourneySection';
import { TeamAndTrustSection } from './components/TeamAndTrustSection';
import { FaqSection } from './components/FaqSection';
import { AssessmentRequestSection } from './components/AssessmentRequestSection';
import { LocationAndFooter } from './components/LocationAndFooter';

export default function App() {
  const config = defaultClinicConfig;
  const [selectedInterest, setSelectedInterest] = useState<string>(
    config.requestForm.interestOptions[0].value
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-canvas text-ink-primary">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-deep-blue focus:text-white focus:text-sm focus:font-semibold"
        >
          Pular para o conteúdo principal
        </a>

        <Header
          brandName={config.brand.name}
          navigation={config.navigation}
          ctaLabel={config.hero.primaryCtaLabel}
        />

        <main id="conteudo-principal" className="flex-1">
          <HeroSection hero={config.hero} />

          <TreatmentsSection
            treatments={config.treatments}
            comparison={config.comparison}
            onSelectInterest={setSelectedInterest}
          />

          <CareJourneySection
            journey={config.journey}
            firstVisit={config.firstVisit}
          />

          <TeamAndTrustSection
            team={config.team}
            ethicsBlock={config.ethicsBlock}
          />

          <FaqSection faq={config.faq} />

          <AssessmentRequestSection
            clinicName={config.brand.name}
            city={config.brand.city}
            requestForm={config.requestForm}
            whatsappNumber={config.contact.whatsappNumber}
            selectedInterest={selectedInterest}
            onInterestChange={setSelectedInterest}
          />
        </main>

        <LocationAndFooter
          brand={config.brand}
          navigation={config.navigation}
          contact={config.contact}
        />
      </div>
    </MotionConfig>
  );
}
