import { useState } from "react";
import PropTypes from "prop-types";
import COUNTRIES from "../data/countries";
import "../styles/CountrySelector.css";

const applyTemplate = (template, service, country) => {
  if (!template) {
    return "";
  }

  return template.replace(/\{service\}/gi, service).replace(/\{country\}/gi, country);
};

const defaultBenefits = (service, country) => [
  `Enhanced access to international and ${country} markets`,
  `Increased brand credibility with accredited ${service} certification`,
  "Streamlined processes aligned with modern digital transformation goals",
  `Improved legal and regulatory compliance within ${country}`,
  `Greater efficiency when competing in ${country} and global industries`,
  "Higher product and service quality, improving customer satisfaction",
  "Stronger risk management and data-driven decision-making frameworks",
];

const defaultSteps = (service) => [
  `Gap analysis - Review existing systems against ${service} requirements`,
  "Implementation - Close identified gaps and align processes with the standard",
  "Internal audits - Validate readiness for third-party assessments",
  "Certification audit - Conducted by an accredited certification body",
  "Certification and surveillance - Maintain continual compliance and improvement",
];

const defaultIndustries = () => [
  "Manufacturing and engineering",
  "Construction and infrastructure",
  "Information technology and software",
  "Healthcare and pharmaceuticals",
  "Education and training providers",
  "Export-oriented businesses",
  "Food and beverage companies",
  "Energy and utilities sector",
];

const defaultMetaTemplates = {
  title: "{service} Certification in {country} | International Standard",
  keywords:
    "{service} certification {country}, {service} standard, iso certification {country}, {service} benefits, {service} audit {country}",
  description:
    "Get {service} Certification in {country} to enhance quality, efficiency, and global credibility. Improve customer satisfaction, streamline processes, and meet international standards.",
};

const CountrySelector = ({
  serviceName,
  intro,
  descriptor,
  benefits,
  steps,
  industries,
  metaTitleTemplate,
  metaKeywordsTemplate,
  metaDescriptionTemplate,
}) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const introCopy =
    intro ||
    `Select the country where you plan to pursue ${serviceName} certification. We will tailor the overview and SEO copy for that market.`;

  const hasSelection = Boolean(selectedCountry);

  const descriptorSuffix = descriptor ? ` ${descriptor}` : "";

  const contentCountry = selectedCountry;

  const resolvedBenefits = hasSelection
    ? benefits && benefits.length > 0
      ? benefits
      : defaultBenefits(serviceName, contentCountry)
    : [];

  const resolvedSteps = hasSelection
    ? steps && steps.length > 0
      ? steps
      : defaultSteps(serviceName)
    : [];

  const resolvedIndustries = hasSelection
    ? industries && industries.length > 0
      ? industries
      : defaultIndustries()
    : [];

  const metaTitle = hasSelection
    ? applyTemplate(metaTitleTemplate || defaultMetaTemplates.title, serviceName, contentCountry)
    : "";
  const metaKeywords = hasSelection
    ? applyTemplate(metaKeywordsTemplate || defaultMetaTemplates.keywords, serviceName, contentCountry)
    : "";
  const metaDescription = hasSelection
    ? applyTemplate(metaDescriptionTemplate || defaultMetaTemplates.description, serviceName, contentCountry)
    : "";

  return (
    <section className="country-selector">
      <header className="country-selector__header">
        <div className="country-selector__copy">
          <h2 className="country-selector__title">Localise your {serviceName} overview</h2>
          <p className="country-selector__intro">{introCopy}</p>
        </div>
        <div className="country-selector__control">
          <label htmlFor="country-selector-control">Country</label>
          <select
            id="country-selector-control"
            value={selectedCountry}
            onChange={(event) => setSelectedCountry(event.target.value)}
          >
            <option value="">Choose a country</option>
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </header>

      {!hasSelection && (
        <p className="country-selector__placeholder">
          Choose a country from the dropdown to display the tailored content and metadata.
        </p>
      )}

      {hasSelection && (
        <article className="country-selector__content">
          <section className="country-selector__section">
            <h3 className="country-selector__heading">
              {serviceName} in {contentCountry}
            </h3>
            <h4 className="country-selector__subheading">
              {serviceName} Certification in {contentCountry}
            </h4>
            <p className="country-selector__lead">
              Enhancing business excellence with {serviceName}
              {descriptorSuffix ? ` ${descriptorSuffix}` : ""}
            </p>
            <p>
              Implementing {serviceName} certification in {contentCountry} has become essential for organisations aiming to
              increase credibility, streamline operations, and gain a competitive edge in both local and global markets. As a
              globally recognised {descriptor || "standard"}, {serviceName} helps organisations improve consistency, meet
              customer expectations, and demonstrate continual improvement.
            </p>
            <p>
              Whether you operate in manufacturing, services, or the public sector, {serviceName} ensures your organisation
              follows internationally accepted best practices tailored to the needs of stakeholders in {contentCountry}.
            </p>
          </section>

          <section className="country-selector__section">
            <h4 className="country-selector__section-title">
              Benefits of {serviceName} Certification in {contentCountry}
            </h4>
            <ul className="country-selector__list">
              {resolvedBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="country-selector__section">
            <h4 className="country-selector__section-title">
              How to Get {serviceName} Certification in {contentCountry}
            </h4>
            <ol className="country-selector__list country-selector__list--ordered">
              {resolvedSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="country-selector__section">
            <h4 className="country-selector__section-title">
              Industries Benefiting from {serviceName} in {contentCountry}
            </h4>
            <ul className="country-selector__list">
              {resolvedIndustries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="country-selector__section">
            <h4 className="country-selector__section-title">
              Take the Next Step with {serviceName} Certification in {contentCountry}
            </h4>
            <p>
              Elevate your organisation&apos;s standards and operational efficiency by obtaining {serviceName} certification.
              Whether you are a startup in {contentCountry} or a multinational enterprise, {serviceName} provides a recognised
              competitive advantage and supports continual improvement.
            </p>
          </section>

          <section className="country-selector__section country-selector__section--meta">
            <div className="country-selector__meta-item">
              <h5>Meta Title:</h5>
              <p>{metaTitle}</p>
            </div>
            <div className="country-selector__meta-item">
              <h5>Meta Keywords:</h5>
              <p>{metaKeywords}</p>
            </div>
            <div className="country-selector__meta-item">
              <h5>Meta Description:</h5>
              <p>{metaDescription}</p>
            </div>
          </section>
        </article>
      )}
    </section>
  );
};

CountrySelector.propTypes = {
  serviceName: PropTypes.string.isRequired,
  intro: PropTypes.string,
  descriptor: PropTypes.string,
  benefits: PropTypes.arrayOf(PropTypes.string),
  steps: PropTypes.arrayOf(PropTypes.string),
  industries: PropTypes.arrayOf(PropTypes.string),
  metaTitleTemplate: PropTypes.string,
  metaKeywordsTemplate: PropTypes.string,
  metaDescriptionTemplate: PropTypes.string,
};

export default CountrySelector;
