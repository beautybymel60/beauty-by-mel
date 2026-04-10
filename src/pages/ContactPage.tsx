import { useState, type FormEvent } from 'react';
import Section from '../components/Section';
import { Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    dsgvo: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '', dsgvo: false });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <Section
      id="contact"
      title="Kontakt"
      subtitle="Ich freue mich auf deine Nachricht"
    >
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6" data-testid="form-contact">
          <div>
            <label htmlFor="name" className="block text-salon-black font-medium mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-beige focus:border-transparent transition-all"
              placeholder="Dein vollständiger Name"
              data-testid="input-name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-salon-black font-medium mb-2">
              E-Mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-beige focus:border-transparent transition-all"
              placeholder="deine@email.de"
              data-testid="input-email"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-salon-black font-medium mb-2">
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-beige focus:border-transparent transition-all"
              placeholder="+49 123 456 789"
              data-testid="input-phone"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-salon-black font-medium mb-2">
              Nachricht *
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-beige focus:border-transparent transition-all resize-none"
              placeholder="Deine Nachricht an mich..."
              data-testid="input-message"
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="dsgvo"
              name="dsgvo"
              required
              checked={formData.dsgvo}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-beige border-gray-300 rounded focus:ring-beige focus:ring-2"
              data-testid="input-dsgvo"
            />
            <label htmlFor="dsgvo" className="ml-3 text-sm text-salon-black opacity-70">
              Ich habe die Datenschutzerklärung zur Kenntnis genommen und stimme der Verarbeitung meiner
              Daten zur Kontaktaufnahme zu. *
            </label>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="w-full bg-beige hover:bg-beige-dark text-salon-black font-semibold px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-salon-black focus:ring-offset-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            data-testid="button-submit-contact"
          >
            {submitted ? (
              'Nachricht gesendet!'
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                Nachricht senden
              </>
            )}
          </button>
        </form>

        <p className="text-center text-sm text-salon-black opacity-60 mt-6">
          * Pflichtfelder
        </p>
      </div>
    </Section>
  );
}
