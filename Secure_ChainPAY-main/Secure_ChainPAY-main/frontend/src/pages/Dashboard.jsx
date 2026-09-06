import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import BottomNav from "../components/BottomNav";
import "../styles/securechain.css";

function Dashboard() {
    return (
        <>
            <Navbar />

            <main className="sc-dashboard">

                <div className="sc-dashboard-grid"></div>

                <div className="sc-dashboard-orb sc-dashboard-orb-one"></div>
                <div className="sc-dashboard-orb sc-dashboard-orb-two"></div>

                <div className="sc-dashboard-container">

                    {/* HERO */}

                    <section className="sc-dashboard-hero">

                        <div className="sc-dashboard-hero-content">

                            <div className="sc-eyebrow">
                                <span className="sc-pulse"></span>
                                SECURECHAIN PAYMENT INTELLIGENCE
                            </div>

                            <h1>
                                Your payment
                                <span>
                                    security command center.
                                </span>
                            </h1>

                            <p>
                                Monitor transaction health, detect
                                suspicious activity and understand
                                payment failures with AI-powered
                                diagnostics.
                            </p>

                            <div className="sc-dashboard-actions">

                                <a
                                    href="/analyze"
                                    className="sc-dashboard-primary"
                                >
                                    ✦ Analyze a Payment
                                    <span>→</span>
                                </a>

                                <a
                                    href="/history"
                                    className="sc-dashboard-secondary"
                                >
                                    View Transaction History
                                    <span>↗</span>
                                </a>

                            </div>

                            <div className="sc-dashboard-trust">

                                <div>
                                    <span>✓</span>
                                    AI Powered
                                </div>

                                <div>
                                    <span>✓</span>
                                    Fraud Detection
                                </div>

                                <div>
                                    <span>✓</span>
                                    Blockchain Verified
                                </div>

                            </div>

                        </div>


                        {/* AI ENGINE */}

                        <div className="sc-live-engine">

                            <div className="sc-live-engine-glow"></div>

                            <div className="sc-live-header">

                                <div className="sc-live-icon">
                                    ✦
                                </div>

                                <div>
                                    <span>AI ENGINE</span>
                                    <strong>Operational</strong>
                                </div>

                                <div className="sc-live-dot"></div>

                            </div>


                            <div className="sc-engine-visual">

                                <div className="sc-engine-ring ring-one">

                                    <div className="sc-engine-ring ring-two">

                                        <div className="sc-engine-core">
                                            ✦
                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className="sc-engine-status-text">

                                <strong>
                                    Intelligence systems online
                                </strong>

                                <span>
                                    Monitoring transaction security
                                </span>

                            </div>


                            <div className="sc-engine-line"></div>


                            <div className="sc-engine-metrics">

                                <div>
                                    <span>Diagnosis</span>
                                    <strong>READY</strong>
                                </div>

                                <div>
                                    <span>Fraud model</span>
                                    <strong>ACTIVE</strong>
                                </div>

                                <div>
                                    <span>Blockchain</span>
                                    <strong>VERIFIED</strong>
                                </div>

                            </div>

                        </div>

                    </section>


                    {/* STATS */}

                    <section className="sc-dashboard-stats">

                        <div className="sc-section-heading">

                            <div>

                                <span className="sc-section-label">
                                    SYSTEM OVERVIEW
                                </span>

                                <h2>
                                    Payment intelligence
                                </h2>

                                <p>
                                    A real-time overview of your
                                    transaction security environment.
                                </p>

                            </div>

                            <span className="sc-live-badge">
                                <i></i>
                                LIVE SYSTEM
                            </span>

                        </div>

                        <StatsCards />

                    </section>


                    {/* PANELS */}

                    <section className="sc-dashboard-panels">

                        {/* TRANSACTION */}

                        <div className="sc-dashboard-panel">

                            <div className="sc-panel-top">

                                <div className="sc-panel-icon blue">
                                    ◈
                                </div>

                                <div>

                                    <span className="sc-panel-label">
                                        INVESTIGATION
                                    </span>

                                    <h2>
                                        Transaction Intelligence
                                    </h2>

                                    <p>
                                        Investigate a payment and discover
                                        what happened behind the scenes.
                                    </p>

                                </div>

                            </div>


                            <div className="sc-transaction-visual">

                                <div className="sc-visual-node">

                                    <span className="sc-node-icon">
                                        ₹
                                    </span>

                                    <strong>
                                        Payment
                                    </strong>

                                    <small>
                                        Transaction received
                                    </small>

                                </div>


                                <div className="sc-visual-connection">
                                    <span></span>
                                </div>


                                <div className="sc-visual-node">

                                    <span className="sc-node-icon purple">
                                        ✦
                                    </span>

                                    <strong>
                                        AI Engine
                                    </strong>

                                    <small>
                                        Diagnosis
                                    </small>

                                </div>


                                <div className="sc-visual-connection">
                                    <span></span>
                                </div>


                                <div className="sc-visual-node">

                                    <span className="sc-node-icon green">
                                        ✓
                                    </span>

                                    <strong>
                                        Verification
                                    </strong>

                                    <small>
                                        Blockchain
                                    </small>

                                </div>

                            </div>


                            <a
                                href="/analyze"
                                className="sc-panel-button"
                            >
                                Start payment analysis
                                <span>→</span>
                            </a>

                        </div>


                        {/* SECURITY */}

                        <div className="sc-dashboard-panel">

                            <div className="sc-panel-top">

                                <div className="sc-panel-icon purple">
                                    🛡
                                </div>

                                <div>

                                    <span className="sc-panel-label">
                                        PROTECTION
                                    </span>

                                    <h2>
                                        Security Intelligence
                                    </h2>

                                    <p>
                                        Multiple layers protect every
                                        transaction you investigate.
                                    </p>

                                </div>

                            </div>


                            <div className="sc-security-dashboard-list">

                                <div className="sc-security-dashboard-item">

                                    <div className="sc-mini-icon blue">
                                        ✦
                                    </div>

                                    <div>
                                        <strong>
                                            AI Root-Cause Analysis
                                        </strong>

                                        <small>
                                            Explain payment failures
                                        </small>
                                    </div>

                                    <span className="sc-check">
                                        ✓
                                    </span>

                                </div>


                                <div className="sc-security-dashboard-item">

                                    <div className="sc-mini-icon red">
                                        !
                                    </div>

                                    <div>
                                        <strong>
                                            Fraud Risk Detection
                                        </strong>

                                        <small>
                                            Identify suspicious behaviour
                                        </small>
                                    </div>

                                    <span className="sc-check">
                                        ✓
                                    </span>

                                </div>


                                <div className="sc-security-dashboard-item">

                                    <div className="sc-mini-icon cyan">
                                        ⬡
                                    </div>

                                    <div>
                                        <strong>
                                            Blockchain Verification
                                        </strong>

                                        <small>
                                            Preserve transaction integrity
                                        </small>
                                    </div>

                                    <span className="sc-check">
                                        ✓
                                    </span>

                                </div>

                            </div>


                            <div className="sc-dashboard-security-score">

                                <div>
                                    <span>SECURITY COVERAGE</span>
                                    <strong>92%</strong>
                                </div>

                                <div className="sc-security-score-bar">
                                    <span></span>
                                </div>

                                <small>
                                    All protection layers operational
                                </small>

                            </div>

                        </div>

                    </section>


                    {/* HOW IT WORKS */}

                    <section className="sc-how-section">

                        <div className="sc-section-heading centered">

                            <span className="sc-section-label">
                                HOW SECURECHAIN WORKS
                            </span>

                            <h2>
                                From payment failure to explanation.
                            </h2>

                            <p>
                                Three intelligent layers turn confusing
                                payment errors into actionable information.
                            </p>

                        </div>


                        <div className="sc-how-grid">

                            <div className="sc-how-card">

                                <div className="sc-how-number">
                                    01
                                </div>

                                <div className="sc-how-icon">
                                    ◎
                                </div>

                                <h3>
                                    Capture
                                </h3>

                                <p>
                                    Provide the transaction details,
                                    banks, amount and payment issue.
                                </p>

                            </div>


                            <div className="sc-how-card">

                                <div className="sc-how-number">
                                    02
                                </div>

                                <div className="sc-how-icon purple">
                                    ✦
                                </div>

                                <h3>
                                    Diagnose
                                </h3>

                                <p>
                                    AI analyzes the transaction and
                                    generates a human-readable explanation.
                                </p>

                            </div>


                            <div className="sc-how-card">

                                <div className="sc-how-number">
                                    03
                                </div>

                                <div className="sc-how-icon green">
                                    ⬡
                                </div>

                                <h3>
                                    Verify
                                </h3>

                                <p>
                                    Fraud intelligence and blockchain
                                    verification create the final security profile.
                                </p>

                            </div>

                        </div>

                    </section>


                    {/* CTA */}

                    <section className="sc-dashboard-cta">

                        <div>

                            <span className="sc-section-label">
                                READY TO INVESTIGATE?
                            </span>

                            <h2>
                                Something went wrong with a payment?
                            </h2>

                            <p>
                                Let SecureChain explain exactly what happened.
                            </p>

                        </div>

                        <a
                            href="/analyze"
                            className="sc-dashboard-primary"
                        >
                            Analyze Transaction
                            <span>→</span>
                        </a>

                    </section>

                </div>

            </main>

            <BottomNav />

        </>
    );
}

export default Dashboard;