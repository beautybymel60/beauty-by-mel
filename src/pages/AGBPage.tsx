export default function AGBPage() {
  return (
    <div className="min-h-screen bg-beige-light">
      <div className="bg-beige py-20 px-6 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-salon-black opacity-60 mb-4">Rechtliches</p>
        <h1 className="text-4xl md:text-5xl font-bold text-salon-black mb-6 font-serif">
          AGB
        </h1>
        <p className="text-lg text-salon-black opacity-70 max-w-2xl mx-auto leading-relaxed">
          Allgemeine Geschäftsbedingungen & Terminbedingungen
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-salon-black font-serif mb-4">
            Beauty by Mel – Verbindliche Terminbedingungen
          </h2>
          <p className="text-salon-black opacity-70 leading-relaxed">
            Mit jeder Terminvereinbarung (telefonisch, per WhatsApp, Instagram, online oder vor Ort) kommt ein verbindlicher Dienstleistungsvertrag zustande. Gleichzeitig erklärst du dich mit den geltenden AGB einverstanden.
          </p>
        </section>

        <div className="border-t border-beige-dark" />

        <section>
          <h2 className="text-xl font-bold text-salon-black font-serif mb-4">
            Stornierung & Ausfallgebühren
          </h2>
          <div className="space-y-4">
            <div className="bg-beige rounded-2xl p-5">
              <p className="text-sm uppercase tracking-widest text-salon-black opacity-50 mb-1">Kostenfreie Stornierung</p>
              <p className="text-salon-black opacity-80 leading-relaxed">
                Eine kostenfreie Stornierung ist nur bis <strong>24 Stunden vor dem Termin</strong> möglich.
              </p>
            </div>
            <div className="bg-beige rounded-2xl p-5">
              <p className="text-sm uppercase tracking-widest text-salon-black opacity-50 mb-1">Absage unter 24 Stunden</p>
              <p className="text-salon-black opacity-80 leading-relaxed">
                Bei Absagen unter 24 Stunden vor dem Termin werden <strong>50 % des Behandlungspreises</strong> berechnet.
              </p>
            </div>
            <div className="bg-beige rounded-2xl p-5">
              <p className="text-sm uppercase tracking-widest text-salon-black opacity-50 mb-1">Nichterscheinen ohne Absage</p>
              <p className="text-salon-black opacity-80 leading-relaxed">
                Bei Nichterscheinen ohne Absage wird der <strong>volle Behandlungspreis (100 %)</strong> in Rechnung gestellt.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-beige-dark" />

        <section>
          <h2 className="text-xl font-bold text-salon-black font-serif mb-4">
            Ausfallgebühr
          </h2>
          <p className="text-salon-black opacity-70 leading-relaxed">
            Die Ausfallgebühr ist unabhängig vom Grund der Verhinderung zu zahlen, es sei denn, es wird nachgewiesen, dass kein oder ein geringerer Schaden entstanden ist.
          </p>
        </section>

        <div className="border-t border-beige-dark" />

        <section className="bg-blush rounded-2xl p-8 text-center">
          <p className="text-lg text-salon-black font-medium font-serif leading-relaxed">
            Mit der Terminbuchung bestätigst du diese Regelungen.
          </p>
        </section>
      </div>
    </div>
  );
}
