import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Authorisations.css"; // Import page-specific CSS

// Reusable AccreditationCard Component
function AccreditationCard({ id, logos, text, variant = "light", title, list, ctaLabel, ctaHref, external = false }) {
  return (
    <motion.section
      id={id}
      className={`accreditation-box ${variant}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Logos Section */}
      {logos && logos.length > 0 && (
        <div className="logos">
          {logos.map((logo, index) => (
            <motion.figure
              className="logo-card"
              key={index}
              aria-label={logo.alt || title || "Accreditation logo"}
              whileHover={{ scale: 1.08, rotate: 1.5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                className="logo-image"
                src={logo.src}
                alt={logo.alt || title || "Accreditation logo"}
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            </motion.figure>
          ))}
        </div>
      )}

      {/* Title if provided */}
      {title && <h3 className="sub-title">{title}</h3>}

      {/* Text */}
      <motion.p
        className="accreditation-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
      >
        {text}
      </motion.p>

      {/* Accreditation List if provided */}
      {list && (
        <ul className="accreditation-list">
          {list.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      )}

      {/* CTA Button (optional) */}
      {ctaLabel && ctaHref && (
        <div className="learn-more-button">
          {external ? (
            <a href={ctaHref} target="_blank" rel="noopener noreferrer">{ctaLabel}</a>
          ) : ctaHref.startsWith('#') ? (
            <a href={ctaHref}>{ctaLabel}</a>
          ) : (
            <Link to={ctaHref}>{ctaLabel}</Link>
          )}
        </div>
      )}

    </motion.section>
  );
}

// (The rest of your code remains the same)

export default function Accreditation() {
  return (
    <div className="accreditation">
      {/* Hero Section with background and text restored */}
      <div className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Authorisations</h1>
          <p>
            <Link to="/">Home</Link> <span>//</span> Authorisations
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="title"
        >
          Recognised Accreditation Bodies
        </motion.h2>
        <div className="underline"></div>

        {/* Introductory blurb */}
        <motion.p
          className="page-intro"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          We work with internationally recognised accreditation bodies to ensure our certifications are impartial, credible, and widely accepted. These authorisations reflect our commitment to quality and give your customers and stakeholders confidence in every certificate we issue.
        </motion.p>

        

        {/* Accreditation Block 0 - UKAS (About) */}
        <AccreditationCard
          id="ukas"
          variant="accent"
          logos={[
            {
              src: "images/ukas-logo.jpg",
              alt: "UKAS Logo",
            },
          ]}
          title="United Kingdom Accreditation Service (UKAS)"
          text="UKAS is the United Kingdom’s National Accreditation Body, responsible for assessing and accrediting organisations that provide certification, testing, inspection, and calibration services. UKAS accreditation demonstrates competence, impartiality, and performance capability, giving confidence that certificates issued by accredited bodies are recognised and respected globally."
          list={[
            "Assesses certification bodies for competence and impartiality",
            "Recognised by the UK government and internationally",
            "Supports standards such as ISO 9001, 14001, 45001, 27001, 22000",
            "Enhances trust in certificates and audit outcomes",
          ]}
          ctaLabel="Learn More"
          ctaHref="/authorisations/ukas"
        />
        

        {/* Accreditation Block 1 - Zeppy */}
        <AccreditationCard
          variant="light"
          logos={[
            {
              src: "https://dashboard.uafaccreditation.org/media/logos/uaf_logo.png",
              alt: "UAF Logo",
            },
          ]}
          title="United Accreditation Foundation (UAF)"
          text="Certigence delivers ISO certifications through a UAF-accredited framework as an authorised franchise partner. UAF accreditation adds assurance that our certification processes are competent, impartial, and consistently managed across industries and sites."
          list={[
            "Accredits management system certification bodies",
            "Focus on impartiality, competence, and consistency",
            "Certificates supported by international recognition",
            "Applicable across diverse sectors and sizes",
            "Ongoing surveillance and periodic re-assessment",
          ]}
          
          ctaLabel="Learn More"
          ctaHref="/authorisations/uaf"
        />

        {/* Accreditation Block 2 - Otabu */}
        <AccreditationCard
          variant="light"
          logos={[
            { src: "/images/egaclogo.jpeg", alt: "EGAC Logo" },
          ]}
          title="Egyptian Accreditation Council (EGAC)"
          text="Certigence delivers ISO certifications through an EGAC-accredited framework as an authorised franchise partner. EGAC accreditation provides confidence that our audits and decision-making are impartial and conform to international requirements."
          list={[
            "National accreditation body of Egypt",
            "Operates in line with ISO/IEC 17011 requirements",
            "Oversight of certification body competence and impartiality",
            "Improves acceptance of issued certificates",
            "Regular witness assessments and performance reviews",
          ]}
          
          ctaLabel="Learn More"
          ctaHref="/authorisations/egac"
        />

        {/* Accreditation Block 3 - Ostia */}
        <AccreditationCard
          variant="light"
          logos={[
            { src: "/images/iaslogo.jpeg", alt: "IAS Logo" },
          ]}
          title="International Accreditation Service (IAS)"
          text="Certigence delivers ISO certifications through an IAS-accredited framework as an authorised franchise partner. IAS accreditation strengthens credibility, supporting wider recognition of certifications among customers and regulators."
          list={[
            "Accredits management system certification bodies",
            "Emphasis on technical competence and impartiality",
            "Witnessed audits and continual oversight",
            "Broad sector applicability and scalable scopes",
            "Enhanced market and regulatory confidence",
          ]}
          
          ctaLabel="Learn More"
          ctaHref="/authorisations/ias"
        />

        {/* Accreditation Block 4 - FSSC 22000 */}
        <AccreditationCard
          id="fssc22000"
          variant="fssc"
          logos={[
            { src: "/images/fssc22000.png", alt: "FSSC 22000 Logo" },
          ]}
          title="FSSC 22000 Certification Scheme"
          text="FSSC 22000 is a GFSI-recognised food safety certification scheme based on ISO 22000, sector-specific prerequisite programmes (ISO/TS 22002-x), and additional FSSC requirements. It helps organisations build a robust Food Safety Management System that is trusted by retailers and regulators worldwide."
          list={[
            "GFSI-recognised scheme built on ISO 22000",
            "Combines PRPs (ISO/TS 22002-x) with additional requirements",
            "Applicable to food manufacturing, packaging, storage and transport",
            "Focus on hazard control, traceability and legal compliance",
            "Continuous improvement through surveillance and re-certification",
          ]}
          ctaLabel="Learn More"
          ctaHref="/authorisations/fssc-22000"
        />

        {/* Removed gallery per request */}
      </div>
    </div>
  );
}
