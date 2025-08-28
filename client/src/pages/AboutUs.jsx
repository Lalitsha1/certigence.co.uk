import React from "react";
import { FaBalanceScale, FaCertificate, FaTrademark, FaFileInvoiceDollar, FaLeaf, FaIndustry, FaUtensils, FaPenNib, FaBuilding } from "react-icons/fa";
import CountUp from "react-countup";
import "../styles/AboutUs.css";



const features = [
  {
    id: "01",
    title: "Fast and Reliable Services",
    description:
      "We offer quick and trustworthy services for our customers. As you submit the eligible documents, our people work on the registration processes. The process is 100% online and secure. Your personal data will be secured during the registration process.",
  },
  {
    id: "02",
    title: "Expert and qualified Team",
    description:
      "We have well qualified CA, CS, and Advocates that will work on your startup to grow and set up your business legally. We have a well-experienced team that can communicate with you to solve your problems and support your business growth.",
  },
  {
    id: "03",
    title: "Transparent Professional Fees",
    description:
      "Trust is an important element in business and the customers are our king. We provide digital receipts for transparency, and all charges will be mentioned clearly on the receipt.",
  },
  {
    id: "04",
    title: "One-Stop Junction",
    description:
      "All services are handled by us, so you won't need to search for others. Our team covers logo design, web development, and more to help your business grow online.",
  },
  {
    id: "05",
    title: "Our Mission",
    description:
      "We operate 100% online with 24×7 support via calls, chats, and WhatsApp. We aim to build strong customer relationships and solve your problems efficiently.",
  },
  {
    id: "06",
    title: "Our Vision",
    description:
      "We have a presence in 20+ cities to help startups grow. Our goal is to reach every city in India and assist entrepreneurs with their business journey.",
  },
];

const services = [
  {
    title: "Legal Services",
    icon: <FaBalanceScale />,
    description:
      "We have a well-qualified team of CA and Advocates that will help you in making your local government documents that will help your registration of the company. And also we give our services after the registration of your company so that we can help you if any problem comes to you.",
  },
  {
    title: "ISO certification",
    icon: <FaCertificate />,
    description:
      "This certification means that an organization has met all the requirements in the 9001 Quality Management System (QMS). We help customers achieve the ISO certification for their company. As the people trust the ISO certification, so the companies should also have the ISO certifications.",
  },
  {
    title: "Trademark Registration",
    icon: <FaTrademark />,
    description:
      "Trademark registration helps establish ownership and protect the brand of an entity. It is necessary to register your trademark, and we help people to register trademarks at the lowest and most affordable prices possible.",
  },
  {
    title: "GST Registration",
    icon: <FaFileInvoiceDollar />,
    description:
      "GST registration is an important procedure to run your business legally. It allows you to collect tax from customers and also take loans if you have your GST filing and Income Tax returns in place.",
  },
  {
    title: "Apeda Registration",
    icon: <FaLeaf />,
    description:
      "The APEDA registration is established by the Government under the APEDA act to help exporters of agricultural and processed food products. We assist businesses in registering under APEDA to enable exports and business growth.",
  },
  {
    title: "MSME Registration",
    icon: <FaIndustry />,
    description:
      "MSME is a vital part of India’s economy. Registering as MSME allows you to get benefits like subsidies, government loans, and easier access to funding. We help customers get MSME certificates quickly and easily.",
  },
  {
    title: "FSSAI Registration",
    icon: <FaUtensils />,
    description:
      "Every food business in India needs FSSAI registration. We help startups or existing businesses to get their FSSAI license quickly so they can operate legally and gain trust from customers.",
  },
  {
    title: "Logo Design",
    icon: <FaPenNib />,
    description:
      "Our graphics design team can help you create a strong business identity by designing a professional and attractive 3D digital logo that represents your company’s values and vision.",
  },
  {
    title: "Company Registration",
    icon: <FaBuilding />,
    description:
      "Company registration is the first step to starting your business officially. We provide complete support to help you register your business name and get your unique brand identity.",
  },

];


const stats = [
  {
    end: 10000,
    suffix: "+",
    label: "Entrepreneurs Served",
  },
  {
    end: 1000,
    suffix: "+",
    label: "Professionals Network",
  },
  {
    end: 5,
    suffix: "+",
    label: "Cities Present",
  },
  {
    end: 20,
    suffix: "+",
    label: "Team Strength",
  },
];

const AboutUs = () => {
  return (
    <>
      {/* Full width background section */}
      <div className="about-div">

      </div>

      {/* Content section */}
      <div className="container my-5">
        <section className="about-section container py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="about-title">
                About <strong>Raj Startup</strong>
                <div className="underline"></div>
              </h2>
              <p className="about-text">
                <strong>RajStartup</strong> is a genuine and trustworthy place where a company can get all the services such as <strong>BUSINESS REGISTRATION, TRADEMARK, ISO CERTIFICATION, COPYRIGHT, WEBSITE DESIGN, LOGO, SEO</strong>, etc. We provide all the services at the lowest and affordable prices as possible and our charges are also pocket-friendly that any entrepreneur can afford the services.
                <br />
                We also help people and guide new Startups to give them information about the requirements and procedures to set up their company. We have a good network through which we work faster and give results to our customers in a few days and do the registration processes in less time.

                <strong>RajStartup</strong> is India’s largest online business services platform that commits you to help to grow your business legally online. As you submit your documents to our website, we work on your registration process.
              </p>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="https://www.rajstartup.com/productImage/about-2_2.jpg"
                alt="About Raj Startup"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </section>

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

        <section className="services-section">
          <h2 className="services-title">OUR SERVICES</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                className={`service-card ${service.title === "ISO certification" ? "highlight" : ""}`}
                key={index}
              >
                <div className="card-icon">{service.icon}</div>
                <h4 className="card-title">{service.title}</h4>
                <p className="card-description">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

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
