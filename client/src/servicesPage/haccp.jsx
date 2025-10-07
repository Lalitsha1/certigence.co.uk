import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../servicespage-css/haccp.css"; // This path is correct based on my file structure.

const HACCPCertificate = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const sevenPrinciples = [
        {
            title: "Conduct Hazard Analysis",
            description: "Identify potential food safety hazards that could occur in the food production process.",
            icon: "🔍"
        },
        {
            title: "Determine Critical Control Points",
            description: "Identify points in the process where hazards can be prevented, eliminated, or reduced to acceptable levels.",
            icon: "📍"
        },
        {
            title: "Establish Critical Limits",
            description: "Set maximum/minimum values at CCPs to control hazards (e.g., temperature, time).",
            icon: "📊"
        },
        {
            title: "Establish Monitoring Procedures",
            description: "Create procedures to monitor CCPs to ensure they stay within critical limits.",
            icon: "📝"
        },
        {
            title: "Establish Corrective Actions",
            description: "Define actions to take when monitoring shows a CCP is not under control.",
            icon: "🔄"
        },
        {
            title: "Establish Verification Procedures",
            description: "Create procedures to ensure the HACCP system is working effectively.",
            icon: "✅"
        },
        {
            title: "Establish Record-Keeping",
            description: "Maintain documentation of all HACCP plan activities.",
            icon: "📁"
        }
    ];

    return (
        <div className="haccp-container">
            <header className="header">
                <h1 className="title animate-fade-in">HACCP Food Safety Certification</h1>
                <p className="subtitle animate-slide-in">Hazard Analysis and Critical Control Points</p>
            </header>

            <nav className="tabs">
                <button
                    className={activeTab === 'overview' ? 'tab active' : 'tab'}
                    onClick={() => setActiveTab('overview')}
                >
                    Overview
                </button>
                <button
                    className={activeTab === 'principles' ? 'tab active' : 'tab'}
                    onClick={() => setActiveTab('principles')}
                >
                    7 Principles
                </button>
                <button
                    className={activeTab === 'benefits' ? 'tab active' : 'tab'}
                    onClick={() => setActiveTab('benefits')}
                >
                    Benefits
                </button>
            </nav>

            <main className="content">
                {activeTab === 'overview' && (
                    <div className="tab-content animate-fade-in">
                        <h2>What is HACCP?</h2>
                        <div className="overview-grid">
                            <div className="overview-card">
                                <div className="card-icon">🏭</div>
                                <h3>Systematic Approach</h3>
                                <p>HACCP is a systematic preventive approach to food safety that addresses physical, chemical, and biological hazards.</p>
                            </div>
                            <div className="overview-card">
                                <div className="card-icon">🌍</div>
                                <h3>International Standard</h3>
                                <p>Recognized internationally as an effective food safety management system used across the food industry.</p>
                            </div>
                            <div className="overview-card">
                                <div className="card-icon">🛡️</div>
                                <h3>Preventive System</h3>
                                <p>Focuses on preventing hazards rather than inspecting finished products for hazards.</p>
                            </div>
                        </div>
                        <div className="history-section">
                            <h3>History of HACCP</h3>
                            <p>HACCP was developed in the 1960s by NASA, the Pillsbury Company, and the U.S. Army Laboratories to ensure food safety for astronauts in the space program. It has since become the international standard for food safety management.</p>
                        </div>
                    </div>
                )}

                {activeTab === 'principles' && (
                    <div className="tab-content animate-fade-in">
                        <h2>The 7 Principles of HACCP</h2>
                        <div className="principles-container">
                            {sevenPrinciples.map((principle, index) => (
                                <div key={index} className="principle-card">
                                    <div className="principle-number">#{index + 1}</div>
                                    <div className="principle-icon">{principle.icon}</div>
                                    <h3>{principle.title}</h3>
                                    <p>{principle.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                

                {activeTab === 'benefits' && (
                    <div className="tab-content animate-fade-in">
                        <h2>Benefits of HACCP Certification</h2>
                        <div className="benefits-container">
                            <div className="benefit-item">
                                <h3>🛡️ Enhanced Food Safety</h3>
                                <p>Systematically identifies and controls potential hazards in food production.</p>
                            </div>
                            <div className="benefit-item">
                                <h3>📈 Regulatory Compliance</h3>
                                <p>Meets requirements of food safety regulations and standards worldwide.</p>
                            </div>
                            <div className="benefit-item">
                                <h3>🌍 Market Access</h3>
                                <p>Opens doors to international markets and business opportunities.</p>
                            </div>
                            <div className="benefit-item">
                                <h3>👥 Customer Confidence</h3>
                                <p>Builds trust with consumers and business partners.</p>
                            </div>
                            <div className="benefit-item">
                                <h3>💰 Reduced Costs</h3>
                                <p>Minimizes product recalls and waste through preventive measures.</p>
                            </div>
                            <div className="benefit-item">
                                <h3>⚖️ Legal Protection</h3>
                                <p>Provides documented evidence of due diligence in food safety practices.</p>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <footer className="footer">
                <p>© 2023 HACCP Food Safety Certification System | For educational purposes</p>
            </footer>
        </div>
    );
};

export default HACCPCertificate;
