import Section from '../components/Section';
import { Calendar, Clock, Phone } from 'lucide-react';

export default function BookingPage() {
  return (
    <>
      <Section
        id="booking"
        title="Online Buchung"
        subtitle="Buche deinen Termin schnell und unkompliziert"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blush to-white rounded-lg shadow-xl p-12 text-center">
            <div className="mb-8">
              <Calendar className="w-20 h-20 text-beige mx-auto mb-4" aria-hidden="true" />
              <h2 className="text-3xl font-bold text-salon-black mb-4 font-serif">Termin vereinbaren</h2>
              <p className="text-lg text-salon-black opacity-70 max-w-2xl mx-auto">
                Buche deinen Wunschtermin online über unser Buchungssystem oder kontaktiere mich
                direkt telefonisch für eine persönliche Terminvereinbarung.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              <a
                href="https://beautinda.de/salon/Kjzs2aBboYhPGM6oSN8E"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-beige hover:bg-beige-dark text-salon-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-salon-black focus:ring-offset-2 shadow-md"
                data-testid="link-booking-system"
              >
                <Calendar className="w-6 h-6 inline-block mr-3 mb-1" aria-hidden="true" />
                Zum Online-Buchungssystem
              </a>

              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gradient-to-br from-blush to-white text-salon-black opacity-60">
                    oder
                  </span>
                </div>
              </div>

              <a
                href="https://wa.me/491781460270"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-transparent border-2 border-beige hover:border-beige-dark hover:bg-white text-salon-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-salon-black focus:ring-offset-2"
                data-testid="link-whatsapp-booking"
              >
                <Phone className="w-6 h-6 inline-block mr-3 mb-1" aria-hidden="true" />
                WhatsApp: 0178 1460270
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="blush" id="booking-info">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-salon-black mb-6 text-center font-serif">Buchungsinformationen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Clock className="w-12 h-12 text-beige mx-auto mb-4" aria-hidden="true" />
              <h3 className="font-bold text-salon-black mb-2">Flexible Zeiten</h3>
              <p className="text-salon-black opacity-70 text-sm">
                Termine von Montag bis Samstag verfügbar. Auch Abendtermine nach Vereinbarung möglich.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Calendar className="w-12 h-12 text-beige mx-auto mb-4" aria-hidden="true" />
              <h3 className="font-bold text-salon-black mb-2">Einfache Buchung</h3>
              <p className="text-salon-black opacity-70 text-sm">
                Wähle deinen Wunschtermin online oder rufe mich an. Ich melde mich zeitnah bei dir.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Phone className="w-12 h-12 text-beige mx-auto mb-4" aria-hidden="true" />
              <h3 className="font-bold text-salon-black mb-2">Persönliche Beratung</h3>
              <p className="text-salon-black opacity-70 text-sm">
                Bei Fragen zur passenden Behandlung berate ich dich gerne vorab telefonisch.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-salon-black mb-4">Wichtige Hinweise zur Buchung</h3>
            <ul className="space-y-3 text-salon-black opacity-80">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-beige rounded-full mr-3 mt-2 flex-shrink-0" aria-hidden="true"></span>
                <span>
                  <strong>Ersttermin:</strong> Plane ca. 15 Minuten mehr Zeit ein für die Beratung
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-beige rounded-full mr-3 mt-2 flex-shrink-0" aria-hidden="true"></span>
                <span>
                  <strong>Stornierung:</strong> Bitte mindestens 24 Stunden vorher absagen
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-beige rounded-full mr-3 mt-2 flex-shrink-0" aria-hidden="true"></span>
                <span>
                  <strong>Vorbereitung:</strong> Komme ungeschminkt oder bringe Abschminktücher mit
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-beige rounded-full mr-3 mt-2 flex-shrink-0" aria-hidden="true"></span>
                <span>
                  <strong>Allergien:</strong> Teile mir bitte im Vorfeld bekannte Allergien mit
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
