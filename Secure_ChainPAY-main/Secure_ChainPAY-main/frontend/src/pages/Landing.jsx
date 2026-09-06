import { Link } from "react-router-dom";
import "../styles/securechain.css";

function Landing() {
    return (
        <div className="sc-landing">

            {/* Background */}
            <div className="sc-landing-grid"></div>
            <div className="sc-landing-orb sc-landing-orb-one"></div>
            <div className="sc-landing-orb sc-landing-orb-two"></div>

            {/* NAVBAR */}
            <header className="sc-landing-nav">

                <Link to="/" className="sc-brand">
                    <span className="sc-brand-icon">🔐</span>
                    <span>SecureChainPay</span>
                </Link>

                <nav className="sc-landing-links">
                    <a href="#features">Features</a>
                    <a href="#how-it-works">How it works</a>
                    <a href="#security">Security</a>

                    <Link
                        to="/login"
                        className="sc-nav-login"
                    >
                        Sign In
                    </Link>
                </nav>

            </header>

            {/* HERO */}
            <main>

                <section className="sc-landing-hero">

                    <div className="sc-landing-hero-content">

                        <div className="sc-eyebrow">
                            <span className="sc-pulse"></span>
                            AI-POWERED PAYMENT SECURITY
                        </div>

                        <h1>
                            Don't just see
                            <span> a failed payment.</span>
                            <br />
                            Understand it.
                        </h1>

                        <p>
                            SecureChainPay combines AI diagnostics,
                            fraud intelligence and blockchain-backed
                            verification to explain what happened to
                            your payment.
                        </p>

                        <div className="sc-landing-actions">

                            <Link
                                to="/login"
                                className="sc-landing-primary"
                            >
                                Get Started
                                <span>→</span>
                            </Link>

                            <a
                                href="#how-it-works"
                                className="sc-landing-secondary"
                            >
                                Explore SecureChain
                                <span>↓</span>
                            </a>

                        </div>

                        <div className="sc-landing-trust">

                            <div>
                                <span>✓</span>
                                AI Diagnosis
                            </div>

                            <div>
                                <span>✓</span>
                                Fraud Detection
                            </div>

                            <div>
                                <span>✓</span>
                                Blockchain Verification
                            </div>

                        </div>

                    </div>

                    {/* HERO VISUAL */}

                    <div className="sc-landing-visual">

                        <div className="sc-landing-card">

                            <div className="sc-landing-card-top">

                                <div>
                                    <span>SECURECHAIN</span>
                                    <strong>Payment Intelligence</strong>
                                </div>

                                <div className="sc-online">
                                    <span></span>
                                    LIVE
                                </div>

                            </div>

                            <div className="sc-landing-radar">

                                <div className="sc-radar-ring ring-one"></div>
                                <div className="sc-radar-ring ring-two"></div>
                                <div className="sc-radar-ring ring-three"></div>

                                <div className="sc-radar-core">
                                    ✦
                                </div>

                            </div>

                            <div className="sc-landing-card-title">
                                Intelligence Engine
                            </div>

                            <p className="sc-landing-card-subtitle">
                                Monitoring payment security
                            </p>

                            <div className="sc-landing-mini-grid">

                                <div>
                                    <span>AI</span>
                                    <strong>READY</strong>
                                </div>

                                <div>
                                    <span>FRAUD</span>
                                    <strong>ACTIVE</strong>
                                </div>

                                <div>
                                    <span>CHAIN</span>
                                    <strong>VERIFIED</strong>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* FEATURES */}

                <section
                    id="features"
                    className="sc-landing-section"
                >

                    <div className="sc-section-heading centered">

                        <span className="sc-section-label">
                            ONE PAYMENT. THREE INTELLIGENT LAYERS.
                        </span>

                        <h2>
                            Security that explains itself.
                        </h2>

                        <p>
                            SecureChainPay doesn't stop at telling you
                            that something went wrong.
                        </p>

                    </div>


                    <div className="sc-landing-feature-grid">

                        <div className="sc-landing-feature">

                            <div className="sc-feature-icon blue">
                                ✦
                            </div>

                            <span>01</span>

                            <h3>
                                AI Diagnosis
                            </h3>

                            <p>
                                Convert confusing payment failures
                                into clear, human-readable explanations
                                and actionable recommendations.
                            </p>

                        </div>


                        <div className="sc-landing-feature">

                            <div className="sc-feature-icon purple">
                                🛡
                            </div>

                            <span>02</span>

                            <h3>
                                Fraud Intelligence
                            </h3>

                            <p>
                                Calculate transaction risk and identify
                                suspicious behaviour before it becomes
                                a bigger security problem.
                            </p>

                        </div>


                        <div className="sc-landing-feature">

                            <div className="sc-feature-icon green">
                                ⬡
                            </div>

                            <span>03</span>

                            <h3>
                                Blockchain Verification
                            </h3>

                            <p>
                                Generate a transaction fingerprint that
                                helps preserve the integrity of the
                                analyzed transaction.
                            </p>

                        </div>

                    </div>

                </section>


                {/* HOW IT WORKS */}

                <section
                    id="how-it-works"
                    className="sc-landing-section"
                >

                    <div className="sc-section-heading centered">

                        <span className="sc-section-label">
                            HOW IT WORKS
                        </span>

                        <h2>
                            From failed payment to clear answer.
                        </h2>

                    </div>


                    <div className="sc-landing-steps">

                        <div className="sc-landing-step">

                            <div className="sc-step-number">
                                01
                            </div>

                            <div>
                                <h3>
                                    Submit
                                </h3>

                                <p>
                                    Enter your transaction details,
                                    payment issue and bank information.
                                </p>
                            </div>

                        </div>


                        <div className="sc-step-line"></div>


                        <div className="sc-landing-step">

                            <div className="sc-step-number">
                                02
                            </div>

                            <div>
                                <h3>
                                    Analyze
                                </h3>

                                <p>
                                    AI evaluates the transaction and
                                    identifies the likely root cause.
                                </p>
                            </div>

                        </div>


                        <div className="sc-step-line"></div>


                        <div className="sc-landing-step">

                            <div className="sc-step-number">
                                03
                            </div>

                            <div>
                                <h3>
                                    Verify
                                </h3>

                                <p>
                                    Fraud intelligence and blockchain
                                    verification complete the security profile.
                                </p>
                            </div>

                        </div>

                    </div>

                </section>


                {/* SECURITY */}

                <section
                    id="security"
                    className="sc-landing-security"
                >

                    <div>

                        <span className="sc-section-label">
                            BUILT FOR TRUST
                        </span>

                        <h2>
                            Every analysis leaves
                            a verifiable trail.
                        </h2>

                        <p>
                            SecureChainPay combines multiple security
                            layers so users can understand payment
                            failures instead of simply receiving an
                            unexplained error.
                        </p>

                        <Link
                            to="/login"
                            className="sc-landing-primary"
                        >
                            Get Started
                            <span>→</span>
                        </Link>

                    </div>


                    <div className="sc-security-stack">

                        <div className="sc-security-line">
                            <span className="green">✓</span>

                            <div>
                                <strong>
                                    AI Analysis
                                </strong>

                                <small>
                                    Human-readable diagnosis
                                </small>
                            </div>

                            <b>
                                READY
                            </b>
                        </div>


                        <div className="sc-security-line">
                            <span className="purple">✦</span>

                            <div>
                                <strong>
                                    Fraud Intelligence
                                </strong>

                                <small>
                                    Transaction risk scoring
                                </small>
                            </div>

                            <b>
                                ACTIVE
                            </b>
                        </div>


                        <div className="sc-security-line">
                            <span className="blue">⬡</span>

                            <div>
                                <strong>
                                    Blockchain
                                </strong>

                                <small>
                                    Transaction fingerprint
                                </small>
                            </div>

                            <b>
                                VERIFIED
                            </b>
                        </div>

                    </div>

                </section>


                {/* FINAL CTA */}

                <section className="sc-landing-cta">

                    <span className="sc-section-label">
                        SECURECHAINPAY
                    </span>

                    <h2>
                        Ready to understand your payment?
                    </h2>

                    <p>
                        Start your secure payment investigation.
                    </p>

                    <Link
                        to="/login"
                        className="sc-landing-primary"
                    >
                        Get Started
                        <span>→</span>
                    </Link>

                </section>

            </main>


            {/* FOOTER */}

            <footer className="sc-landing-footer">

                <strong>
                    🔐 SecureChainPay
                </strong>

                <span>
                    AI-powered payment diagnostics & security intelligence
                </span>

            </footer>

        </div>
    );
}

export default Landing;