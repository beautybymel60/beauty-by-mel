export default function TeamPage() {
  const team = [
    {
      name: "Melissa Krebs",
      role: "Inhaberin & Laserexpertin",
      image: `${import.meta.env.BASE_URL}teammel.JPG`,
      paragraphs: [
        "Beauty by Mel wurde 2022 von Melissa Krebs gegründet und steht für moderne Beauty-Behandlungen auf höchstem Niveau. Der Fokus liegt auf individuellen Ergebnissen, professioneller Beratung und einem Ort, an dem sich Kundinnen rundum wohlfühlen.",
        "Als spezialisierte Laserexpertin bietet Melissa maßgeschneiderte Behandlungen mit höchster Präzision und einem tiefen Verständnis für Hautgesundheit und Ästhetik.",
        "Neben dem Studio ist Beauty by Mel auch eine anerkannte Kosmetikschule, die bereits zahlreiche Schülerinnen erfolgreich ausgebildet und in die Selbstständigkeit begleitet hat.",
        "Beauty by Mel vereint Fachwissen, Qualität und eine persönliche Atmosphäre – für sichtbare Ergebnisse und echtes Wohlbefinden.",
      ],
      specialties: [
        "Laserbehandlungen",
        "Hautpflege",
        "Schulungen",
        "Zahnschmuck",
      ],
    },
    {
      name: "Valeriia Osadchya",
      role: "Master-Stylistin für Wimpern & Laserexpertin",
      image: `${import.meta.env.BASE_URL}teamvaleriia.JPG`,
      paragraphs: [
        "Valeriia ist eine erfahrene Master-Stylistin für Wimpernverlängerungen mit über 12 Jahren Erfahrung in der Beauty-Branche. Mit einem geschulten Blick für Details kreiert sie individuelle, typgerechte Looks, die die natürliche Schönheit perfekt unterstreichen.",
        "Zusätzlich ist sie spezialisiert auf dauerhafte Haarentfernung und berät ihre Kundinnen professionell und einfühlsam – auf Deutsch und Russisch.",
        "Als NiSV-zertifizierte Expertin steht Valeriia für höchste Präzision, Qualität und moderne Behandlungen auf Top-Niveau.",
      ],
      specialties: [
        "Wimpernverlängerung",
        "Haarentfernung",
        "NiSV-zertifiziert",
        "Deutsch & Russisch",
      ],
    },
    {
      name: "Jasmin Herzog",
      role: "Wimpernstylistin & Beauty-Expertin",
      image: `${import.meta.env.BASE_URL}teamjasmin.JPG`,
      paragraphs: [
        "Seit Januar 2026 verstärkt Jasmin das Team von Beauty by Mel. Mit 6 Jahren Erfahrung im Bereich Wimpernverlängerung und Wimpernlifting steht sie für präzise und hochwertige Ergebnisse.",
        "Sie arbeitet mit dem modernen UV-System, das für sofortige Haltbarkeit, weniger Reizungen und besonders langlebige Ergebnisse sorgt – ideal auch für empfindliche Augen.",
        "Zusätzlich bringt Jasmin fundiertes Wissen im Bereich Gesichtsbehandlungen mit und erweitert damit das Angebot im Studio.",
        "Für perfekte Ergebnisse, maximale Haltbarkeit und höchste Qualität.",
      ],
      specialties: [
        "Wimpernverlängerung",
        "Wimpernlifting",
        "UV-System",
        "Gesichtsbehandlungen",
      ],
    },
    {
      name: "Irina Konradi",
      role: "Kosmetikerin & Haarentfernungs-Expertin",
      image: `${import.meta.env.BASE_URL}teamirina.jpg`,
      paragraphs: [
        "Irina bringt mehrere Jahre Erfahrung in der Kosmetikbranche mit und befindet sich aktuell zusätzlich in der Umschulung zur staatlich geprüften Kosmetikerin, um ihr Fachwissen weiter zu vertiefen und auf dem neuesten Stand zu halten.",
        "Sie wird unser Team montags, freitags sowie an einem Samstag im Monat tatkräftig unterstützen.",
        "Ihr Schwerpunkt liegt insbesondere auf der dauerhaften Haarentfernung – in diesem Bereich ist sie bestens geschult und selbstverständlich im Besitz der erforderlichen NiSV-Zertifizierung.",
        "Darüber hinaus ist Irina auch im Bereich der Gesichtsbehandlungen äußerst erfahren und überzeugt mit ihrem professionellen Know-how. Wir freuen uns sehr auf die Zusammenarbeit und darauf, dass unsere Kundinnen und Kunden von Irinas Expertise profitieren können!",
      ],
      specialties: ["Haarentfernung", "Gesichtsbehandlungen", "NiSV-zertifiziert", "Staatl. gepr. Kosmetikerin"],
    },
    {
      name: "Viktoriia Dzoz",
      role: "Kosmetikerin & Laserexpertin",
      image: `${import.meta.env.BASE_URL}teamviktoriia.jpg`,
      paragraphs: [
        "Viktoriia ist eine erfahrene und engagierte Mitarbeiterin im Kosmetikstudio Beauty by Mel. Als zertifizierte Hautexpertin und NiSV-zertifizierte Kosmetikerin bringt sie umfassendes Fachwissen in den Bereichen Hautpflege und apparative Kosmetik mit. Zu ihren Schwerpunkten zählen professionelle Gesichtsbehandlungen sowie moderne Laserbehandlungen, die sie mit großer Sorgfalt und Präzision durchführt.",
        "Mit mehreren Jahren Berufserfahrung als Kosmetikerin konnte Viktoriia ihr Können kontinuierlich weiterentwickeln. In ihrer Heimat, der Ukraine, führte sie bereits erfolgreich ein eigenes Kosmetikstudio und sammelte wertvolle unternehmerische sowie praktische Erfahrungen.",
        "Seit knapp fünf Jahren lebt sie in Deutschland und überzeugt nicht nur durch ihre fachliche Kompetenz, sondern auch durch ihre sprachliche Vielseitigkeit. Sie verfügt über gute Deutschkenntnisse und spricht zusätzlich Russisch und Ukrainisch, wodurch sie Kundinnen und Kunden individuell und einfühlsam betreuen kann.",
        "Viktoriia wird das Team von Beauty by Mel künftig dienstags, donnerstags sowie an einem Samstag im Monat tatkräftig unterstützen und bereichert das Studio mit ihrer Expertise und ihrer freundlichen Art.",
      ],
      specialties: ["Gesichtsbehandlungen", "Laserbehandlungen", "NiSV-zertifiziert", "DE / RU / UA"],
    },
  ];

  return (
    <div className="min-h-screen bg-beige-light">
      <div className="bg-beige py-20 px-6 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-salon-black opacity-60 mb-4">
          Unser Team
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold text-salon-black mb-6 font-serif"
          data-testid="text-team-heading"
        >
          Lernen Sie uns kennen
        </h1>
        <p className="text-lg text-salon-black opacity-70 max-w-2xl mx-auto leading-relaxed">
          Hinter Beauty by Mel steckt ein leidenschaftliches Team, das jeden Tag
          dafür sorgt, dass Sie sich rundum wohlfühlen – mit Herz, Können und
          höchster Sorgfalt.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        {team.map((member, index) => (
          <div key={member.name} data-testid={`card-team-${index}`}>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              <div className={`md:pt-10 ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[3/4]"
                />
              </div>

              <div
                className={`space-y-6 ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}
              >
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
                    <p
                      key={i}
                      className="text-lg text-salon-black opacity-70 leading-relaxed"
                    >
                      {para}
                    </p>
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
          </div>
        ))}
      </div>

      <div className="bg-blush py-16 px-6 text-center">
        <p className="text-2xl md:text-3xl font-semibold text-salon-black max-w-2xl mx-auto leading-relaxed font-serif">
          Wir freuen uns darauf, Sie persönlich kennenzulernen.
        </p>
      </div>
    </div>
  );
}
