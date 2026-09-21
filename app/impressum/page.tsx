import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | ICON/UP",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <main className="legalPage" id="main-content">
      <div className="legalInner">
        <Link className="legalBack" href="/">← ICON/UP</Link>
        <p className="legalEyebrow">LEGAL</p>
        <h1>IMPRESSUM</h1>

        <section aria-labelledby="anbieter">
          <h2 id="anbieter">Angaben gemäß § 5 DDG</h2>
          <p>
            <strong>ICON/UP</strong><br />
            Patrick Knobloch<br />
            (Anschrift auf Anfrage)<br />
            26209 Hatten<br />
            Deutschland
          </p>
        </section>

        <section aria-labelledby="kontakt">
          <h2 id="kontakt">Kontakt</h2>
          <p>E-Mail: <a href="mailto:hello@iconup.agency">hello@iconup.agency</a></p>
        </section>

        <section aria-labelledby="redaktion">
          <h2 id="redaktion">Inhaltlich verantwortlich</h2>
          <p>Patrick Knobloch<br />
            Anschrift wie oben</p>
        </section>

        <section aria-labelledby="angebot">
          <h2 id="angebot">Über ICON/UP</h2>
          <p>
            ICON/UP ist eine unabhängige Artist- und Creative-Agentur. Wir entwickeln digitale Artists
            und ihre Identitäten von der Idee bis zum Release und verbinden Artistentwicklung,
            Management, Content-Produktion, Musikdistribution und Markenkooperationen.
          </p>
        </section>

        <section aria-labelledby="haftung">
          <h2 id="haftung">Haftung für Inhalte und Links</h2>
          <p>
            Die Inhalte dieser Website werden mit Sorgfalt erstellt und regelmäßig geprüft.
            Soweit diese Website Links zu externen Angeboten enthält, liegen deren Inhalte
            außerhalb unseres Einflussbereichs. Für die Inhalte verlinkter Seiten sind die
            jeweiligen Anbieter verantwortlich.
          </p>
        </section>

        <section aria-labelledby="urheberrecht">
          <h2 id="urheberrecht">Urheberrecht</h2>
          <p>
            Inhalte, Gestaltung, Texte, Bilder, Musik und sonstige Werke auf dieser Website
            unterliegen, soweit anwendbar, dem Urheberrecht oder entsprechenden Nutzungsrechten.
            Eine Verwendung außerhalb der gesetzlichen Schranken bedarf der vorherigen Zustimmung
            des jeweiligen Rechteinhabers.
          </p>
        </section>
      </div>
    </main>
  );
}
