import React from "react";
import { Link } from "react-router-dom";
import "../servicespage-css/fssc22000.css";

export default function FSSC22000() {
    const handleImgError = (e) => {
        const fallback = "https://placehold.co/1400x900?text=Image";
        if (e?.target && e.target.src !== fallback) e.target.src = fallback;
    };

    return (
        <div className="service-page fssc22000">
            <section className="fssc-hero">
                <div className="hero-pattern" aria-hidden="true" />
                <div className="hero-inner">
                    <h1>FSSC 22000: Food Safety System Certification</h1>
                    <p>
                        GFSI‑recognised scheme combining ISO 22000, sector PRPs (ISO/TS 22002‑x) and additional FSSC
                        requirements to assure safe food across the supply chain.
                    </p>
                </div>
            </section>

            <main className="fssc-wrap">
                <article className="f-card halo">
                    <h2 className="ribbon">What is FSSC 22000?</h2>
                    <p className="lead">
                        FSSC 22000 provides a robust framework to manage food safety hazards, demonstrate regulatory compliance,
                        and build trust with customers and retailers. It integrates seamlessly with other ISO systems and is
                        accepted globally.
                    </p>

                    <div className="two-col">
                        <div>
                            <h3>Scheme Components</h3>
                            <ul className="f-list list-check">
                                <li>ISO 22000: Management system & HACCP‑based risk control</li>
                                <li>PRPs: ISO/TS 22002‑x (e.g., 22002‑1 for food manufacturing)</li>
                                <li>FSSC Additional Requirements (e.g., food fraud, food defence)</li>
                                <li>Sector scope: manufacturing, packaging, storage & transport, catering, retail</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Why it matters</h3>
                            <ul className="f-list list-check">
                                <li>GFSI recognition for retailer/brand acceptance</li>
                                <li>Stronger hazard control from farm to fork</li>
                                <li>Efficient integration with existing ISO systems</li>
                                <li>Improved culture, traceability and incident response</li>
                            </ul>
                        </div>
                    </div>

                    <div className="image-container ratio-16x9">
                        <img
                            className="img-elevated"
                            src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1600&q=80"
                            alt="Food manufacturing line"
                            loading="lazy"
                            onError={handleImgError}
                        />
                    </div>
                </article>

                <article className="f-card slide-in">
                    <h2 className="ribbon">Key Capabilities</h2>
                    <div className="feature-grid">
                        <div className="feature-card tilt">
                            <img
                                src="https://images.unsplash.com/photo-1584305574644-0ccf3f75f864?auto=format&fit=crop&w=1400&q=80"
                                alt="Hazard analysis"
                                loading="lazy"
                                onError={handleImgError}
                            />
                            <div className="feature-body">
                                <h4>Hazard Analysis & Control</h4>
                                <p>Hazard ID, risk assessment, CCPs/OPRPs, verification and validation.</p>
                            </div>
                        </div>
                        <div className="feature-card tilt">
                            <img
                                src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=1400&q=80"
                                alt="PRPs and hygiene"
                                loading="lazy"
                                onError={handleImgError}
                            />
                            <div className="feature-body">
                                <h4>PRPs & Hygiene</h4>
                                <p>Sanitation, allergens, pests, utilities, equipment and facility PRPs.</p>
                            </div>
                        </div>
                        <div className="feature-card tilt">
                            <img
                                src="https://images.unsplash.com/photo-1505577058444-a3dab90d4253?auto=format&fit=crop&w=1400&q=80"
                                alt="Traceability"
                                loading="lazy"
                                onError={handleImgError}
                            />
                            <div className="feature-body">
                                <h4>Traceability & Recall</h4>
                                <p>Upstream/downstream tracking, mock recalls, crisis & incident management.</p>
                            </div>
                        </div>
                        <div className="feature-card tilt">
                            <img
                                src="https://images.unsplash.com/photo-1488805990569-3c9e1d76d51c?auto=format&fit=crop&w=1400&q=80"
                                alt="Food defence and fraud"
                                loading="lazy"
                                onError={handleImgError}
                            />
                            <div className="feature-body">
                                <h4>Food Defence & Fraud</h4>
                                <p>Vulnerability assessments, mitigation plans and site security measures.</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="f-card slide-in delay-1">
                    <h2 className="ribbon">Implementation Journey</h2>
                    <div className="steps">
                        <div className="step"><div className="step-index">1</div><div className="step-body"><h4>Scope & Gap</h4><p>Define scope, map processes, perform gap assessment to scheme parts.</p></div></div>
                        <div className="step"><div className="step-index">2</div><div className="step-body"><h4>Hazard & PRPs</h4><p>HACCP study, CCP/OPRP decisions, PRP design and validation.</p></div></div>
                        <div className="step"><div className="step-index">3</div><div className="step-body"><h4>Controls & Records</h4><p>Procedures, forms, monitoring, verification and calibration.</p></div></div>
                        <div className="step"><div className="step-index">4</div><div className="step-body"><h4>Internal Audit</h4><p>Audit plan, site walks, sampling and nonconformity management.</p></div></div>
                        <div className="step"><div className="step-index">5</div><div className="step-body"><h4>Certification</h4><p>Stage 1/2 audits, certificate issue and surveillance maintenance.</p></div></div>
                    </div>
                </article>

                <article className="f-card slide-in delay-2">
                    <h2 className="ribbon">What We Deliver</h2>
                    <div className="meta">
                        <span className="pill">FSSC 22000 Policy & Objectives</span>
                        <span className="pill">HACCP / Hazard Study</span>
                        <span className="pill">PRP Procedures & SOPs</span>
                        <span className="pill">Traceability & Recall Plan</span>
                        <span className="pill">Food Defence & Fraud VA</span>
                        <span className="pill">Internal Audit Toolkit</span>
                    </div>
                </article>

                <article className="f-card slide-in delay-3">
                    <h2 className="ribbon">FAQs</h2>
                    <div className="faq-list">
                        <details>
                            <summary>Is FSSC 22000 recognised by GFSI?</summary>
                            <p>Yes. This enables acceptance by major retailers and manufacturers globally.</p>
                        </details>
                        <details>
                            <summary>Do we need ISO 22000 first?</summary>
                            <p>No. The scheme includes ISO 22000 requirements alongside sector PRPs and additional items.</p>
                        </details>
                        <details>
                            <summary>How long does certification take?</summary>
                            <p>Typical programmes run 10–16 weeks depending on site complexity and readiness.</p>
                        </details>
                    </div>
                </article>

                <article className="f-card slide-in delay-4">
                    <h2 className="ribbon">Image Gallery</h2>
                    <div className="service-gallery gallery-advanced">
                        <div className="service-img"><img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1400&q=80" alt="Food packaging" loading="lazy" onError={handleImgError} /></div>
                        <div className="service-img"><img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1400&q=80" alt="Processing line" loading="lazy" onError={handleImgError} /></div>
                        <div className="service-img"><img src="https://images.unsplash.com/photo-1542831371-ecd0e8f2be30?auto=format&fit=crop&w=1400&q=80" alt="Quality control" loading="lazy" onError={handleImgError} /></div>
                    </div>
                </article>

                <div className="back-row">
                    <Link className="back-link" to="/services">Back to Services</Link>
                    <Link className="back-link alt" to="/contact">Talk to an Expert</Link>
                </div>
            </main>
        </div>
    );
}
