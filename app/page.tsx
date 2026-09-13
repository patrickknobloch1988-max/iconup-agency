"use client";

import { FormEvent, useEffect, useState } from "react";

type Language = "de" | "en";

const content = {
  de: {
    nav: ["Ansatz", "Was wir bauen", "Artists", "Kontakt"],
    heroTop: "Artist Brand Development",
    hero2: "IST NUR",
    hero3: "DER ANFANG.",
    heroText:
      "IconUp macht aus digitalen Artists reale Marken — mit Identität, Strategie, Creative Direction und einer Vision, die über Plattformen hinausgeht.",
    heroCta: "Mit uns arbeiten",
    stats: [["01", "Artist Development"], ["02", "Creative Direction"], ["03", "Brand Building"], ["04", "Real World"]],
    missionLabel: "Unsere Aufgabe",
    missionTitle: "Wir machen aus digitalen Artists echte Marken.",
    missionText:
      "Wir übersetzen digitale Aufmerksamkeit in eine erkennbare Identität, eine echte Community und ein Artist-Projekt mit langfristigem Wert.",
    principleLabel: "IconUp Prinzip",
    principleTitle: "NICHT FÜR DEN ALGORITHMUS. FÜR DIE MARKE.",
    principleText:
      "Plattformen, Trends und Formate verändern sich. Wir bauen Artists so auf, dass ihr Wert nicht an einer einzelnen Plattform hängt.",
    buildLabel: "Was wir bauen",
    buildTitle: "EIN SYSTEM RUND UM DEN ARTIST.",
    services: [
      ["01", "Positionierung", "Eine klare Identität, Haltung und Richtung."],
      ["02", "Creative Direction", "Eine visuelle Welt, die wiedererkannt wird."],
      ["03", "Audience", "Aus Reichweite wird Beziehung und Community."],
      ["04", "Expansion", "Kooperationen, Produkte und reale Touchpoints."]
    ],
    contactText:
      "Du möchtest mit IconUp arbeiten oder einen unserer Artists anfragen? Schreib uns.",
    inquiry: "Anfrage",
    talent: "Talent / Zusammenarbeit",
    brand: "Brand & Kooperation",
    press: "Presse & Media",
    other: "Sonstiges",
    role: "Du bist",
    email: "E-Mail",
    message: "Nachricht",
    send: "Nachricht senden",
    note:
      "Songwriter · Producer · Rapper · Vocalist — sowie Booking-, Brand- und Business-Anfragen.",
    artistsLabel: "Roster",
    artistsTitle: "DIE ARTISTS HINTER ICONUP",
    artistsText: "Digitale Artists mit eigener Identität, klarer Vision und dem Anspruch, mehr als nur Reichweite aufzubauen.",
    artistType: "Artist",
    artistStatus: "IconUp Roster",
    legal: "Impressum · Datenschutz"
  },
  en: {
    nav: ["Approach", "What we build", "Artists", "Contact"],
    heroTop: "Artist Brand Development",
    hero2: "IS ONLY",
    hero3: "THE START.",
    heroText:
      "IconUp turns digital artists into real brands — through identity, strategy, creative direction and a vision built beyond platforms.",
    heroCta: "Work with us",
    stats: [["01", "Artist Development"], ["02", "Creative Direction"], ["03", "Brand Building"], ["04", "Real World"]],
    missionLabel: "Our mission",
    missionTitle: "We turn digital artists into real brands.",
    missionText:
      "We turn digital attention into a recognizable identity, a real community and an artist project with long-term value.",
    principleLabel: "The IconUp principle",
    principleTitle: "NOT FOR THE ALGORITHM. FOR THE BRAND.",
    principleText:
      "Platforms, trends and formats change. We build artists whose value is never dependent on one platform.",
    buildLabel: "What we build",
    buildTitle: "ONE SYSTEM AROUND THE ARTIST.",
    services: [
      ["01", "Positioning", "A clear identity, attitude and direction."],
      ["02", "Creative Direction", "A visual world people recognize."],
      ["03", "Audience", "Turning reach into relationships and community."],
      ["04", "Expansion", "Partnerships, products and real-world touchpoints."]
    ],
    contactText:
      "Want to work with IconUp or enquire about one of our artists? Get in touch.",
    inquiry: "Enquiry",
    talent: "Talent / Collaboration",
    brand: "Brand & Cooperation",
    press: "Press & Media",
    other: "Other",
    role: "You are",
    email: "Email",
    message: "Message",
    send: "Send message",
    note:
      "Songwriters · Producers · Rappers · Vocalists — plus booking, brand and business enquiries.",
    artistsLabel: "Roster",
    artistsTitle: "THE ARTISTS BEHIND ICONUP",
    artistsText: "Digital artists with a distinct identity, a clear vision and the ambition to build beyond reach.",
    artistType: "Artist",
    artistStatus: "IconUp Roster",
    legal: "Legal · Privacy"
  }
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("de");
  const [type, setType] = useState("talent");
  const t = content[language];

  useEffect(() => {
    const saved = window.localStorage.getItem("iconup-language");
    if (saved === "de" || saved === "en") {
      setLanguage(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const changeLanguage = (next: Language) => {
    setLanguage(next);
    window.localStorage.setItem("iconup-language", next);
    document.documentElement.lang = next;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `${t.inquiry}: ${data.get("type")}`,
      type === "talent" ? `${t.role}: ${data.get("role")}` : "",
      `Name: ${data.get("name")}`,
      `${t.email}: ${data.get("email")}`,
      `Social / Website: ${data.get("social")}`,
      "",
      String(data.get("message") ?? "")
    ].filter(Boolean);

    window.location.href =
      "mailto:hello@iconup.agency?subject=" +
      encodeURIComponent(language === "de" ? "IconUp Anfrage" : "IconUp Enquiry") +
      "&body=" +
      encodeURIComponent(lines.join("\n"));
  };

  return (
    <main>
      <header className="header">
        <a className="logo" href="#top"><span className="logoWord"><span className="logoIcon">ICON</span><span className="logoUp">UP</span></span><span className="logoMark" aria-hidden="true" /></a>
        <nav className="nav">
          <a href="#approach">{t.nav[0]}</a>
          <a href="#build">{t.nav[1]}</a>
          <a href="#artists">{t.nav[2]}</a>
          <a href="#contact">{t.nav[3]}</a>
        </nav>
        <div className="language">
          <button className={language === "de" ? "active" : ""} onClick={() => changeLanguage("de")}>DE</button>
          <span>/</span>
          <button className={language === "en" ? "active" : ""} onClick={() => changeLanguage("en")}>EN</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span />{t.heroTop}</div>
        <h1>
          <span>DIGITAL</span>
          <span>{t.hero2}</span>
          <span className="outline">{t.hero3}</span>
        </h1>
        <div className="heroBottom">
          <p>{t.heroText}</p>
          <a className="roundLink" href="#contact"><span>{t.heroCta}</span><b>↘</b></a>
        </div>
        <div className="heroStats">
          {t.stats.map(([number, label]) => (
            <div className="heroStat" key={number}>
              <span>{number}</span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="approach">
        <p className="kicker">{t.missionLabel}</p>
        <h2>{t.missionTitle}</h2>
        <div className="statementGrid">
          <span className="bigArrow">↗</span>
          <p>{t.missionText}</p>
        </div>
      </section>

      <section className="principle section">
        <p className="kicker light">{t.principleLabel}</p>
        <h2>{t.principleTitle}</h2>
        <p className="principleText">{t.principleText}</p>
      </section>

      <section className="section" id="build">
        <p className="kicker">{t.buildLabel}</p>
        <h2>{t.buildTitle}</h2>
        <div className="serviceList">
          {t.services.map(([number, title, text]) => (
            <article className="serviceCard" key={number}>
              <span className="serviceNumber">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="artists section" id="artists">
        <div className="artistsIntro">
          <p className="kicker">{t.artistsLabel}</p>
          <h2 className="artistsTitle"><span>{language === "de" ? "DIE ARTISTS HINTER " : "THE ARTISTS BEHIND "}</span><span className="artistsIcon">ICON</span><span className="artistsUp">UP</span><span className="artistsTitleMark" aria-hidden="true" /></h2>
          <p className="artistsText">{t.artistsText}</p>
        </div>

        <div className="artistGrid">
          <article className="artistCard">
            <div className="artistVisual" aria-hidden="true">
              <span className="artistMonogram">M+R</span>
              <span className="artistIndex">01</span>
            </div>
            <div className="artistMeta">
              <div>
                <span>{t.artistType}</span>
                <h3>MAV+RICH</h3>
              </div>
              <div className="artistStatus">{t.artistStatus}</div>
            </div>
          </article>

          <article className="artistCard artistCardEmpty" aria-label="More artists coming soon">
            <div className="artistVisual artistVisualEmpty">
              <span>+</span>
            </div>
            <div className="artistMeta">
              <div>
                <span>Next</span>
                <h3>MORE SOON</h3>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contactHead">
          <p className="kicker light">Contact</p>
          <h2>LET&apos;S BUILD SOMETHING REAL.</h2>
          <p>{t.contactText}</p>
        </div>

        <form className="contactForm" onSubmit={onSubmit}>
          <label>
            <span>{t.inquiry}</span>
            <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="talent">{t.talent}</option>
              <option value="booking">Booking</option>
              <option value="brand">{t.brand}</option>
              <option value="business">Business</option>
              <option value="press">{t.press}</option>
              <option value="other">{t.other}</option>
            </select>
          </label>

          {type === "talent" && (
            <label>
              <span>{t.role}</span>
              <select name="role">
                <option>Songwriter</option>
                <option>Producer</option>
                <option>Rapper</option>
                <option>Vocalist</option>
              </select>
            </label>
          )}

          <div className="formGrid">
            <label><span>Name</span><input name="name" required /></label>
            <label><span>{t.email}</span><input name="email" type="email" required /></label>
          </div>

          <label><span>Social / Website</span><input name="social" placeholder="@ / https://" /></label>
          <label><span>{t.message}</span><textarea name="message" rows={5} required /></label>

          <button className="submit" type="submit"><span>{t.send}</span><b>↗</b></button>
        </form>

        <p className="note">{t.note}</p>
      </section>

      <footer>
        <div className="logo"><span className="logoWord">ICONUP</span><span className="logoMark" aria-hidden="true" /></div>
        <p>IconUp Agency · 2026</p>
        <p>{t.legal}</p>
      </footer>
    </main>
  );
}
