import Section from '../components/Section';
import { GraduationCap, Users, Clock, Award, BookOpen, Eye } from 'lucide-react';

interface TrainingPageProps {
  onNavigate: (page: string) => void;
}

export default function TrainingPage({ onNavigate }: TrainingPageProps) {
  const courses = [
    {
      title: 'Lash- & Browlifting',
      duration: '1 Tag',
      level: 'Anfänger',
      description:
        'Erlerne die professionellen Techniken für Lash- und Browlifting. Diese Schulung vermittelt dir alle notwendigen Kenntnisse für natürlich schöne Ergebnisse.',
      includes: [
        'Umfangreiche Theorie mit Schulungsmappe',
        'Demonstration am Vorführmodell',
        'Eigenständige Behandlung unter Beobachtung',
        'Zertifikat',
        'Starterset inklusive',
      ],
      price: 'auf Anfrage',
    },
    {
      title: 'Wimpernverlängerungen (1:1-Technik & Volumentechnik)',
      duration: 'Mehrere Tage mit Übungsphasen',
      level: 'Anfänger',
      description:
        'Umfassende Schulung für professionelle Wimpernverlängerungen. Diese Schulung wird auf mehrere Tage aufgeteilt mit Übungsphasen zwischendrin für optimalen Lernerfolg.',
      includes: [
        'Umfangreiche Theorie mit Schulungsmappe',
        'Demonstration am Vorführmodell',
        'Eigenständige Behandlung unter Beobachtung',
        'Übungsphasen zwischen den Schulungstagen',
        'Zertifikat',
        'Starterset inklusive',
      ],
      price: 'auf Anfrage',
    },
    {
      title: 'Zahnschmuck',
      duration: '1 Tag',
      level: 'Anfänger',
      description:
        'Lerne die professionelle Anwendung von Zahnschmuck. Eine gefragte Dienstleistung, die dein Angebot perfekt ergänzt.',
      includes: [
        'Umfangreiche Theorie mit Schulungsmappe',
        'Demonstration am Vorführmodell',
        'Eigenständige Behandlung unter Beobachtung',
        'Zertifikat',
        'Starterset optional (gegen Aufpreis)',
      ],
      price: 'auf Anfrage',
    },
    {
      title: 'Microneedling',
      duration: '1 Tag',
      level: 'Anfänger',
      description:
        'Professionelle Schulung in der Microneedling-Technik zur Hautverbesserung und Anti-Aging-Behandlung.',
      includes: [
        'Umfangreiche Theorie mit Schulungsmappe',
        'Demonstration am Vorführmodell',
        'Eigenständige Behandlung unter Beobachtung',
        'Zertifikat',
        'Starterset inklusive',
      ],
      price: 'auf Anfrage',
    },
    {
      title: 'Klassische Gesichts-Ausreinigung',
      duration: '1 Tag',
      level: 'Anfänger',
      description:
        'Erlerne die Grundlagen der professionellen Gesichtsausreinigung für makellose Hautpflege.',
      includes: [
        'Umfangreiche Theorie mit Schulungsmappe',
        'Demonstration am Vorführmodell',
        'Eigenständige Behandlung unter Beobachtung',
        'Zertifikat',
        'Starterset optional (gegen Aufpreis)',
      ],
      price: 'auf Anfrage',
    },
    {
      title: 'Microdermabrasion',
      duration: '1 Tag',
      level: 'Anfänger',
      description:
        'Professionelle Schulung in der Microdermabrasion-Technik für ein verfeinertes Hautbild.',
      includes: [
        'Umfangreiche Theorie mit Schulungsmappe',
        'Demonstration am Vorführmodell',
        'Eigenständige Behandlung unter Beobachtung',
        'Zertifikat',
        'Starterset optional (gegen Aufpreis)',
      ],
      price: 'auf Anfrage',
    },
    {
      title: 'Aquafacial',
      duration: '1 Tag',
      level: 'Anfänger',
      description:
        'Lerne die innovative Aquafacial-Behandlung für strahlende und hydratisierte Haut.',
      includes: [
        'Umfangreiche Theorie mit Schulungsmappe',
        'Demonstration am Vorführmodell',
        'Eigenständige Behandlung unter Beobachtung',
        'Zertifikat',
        'Starterset optional (gegen Aufpreis)',
      ],
      price: 'auf Anfrage',
    },
  ];

  const learningSteps = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Theorie',
      description: 'Die Theorie wird leider in vielen Schulungen vernachlässigt. Ich habe Schulungsmappen erstellt, die zu Beginn der Schulung besprochen werden und welche auch mit nach Hause genommen werden dürfen.',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Vorführmodell',
      description: 'Nachdem die Theorie abgeschlossen ist und offene Fragen geklärt wurden führe ich den kompletten Behandlungsablauf einmal an einem Vorführmodell durch.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Eigenes Modell',
      description: 'Zuletzt darf der Schüler/ die Schülerin ein Modell eigenständig behandeln. Dies erfolgt natürlich unter meiner Beobachtung.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Zertifizierung',
      description: 'Abschließend werden noch eventuell offen gebliebene Fragen geklärt. Der Schüler/ die Schülerin erhält abschließend ein Zertifikat und das Starterset.',
    },
  ];

  return (
    <>
      <Section
        id="training"
        title="Schulungen & Academy"
        subtitle="Werde zum Beauty-Profi mit professionellen Schulungen"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-salon-black mb-8 text-center font-serif">Schulungsinhalte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-blush rounded-full flex items-center justify-center text-beige">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-salon-black mb-3 text-center">{step.title}</h3>
                  <p className="text-salon-black opacity-70 text-sm text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-salon-black mb-6 text-center font-serif">Allgemeine Informationen</h2>
            <div className="bg-beige rounded-lg p-8 shadow-lg mb-8">
              <p className="text-salon-black leading-relaxed mb-4">
                Ich gebe Schulungen in folgenden Bereichen:
              </p>
              <p className="text-salon-black opacity-70 text-sm leading-relaxed mb-4">
                Schulungen können miteinander kombiniert werden.
              </p>
              <p className="text-salon-black opacity-70 text-sm leading-relaxed mb-4">
                Außer der Schulung für Wimpernverlängerungen handelt es sich bei allen Schulungen um 1-Tages Schulungen.
              </p>
              <p className="text-salon-black opacity-70 text-sm leading-relaxed mb-4">
                <strong>Wimpernverlängerungen (1:1-Technik & Volumentechnik):</strong> Diese Schulung wird auf mehrere Tage aufgeteilt mit Übungsphasen zwischendrin.
              </p>
              <p className="text-salon-black opacity-70 text-sm leading-relaxed">
                Für mehr Informationen melde dich gerne per WhatsApp oder Instagram bei mir.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-salon-black mb-8 text-center font-serif">Verfügbare Schulungen</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                data-testid={`card-course-${index}`}
              >
                <div className="bg-beige p-6">
                  <h3 className="text-2xl font-bold text-salon-black mb-2">{course.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-salon-black opacity-80">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2" aria-hidden="true" />
                      {course.level}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-salon-black opacity-70 mb-6 leading-relaxed">{course.description}</p>

                  <h4 className="font-bold text-salon-black mb-3 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2 text-beige" aria-hidden="true" />
                    Das lernst du:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {course.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-beige rounded-full mr-3 mt-2 flex-shrink-0" aria-hidden="true"></span>
                        <span className="text-salon-black opacity-70 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-salon-black opacity-60 mb-1">Preis</p>
                      <p className="text-xl font-bold text-salon-black">{course.price}</p>
                    </div>
                    <a
                      href={`mailto:beautybymeldueren@web.de?subject=Anfrage: ${course.title}&body=Hallo,%0D%0A%0D%0AIch interessiere mich für die Schulung "${course.title}".%0D%0A%0D%0ABitte senden Sie mir weitere Informationen.%0D%0A%0D%0AMit freundlichen Grüßen`}
                      className="bg-beige hover:bg-beige-dark text-salon-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-salon-black focus:ring-offset-2 inline-block"
                      aria-label={`${course.title} anfragen`}
                      data-testid={`link-course-inquiry-${index}`}
                    >
                      Anfragen
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section backgroundColor="blush" id="training-info">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-salon-black mb-6 text-center font-serif">Warum bei mir lernen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-salon-black mb-2">Kleine Gruppen</h3>
              <p className="text-salon-black opacity-70 text-sm">
                Maximale Aufmerksamkeit durch kleine Kursgrößen. Jeder Teilnehmer erhält individuelle Betreuung.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-salon-black mb-2">Praxisorientiert</h3>
              <p className="text-salon-black opacity-70 text-sm">
                Viel Praxis mit echten Modellen. Theorie und Praxis perfekt kombiniert für schnellen Lernerfolg.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-salon-black mb-2">Professionelles Material</h3>
              <p className="text-salon-black opacity-70 text-sm">
                Hochwertige Produkte und Tools im Starter-Kit inklusive. Sofort nach dem Kurs einsatzbereit.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-salon-black mb-2">Support nach dem Kurs</h3>
              <p className="text-salon-black opacity-70 text-sm">
                Auch nach der Schulung stehe ich für Fragen zur Verfügung. Du bist nicht allein auf deinem Weg.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-beige hover:bg-beige-dark text-salon-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-salon-black focus:ring-offset-2 shadow-md inline-flex items-center"
              data-testid="button-training-contact"
            >
              <GraduationCap className="w-5 h-5 mr-2" aria-hidden="true" />
              Jetzt informieren
            </button>
          </div>
        </div>
      </Section>
    </>
  );
}
