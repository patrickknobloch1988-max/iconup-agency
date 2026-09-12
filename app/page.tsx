"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Language = "de" | "en";

const copy = {
  de: {
    nav: { about: "Ansatz", work: "Was wir bauen", contact: "Kontakt" },
    heroEyebrow: "Artist Brand Development",
    heroLine1: "DIGITAL",
    heroLine2: "IST NUR",
    heroLine3: "DER ANFANG.",
    heroText:
      "IconUp macht aus digitalen Artists reale Marken — mit Identität, Strategie, Creative Direction und einer Vision, die über Plattformen hinausgeht.",
    heroCta: "Mit uns arbeiten",
    statementKicker: "Unsere Aufgabe",
    statement:
      "Reichweite kann verschwinden. Eine starke Marke bleibt.",
    statementText:
      "Wir übersetzen digitale Aufmerksamkeit in eine erkennbare Identität, eine echte Community und ein Artist-Projekt mit langfristigem Wert.",
    bridgeLabel: "Von digital zu real",
    bridge1: "Aufmerksamkeit",
    bridge2: "Identität",
    bridge3: "Community",
    bridge4: "Marke",
    principleKicker: "IconUp Prinzip",
    principleTitle: "NICHT FÜR DEN ALGORITHMUS. FÜR DIE MARKE.",
    principleText:
      "Plattformen, Trends und Formate verändern sich. Wir bauen Artists so auf, dass ihr Wert nicht an einer einzelnen Plattform hängt.",
    servicesKicker: "Was wir bauen",
    servicesTitle: "EIN SYSTEM RUND UM DEN ARTIST.",
    service1: ["01", "Positionierung", "Eine klare Identität, Haltung und Richtung."],
    service2: ["02", "Creative Direction", "Eine visuelle Welt, die wiedererkannt wird."],
    service3: ["03", "Audience", "Aus Reichweite wird Beziehung und Community."],
    service4: ["04", "Expansion", "Kooperationen, Produkte und reale Touchpoints."],
    contactKicker: "Kontakt",
    contactTitle: "LET'S BUILD SOMETHING REAL.",
    contactText:
      "Du möchtest mit IconUp arbeiten oder einen unserer Artists anfragen? Schreib uns.",
    formType: "Anfrage",
    formTypes: {
      talent: "Talent / Zusammenarbeit",
      booking: "Booking",
      brand: "Brand & Kooperation",
      business: "Business",
      press: "Presse & Media",
      other: "Sonstiges"
    },
    role: "Du bist",
    roles: {
      songwriter: "Songwriter",
      producer: "Producer",
      rapper: "Rapper",
      vocalist: "Vocalist"
    },
    name: "Name",
    email: "E-Mail",
    social: "Social / Website",
    message: "Nachricht",
    send: "Nachricht senden",
    note:
      "Songwriter · Producer · Rapper · Vocalist — sowie Booking-, Brand- und Business-Anfragen.",
    footer: "IconUp Agency",
    legal: "Impressum · Datenschutz"
  },
  en: {
    nav: { about: "Approach", work: "What we build", contact: "Contact" },
    heroEyebrow: "Artist Brand Development",
    heroLine1: "DIGITAL",
    heroLine2: "IS ONLY",
    heroLine3: "THE START.",
    heroText:
      "IconUp turns digital artists into real brands — through identity, strategy, creative direction and a vision built beyond platforms.",
    heroCta: "Work with us",
    statementKicker: "Our mission",
    statement:
      "Attention can disappear. A strong brand stays.",
    statementText:
      "We turn digital attention into a recognizable identity, a real community and an artist project with long-term value.",
    bridgeLabel: "From digital to real",
    bridge1: "Attention",
    bridge2: "Identity",
    bridge3: "Community",
    bridge4: "Brand",
    principleKicker: "The IconUp principle",
    principleTitle: "NOT FOR THE ALGORITHM. FOR THE BRAND.",
    principleText:
      "Platforms, trends and formats change. We build artists whose value is never dependent on one platform.",
    servicesKicker: "What we build",
    servicesTitle: "ONE SYSTEM AROUND THE ARTIST.",
    service1: ["01", "Positioning", "A clear identity, attitude and direction."],
    service2: ["02", "Creative Direction", "A visual world people recognize."],
    service3: ["03", "Audience", "Turning reach into relationships and community."],
    service4: ["04", "Expansion", "Partnerships, products and real-world touchpoints."],
    contactKicker: "Contact",
    contactTitle: "LET'S BUILD SOMETHING REAL.",
    contactText:
      "Want to work with IconUp or enquire about one of our artists? Get in touch.",
    formType: "Enquiry",
    formTypes: {
      talent: "Talent / Collaboration",
      booking: "Booking",
      brand: "Brand & Cooperation",
      business: "Business",
      press: "Press & Media",
      other: "Other"
    },
    role: "You are",
    roles: {
      songwriter: "Songwriter",
      producer: "Producer",
      rapper: "Rapper",
      vocalist: "Vocalist"
    },
    name: "Name",
    email: "Email",
    social: "Social / Website",
    message: "Message",
    send: "Send message",
    note:
      "Songwriters · Producers · Rappers · Vocalists — plus booking, brand and business enquiries.",
    footer: "IconUp Agency",
    legal: "Legal · Privacy"
  }
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("de");
  const [type, setType] = useState("talent");
  const t = copy[language];

  useEffect(() => {
    const saved = window.localStorage.getItem("iconup-language");
    if (saved === "de" || saved === "en") setLanguage(saved);
  }, []);

  const switchLanguage = (next: Language) => {
    setLanguage(next);
    window.localStorage.setItem("iconup-language", next);
    document.documentElement.lang = next;
  };

  const subject = useMemo(
    () => (language === "de" ? "IconUp Anfrage" : "IconUp Enquiry"),
    [language]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `${t.formType}: ${data.get("type")}`,
      type === "talent" ? `${t.role}: ${data.get("role")}` : "",
      `${t.name}: ${data.get("name")}`,
      `${t.email}: ${data.get("email")}`,
      `${t.social}: ${data.get("social")}`,
      "",
      String(data.get("message") || "")
    ].filter(Boolean).join("\n");

    window.location.href = `mailto:hello@iconup.agency?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main>
      <header className="header">
        <a className="logo" href="#top" aria-label="IconUp home">
          ICON<span>UP</span><sup>↗</sup>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="#approach">{t.nav.about}</a>
          <a href="#build">{t.nav.work}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="language" aria-label="Language">
          <button className={language === "de" ? "active" : ""} onClick={() => switchLanguage("de")}>DE</button>
          <span>/</span>
          <button className={language === "en" ? "active" : ""} onClick={() => switchLanguage("en")}>EN</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span />{t.heroEyebrow}</div>
        <h1>
          <span>{t.heroLine1}</span>
          <span>{t.heroLine2}</span>
          <span className="outline">{t.heroLine3}</span>
        </h1>
        <div className="hero-bottom">
          <p>{t.heroText}</p>
          <a className="round-link" href="#contact" aria-label={t.heroCta}>
            <span>{t.heroCta}</span>
            <b>↘</b>
          </a>
        </div>
        <div className="scroll-mark">SCROLL ↓</div>
      </section>

      <section className="statement section" id="approach">
        <p className="section-kicker">{t.statementKicker}</p>
        <h2>{t.statement}</h2>
        <div className="statement-copy">
          <span className="big-arrow">↗</span>
          <p>{t.statementText}</p>
        </div>
      </section>

      <section className="bridge">
        <div className="bridge-label">{t.bridgeLabel}</div>
        <div className="bridge-flow">
          <span>{t.bridge1}</span><b>→</b>
          <span>{t.bridge2}</span><b>→</b>
          <span>{t.bridge3}</span><b>→</b>
          <span className="filled">{t.bridge4}</span>
        </div>
      </section>

      <section className="principle section">
        <p className="section-kicker light">{t.principleKicker}</p>
        <h2>{t.principleTitle}</h2>
        <p className="principle-copy">{t.principleText}</p>
      </section>

      <section className="services section" id="build">
        <p className="section-kicker">{t.servicesKicker}</p>
        <h2>{t.servicesTitle}</h2>
        <div className="service-list">
          {[t.service1, t.service2, t.service3, t.service4].map((item) => (
            <article className="service-row" key={item[0]}>
              <span>{item[0]}</span>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
              <b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-head">
          <p className="section-kicker light">{t.contactKicker}</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>{t.formType}</span>
            <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
              {Object.entries(t.formTypes).map(([value, label]) => (
                <option value={value} key={value}>{label}</option>
              ))}
            </select>
          </label>

          {type === "talent" && (
            <label>
              <span>{t.role}</span>
              <select name="role">
                {Object.entries(t.roles).map(([value, label]) => (
                  <option value={value} key={value}>{label}</option>
                ))}
              </select>
            </label>
          )}

          <div className="form-grid">
            <label>
              <span>{t.name}</span>
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              <span>{t.email}</span>
              <input name="email" type="email" required autoComplete="email" />
            </label>
          </div>

          <label>
            <span>{t.social}</span>
            <input name="social" placeholder="@ / https://" />
          </label>

          <label>
            <span>{t.message}</span>
            <textarea name="message" rows={5} required />
          </label>

          <button className="submit" type="submit">
            <span>{t.send}</span><b>↗</b>
          </button>
        </form>

        <p className="talent-note">{t.note}</p>
      </section>

      <footer>
        <div className="logo footer-logo">ICON<span>UP</span><sup>↗</sup></div>
        <p>{t.footer} · 2026</p>
        <p>{t.legal}</p>
      </footer>
    </main>
  );
}
