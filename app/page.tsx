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
    stats: [["3", "Artists"], ["1M+", "Streams"], ["10M", "Social Views"], ["3", "Releases"]],
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
    stats: [["3", "Artists"], ["1M+", "Streams"], ["10M", "Social Views"], ["3", "Releases"]],
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
        <a className="logo" href="#top"><span className="logoWord"><span className="logoIcon">ICON</span><span className="logoSlash">/</span><span className="logoUp">UP</span></span><span className="logoMark" aria-hidden="true" /></a>
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

      <section className="hero heroSliderOnly" id="top">
        <div className="heroSlider" aria-label="IconUp highlights">
          <div className="heroSlideVisual">
            <div className="heroSlideTop">
              <span>{heroSlides[activeSlide].kicker}</span>
              <span>{String(activeSlide + 1).padStart(2, "0")} / 03</span>
            </div>
            {activeSlide === 0 && (
              <div className="heroArtistImage" aria-hidden="true">
                <img src="https://raw.githubusercontent.com/patrickknobloch1988-max/iconup-agency/main/public/file_00000000572c81f4b3b311307322a3b4.png" alt="" />
              </div>
            )}
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
          <h2 className="artistsTitle"><span>{language === "de" ? "DIE ARTISTS HINTER " : "THE ARTISTS BEHIND "}</span><span className="logo rosterLogo"><span className="logoWord"><span className="logoIcon">ICON</span><span className="logoSlash">/</span><span className="logoUp">UP</span></span><span className="logoMark" aria-hidden="true" /></span></h2>
          <p className="artistsText">{t.artistsText}</p>
        </div>

        <div className="artistGrid">
          <article className="artistCard artistCardFeature">
            <div className="artistVisual artistVisualMav">
              <img src="https://raw.githubusercontent.com/patrickknobloch1988-max/iconup-agency/main/public/file_00000000572c81f4b3b311307322a3b4.png" alt="MAV+RICH" />
              <div className="artistCardOverlay" />
              <span className="artistIndex">01</span>
              <div className="artistCardContent">
                <span className="artistType">{t.artistType}</span>
                <h3>MAV+RICH</h3>
                <p className="artistGenre">{language === "de" ? "Deutschrap · French Rap" : "German Rap · French Rap"}</p>
                <p className="artistDescription">
                  {language === "de"
                    ? "Straße, Melodie und Identität verbinden deutschen und französischen Rap."
                    : "Street energy, melody and visual identity connect German and French rap."}
                </p>
                <div className="artistSocials" aria-label="MAV+RICH platforms">
                  <span className="artistSocial" title="Spotify" aria-label="Spotify">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.58 14.45a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.1-10.55-1.15a.75.75 0 1 1-.33-1.46c4.57-1.04 8.5-.59 11.66 1.34a.75.75 0 0 1 .25 1.02Zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.23-1.98-8.16-2.55-11.98-1.39a.94.94 0 1 1-.55-1.8c4.37-1.33 9.8-.69 13.51 1.58.44.27.58.85.31 1.3Zm.13-3.4C14.3 7.48 7.9 7.27 4.2 8.39a1.12 1.12 0 1 1-.65-2.14c4.25-1.29 11.32-1.04 15.77 1.59a1.12 1.12 0 0 1-1.14 1.94Z"/></svg>
                  </span>
                  <span className="artistSocial" title="Apple Music" aria-label="Apple Music">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.9 3.2c-.08.6-.35 1.15-.78 1.59-.43.45-1 .73-1.61.78-.08-.57.1-1.16.49-1.6.4-.47.96-.76 1.57-.82.12 0 .23.02.33.05ZM19.4 16.9c-.45 1.03-.98 1.98-1.64 2.85-.84 1.08-1.73 1.62-2.67 1.64-.62 0-1.37-.36-2.24-.36-.9 0-1.67.35-2.31.36-.91.03-1.84-.53-2.76-1.66-1.98-2.42-3.28-6.63-1.39-9.52a4.38 4.38 0 0 1 3.71-2.2c.69 0 1.68.4 2.23.4.52 0 1.52-.48 2.55-.41.44.02 1.67.17 2.5 1.36a4.08 4.08 0 0 0-2.03 3.69 4 4 0 0 0 2.52 3.67c-.13.38-.29.78-.47 1.18Z"/></svg>
                  </span>
                  <span className="artistSocial" title="Instagram" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm-.18 2A3.02 3.02 0 0 0 4 7.02v9.96A3.02 3.02 0 0 0 7.02 20h9.96A3.02 3.02 0 0 0 20 16.98V7.02A3.02 3.02 0 0 0 16.98 4H7.02ZM17.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>
                  </span>
                  <span className="artistSocial" title="TikTok" aria-label="TikTok">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.8 2c.2 1.7 1.13 2.82 2.77 3.38.52.18 1.05.25 1.43.25v3.1a7.3 7.3 0 0 1-4.2-1.3v7.02a6.07 6.07 0 1 1-5.22-6.02c.38-.05.75-.06 1.12-.03v3.18a3 3 0 1 0 1.1 2.32V2h3Z"/></svg>
                  </span>
                </div>
              </div>
            </div>
          </article>

          <article className="artistCard artistCardFeature">
            <div className="artistVisual artistVisualEyni">
              <img src="https://raw.githubusercontent.com/patrickknobloch1988-max/iconup-agency/main/public/file_00000000db4c81f4b2f9c277ebe1117c.png" alt="EYNI" />
              <div className="artistCardOverlay" />
              <span className="artistIndex">02</span>
              <div className="artistCardContent">
                <span className="artistType">{language === "de" ? "Artist · Vocalist" : "Artist · Vocalist"}</span>
                <h3>EYNI</h3>
                <p className="artistGenre">{language === "de" ? "Afropop · Urban Pop" : "Afropop · Urban Pop"}</p>
                <p className="artistDescription">
                  {language === "de"
                    ? "Dunkle, warme Vocals treffen auf modernen Afropop und urbane Ästhetik."
                    : "Dark, warm vocals meet modern Afropop and an urban aesthetic."}
                </p>
                <div className="artistSocials" aria-label="EYNI platforms">
                  <span className="artistSocial" title="Spotify" aria-label="Spotify">SP</span>
                  <span className="artistSocial" title="Apple Music" aria-label="Apple Music">AM</span>
                  <span className="artistSocial" title="Instagram" aria-label="Instagram">IG</span>
                  <span className="artistSocial" title="TikTok" aria-label="TikTok">TT</span>
                </div>
              </div>
            </div>
          </article>        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contactSimple">
          <p className="contactEyebrow">{language === "de" ? "KONTAKT" : "CONTACT"}</p>
          <h2>{language === "de" ? "LASS UNS REDEN." : "LET'S TALK."}</h2>
          <p className="contactIntro">
            {language === "de"
              ? "Für Artists, Projekte und Kooperationen."
              : "For artists, projects and collaborations."}
          </p>
          <a className="contactEmailHero" href="mailto:hello@iconup.agency">hello@iconup.agency</a>
        </div>
      </section>

      <footer className="siteFooter">
        <div className="footerTop">
          <div className="footerBrand">
            <div className="logo"><span className="logoWord"><span className="logoIcon">ICON</span><span className="logoSlash">/</span><span className="logoUp">UP</span></span><span className="logoMark" aria-hidden="true" /></div>
            <p>{language === "de" ? "Wir machen aus digitalen Artists reale Marken." : "Turning digital artists into real brands."}</p>
          </div>
          <nav className="footerNav" aria-label="Footer">
            <a href="#services">{language === "de" ? "Unsere Aufgabe" : "What we do"}</a>
            <a href="#artists">{language === "de" ? "Artists" : "Artists"}</a>
            <a href="#contact">{language === "de" ? "Kontakt" : "Contact"}</a>
          </nav>
        </div>
        <div className="footerBottom">
          <span>© 2026 ICON/UP AGENCY</span>
          <span>{t.legal}</span>
        </div>
      </footer>
    </main>
  );
}
