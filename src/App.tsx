import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import TrainingPage from './pages/TrainingPage';
import PricingPage from './pages/PricingPage';
import BookingPage from './pages/BookingPage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';
import TeamPage from './pages/TeamPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const pageTitles: Record<string, string> = {
      home: 'Beauty by Mel - Melissa Krebs | Lashes • Brows • Skin • Academy',
      contact: 'Kontakt | Beauty by Mel',
      services: 'Dienstleistungen | Beauty by Mel',
      training: 'Schulungen & Academy | Beauty by Mel',
      pricing: 'Preisliste | Beauty by Mel',
      booking: 'Online Buchung | Beauty by Mel',
      team: 'Unser Team | Beauty by Mel',
      impressum: 'Impressum | Beauty by Mel',
      datenschutz: 'Datenschutz | Beauty by Mel',
    };

    document.title = pageTitles[currentPage] || pageTitles.home;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'team':
        return <TeamPage />;
      case 'contact':
        return <ContactPage />;
      case 'services':
        return <ServicesPage />;
      case 'training':
        return <TrainingPage onNavigate={handleNavigate} />;
      case 'pricing':
        return <PricingPage onNavigate={handleNavigate} />;
      case 'booking':
        return <BookingPage />;
      case 'impressum':
        return <ImpressumPage />;
      case 'datenschutz':
        return <DatenschutzPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-beige-light">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main id="main-content" className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
