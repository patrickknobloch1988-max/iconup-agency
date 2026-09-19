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
        { kicker: "Artist", title: "IICII", text: "Digitaler Artist. Reale Identität. Eine Marke, die über Musik hinaus wächst.", meta: "ICONUP ROSTER" },
        { kicker: "Brand Building", title: "FROM DIGITAL TO REAL.", text: "Aus Reichweite wird Identität. Aus Identität wird eine Marke.", meta: "ICONUP METHOD" },
        { kicker: "Current Focus", title: "MUSIC × CULTURE × BRAND", text: "Wir verbinden Musik, Content und reale Touchpoints zu einem System.", meta: "2026" }
      ]
    : [
        { kicker: "Artist", title: "IICII", text: "Digital artist. Real identity. A brand built beyond music.", meta: "ICONUP ROSTER" },
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
    <main id="main-content">
      <header className="header">
        <div className="headerInner">
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
        </div>
      </header>

      <section className="hero heroSliderOnly siteContainerSection" id="top">
        <div className="heroSlider" aria-label="IconUp highlights">
          <div className="heroSlideVisual">
            <div className="heroSlideTop">
              <span>{heroSlides[activeSlide].kicker}</span>
              <span>{String(activeSlide + 1).padStart(2, "0")} / 03</span>
            </div>
            {activeSlide === 0 && (
              <div className="heroArtistImage" aria-hidden="true">
                <img src="/iicii.png" alt="" />
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

      

      <section className="humanSection siteContainerSection">
        <p className="humanEyebrow">{language === "de" ? "HUMAN MADE" : "HUMAN MADE"}</p>
        <h2>{language === "de" ? "VON MENSCHEN GESCHAFFEN." : "MADE BY PEOPLE."}</h2>
        <p>
          {language === "de"
            ? "Unsere Songs beginnen nicht bei einem Algorithmus, sondern bei echten Geschichten. Die Songtexte werden von Menschen geschrieben und tragen reale Emotionen, Erfahrungen und Perspektiven in sich."
            : "Our songs don't begin with an algorithm, but with real stories. Lyrics are written by people and carry real emotions, experiences and perspectives."}
        </p>
      </section>

      <section className="buildSection siteContainerSection" id="build">
        <p className="buildEyebrow">{language === "de" ? "WAS WIR MACHEN" : "WHAT WE DO"}</p>
        <h2>{language === "de" ? <>VON DER IDEE<br />BIS ZUM RELEASE.</> : <>FROM IDEA<br />TO RELEASE.</>}</h2>
        <div className="buildGrid">
          {[
            ["01", language === "de" ? "ERSTELLEN" : "CREATE", language === "de" ? "ARTISTENTWICKLUNG" : "ARTIST DEVELOPMENT", language === "de" ? "Wir entwickeln Sound, Identität und Positionierung zu einem klaren Artist-Projekt." : "We shape sound, identity and positioning into a distinctive artist project."],
            ["02", language === "de" ? "STEUERN" : "MANAGE", "MANAGEMENT", language === "de" ? "Wir steuern Strategie, Planung und Partnerschaften rund um Artist und Marke." : "We manage strategy, planning and partnerships around artist and brand."],
            ["03", language === "de" ? "UMSETZEN" : "PRODUCE", language === "de" ? "CONTENT & PRODUKTION" : "CONTENT & PRODUCTION", language === "de" ? "Wir produzieren Content, Visuals und Kampagnen passend zur Artist-Identität." : "We produce content, visuals and campaigns built around the artist identity."],
            ["04", language === "de" ? "VERÖFFENTLICHEN" : "RELEASE", "RELEASE", language === "de" ? "Wir planen Release, Distribution und Rollout von Musik und Content." : "We plan releases, distribution and rollout across music and content."]
          ].map(([number, eyebrow, title, text]) => (
            <article className="buildCard" key={number}>
              <p className="buildCardEyebrow">{eyebrow}</p>
              <h3>{title}</h3>
              <p className="buildCardText">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="artists section siteContainerSection" id="artists">
        <div className="artistsIntro">
          <span className="artistsTriangle" aria-hidden="true" />
          <p className="rosterEyebrow">ROSTER</p>
          <h2 className="artistsTitle">ARTISTS</h2>
        </div>

        <div className="artistGrid">
          {[
            {
              name: "IICII",
              image: "/iicii.png",
              visualClass: "artistVisualMav",
              type: t.artistType,
              genre: "US Drill · Afropop",
              description:
                language === "de"
                  ? "Icy Drill, klare Ästhetik und digitale Identität verbinden Sound und visuelle Welt."
                  : "Icy drill, a clear aesthetic and digital identity connect sound and visual world.",
            },
            {
              name: "EYNI",
              image: "https://raw.githubusercontent.com/patrickknobloch1988-max/iconup-agency/main/public/file_00000000db4c81f4b2f9c277ebe1117c.png",
              visualClass: "artistVisualEyni",
              type: "Artist · Vocalist",
              genre: "Afropop · Urban Pop",
              description:
                language === "de"
                  ? "Dunkle, warme Vocals treffen auf modernen Afropop und urbane Ästhetik."
                  : "Dark, warm vocals meet modern Afropop and an urban aesthetic.",
            },
            {
              name: "MAV+RICH",
              image: "/file_00000000572c81f4b3b311307322a3b4.png",
              visualClass: "artistVisualMavRich",
              type: "Artist",
              genre: "Deutschrap · French Rap",
              description:
                language === "de"
                  ? "Deutsch-französischer Street-Rap verbindet Melodie, Identität und eine markante visuelle Welt."
                  : "German-French street rap connects melody, identity and a distinctive visual world.",
            },
          ].map((artist, index) => (
            <article className="artistCard artistCardFeature" key={artist.name}>
              <div className={`artistVisual ${artist.visualClass}`}>
                <img src={artist.image} alt={artist.name} />
                <div className="artistCardOverlay" />
                <span className="artistIndex">{String(index + 1).padStart(2, "0")}</span>
                <div className="artistCardContent">
                  <span className="artistType">{artist.type}</span>
                  <h3>{artist.name}</h3>
                  <p className="artistGenre">{artist.genre}</p>
                  <p className="artistDescription">{artist.description}</p>
                  <div className="artistSocials" aria-label={`${artist.name} platforms`}>
                    <span className="artistSocial" title="Spotify" aria-label="Spotify"><i className="fa-brands fa-spotify" aria-hidden="true" /></span>
                    <span className="artistSocial" title="Apple Music" aria-label="Apple Music"><i className="fa-brands fa-apple" aria-hidden="true" /></span>
                    <span className="artistSocial" title="Instagram" aria-label="Instagram"><i className="fa-brands fa-instagram" aria-hidden="true" /></span>
                    <span className="artistSocial" title="TikTok" aria-label="TikTok"><i className="fa-brands fa-tiktok" aria-hidden="true" /></span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      

      <footer className="siteFooter" aria-label="Footer">
        <span className="footerTriangle" aria-hidden="true" />
        <div className="footerContact">
          <p className="footerEyebrow">{language === "de" ? "KONTAKT" : "CONTACT"}</p>
          <h2>{language === "de" ? <>LASS UNS <em>VERBINDEN.</em></> : <>LET’S <em>CONNECT.</em></>}</h2>
          <p className="footerLead">
            {language === "de"
              ? "Offen für Gespräche, Beratung und kreative Zusammenarbeit — von Video- und Content-Produktion bis zu CapCut-Templates. Auch für Kooperationen, Labels, Sync und Presse."
              : "Open to conversations, consulting and creative collaboration — from video and content production to CapCut templates. Also for collaborations, labels, sync and press."}
          </p>
          <a className="footerContactButton" href="mailto:hello@iconup.agency">
            {language === "de" ? "NACHRICHT SENDEN" : "SEND A MESSAGE"} <span>↗</span>
          </a>
          <p className="footerDirect"><span>{language === "de" ? "Direkter Kontakt" : "Direct contact"}</span> · <a href="mailto:hello@iconup.agency">hello@iconup.agency</a></p>
        </div>
        <div className="footerBottom">
          <span>© 2026 ICON/UP AGENCY</span>
          <nav className="footerLegal" aria-label={language === "de" ? "Rechtliches" : "Legal"}><a href="/impressum">Impressum</a></nav>
        </div>
      </footer>
    </main>
  );
}
