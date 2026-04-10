import Section from '../components/Section';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

interface PriceCategory {
  title: string;
  items: { name: string; price: string }[];
}

export default function PricingPage({ onNavigate }: PricingPageProps) {
  const priceCategories: PriceCategory[] = [
    {
      title: 'AQUAFACIAL',
      items: [
        { name: 'Gesicht', price: '100,00 €' },
        { name: 'Inkl. Hals & Dekolleté', price: '140,00 €' },
      ],
    },
    {
      title: 'MICRONEEDLING',
      items: [
        { name: 'Gesicht', price: '99,00 €' },
        { name: 'Inkl. Hals & Dekolleté', price: '140,00 €' },
      ],
    },
    {
      title: 'SKIN',
      items: [
        { name: 'Klassische Ausreinigung inkl. Augenbrauen zupfen', price: '69,00 €' },
        { name: 'Microdermabrasion', price: '69,00 €' },
        { name: 'Dermaplaning', price: '69,00 €' },
        { name: 'Fruchtsäurepeeling', price: '69,00 €' },
      ],
    },
    {
      title: 'KOMBI',
      items: [
        { name: 'Aquafacial + Needling', price: '169,00 €' },
        { name: 'Dermabrasion + Needling', price: '155,00 €' },
        { name: 'Dermaplaning + Aquafacial', price: '139,00 €' },
        { name: 'Dermaplaning + Needling', price: '139,00 €' },
      ],
    },
    {
      title: 'LIFTING',
      items: [
        { name: 'Lashlifting inkl. Farbe', price: '50,00 €' },
        { name: 'Färben untere Wimpern', price: '53,00 €' },
        { name: 'Browlifting ohne Farbe', price: '52,00 €' },
        { name: 'Browlifting inkl. Farbe', price: '58,00 €' },
        { name: 'Kombi LL + BL ohne Farbe', price: '85,00 €' },
        { name: 'Kombi LL + BL mit Farbe', price: '95,00 €' },
        { name: 'Augenbrauen zupfen', price: '15,00 €' },
        { name: 'Augenbrauen färben', price: '15,00 €' },
        { name: 'Kombi', price: '25,00 €' },
      ],
    },
    {
      title: 'WIMPERNVERLÄNGERUNG',
      items: [
        { name: 'Classic 1:1 - Neumodellage', price: '89,00 €' },
        { name: 'Classic 1:1 - Refill bis 3 Wochen', price: '55,00 €' },
        { name: 'Classic 1:1 - Refill bis 4 Wochen', price: '60,00 €' },
        { name: 'Softvolumen 2D–3D - Neumodellage', price: '109,00 €' },
        { name: 'Softvolumen 2D–3D - Refill bis 3 Wochen', price: '70,00 €' },
        { name: 'Softvolumen 2D–3D - Refill bis 4 Wochen', price: '75,00 €' },
        { name: 'Volumen ab 4D - Neumodellage', price: '119,00 €' },
        { name: 'Volumen ab 4D - Refill bis 3 Wochen', price: '75,00 €' },
        { name: 'Volumen ab 4D - Refill bis 4 Wochen', price: '80,00 €' },
      ],
    },
    {
      title: 'TOOTH',
      items: [
        { name: 'Zahnschmuck', price: '30,00 €' },
        { name: 'Jeder weitere Stein', price: '20,00 €' },
        { name: 'Zahnaufhellung 30 min', price: '59,00 €' },
        { name: 'Zahnaufhellung 45 min', price: '89,00 €' },
        { name: 'Zahnaufhellung 60 min', price: '99,00 €' },
        { name: 'Zahnaufhellung 75 min', price: '119,00 €' },
      ],
    },
    {
      title: 'HAARENTFERNUNG GESICHT',
      items: [
        { name: 'Kinn', price: '40,00 €' },
        { name: 'Wangen', price: '49,00 €' },
        { name: 'Oberlippe', price: '40,00 €' },
        { name: 'Hals', price: '49,00 €' },
        { name: 'Stirn + zwischen den Augenbrauen', price: '39,00 €' },
        { name: 'Gesicht komplett', price: '99,00 €' },
      ],
    },
    {
      title: 'HAARENTFERNUNG OBERKÖRPER',
      items: [
        { name: 'Achseln', price: '59,00 €' },
        { name: 'Rücken', price: '99,00 €' },
        { name: 'Bauch', price: '59,00 €' },
        { name: 'Brust', price: '59,00 €' },
        { name: 'Nacken', price: '49,00 €' },
        { name: 'Hände', price: '49,00 €' },
        { name: 'Oberarme', price: '59,00 €' },
        { name: 'Unterarme', price: '59,00 €' },
        { name: 'Arme komplett', price: '99,00 €' },
      ],
    },
    {
      title: 'HAARENTFERNUNG UNTERKÖRPER',
      items: [
        { name: 'Oberschenkel', price: '89,00 €' },
        { name: 'Unterschenkel', price: '99,00 €' },
        { name: 'Beine komplett', price: '150,00 €' },
        { name: 'Bikinizone', price: '69,00 €' },
        { name: 'Intim', price: '69,00 €' },
        { name: 'Schamlippen', price: '69,00 €' },
        { name: 'Po', price: '49,00 €' },
        { name: 'Pofalte', price: '39,00 €' },
        { name: 'Intim komplett (Intim, Schamlippen, Pofalte)', price: '109,00 €' },
      ],
    },
    {
      title: 'HAARENTFERNUNG PAKETE',
      items: [
        { name: 'Paket Small (Intim ohne Schamlippen + Achseln)', price: '99,00 €' },
        { name: 'Paket Medium (Intim komplett, Bikinizone, Achseln)', price: '149,00 €' },
        { name: 'Paket Large (Intim komplett, Bikinizone, Beine, Achseln)', price: '199,00 €' },
        { name: 'Ganzkörper (max. 5 Zonen)', price: '249,00 €' },
        { name: 'Ganzkörper komplett von Kopf bis Fuß', price: '390,00 €' },
      ],
    },
    {
      title: 'HAARENTFERNUNG RABATTE',
      items: [
        { name: '2 Zonen deiner Wahl', price: '-5 %' },
        { name: '3 Zonen deiner Wahl', price: '-10 %' },
      ],
    },
  ];

  return (
    <>
      <Section
        id="pricing"
        title="Preisliste"
        subtitle="Transparente Preise für hochwertige Beauty-Behandlungen"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {priceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                data-testid={`card-pricing-${index}`}
              >
                <div className="bg-beige p-6">
                  <h3 className="text-2xl font-bold text-salon-black text-center">{category.title}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-start gap-4 pb-4 border-b border-gray-200 last:border-b-0"
                      >
                        <span className="text-salon-black opacity-80 text-sm flex-1">{item.name}</span>
                        <span className="text-salon-black font-bold text-sm whitespace-nowrap">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section backgroundColor="blush" id="online-booking">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-salon-black mb-6 font-serif">Online Terminbuchung</h2>
          <p className="text-lg text-salon-black opacity-80 mb-8 leading-relaxed">
            Buche deinen Wunschtermin bequem online - jederzeit und überall.
            Wähle deine gewünschte Behandlung und finde den perfekten Termin für dich.
          </p>
          <button
            onClick={() => onNavigate('booking')}
            className="bg-beige hover:bg-beige-dark text-salon-black font-semibold px-12 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-salon-black focus:ring-offset-2 shadow-lg text-lg"
            data-testid="button-book-pricing"
          >
            Jetzt Termin buchen
          </button>
        </div>
      </Section>
    </>
  );
}
