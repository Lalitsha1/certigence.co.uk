import React from "react";
import "../styles/BlogSection.css";


const blogData = [
  {
    id: 1,
    title: "Why ISO 9001 Matters for Modern Businesses",
    description: "Learn how ISO 9001 ensures consistent quality and boosts customer trust across industries.",
    date: "12 Aug 2025",
    image: "https://img.freepik.com/free-vector/flat-design-quality-management-infographic_23-2149133932.jpg",
  },
  {
    id: 2,
    title: "ISO 45001: Ensuring Workplace Health & Safety",
    description: "Explore how ISO 45001 creates a safe working environment by reducing occupational risks.",
    date: "08 Aug 2025",
    image: "https://img.freepik.com/free-vector/infographic-template-health-safety_23-2149136606.jpg",
  },
  {
    id: 3,
    title: "How ISO Standards Benefit IT & Software Firms",
    description: "Discover the role of ISO 27001 and other standards in securing information systems.",
    date: "01 Aug 2025",
    image: "https://img.freepik.com/free-vector/information-security-abstract-concept_335657-3180.jpg",
  },
  {
    id: 4,
    title: "4 Simple Steps to Get ISO Certified",
    description: "Understand the certification journey—from planning to audit and ongoing compliance.",
    date: "29 Jul 2025",
    image: "https://img.freepik.com/free-vector/infographic-elements-business-steps-template_52683-38880.jpg",
  }
];


const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="text-center mb-5">
        <button className="blog-btn">
          <i className="bi bi-play-circle"></i> Our Latest Blog
        </button>
        <h1 className="section-title">We Learn From This Latest News</h1>
      </div>

      <div className="blog-grid">
        {blogData.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
              <div className="blog-date">
                <span>{blog.date}</span>
              </div>
            </div>
            <div className="blog-content">
              <h5>{blog.title}</h5>
              <p>{blog.description}</p>
              <button className="read-more">
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
