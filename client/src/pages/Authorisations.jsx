import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Compass, Users } from "lucide-react";
import "../styles/Authorisations.css";

const accreditationData = [
  {
    id: "ukas",
    variant: "primary",
    logos: [
      {
        src: "images/ukas-logo.jpg",
        alt: "UKAS Logo",
        style: { height: "140px", maxWidth: "340px" },
      },
    ],
    title: "United Kingdom Accreditation Service (UKAS)",
    description:
      "UKAS is the UK\'s national accreditation body, confirming that certification, testing, inspection, and calibration providers operate with impartial governance and technical competence.",
    bullets: [
      "Government-recognised national authority",
      "Supports ISO 9001, 14001, 45001, 27001, 22000 and more",
      "Witnessed audits and ongoing surveillance protect certificate integrity",
    ],
    ctaLabel: "Learn More",
    ctaHref: "/authorisations/ukas",
  },
  {
    id: "uaf",
    variant: "light",
    logos: [
      {
        src: "https://dashboard.uafaccreditation.org/media/logos/uaf_logo.png",
        alt: "UAF Logo",
        style: { height: "140px" },
      },
    ],
    title: "United Accreditation Foundation (UAF)",
    description:
      "UAF accredits management system certification bodies around the world, ensuring impartiality, competence, and consistent audit delivery across industries.",
    bullets: [
      "Focus on impartial governance and competence management",
      "Applicable to organisations of all sizes and sectors",
      "Annual surveillance and periodic re-assessment",
    ],
    ctaLabel: "Learn More",
    ctaHref: "/authorisations/uaf",
  },
  {
    id: "egac",
    variant: "light",
    logos: [
      {
        src: "/images/egaclogo.jpeg",
        alt: "EGAC Logo",
        style: { height: "140px", maxWidth: "340px" },
      },
    ],
    title: "Egyptian Accreditation Council (EGAC)",
    description:
      "EGAC, Egypt\'s national accreditation body, aligns with ISO/IEC 17011 to oversee certification bodies and laboratories, improving confidence in certificates across the region.",
    bullets: [
      "Peer-recognised national accreditation programme",
      "Regular witnessed assessments and performance reviews",
      "Supports management system, product, and personnel certification",
    ],
    ctaLabel: "Learn More",
    ctaHref: "/authorisations/egac",
  },
  {
    id: "ias",
    variant: "light",
    logos: [
      {
        src: "/images/iaslogo.png",
        alt: "IAS Logo",
        style: { height: "140px", maxWidth: "340px" },
      },
    ],
    title: "International Accreditation Service (IAS)",
    description:
      "IAS provides global accreditation for certification bodies, focusing on impartiality, technical competence, and witnessed audit oversight.",
    bullets: [
      "Worldwide recognition across multiple sectors",
      "Structured continual improvement through surveillance",
      "Enhances credibility with regulators and customers",
    ],
    ctaLabel: "Learn More",
    ctaHref: "/authorisations/ias",
  },
  {
    id: "fssc22000",
    variant: "accent",
    logos: [
      {
        src: "/images/fssc22000.png",
        alt: "FSSC 22000 Logo",
        style: { height: "140px" },
      },
    ],
    title: "FSSC 22000 Certification Scheme",
    description:
      "FSSC 22000 combines ISO 22000, sector-specific prerequisite programmes, and additional scheme requirements to deliver a GFSI-recognised food safety management system.",
    bullets: [
      "Built on ISO 22000 with ISO/TS 22002-x PRPs",
      "Trusted by retailers, regulators, and global brands",
      "Covers food manufacturing, packaging, storage, and transport",
    ],
    ctaLabel: "Learn More",
    ctaHref: "/authorisations/fssc-22000",
  },
];

const featureHighlights = [
  {
    icon: ShieldCheck,
    title: "Impartial assurance",
    text: "Each accreditation body verifies that certification decisions remain independent and free from conflicts of interest.",
  },
  {
    icon: Compass,
    title: "Competence governance",
    text: "Witnessed audits, competence matrices, and continual oversight ensure technical expertise is maintained.",
  },
  {
    icon: Users,
    title: "Market recognition",
    text: "Accredited certifications enjoy higher acceptance from regulators, procurement teams, and global partners.",
  },
];

const Accreditation = () => {
  return (
    <div className="authorisations-page">
      <header className="authorisations-hero">
        <div className="authorisations-hero-overlay" />
        <div className="authorisations-hero-inner">
          <h1> Authorisations</h1>
          <p>
            Certigence partners with internationally recognised accreditation bodies, giving your certificates trusted
            value in every market.
          </p>
          <div className="authorisations-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Authorisations</span>
          </div>
        </div>
      </header>

      <main className="authorisations-main">
        <section className="authorisations-intro">
          <h2>Why accreditation matters</h2>
          <p>
            Accreditation confirms that certifying organisations operate with impartial governance, competent personnel,
            and consistent audit delivery. Working with accredited partners gives your stakeholders confidence in every
            certificate we issue.
          </p>
          <div className="authorisations-feature-grid">
            {featureHighlights.map((feature) => (
              <article key={feature.title} className="authorisations-feature-card">
                <div className="authorisations-feature-icon">
                  <feature.icon size={24} strokeWidth={1.6} />
                </div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="authorisations-grid">
          {accreditationData.map((item) => (
            <article key={item.id} id={item.id} className={`authorisations-card ${item.variant}`}>
              {item.logos && (
                <div className="authorisations-logo-row">
                  {item.logos.map((logo, index) => (
                    <figure key={index} className="authorisations-logo-card">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        style={logo.style}
                        loading="lazy"
                        decoding="async"
                        draggable="false"
                      />
                    </figure>
                  ))}
                </div>
              )}

              <h3 className="authorisations-card-title">{item.title}</h3>
              <p className="authorisations-card-text">{item.description}</p>

              <ul className="authorisations-list">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>

              <div className="authorisations-card-actions">
                <Link to={item.ctaHref} className="authorisations-cta">
                  {item.ctaLabel} <ArrowRight size={16} strokeWidth={2} />
                </Link>
              </div>
            </article>
          ))}
        </section>
        <section className="authorisations-country-selector">
          
        </section>
      </main>
    </div>
  );
};

export default Accreditation;
