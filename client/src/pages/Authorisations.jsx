import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Accreditation.css"; // Import CSS

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
          Accreditation
        </motion.h2>
        <div className="underline"></div>

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
          ctaHref="https://www.ukas.com"
          external
        />

        {/* Accreditation Block 1 - Zeppy */}
        <AccreditationCard
          variant="light"
          logos={[
            {
              src: "https://dashboard.uafaccreditation.org/media/logos/uaf_logo.png",
              alt: "UAF Logo",
            },
            { src: "/images/img-logo.png", alt: "Zeppy Logo" },
          ]}
          // title="Zeppy Certification Pvt. Ltd."
          text="Certigence delivers ISO certifications through a UAF-accredited framework as an authorised franchise partner, ensuring globally recognised and credible certification services."
          list={[
            "QMS (ISO 9001:2015)",
            "EMS (ISO 14001:2015)",
            "OH&S (ISO 45001:2018)",
            "FSMS (ISO 22000:2018)",
            "ABMS (ISO 37001:2016)",
            "EnMS (ISO 50001:2018)",
          ]}
          ctaLabel="Learn More"
          ctaHref="#ukas"
        />

        {/* Accreditation Block 2 - Otabu */}
        <AccreditationCard
          variant="dark"
          logos={[
            { src: "/images/egaclogo.jpeg", alt: "EGAC Logo" },
            { src: "/images/img-logo.png", alt: "Otabu Logo" },
          ]}
          // title="Otabu Certification Pvt. Ltd."
          text="Certigence delivers ISO certifications through a EGAC-accredited framework as an authorised franchise partner, ensuring globally recognised and credible certification services."
          list={[
            "QMS (ISO 9001:2015)",
            "EMS (ISO 14001:2015)",
            "OH&S (ISO 45001:2018)",
            "FSMS (ISO 22000:2018)",
            "MDQMS (ISO 13485:2016)",
            "ISMS (ISO/IEC 27001:2022)",
          ]}
          ctaLabel="Learn More"
          ctaHref="#ukas"
        />

        {/* Accreditation Block 3 - Ostia */}
        <AccreditationCard
          variant="light"
          logos={[
            { src: "/images/iaslogo.jpeg", alt: "IAS Logo" },
            { src: "/images/img-logo.png", alt: "Ostia Logo" },
          ]}
          title="Ostia Certification Pvt. Ltd."
          text="Certigence delivers ISO certifications through a IAS-accredited framework as an authorised franchise partner, ensuring globally recognised and credible certification services."
          list={[
            "QMS (ISO 9001:2015)",
            "EMS (ISO 14001:2015)",
            "OHSMS (ISO 45001:2018)",
            "ISMS (ISO/IEC 27001:2022)",
          ]}
          ctaLabel="Learn More"
          ctaHref="#ukas"
        />
      </div>
    </div>
  );
}
