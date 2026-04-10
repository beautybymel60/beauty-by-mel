import { Clock, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-beige py-12 mt-auto" role="contentinfo" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div>
            <h3 className="text-salon-black font-bold text-lg mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" aria-hidden="true" />
              Öffnungszeiten
            </h3>
            <p className="text-salon-black text-sm mb-3 italic">Termine nur nach Vereinbarung</p>
            <div className="space-y-2 text-salon-black text-sm">
              <div className="flex justify-between">
                <span>Montag:</span>
                <span>10:00-20:00 Uhr</span>
              </div>
              <div className="flex justify-between">
                <span>Dienstag:</span>
                <span>10:00-20:00 Uhr</span>
              </div>
              <div className="flex justify-between">
                <span>Mittwoch:</span>
                <span>10:00-20:00 Uhr</span>
              </div>
              <div className="flex justify-between">
                <span>Donnerstag:</span>
                <span>10:00-20:00 Uhr</span>
              </div>
              <div className="flex justify-between">
                <span>Freitag:</span>
                <span>10:00-18:00 Uhr</span>
              </div>
              <div className="flex justify-between">
                <span>Samstag:</span>
                <span>10:00-14:00 Uhr</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-salon-black font-bold text-lg mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" aria-hidden="true" />
              Kontakt
            </h3>
            <div className="space-y-3 text-salon-black text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a
                  href="https://maps.google.com/?q=Zollhausstraße+57A,+52353+Düren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-beige-dark transition-colors"
                  data-testid="link-maps"
                >
                  Zollhausstraße 57A<br />52353 Düren, Deutschland
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:beautybymeldueren@web.de"
                  className="hover:text-beige-dark transition-colors"
                  data-testid="link-email"
                >
                  beautybymeldueren@web.de
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <a
                  href="https://wa.me/491781460270"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-beige-dark transition-colors"
                  data-testid="link-whatsapp"
                >
                  WhatsApp: 0178 1460270
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-beige-dark pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-salon-black text-sm mb-4 md:mb-0" data-testid="text-copyright">
              &copy; 2026 Beauty by Mel
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => onNavigate('impressum')}
                className="text-salon-black text-sm hover:text-beige-dark transition-colors focus:outline-none focus:ring-2 focus:ring-salon-black focus:ring-offset-2 rounded px-2 py-1"
                data-testid="link-impressum-footer"
              >
                Impressum
              </button>
              <button
                onClick={() => onNavigate('datenschutz')}
                className="text-salon-black text-sm hover:text-beige-dark transition-colors focus:outline-none focus:ring-2 focus:ring-salon-black focus:ring-offset-2 rounded px-2 py-1"
                data-testid="link-datenschutz-footer"
              >
                Datenschutz
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
