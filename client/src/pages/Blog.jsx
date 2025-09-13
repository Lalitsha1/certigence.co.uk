import React, { useMemo, useState } from "react";
import { toast } from "react-toastify";
import "../styles/Blog.css";
import { API_BASE } from "../utils/api";

const posts = [
  {
    id: 1,
    title: "What Is ISO 9001? A Practical Guide",
    excerpt:
      "Understand the core principles of ISO 9001 Quality Management and how certification builds trust and efficiency.",
    date: "2025-09-01",
    readTime: "6 min read",
    tags: ["ISO 9001", "Quality"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "ISO 27001: Getting Started With ISMS",
    excerpt:
      "A beginner-friendly introduction to Information Security Management Systems and the ISO 27001 framework.",
    date: "2025-08-22",
    readTime: "7 min read",
    tags: ["ISO 27001", "Security"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "ISO 14001: Turning Sustainability Into Strategy",
    excerpt:
      "How environmental management systems reduce risk, improve compliance, and unlock new opportunities.",
    date: "2025-08-10",
    readTime: "5 min read",
    tags: ["ISO 14001", "Sustainability"],
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "ISO 45001: A Safer, Stronger Workplace",
    excerpt:
      "Key steps for implementing an Occupational Health & Safety Management System that actually works.",
    date: "2025-07-28",
    readTime: "6 min read",
    tags: ["ISO 45001", "Health & Safety"],
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "ISO 22000: Food Safety Essentials",
    excerpt:
      "What food businesses should know about FSMS and why traceability matters across the supply chain.",
    date: "2025-07-12",
    readTime: "4 min read",
    tags: ["ISO 22000", "Food Safety"],
    image:
      "https://images.pexels.com/photos/242206/pexels-photo-242206.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  },
  {
    id: 6,
    title: "ISO 13485: Quality For Medical Devices",
    excerpt:
      "An overview of ISO 13485 and how it aligns with regulatory expectations for device manufacturers.",
    date: "2025-06-30",
    readTime: "7 min read",
    tags: ["ISO 13485", "Medical"],
    image:
      "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  },
  {
    id: 7,
    title: "ISO 50001: Managing Energy With Data",
    excerpt:
      "From baselines to KPIs—how to turn energy performance into measurable business value.",
    date: "2025-06-15",
    readTime: "5 min read",
    tags: ["ISO 50001", "Energy"],
    image:
      "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  },
  {
    id: 8,
    title: "ISO 37001: Building Anti‑Bribery Controls",
    excerpt:
      "Core components of an ABMS and how to operationalize them across teams and vendors.",
    date: "2025-06-01",
    readTime: "6 min read",
    tags: ["ISO 37001", "Compliance"],
    image:
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "How To Prepare For Your ISO Audit",
    excerpt:
      "A week-by-week plan to get audit-ready with minimal disruption to your team.",
    date: "2025-05-20",
    readTime: "8 min read",
    tags: ["Audit", "Checklist"],
    image:
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "From Policy To Practice: Making Procedures Stick",
    excerpt:
      "Change management techniques to turn written policies into daily habits.",
    date: "2025-05-05",
    readTime: "5 min read",
    tags: ["Leadership", "Culture"],
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "Risk Registers 101: Simple But Powerful",
    excerpt:
      "A practical template for building your first risk register that teams will actually use.",
    date: "2025-04-21",
    readTime: "6 min read",
    tags: ["Risk", "ISO 31000"],
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "Nonconformities: Fixing The Root Cause",
    excerpt:
      "Go beyond quick fixes—how to structure corrective actions that prevent recurrence.",
    date: "2025-04-08",
    readTime: "7 min read",
    tags: ["CAPA", "Improvement"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
  },
];

const Blog = () => {
  const [activeTag, setActiveTag] = useState("All");
  const tags = useMemo(() => {
    const t = new Set(posts.flatMap((p) => p.tags));
    return ["All", ...Array.from(t)];
  }, []);

  const [featured, ...rest] = posts;

  const filtered = useMemo(() => {
    if (activeTag === "All") return rest;
    return rest.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  const onImgError = (e) => {
    const fallback =
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop";
    if (e?.currentTarget && e.currentTarget.src !== fallback) {
      e.currentTarget.src = fallback;
    }
  };

  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      const res = await fetch(`${API_BASE}/api/v1/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message || "Subscribed successfully.");
        setEmail("");
      } else {
        toast.error(data.message || "Subscription failed");
      }
    } catch (err) {
      toast.error("Server not responding. Please try later.");
    }
  };

  return (
    <div className="blog blog--light">
      <header className="blog-hero blog-hero--with-bg">
        <div className="blog-hero__inner">
          <p className="eyebrow">Insights • ISO Standards • Certification</p>
          <h1>Certigence Blog</h1>
          <p className="sub">
            Practical guides and best practices to plan, implement, and scale your
            management systems with confidence.
          </p>
        </div>
      </header>

      <main className="blog-container">
        {/* Featured article */}
        <section className="blog-featured">
          <article className="featured-card">
            <a className="featured-card__media" href="#" aria-label={featured.title}>
              <img src={featured.image} alt={featured.title} loading="lazy" onError={onImgError} />
              <div className="featured-card__overlay" />
            </a>
            <div className="featured-card__body">
              <div className="blog-card__meta">
                <span>{new Date(featured.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{featured.readTime}</span>
              </div>
              <div className="title-row">
                <img
                  className="title-thumb"
                  src={featured.image}
                  alt=""
                  loading="lazy"
                  onError={onImgError}
                />
                <h2 className="featured-card__title">
                  <a href="#" title={featured.title}>
                    {featured.title}
                  </a>
                </h2>
              </div>
              <p className="featured-card__excerpt">{featured.excerpt}</p>
              <div className="blog-card__tags">
                {featured.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </section>

        {/* Filter bar */}
        <div className="blog-filter" role="tablist" aria-label="Filter posts by tag">
          {tags.map((t) => (
            <button
              key={t}
              className={`filter-chip ${activeTag === t ? "active" : ""}`}
              onClick={() => setActiveTag(t)}
              role="tab"
              aria-selected={activeTag === t}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <section className="blog-grid">
          {filtered.map((p) => (
            <article key={p.id} className="blog-card">
              <a className="blog-card__media" href="#" aria-label={p.title}>
                <img src={p.image} alt={p.title} loading="lazy" onError={onImgError} />
                <div className="blog-card__overlay" />
              </a>
              <div className="blog-card__body">
                <div className="blog-card__meta">
                  <span>{new Date(p.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{p.readTime}</span>
                </div>
                <div className="title-row">
                  <img
                    className="title-thumb"
                    src={p.image}
                    alt=""
                    loading="lazy"
                    onError={onImgError}
                  />
                  <h2 className="blog-card__title">
                    <a href="#" title={p.title}>
                      {p.title}
                    </a>
                  </h2>
                </div>
                <p className="blog-card__excerpt">{p.excerpt}</p>
                <div className="blog-card__tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* CTA */}
        <aside className="blog-cta">
          <div className="blog-cta__card">
            <h3>Need certification support?</h3>
            <p>
              Speak with a specialist about ISO readiness, gap assessments, and
              implementation.
            </p>
            <a className="blog-cta__btn" href="/contact">
              Contact Us
            </a>
          </div>
        </aside>

        {/* Newsletter */}
        <section className="newsletter">
          <div className="newsletter__inner">
            <h3>Get new articles in your inbox</h3>
            <p>Monthly tips and checklists. No spam.</p>
            <form className="newsletter__form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="you@company.com"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
