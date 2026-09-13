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
      "Wir machen aus digitalen Artists Marken, die bleiben.",
    heroCta: "Mit uns arbeiten",
    stats: [["1", "Artist"], ["250K+", "Streams"], ["5M+", "Social Views"], ["3", "Releases"]],
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
      "We turn digital artists into brands that last.",
    heroCta: "Work with us",
    stats: [["1", "Artist"], ["250K+", "Streams"], ["5M+", "Social Views"], ["3", "Releases"]],
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
  const [activeSlide, setActiveSlide] = useState(0);
  const t = content[language];
  const heroSlides = language === "de"
    ? [
        { kicker: "Artist", title: "MAV+RICH", text: "Digitaler Artist. Reale Identität. Eine Marke, die über Musik hinaus wächst.", meta: "ICONUP ROSTER" },
        { kicker: "Brand Building", title: "FROM DIGITAL TO REAL.", text: "Aus Reichweite wird Identität. Aus Identität wird eine Marke.", meta: "ICONUP METHOD" },
        { kicker: "Current Focus", title: "MUSIC × CULTURE × BRAND", text: "Wir verbinden Musik, Content und reale Touchpoints zu einem System.", meta: "2026" }
      ]
    : [
        { kicker: "Artist", title: "MAV+RICH", text: "Digital artist. Real identity. A brand built beyond music.", meta: "ICONUP ROSTER" },
        { kicker: "Brand Building", title: "FROM DIGITAL TO REAL.", text: "Attention becomes identity. Identity becomes a real brand.", meta: "ICONUP METHOD" },
        { kicker: "Current Focus", title: "MUSIC × CULTURE × BRAND", text: "We connect music, content and real-world touchpoints into one system.", meta: "2026" }
      ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % 3);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

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
        <div className="heroMain">
          <div className="heroCopy">
            <div className="eyebrow"><span />{t.heroTop}</div>
            <h1>
              <span className="heroLineOne">DIGITAL {t.hero2}</span>
              <span className="outline heroLineTwo">{t.hero3}</span>
            </h1>
            <div className="heroBottom">
              <p>{t.heroText}</p>
              <a className="roundLink" href="#contact"><span>{t.heroCta}</span><b>↘</b></a>
            </div>
          </div>

          <div className="heroSlider" aria-label="IconUp highlights">
            <div className="heroSlideVisual">
              <div className="heroSlideTop">
                <span>{heroSlides[activeSlide].kicker}</span>
                <span>{String(activeSlide + 1).padStart(2, "0")} / 03</span>
              </div>
              <div className="heroSlideBody">
                <p className="heroSlideMeta">{heroSlides[activeSlide].meta}</p>
                <h2>{heroSlides[activeSlide].title}</h2>
                <p>{heroSlides[activeSlide].text}</p>
              </div>
              <div className="heroSlideControls">
                <div className="heroSlideProgress">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      className={index === activeSlide ? "active" : ""}
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="heroSlideArrows">
                  <button onClick={() => setActiveSlide((activeSlide + 2) % 3)} aria-label="Previous slide">←</button>
                  <button onClick={() => setActiveSlide((activeSlide + 1) % 3)} aria-label="Next slide">→</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="heroStats">
          {t.stats.map(([number, label]) => (
            <div className="heroStat" key={number}>
              <div className="kpiNumber">{number}</div>
              <div className="kpiLabel">{label}</div>
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

        <div className="contactCta">
          <a className="emailCta" href="mailto:hello@iconup.agency">
            <span>{language === "de" ? "E-Mail schreiben" : "Send an email"}</span><b>↗</b>
          </a>
          <a className="contactEmail" href="mailto:hello@iconup.agency">hello@iconup.agency</a>
        </div>

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
