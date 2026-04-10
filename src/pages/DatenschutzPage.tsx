import Section from '../components/Section';

export default function DatenschutzPage() {
  return (
    <Section id="datenschutz" title="Datenschutzerklärung">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="space-y-8 text-salon-black opacity-80">

          <div>
            <h3 className="text-xl font-bold text-salon-black mb-3">1. Datenschutz auf einen Blick</h3>
            <h4 className="font-semibold text-salon-black mb-2">Allgemeine Hinweise</h4>
            <p className="text-sm leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
              unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-salon-black mb-3">2. Verantwortliche Stelle</h3>
            <p className="text-sm leading-relaxed mb-2">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-sm">Beauty by Mel</p>
            <p className="text-sm">Inhaberin: Melissa Krebs</p>
            <p className="text-sm">Zollhausstraße 57A</p>
            <p className="text-sm">52353 Düren</p>
            <p className="text-sm mt-2">
              WhatsApp:{' '}
              <a href="https://wa.me/491781460270" className="hover:underline">
                +49 178 1460270
              </a>
            </p>
            <p className="text-sm">
              E-Mail:{' '}
              <a href="mailto:beautybymeldueren@web.de" className="hover:underline">
                beautybymeldueren@web.de
              </a>
            </p>
            <p className="text-sm leading-relaxed mt-3">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
              über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen
              o.Ä.) entscheidet.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-salon-black mb-3">3. Datenerfassung auf dieser Website</h3>

            <h4 className="font-semibold text-salon-black mb-2">Wie erfassen wir Ihre Daten?</h4>
            <p className="text-sm leading-relaxed mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen – z.B. durch eine Anfrage per
              WhatsApp oder E-Mail. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme
              erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des
              Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <h4 className="font-semibold text-salon-black mb-2">Wofür nutzen wir Ihre Daten?</h4>
            <p className="text-sm leading-relaxed mb-4">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
              Andere Daten können genutzt werden, um Ihr Nutzerverhalten zu analysieren. Daten, die Sie uns aktiv
              mitteilen (z.B. per WhatsApp oder E-Mail), werden ausschließlich zur Bearbeitung Ihrer Anfrage und
              ggf. für Terminvereinbarungen verwendet.
            </p>

            <h4 className="font-semibold text-salon-black mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
            <p className="text-sm leading-relaxed">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem das Recht, die Berichtigung oder
              Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
              können Sie diese jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten
              Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren
              steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-salon-black mb-3">4. Hosting</h3>
            <p className="text-sm leading-relaxed">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden,
              werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe
              und sonstige Daten, die über eine Website generiert werden, handeln. Das Hosting erfolgt auf Grundlage
              von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen
              Darstellung unserer Website.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-salon-black mb-3">5. Kontaktaufnahme per WhatsApp oder E-Mail</h3>
            <p className="text-sm leading-relaxed mb-3">
              Wenn Sie uns per WhatsApp oder E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus
              hervorgehenden personenbezogenen Daten (z.B. Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
              bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-sm leading-relaxed">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
              Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
              der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
            </p>
            <p className="text-sm leading-relaxed mt-3">
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
              auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung
              entfällt. Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben
              unberührt.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-salon-black mb-3">6. Online-Terminbuchung</h3>
            <p className="text-sm leading-relaxed">
              Für die Buchung von Terminen werden personenbezogene Daten wie Name, Kontaktdaten und die gewünschte
              Behandlung erhoben. Diese Daten werden ausschließlich zur Terminverwaltung und -bestätigung verwendet
              und nicht an Dritte weitergegeben. Die Daten werden nach Ablauf der gesetzlichen Aufbewahrungsfristen
              gelöscht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-salon-black mb-3">7. SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="text-sm leading-relaxed">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
              SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
              des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln,
              nicht von Dritten mitgelesen werden.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-salon-black mb-3">8. Ihre Rechte als betroffene Person</h3>

            <h4 className="font-semibold text-salon-black mb-2">Auskunft, Löschung und Berichtigung</h4>
            <p className="text-sm leading-relaxed mb-4">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem das Recht, die Berichtigung oder
              Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
              sich jederzeit an uns wenden.
            </p>

            <h4 className="font-semibold text-salon-black mb-2">Recht auf Einschränkung der Verarbeitung</h4>
            <p className="text-sm leading-relaxed mb-4">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht
              in folgenden Fällen: Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten
              bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben
              Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </p>

            <h4 className="font-semibold text-salon-black mb-2">Widerspruchsrecht</h4>
            <p className="text-sm leading-relaxed mb-4">
              Wenn die Verarbeitung Ihrer personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß
              Art. 6 Abs. 1 lit. f DSGVO erfolgt, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die
              Verarbeitung Ihrer personenbezogenen Daten einzulegen. Wenn Sie Widerspruch einlegen, werden wir Ihre
              betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende
              schutzwürdige Gründe für die Verarbeitung nachweisen.
            </p>

            <h4 className="font-semibold text-salon-black mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
            <p className="text-sm leading-relaxed">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
              Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde für Nordrhein-Westfalen ist die Landesbeauftragte
              für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Postfach 20 04 44, 40102 Düsseldorf,
              Tel.: 0211 384240, E-Mail: poststelle@ldi.nrw.de.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-salon-black mb-3">9. Speicherdauer</h3>
            <p className="text-sm leading-relaxed">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
              Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
              berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
              werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung
              Ihrer personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
              letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-salon-black mb-3">10. Online-Streitbeilegung</h3>
            <p className="text-sm leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="http://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline break-all"
              >
                http://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind bereit, an einem
              außergerichtlichen Schlichtungsverfahren vor der Allgemeinen Verbraucherschlichtungsstelle des
              Zentrums für Schlichtung e.V., Straßburger Straße 8, 77694 Kehl am Rhein,{' '}
              <a
                href="http://www.verbraucher-schlichter.de"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.verbraucher-schlichter.de
              </a>
              , teilzunehmen.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <p className="text-xs opacity-60">Stand: April 2026</p>
          </div>

        </div>
      </div>
    </Section>
  );
}
