import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Section from '../components/Section';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setSending(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        'service_v5r2rrg',
        'template_4xzkb6a',
        form.current,
        'G_SZ9k-QlhaljouIn'
      )
      .then(
        () => {
          setSending(false);
          setSuccess(true);
          form.current?.reset();
        },
        () => {
          setSending(false);
          setError(true);
        }
      );
  };

  return (
    <Section
      id="contact"
      title="Kontakt"
      subtitle="Ich freue mich auf deine Nachricht"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-3xl mx-auto"
        data-testid="form-contact"
      >
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Name *</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Dein vollständiger Name"
            className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#cdb293]"
            data-testid="input-name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">E-Mail *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="deine@email.de"
            className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#cdb293]"
            data-testid="input-email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Telefon</label>
          <input
            type="tel"
            name="phone"
            placeholder="+49 123 456 789"
            className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#cdb293]"
            data-testid="input-phone"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Nachricht *</label>
          <textarea
            name="message"
            required
            placeholder="Deine Nachricht an mich..."
            rows={6}
            className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#cdb293] resize-none"
            data-testid="input-message"
          />
        </div>

        <label className="flex items-start gap-3 text-gray-700 mb-8">
          <input
            type="checkbox"
            required
            className="mt-1 w-4 h-4"
            data-testid="input-dsgvo"
          />
          <span>
            Ich habe die Datenschutzerklärung zur Kenntnis genommen und stimme der
            Verarbeitung meiner Daten zur Kontaktaufnahme zu. *
          </span>
        </label>

        <button
          type="submit"
          disabled={sending}
          className="w-full bg-[#cdb293] hover:bg-[#b89a7a] text-salon-black font-bold text-lg py-4 rounded-xl shadow-md transition disabled:opacity-60"
          data-testid="button-submit-contact"
        >
          {sending ? 'Wird gesendet...' : '✈ Nachricht senden'}
        </button>

        {success && (
          <p className="mt-5 text-green-600 font-semibold text-center">
            Nachricht wurde erfolgreich gesendet.
          </p>
        )}

        {error && (
          <p className="mt-5 text-red-600 font-semibold text-center">
            Fehler beim Senden. Bitte erneut versuchen.
          </p>
        )}
      </form>

      <p className="text-center text-sm text-salon-black opacity-60 mt-6">
        * Pflichtfelder
      </p>
    </Section>
  );
}
