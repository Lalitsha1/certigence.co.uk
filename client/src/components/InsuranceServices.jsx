import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/InsuranceServices.css"; 

const services = [
  {
    title: "ISO 9001",
    description: "Ensures consistent quality in products and services.",
    image: "/images/img5.jpeg",
    icon: "bi bi-check2-square",
    path: "/iso-9001"
  },
  {
    title: "ISO 14001",
    description: "Supports environmental management and sustainability.",
    image: "/images/img1.jpeg",
    icon: "bi bi-globe",
    path: "/iso-14001"
  },
  {
    title: "ISO 45001",
    description: "Promotes occupational health and safety standards.",
    image: "/images/img2.jpeg",
    icon: "bi bi-shield-plus",
    path: "/iso-45001"
  },
  {
    title: "ISO 27001",
    description: "Protects sensitive data through information security.",
    image: "/images/img4.jpeg",
    icon: "bi bi-lock",
    path: "/iso-27001"
  },
  {
    title: "ISO 22000",
    description: "Improves food safety and hygiene practices.",
    image: "/images/img8.jpeg",
    icon: "bi bi-basket",
    path: "/iso-22000"
  },
  {
    title: "ISO 13485",
    description: "Quality systems for medical device manufacturers.",
    image: "/images/img7.jpeg",
    icon: "bi bi-heart-pulse",
    path: "/iso-13485"
  },
  {
    title: "ISO 50001",
    description: "Enhances energy efficiency and cost savings.",
    image: "/images/img3.jpeg",
    icon: "bi bi-lightning-charge",
    path: "/iso-50001"
  },
  {
    title: "ISO 37001",
    description: "Prevents bribery and encourages transparency.",
    image: "/images/img6.jpeg",
    icon: "bi bi-shield-lock",
    path: "/iso-37001"
  }
];

const InsuranceSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <section className="insurance-section">
      <div className="section-header">
        <button className="btn-primary">Our All Services</button>
        <h2>Your Trusted ISO Certification Partner</h2>
        <p>
          We simplify ISO certification with expert support and globally
          recognised standards, helping you build trust and grow confidently.
        </p>
      </div>
      <Slider {...settings} className="insurance-slider">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="card-top">
              <div className="card-icon">
                <i className={service.icon}></i>
              </div>
              <div className="card-number">{index + 1}</div>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="card-image">
              <img src={service.image} alt={service.title} />
            </div>

            {/* ✅ Corrected paths */}
            <Link to={service.path} className="card-button">
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default InsuranceSlider;
