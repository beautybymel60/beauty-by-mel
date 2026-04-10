import Section from '../components/Section';
import { Eye, Sparkles, Star, Heart, Smile, Zap } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Dauerhafte Haarentfernung',
      description: 'Die dauerhafte Haarentfernung mit dem Alexandritlaser bietet eine effektive und schonende Lösung zur langfristigen Reduzierung unerwünschter Haare. Unser DEKA Again COS Laser zählt zu den modernsten Technologien auf dem Markt – sicher, wirksam und 100 % schmerzfrei, selbst bei dunklerer Haut oder feinen, hellen Haaren.',
      image: `${import.meta.env.BASE_URL}Haarentfernung.png`,
      treatments: [
        'Schnellste Alexandrit-Technologie',
        'Schmerzfreie Behandlung',
        'Für alle Hauttypen und -farben geeignet',
        'Besonders effektiv bei feinen und hellen Haaren',
        'Mit integrierter Kontaktkühlung',
        'Präzise Energieübertragung ohne Gewebeschädigung',
        'Deutlich weniger Sitzungen (nur 6–9 erforderlich)',
      ],
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: 'Wimpern & Augenbrauen',
      description: 'Wimpernverlängerungen, Wimpernliftings und Augenbrauenliftings betonen Ihre Augenpartie und verleihen Ihrem Gesicht Ausdruck und Frische. Während Wimpernverlängerungen für mehr Länge und Volumen sorgen, geben Liftings den natürlichen Härchen Schwung und Form. Diese Behandlungen unterstreichen Ihre natürliche Schönheit und stärken Ihr Selbstbewusstsein.',
      image: `${import.meta.env.BASE_URL}Wimpern.png`,
      treatments: [
        'Wimpernverlängerungen - mehr Länge und Volumen',
        'Wimpernlifting - natürlicher Schwung',
        'Augenbrauenlifting - perfekte Form und Ausdruck',
      ],
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: 'Gesichtsbehandlungen',
      description: 'Gesichtsbehandlungen sind eine effektive Möglichkeit die Haut zu reinigen und zu revitalisieren. Bei der manuellen Ausreinigung werden Unreinheiten gezielt entfernt, während das Aquafacial eine sanfte, hydrierende Behandlung bietet. Microneedling stimuliert die Kollagenproduktion und verbessert das Hautbild, während die Microdermabrasion abgestorbene Hautzellen sanft abträgt. Ein Fruchtsäurepeeling sorgt für ein frisches, strahlendes Hautbild, indem es die oberste Hautschicht erneuert.',
      image: `${import.meta.env.BASE_URL}Gesichtsbehandlungen.png`,
      treatments: [
        'Manuelle Ausreinigung - gezielte Entfernung von Unreinheiten',
        'Aquafacial - sanfte, hydrierende Behandlung',
        'Microneedling - Stimulation der Kollagenproduktion',
        'Microdermabrasion - sanftes Abtragen abgestorbener Hautzellen',
        'Fruchtsäurepeeling - frisches, strahlendes Hautbild',
      ],
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Head Spa Behandlung',
      description: 'Erleben Sie die revitalisierende Wirkung unserer Headspa-Behandlung, die speziell entwickelt wurde, um Stress abzubauen und das allgemeine Wohlbefinden zu fördern. Wir verwenden sanfte Techniken, um Verspannungen im Kopf- und Nackenbereich zu lösen und die Durchblutung zu verbessern. Lassen Sie sich von einer beruhigenden Atmosphäre umhüllen und genießen Sie eine Auszeit Körper und Geist. Gönnen Sie sich diese entspannende Erfahrung und fühlen Sie sich erfrischt und belebt!',
      image: `${import.meta.env.BASE_URL}Headspa.png`,
      treatments: [
        'Kopf- und Nackenmassage - Lösung von Verspannungen',
        'Durchblutungsförderung - für mehr Vitalität',
        'Stressabbau - tiefe Entspannung für Körper und Geist',
        'Beruhigende Atmosphäre - Ihre persönliche Auszeit',
      ],
    },
    {
      icon: <Smile className="w-12 h-12" />,
      title: 'Zahnschmuck & Zahnaufhellung',
      description: 'Die kosmetische Zahnaufhellung ist eine beliebte Methode, um ein strahlend weißes Lächeln zu erreichen und das Selbstbewusstsein zu stärken. Durch verschiedene Verfahren, wie z.B. Bleaching, können Verfärbungen effektiv entfernt werden. Zahnschmuck hingegen bietet eine kreative Möglichkeit, das Lächeln individuell zu gestalten und Akzente zu setzen. Ob funkelnde Steine oder dezente Designs, Zahnschmuck verleiht jedem Lächeln eine persönliche Note.',
      image: `${import.meta.env.BASE_URL}Zahnschmuck.png`,
      treatments: [
        'Kosmetische Zahnaufhellung - strahlend weißes Lächeln',
        'Bleaching - effektive Entfernung von Verfärbungen',
        'Zahnschmuck - individuelle Gestaltung mit funkelnden Steinen',
        'Dezente Designs - persönliche Akzente für Ihr Lächeln',
      ],
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Weitere Behandlungen',
      description: 'Zudem finden Sie in meinem Studio weitere Dienstleistungen, die von meinen Kolleginnen durchgeführt werden. Sprechen Sie mich hierfür gerne an, ich vermittel den Kontakt dann gerne.',
      image: `${import.meta.env.BASE_URL}Behandlungen.png`,
      treatments: [
        'Permanent Make-up',
        'Fineline Tattoos',
        'Remover für kleine Tattoos und altes Permanent Make-Up',
        'Medizinische Fußpflege',
      ],
    },
  ];

  return (
    <>
      <Section
        id="services"
        title="Dienstleistungen"
        subtitle="Hochwertige Beauty-Behandlungen mit Liebe zum Detail"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              data-testid={`card-service-${index}`}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-salon-black mb-3 text-center">{service.title}</h3>
                <p className="text-salon-black opacity-70 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-semibold text-salon-black mb-4 uppercase tracking-wide">
                    Behandlungen:
                  </h4>
                  <ul className="space-y-3">
                    {service.treatments.map((treatment, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-beige rounded-full mr-3 mt-2 flex-shrink-0" aria-hidden="true"></span>
                        <span className="text-salon-black opacity-70 text-sm">{treatment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section backgroundColor="blush" id="service-info">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-salon-black mb-6 font-serif">Was du erwarten kannst</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-salon-black mb-2">Erstklassige Qualität</h3>
              <p className="text-salon-black opacity-70 text-sm">
                Ich verwende ausschließlich hochwertige Produkte und modernste Techniken für langanhaltende Ergebnisse.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-salon-black mb-2">Individuelle Beratung</h3>
              <p className="text-salon-black opacity-70 text-sm">
                Jede Behandlung wird auf deine individuellen Bedürfnisse und Wünsche abgestimmt.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-salon-black mb-2">Hygiene & Sicherheit</h3>
              <p className="text-salon-black opacity-70 text-sm">
                Höchste Hygienestandards und professionelle Sterilisation sind selbstverständlich.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-salon-black mb-2">Wohlfühlatmosphäre</h3>
              <p className="text-salon-black opacity-70 text-sm">
                Entspanne dich in angenehmer Atmosphäre und genieße deine Beauty-Auszeit.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
