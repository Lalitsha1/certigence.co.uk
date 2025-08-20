import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/InsuranceServices.css";

const services = [
  {
    title: "Finance Insurance",
    description: "Life Insurance financial",
    image: "https://picsum.photos/id/1011/400/300",
    icon: "bi bi-umbrella"
  },
  {
    title: "Car Insurance",
    description: "Life Insurance financial",
    image: "https://picsum.photos/id/1015/400/300",
    icon: "bi bi-truck-front"
  },
  {
    title: "Life Insurance",
    description: "Life Insurance financial",
    image: "https://picsum.photos/id/1016/400/300",
    icon: "bi bi-heart-pulse"
  },
  {
    title: "Health Insurance",
    description: "Life Insurance financial",
    image: "https://picsum.photos/id/1021/400/300",
    icon: "bi bi-hospital"
  },
  {
    title: "Property Insurance",
    description: "Life Insurance financial",
    image: "https://picsum.photos/id/1025/400/300",
    icon: "bi bi-house-door"
  },
  {
    title: "Travel Insurance",
    description: "Life Insurance financial",
    image: "https://picsum.photos/id/1031/400/300",
    icon: "bi bi-airplane"
  },
  {
    title: "Pet Insurance",
    description: "Life Insurance financial",
    image: "https://picsum.photos/id/1035/400/300",
    icon: "bi bi-shield-shaded"
  },
  {
    title: "Business Insurance",
    description: "Life Insurance financial",
    image: "https://picsum.photos/id/1041/400/300",
    icon: "bi bi-briefcase"
  },
  {
    title: "Education Insurance",
    description: "Life Insurance financial",
    image: "https://picsum.photos/id/1050/400/300",
    icon: "bi bi-book"
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
        <button className="btn-primary">Our All Service</button>
        <h2>We Guide to Insurance This Best Services</h2>
        <p>
          Insurance addresses a range of simple applications and passages. Most
          plans exchange regular payments known as premiums.
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
