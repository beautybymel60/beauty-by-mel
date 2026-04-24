export default function TeamPage() {
  const team = [
    {
      name: 'Melissa Develi',
      role: 'Inhaberin & Laserexpertin',
      image: `${import.meta.env.BASE_URL}teammel.JPG`,
      paragraphs: [
        'Beauty by Mel wurde 2022 von Melissa Develi gegründet und steht für moderne Beauty-Behandlungen auf höchstem Niveau. Der Fokus liegt auf individuellen Ergebnissen, professioneller Beratung und einem Ort, an dem sich Kundinnen rundum wohlfühlen.',
        'Als spezialisierte Laserexpertin bietet Melissa maßgeschneiderte Behandlungen mit höchster Präzision und einem tiefen Verständnis für Hautgesundheit und Ästhetik.',
        'Neben dem Studio ist Beauty by Mel auch eine anerkannte Kosmetikschule, die bereits zahlreiche Schülerinnen erfolgreich ausgebildet und in die Selbstständigkeit begleitet hat.',
        'Beauty by Mel vereint Fachwissen, Qualität und eine persönliche Atmosphäre – für sichtbare Ergebnisse und echtes Wohlbefinden.',
      ],
      specialties: ['Laserbehandlungen', 'Hautpflege', 'Schulungen', 'Zahnschmuck'],
    },
    {
      name: 'Jasmin',
      role: 'Wimpernstylistin & Beauty-Expertin',
      image: `${import.meta.env.BASE_URL}teamjasmin.JPG`,
      paragraphs: [
        'Ab Januar 2026 verstärkt Jasmin das Team von Beauty by Mel. Mit 6 Jahren Erfahrung im Bereich Wimpernverlängerung und Wimpernlifting steht sie für präzise und hochwertige Ergebnisse.',
        'Sie arbeitet mit dem modernen UV-System, das für sofortige Haltbarkeit, weniger Reizungen und besonders langlebige Ergebnisse sorgt – ideal auch für empfindliche Augen.',
        'Zusätzlich bringt Jasmin fundiertes Wissen im Bereich Gesichtsbehandlungen mit und erweitert damit das Angebot im Studio.',
        'Für perfekte Ergebnisse, maximale Haltbarkeit und höchste Qualität.',
      ],
      specialties: ['Wimpernverlängerung', 'Wimpernlifting', 'UV-System', 'Gesichtsbehandlungen'],
    },
    {
      name: 'Valeriia',
      role: 'Master-Stylistin für Wimpern & Laserexpertin',
      image: `${import.meta.env.BASE_URL}teamvaleriia.JPG`,
      paragraphs: [
        'Valeriia ist eine erfahrene Master-Stylistin für Wimpernverlängerungen mit über 12 Jahren Erfahrung in der Beauty-Branche. Mit einem geschulten Blick für Details kreiert sie individuelle, typgerechte Looks, die die natürliche Schönheit perfekt unterstreichen.',
        'Zusätzlich ist sie spezialisiert auf dauerhafte Haarentfernung und berät ihre Kundinnen professionell und einfühlsam – auf Deutsch und Russisch.',
        'Als NiSV-zertifizierte Expertin steht Valeriia für höchste Präzision, Qualität und moderne Behandlungen auf Top-Niveau.',
      ],
      specialties: ['Wimpernverlängerung', 'Haarentfernung', 'NiSV-zertifiziert', 'Deutsch & Russisch'],
      placeholder: false,
    },
    {
      name: 'Demnächst',
      role: 'Neue Mitarbeiterin',
      image: null,
      paragraphs: [],
      specialties: [],
      placeholder: true,
    },
  ] as Array<{
    name: string;
    role: string;
    image: string | null;
    paragraphs: string[];
    specialties: string[];
    placeholder?: boolean;
  }>;

  return (
    <div className="min-h-screen bg-beige-light">
      <div className="bg-beige py-20 px-6 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-salon-black opacity-60 mb-4">Unser Team</p>
        <h1 className="text-4xl md:text-5xl font-bold text-salon-black mb-6 font-serif" data-testid="text-team-heading">
          Lernen Sie uns kennen
        </h1>
        <p className="text-lg text-salon-black opacity-70 max-w-2xl mx-auto leading-relaxed">
          Hinter Beauty by Mel steckt ein leidenschaftliches Team, das jeden Tag dafür sorgt, dass Sie sich rundum wohlfühlen – mit Herz, Können und höchster Sorgfalt.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        {team.map((member, index) => {
          if (member.placeholder) {
            return (
              <div
                key="placeholder"
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                data-testid={`card-team-${index}`}
              >
                <div>
                  <div className="rounded-2xl w-full aspect-[3/4] bg-beige/40 border-2 border-dashed border-beige-dark flex flex-col items-center justify-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-beige flex items-center justify-center">
                      <svg className="w-10 h-10 text-beige-dark" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </div>
                    <p className="text-beige-dark font-medium tracking-widest text-sm uppercase">Foto folgt</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-salon-black opacity-50 mb-2">
                      Neue Mitarbeiterin
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-salon-black font-serif">
                      Demnächst
                    </h2>
                  </div>
                  <p className="text-lg text-salon-black opacity-50 leading-relaxed italic">
                    Wir wachsen weiter! Bald stellt sich hier ein neues Teammitglied vor.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['?', '?', '?'].map((_, i) => (
                      <span
                        key={i}
                        className="bg-beige/40 border border-dashed border-beige-dark text-salon-black/40 text-sm px-4 py-1.5 rounded-full"
                      >
                        Spezialisierung
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={member.name}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
              data-testid={`card-team-${index}`}
            >
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <img
                  src={member.image!}
                  alt={member.name}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[3/4]"
                />
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-salon-black opacity-50 mb-2">
                    {member.role}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-salon-black font-serif">
                    {member.name}
                  </h2>
                </div>

                <div className="space-y-4">
                  {member.paragraphs.map((para, i) => (
                    <p key={i} className="text-lg text-salon-black opacity-70 leading-relaxed">{para}</p>
                  ))}
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.15em] text-salon-black opacity-50 mb-3">
                    Spezialisierungen
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="bg-beige border border-beige-dark text-salon-black text-sm px-4 py-1.5 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-blush py-16 px-6 text-center">
        <p className="text-2xl md:text-3xl font-semibold text-salon-black max-w-2xl mx-auto leading-relaxed font-serif">
          Wir freuen uns darauf, Sie persönlich kennenzulernen.
        </p>
      </div>
    </div>
  );
}
