import Hero from '../components/Hero';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import { Sparkles, Heart, Award } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <Hero
        onBookingClick={() => onNavigate('booking')}
        onReferencesClick={() => {
          const instagramUrl = 'https://www.instagram.com/beautybymel_dn/';
          window.open(instagramUrl, '_blank', 'noopener,noreferrer');
        }}
      />

      <div className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-salon-black leading-relaxed font-serif" data-testid="text-intro">
            Bei Beauty by Mel dreht sich alles um Ihre natürliche Ausstrahlung. Unser erfahrenes Team verwöhnt Ihre Haut mit individuell abgestimmten Behandlungen – für ein strahlendes, gesundes Hautbild. Lehnen Sie sich zurück, entspannen Sie und genießen Sie Ihre persönliche Auszeit bei uns.
          </p>
        </div>
      </div>

      <Section
        id="about"
        title=""
        subtitle=""
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Sparkles className="w-8 h-8" />}
            title="Wimpernlifting"
            description="Natürlich geschwungene Wimpern für einen wachen, strahlenden Blick."
          />
          <FeatureCard
            icon={<Heart className="w-8 h-8" />}
            title="Gesichtsbehandlungen"
            description="Individuelle Pflege für strahlende und gesunde Haut."
          />
          <FeatureCard
            icon={<Award className="w-8 h-8" />}
            title="Head Spa Behandlung"
            description="Entspannende Kopfmassagen für tiefe Entspannung und Wohlbefinden."
          />
          <FeatureCard
            icon={<Sparkles className="w-8 h-8" />}
            title="Zahnschmuck + Zahnaufhellung"
            description="Strahlendes Lächeln durch professionelle Aufhellung und dezenten Schmuck."
          />
          <FeatureCard
            icon={<Heart className="w-8 h-8" />}
            title="Dauerhafte Haarentfernung"
            description="Die dauerhafte Haarentfernung mittels Alexandritlaser stellt eine hochwirksame Lösung zur langfristigen Reduzierung unerwünschter Körperhaare dar."
          />
          <FeatureCard
            icon={<Award className="w-8 h-8" />}
            title="Viele weitere Behandlungen"
            description="Entdecken Sie unser vollständiges Angebot an professionellen Beauty-Treatments."
          />
        </div>
      </Section>

      <Section backgroundColor="blush" id="philosophy">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-salon-black mb-12 text-center font-serif">Über Uns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src={`${import.meta.env.BASE_URL}Mel.png`}
                alt="Melissa - Beauty by Mel"
                className="rounded-lg shadow-xl w-full max-w-md object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-salon-black opacity-80 leading-relaxed">
                Beauty by Mel steht für hochwertige Kosmetikbehandlungen, die individuell auf Ihre Bedürfnisse abgestimmt sind. In entspannter Atmosphäre sorgt unser erfahrenes Team dafür, dass Ihre natürliche Schönheit professionell zur Geltung kommt.
              </p>
              <p className="text-lg text-salon-black opacity-80 leading-relaxed">
                Die 26-jährige Inhaberin Melissa führt den Salon seit 2022 erfolgreich und leitet zugleich eine vom BfD ausgezeichnete Kosmetikschule, in der bereits rund 100 Schüler ausgebildet wurden. Zusätzliche NiSV-Zertifizierungen unterstreichen den hohen Qualitätsstandard der Akademie.
              </p>
              <p className="text-lg text-salon-black opacity-80 leading-relaxed">
                Unterstützt wird sie von Angelina, Spezialistin für Gesichtsbehandlungen und Liftings, sowie Valeriya, Expertin für Wimpernverlängerungen mit über 12 Jahren Erfahrung.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
