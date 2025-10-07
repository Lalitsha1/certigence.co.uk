import React from "react";
import "../styles/BlogSection.css";

const blogData = [
  {
    id: 1,
    title: "Why ISO 9001 Matters for Modern Businesses",
    description:
      "Learn how ISO 9001 ensures consistent quality and boosts customer trust across industries.",
    date: "12 Aug 2025",
    image:
      "https://media.istockphoto.com/id/1343097420/photo/business-meeting-in-a-bright-office.jpg?s=612x612&w=0&k=20&c=XSfbrN_M2mPmH0nR8ucbtOECXP2LLPHdK29KV6YfyjM=",
  },
  {
    id: 2,
    title: "ISO 45001: Ensuring Workplace Health & Safety",
    description:
      "Explore how ISO 45001 creates a safe working environment by reducing occupational risks.",
    date: "08 Aug 2025",
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQHG2q5gMX_WOA/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1700118643787?e=2147483647&v=beta&t=GOim6UI4fD1QT8ntSVVSpQNzpd5poEnWmFHi7l7AZ_E",
  },
  {
    id: 3,
    title: "How ISO Standards Benefit IT & Software Firms",
    description:
      "Discover the role of ISO 27001 and other standards in securing information systems.",
    date: "01 Aug 2025",
    image:
      "https://media.istockphoto.com/id/616902766/photo/dedicated-to-software-development.jpg?s=612x612&w=0&k=20&c=DbeQZha7EDOxSCK49IOzP6DaVJaBElzFItOVJKQSDek=",
  },
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

