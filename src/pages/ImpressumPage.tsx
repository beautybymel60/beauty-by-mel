import Section from '../components/Section';

export default function ImpressumPage() {
  return (
    <Section id="impressum" title="Impressum">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="space-y-8 text-salon-black opacity-80">

          <div>
            <h3 className="text-xl font-bold text-salon-black mb-3">Angabe gem. 5 TMG</h3>
            <p>Beauty by Mel</p>
            <p>Inhaberin: Melissa Krebs</p>
            <p>Zollhausstraße 57A</p>
            <p>52353 Düren</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-salon-black mb-3">Kontakt</h3>
            <p>
              WhatsApp:{' '}
              <a href="https://wa.me/491781460270" className="hover:underline">
                +49 178 1460270
              </a>
            </p>
            <p>
              E-Mail:{' '}
              <a href="mailto:beautybymeldueren@web.de" className="hover:underline">
                beautybymeldueren@web.de
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-salon-black mb-3">Bilder</h3>
            <p>Melissa Krebs</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-salon-black mb-3">Online-Streitbeilegung</h3>
            <p className="text-sm leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie hier
              finden:{' '}
              <a
                href="http://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline break-all"
              >
                http://ec.europa.eu/consumers/odr/
              </a>
              . Verbraucher haben die Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten zu nutzen.
            </p>
            <p className="text-sm leading-relaxed mt-3">
              Zur Beilegung von Streitigkeiten aus einem Vertragsverhältnis mit einem Verbraucher bzw. darüber, ob ein
              solches Vertragsverhältnis überhaupt besteht, sind wir zur Teilnahme an Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle verpflichtet. Zuständig ist die Allgemeine
              Verbraucherschlichtungsstelle des Zentrums für Schlichtung e.V., Straßburger Straße 8, 77694 Kehl am
              Rhein,{' '}
              <a
                href="http://www.verbraucher-schlichter.de"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.verbraucher-schlichter.de
              </a>
              . An einem Streitbeilegungsverfahren vor dieser Stelle werden wir teilnehmen.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-salon-black mb-3">Haftungsausschluss</h3>

            <h4 className="font-semibold text-salon-black mb-2 uppercase tracking-wide text-sm">Haftung für Inhalte</h4>
            <p className="text-sm leading-relaxed mb-4">
              Als Dienstanbieter sind wir gemäß 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach 8 bis 10 TMG sind wir als Dienstanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
              der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
              möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
              entfernen.
            </p>

            <h4 className="font-semibold text-salon-black mb-2 uppercase tracking-wide text-sm">Haftung für Links</h4>
            <p className="text-sm leading-relaxed mb-4">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
              verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
              Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h4 className="font-semibold text-salon-black mb-2 uppercase tracking-wide text-sm">Urheberrecht</h4>
            <p className="text-sm leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
              Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
              auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
}
