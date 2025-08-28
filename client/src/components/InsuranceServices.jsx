import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/InsuranceServices.css"; // Make sure this file is imported

const services = [
  {
    title: "ISO 9001",
    description: "Ensures consistent quality in products and services.",
    image: "/images/img5.jpeg",
    icon: "bi bi-check2-square"
  },
  {
    title: "ISO 14001",
    description: "Supports environmental management and sustainability.",
    image: "/images/img1.jpeg",
    icon: "bi bi-globe"
  },
  {
    title: "ISO 45001",
    description: "Promotes occupational health and safety standards.",
    image: "/images/img2.jpeg",
    icon: "bi bi-shield-plus"
  },
  {
    title: "ISO 27001",
    description: "Protects sensitive data through information security.",
    image: "/images/img4.jpeg",
    icon: "bi bi-lock"
  },
  {
    title: "ISO 22000",
    description: "Improves food safety and hygiene practices.",
    image: "/images/img8.jpeg",
    icon: "bi bi-basket"
  },
  {
    title: "ISO 13485",
    description: "Quality systems for medical device manufacturers.",
    image: "/images/img7.jpeg",
    icon: "bi bi-heart-pulse"
  },
  {
    title: "ISO 50001",
    description: "Enhances energy efficiency and cost savings.",
    image: "/images/img3.jpeg",
    icon: "bi bi-lightning-charge"
  },
  {
    title: "ISO 37001",
    description: "Prevents bribery and encourages transparency.",
    image: "/images/img6.jpeg",
    icon: "bi bi-shield-lock"
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
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
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
            {index === 0 && (
              <button className="card-button">
                <i className="bi bi-arrow-right"></i>
              </button>
            )}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default InsuranceSlider;
