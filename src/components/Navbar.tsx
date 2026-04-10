import { Instagram } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Start', id: 'home' },
    { name: 'Team', id: 'team' },
    { name: 'Dienstleistungen', id: 'services' },
    { name: 'Schulungen', id: 'training' },
    { name: 'Preisliste', id: 'pricing' },
    { name: 'Online Buchung', id: 'booking' },
    { name: 'Kontakt', id: 'contact' },
    { name: 'Impressum', id: 'impressum' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-beige sticky top-0 z-50 shadow-sm" role="navigation" aria-label="Hauptnavigation" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="text-lg font-semibold text-salon-black hover:text-beige-dark transition-colors focus:outline-none focus:ring-2 focus:ring-salon-black focus:ring-offset-2 font-serif"
              aria-label="Zur Startseite"
              data-testid="link-home"
            >
              Beauty by Mel
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-salon-black focus:ring-offset-2 rounded px-2 py-1 ${
                  currentPage === item.id
                    ? 'text-salon-black border-b-2 border-salon-black'
                    : 'text-salon-black hover:text-beige-dark'
                }`}
                aria-current={currentPage === item.id ? 'page' : undefined}
                data-testid={`link-nav-${item.id}`}
              >
                {item.name}
              </button>
            ))}
            <a
              href="https://www.instagram.com/beautybymel_dn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-salon-black hover:text-beige-dark transition-colors focus:outline-none focus:ring-2 focus:ring-salon-black focus:ring-offset-2 rounded"
              aria-label="Instagram Profil besuchen"
              data-testid="link-instagram"
            >
              <Instagram className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-salon-black hover:text-beige-dark focus:outline-none focus:ring-2 focus:ring-salon-black focus:ring-offset-2 rounded p-2"
              aria-expanded={mobileMenuOpen}
              aria-label="Menu"
              data-testid="button-mobile-menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-beige-dark">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-salon-black ${
                  currentPage === item.id
                    ? 'bg-blush text-salon-black'
                    : 'text-salon-black hover:bg-blush'
                }`}
                aria-current={currentPage === item.id ? 'page' : undefined}
                data-testid={`link-mobile-nav-${item.id}`}
              >
                {item.name}
              </button>
            ))}
            <a
              href="https://www.instagram.com/beautybymel_dn/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-salon-black hover:bg-blush transition-colors focus:outline-none focus:ring-2 focus:ring-salon-black"
              aria-label="Instagram Profil besuchen"
              data-testid="link-mobile-instagram"
            >
              <Instagram className="w-5 h-5 mr-2" aria-hidden="true" />
              Instagram
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
