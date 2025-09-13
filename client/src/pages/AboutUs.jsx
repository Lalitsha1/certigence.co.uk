import React from "react";
import {
  FaCertificate,
  FaIndustry,
  FaLeaf,
  FaUtensils,
  FaShieldAlt,
  FaGlobe,
  FaCogs,
  FaHeartbeat,
  FaRecycle,
} from "react-icons/fa";
import CountUp from "react-countup";
import "../styles/AboutUs.css";

const features = [
  {
    id: "01",
    title: "Fast & Reliable Services",
    description:
      "At Certigence, we provide quick, secure, and hassle-free ISO certification services .",
  },
  {
    id: "02",
    title: "Experienced ISO Experts",
    description:
      "Our qualified auditors  bring years of expertise in ISO standards to help your business achieve compliance smoothly.",
  },
  {
    id: "03",
    title: "Transparent Pricing",
    description:
      "Affordable packages, clear breakdowns, and no hidden charges. Every client receives official ISO certification documents.",
  },
  {
    id: "04",
    title: "One-Stop ISO Solution",
    description:
      "We offer all major ISO certifications under one roof – making it simple for you to get certified and grow globally.",
  },
  {
    id: "05",
    title: "Our Mission",
    description:
      "To simplify ISO certification for businesses, making it accessible, affordable, and stress-free for every entrepreneur.",
  },
  {
    id: "06",
    title: "Our Vision",
    description:
      "To become  most trusted partner for ISO certification and compliance worldwide.",
  },
];

const services = [
  {
    title: "ISO 9001 (Quality Management)",
    icon: <FaCertificate />,
    description:
      "Ensure consistent quality and customer satisfaction with ISO 9001 certification.",
  },
  {
    title: "ISO 14001 (Environmental Management)",
    icon: <FaLeaf />,
    description:
      "Show your commitment to sustainability and environmental responsibility.",
  },
  {
    title: "ISO 22000 (Food Safety Management)",
    icon: <FaUtensils />,
    description:
      "Guarantee safe and high-quality food production with ISO 22000 certification.",
  },
  {
    title: "ISO 27001 (Information Security)",
    icon: <FaShieldAlt />,
    description:
      "Protect sensitive business data with globally recognized information security standards.",
  },
  {
    title: "ISO 45001 (Occupational Health & Safety)",
    icon: <FaHeartbeat />,
    description:
      "Ensure workplace safety, employee well-being, and legal compliance.",
  },
  {
    title: "ISO 50001 (Energy Management)",
    icon: <FaRecycle />,
    description:
      "Optimize energy use, reduce costs, and promote environmental sustainability.",
  },
  {
    title: "ISO 13485 (Medical Devices)",
    icon: <FaIndustry />,
    description:
      "Meet international regulatory requirements for medical devices manufacturing.",
  },
  {
    title: "ISO 37001 (Anti-Bribery)",
    icon: <FaGlobe />,
    description:
      "Demonstrate your commitment to ethical business practices and anti-corruption.",
  },
  {
    title: "ISO/IEC 20000 (IT Service Management)",
    icon: <FaCogs />,
    description:
      "Deliver reliable, efficient, and customer-focused IT services with ISO/IEC 20000.",
  },
];

const stats = [
  { end: 3500, suffix: "+", label: "Clients Served" },
  { end: 800, suffix: "+", label: "Certified Businesses" },
  { end: 150, suffix: "+", label: "Cities Presence" },
  { end: 50, suffix: "+", label: "ISO Experts Team" },
];

const AboutUs = () => {
  return (
    <>
      {/* Hero Background */}
      <div className="about-div"></div>

      {/* About Section */}
      <div className="container my-5">
        <section className="about-section container py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="about-title">
                <strong> About Certigence</strong>
                <div className="underline"></div>
              </h2>
              <p className="about-text">
                At <strong>Certigence</strong>, we specialize in{" "}
                <em>ISO certifications and compliance</em>, ensuring businesses
                meet international standards while focusing on growth. our solutions save time,
                reduce cost, and ensure global recognition.
                <br />
                <br />
                With a transparent pricing policy and expert guidance, we make
                sure every business achieves certification with confidence.
                <br />
                <br />
                Partner with us to ensure your business grows{" "}
               
              </p>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="https://img.freepik.com/free-vector/iso-certification-concept-illustration_114360-10112.jpg"
                alt="About Certigence ISO"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features-section">
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-number">{feature.id}</div>
                <h5 className="feature-title">{feature.title}</h5>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="services-section">
          <h2 className="services-title">Our ISO Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="card-icon">{service.icon}</div>
                <h4 className="card-title">{service.title}</h4>
                <p className="card-description">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="stats-section">
          <div className="stats-container">
            {stats.map((stat, index) => (
              <div className="stat-box" key={index}>
                <h2 className="stat-value">
                  <CountUp
                    start={1}
                    end={stat.end}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                  />
                </h2>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
