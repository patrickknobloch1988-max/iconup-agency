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
            Inhaber: [Vorname Nachname]<br />
            [Straße und Hausnummer]<br />
            [PLZ Ort]<br />
            Deutschland
          </p>
        </section>

        <section aria-labelledby="kontakt">
          <h2 id="kontakt">Kontakt</h2>
          <p>E-Mail: <a href="mailto:hello@iconup.agency">hello@iconup.agency</a></p>
        </section>

        <p className="legalNotice">
          Die Platzhalter für Name und ladungsfähige Anschrift müssen vor der Veröffentlichung durch die korrekten Angaben ersetzt werden.
        </p>
      </div>
    </main>
  );
}
