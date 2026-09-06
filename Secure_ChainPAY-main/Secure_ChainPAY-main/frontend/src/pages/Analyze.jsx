import { useState } from "react";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import axios from "axios";
import "../styles/securechain.css";

const API_URL = "https://secure-chainpay.onrender.com";

function Analyze() {
    const [transactionId, setTransactionId] = useState("");
    const [amount, setAmount] = useState("");
    const [upiId, setUpiId] = useState("");

    const [senderBank, setSenderBank] = useState("");
    const [receiverBank, setReceiverBank] = useState("");
    const [issue, setIssue] = useState("");
    const [status, setStatus] = useState("FAILED");

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const issueToErrorCode = {
        BANK_SERVER_DOWN: "U16",
        TIMEOUT: "U17",
        INVALID_PIN: "U30",
        LIMIT_EXCEEDED: "U90",
        BENEFICIARY_ERROR: "U31",
        DEBIT_NO_CREDIT: "U16",
        OTHER: "U99"
    };

    async function analyzePayment(e) {
        e.preventDefault();

        setLoading(true);
        setResult(null);

        try {
            const response = await axios.post(
                `${API_URL}/analyze/`,
                {
                    transaction_id: transactionId,
                    sender_bank: senderBank,
                    receiver_bank: receiverBank,
                    amount: Number(amount),
                    status: status,
                    error_code: issueToErrorCode[issue]
                }
            );

            console.log("Analysis response:", response.data);

            setResult(response.data);

        } catch (err) {
            console.error("Analyze Error:", err);

            if (err.response) {
                alert(
                    err.response.data?.detail ||
                    "Unable to analyze transaction."
                );
            } else {
                alert("Backend connection failed.");
            }

        } finally {
            setLoading(false);
        }
    }

    function resetForm() {
        setResult(null);
        setTransactionId("");
        setAmount("");
        setUpiId("");
        setSenderBank("");
        setReceiverBank("");
        setIssue("");
        setStatus("FAILED");
    }

    const risk = result?.risk_score ?? 0;

    const riskLabel =
        risk >= 70
            ? "HIGH RISK"
            : risk >= 40
                ? "MEDIUM RISK"
                : "LOW RISK";

    const riskClass =
        risk >= 70
            ? "high"
            : risk >= 40
                ? "medium"
                : "low";

    return (
        <>
            <Navbar />

            <main className="sc-page">

                <div className="sc-orb sc-orb-one"></div>
                <div className="sc-orb sc-orb-two"></div>

                <section className="sc-analysis-shell">

                    {/* HEADER */}

                    <div className="sc-analysis-header">

                        <div>

                            <div className="sc-eyebrow">
                                <span className="sc-pulse"></span>
                                SECURECHAIN INTELLIGENCE ENGINE
                            </div>

                            <h1>
                                Understand your
                                <span> UPI payment.</span>
                            </h1>

                            <p>
                                Diagnose payment failures with AI,
                                calculate fraud risk and verify transaction
                                integrity using blockchain fingerprints.
                            </p>

                        </div>

                        <div className="sc-engine-status">

                            <div className="sc-status-dot"></div>

                            <div>
                                <strong>AI Engine</strong>
                                <small>Online & ready</small>
                            </div>

                        </div>

                    </div>


                    {/* FEATURE STRIP */}

                    <div className="sc-feature-strip">

                        <div>
                            <span>◈</span>

                            <div>
                                <strong>AI Diagnosis</strong>
                                <small>Root-cause analysis</small>
                            </div>
                        </div>

                        <div>
                            <span>⌁</span>

                            <div>
                                <strong>Fraud Intelligence</strong>
                                <small>Risk scoring</small>
                            </div>
                        </div>

                        <div>
                            <span>⬡</span>

                            <div>
                                <strong>Blockchain</strong>
                                <small>Integrity verification</small>
                            </div>
                        </div>

                    </div>


                    <div className="sc-analysis-grid">

                        {/* FORM */}

                        <section className="sc-card sc-form-card">

                            <div className="sc-card-heading">

                                <div className="sc-icon-box blue">
                                    ◎
                                </div>

                                <div>
                                    <h2>Transaction details</h2>

                                    <p>
                                        Tell SecureChain what happened.
                                    </p>
                                </div>

                            </div>


                            <form onSubmit={analyzePayment}>

                                {/* TRANSACTION ID */}

                                <div className="sc-field">

                                    <label>
                                        Transaction ID
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="TXN1001"
                                        value={transactionId}
                                        onChange={(e) =>
                                            setTransactionId(e.target.value)
                                        }
                                        required
                                    />

                                </div>


                                {/* AMOUNT + UPI */}

                                <div className="sc-two-column">

                                    <div className="sc-field">

                                        <label>
                                            Amount
                                        </label>

                                        <div className="sc-input-prefix">

                                            <span>₹</span>

                                            <input
                                                type="number"
                                                placeholder="25000"
                                                value={amount}
                                                onChange={(e) =>
                                                    setAmount(e.target.value)
                                                }
                                                required
                                            />

                                        </div>

                                    </div>


                                    <div className="sc-field">

                                        <label>
                                            UPI ID
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="amit@ybl"
                                            value={upiId}
                                            onChange={(e) =>
                                                setUpiId(e.target.value)
                                            }
                                            autoComplete="username"
                                        />

                                    </div>

                                </div>


                                {/* STATUS + ISSUE */}

                                <div className="sc-two-column">

                                    <div className="sc-field">

                                        <label>
                                            Transaction status
                                        </label>

                                        <select
                                            value={status}
                                            onChange={(e) =>
                                                setStatus(e.target.value)
                                            }
                                        >

                                            <option value="FAILED">
                                                Failed
                                            </option>

                                            <option value="SUCCESS">
                                                Successful
                                            </option>

                                            <option value="PENDING">
                                                Pending
                                            </option>

                                        </select>

                                    </div>


                                    <div className="sc-field">

                                        <label>
                                            Payment issue
                                        </label>

                                        <select
                                            value={issue}
                                            onChange={(e) =>
                                                setIssue(e.target.value)
                                            }
                                            required
                                        >

                                            <option value="">
                                                Select issue
                                            </option>

                                            <option value="BANK_SERVER_DOWN">
                                                Bank server unavailable
                                            </option>

                                            <option value="TIMEOUT">
                                                Transaction timed out
                                            </option>

                                            <option value="INVALID_PIN">
                                                Invalid UPI PIN
                                            </option>

                                            <option value="LIMIT_EXCEEDED">
                                                Daily limit exceeded
                                            </option>

                                            <option value="BENEFICIARY_ERROR">
                                                Receiver account issue
                                            </option>

                                            <option value="DEBIT_NO_CREDIT">
                                                Money debited, receiver didn't get it
                                            </option>

                                            <option value="OTHER">
                                                Other
                                            </option>

                                        </select>

                                    </div>

                                </div>


                                {/* BANK FLOW */}

                                <div className="sc-bank-flow">

                                    <div>

                                        <label>
                                            Sender bank
                                        </label>

                                        <select
                                            value={senderBank}
                                            onChange={(e) =>
                                                setSenderBank(e.target.value)
                                            }
                                            required
                                        >

                                            <option value="">
                                                Select bank
                                            </option>

                                            <option value="SBI">
                                                SBI
                                            </option>

                                            <option value="HDFC">
                                                HDFC Bank
                                            </option>

                                            <option value="ICICI">
                                                ICICI Bank
                                            </option>

                                            <option value="Axis">
                                                Axis Bank
                                            </option>

                                            <option value="PNB">
                                                PNB
                                            </option>

                                            <option value="BOB">
                                                Bank of Baroda
                                            </option>

                                            <option value="Canara">
                                                Canara Bank
                                            </option>

                                            <option value="Kotak">
                                                Kotak Mahindra
                                            </option>

                                        </select>

                                    </div>


                                    <div className="sc-flow-arrow">
                                        →
                                    </div>


                                    <div>

                                        <label>
                                            Receiver bank
                                        </label>

                                        <select
                                            value={receiverBank}
                                            onChange={(e) =>
                                                setReceiverBank(e.target.value)
                                            }
                                            required
                                        >

                                            <option value="">
                                                Select bank
                                            </option>

                                            <option value="SBI">
                                                SBI
                                            </option>

                                            <option value="HDFC">
                                                HDFC Bank
                                            </option>

                                            <option value="ICICI">
                                                ICICI Bank
                                            </option>

                                            <option value="Axis">
                                                Axis Bank
                                            </option>

                                            <option value="PNB">
                                                PNB
                                            </option>

                                            <option value="BOB">
                                                Bank of Baroda
                                            </option>

                                            <option value="Canara">
                                                Canara Bank
                                            </option>

                                            <option value="Kotak">
                                                Kotak Mahindra
                                            </option>

                                        </select>

                                    </div>

                                </div>


                                {/* ANALYZE BUTTON */}

                                <button
                                    className="sc-analyze-button"
                                    type="submit"
                                    disabled={loading}
                                >

                                    {loading ? (
                                        <>
                                            <span className="sc-spinner"></span>
                                            Analyzing transaction...
                                        </>
                                    ) : (
                                        <>
                                            Analyze Payment
                                            <span>→</span>
                                        </>
                                    )}

                                </button>

                            </form>

                        </section>


                        {/* SECURITY INTELLIGENCE */}

                        <aside className="sc-card sc-intelligence-card">

                            <div className="sc-intel-glow"></div>


                            <div className="sc-card-heading">

                                <div className="sc-icon-box purple">
                                    ✦
                                </div>

                                <div>

                                    <h2>
                                        Security intelligence
                                    </h2>

                                    <p>
                                        Multi-layer transaction analysis
                                    </p>

                                </div>

                            </div>


                            <div className="sc-security-stack">

                                <div className="sc-security-item">

                                    <div className="sc-security-icon">
                                        ✦
                                    </div>

                                    <div>

                                        <strong>
                                            AI Diagnosis
                                        </strong>

                                        <small>
                                            {loading
                                                ? "Analyzing..."
                                                : result
                                                    ? "Analysis complete"
                                                    : "Waiting for transaction"}
                                        </small>

                                    </div>

                                    <span>
                                        {result ? "✓" : "—"}
                                    </span>

                                </div>


                                <div className="sc-security-item">

                                    <div className="sc-security-icon green">
                                        ◈
                                    </div>

                                    <div>

                                        <strong>
                                            Fraud Detection
                                        </strong>

                                        <small>
                                            Behavioral risk assessment
                                        </small>

                                    </div>

                                    <span>
                                        {result ? "✓" : "—"}
                                    </span>

                                </div>


                                <div className="sc-security-item">

                                    <div className="sc-security-icon cyan">
                                        ⬡
                                    </div>

                                    <div>

                                        <strong>
                                            Blockchain
                                        </strong>

                                        <small>
                                            Transaction fingerprint
                                        </small>

                                    </div>

                                    <span>
                                        {result ? "✓" : "—"}
                                    </span>

                                </div>

                            </div>


                            {/* EMPTY */}

                            {!result && !loading && (

                                <div className="sc-empty-intelligence">

                                    <div className="sc-radar">
                                        <div></div>
                                    </div>

                                    <strong>
                                        Ready to investigate
                                    </strong>

                                    <p>
                                        Submit a transaction and SecureChain
                                        will build its security profile.
                                    </p>

                                </div>

                            )}


                            {/* PROCESSING */}

                            {loading && (

                                <div className="sc-processing">

                                    <div className="sc-processing-line"></div>

                                    <strong>
                                        SecureChain is investigating...
                                    </strong>

                                    <div className="sc-processing-steps">

                                        <span>
                                            ✓ Reading transaction
                                        </span>

                                        <span>
                                            ✓ Running fraud model
                                        </span>

                                        <span>
                                            ✓ Generating AI explanation
                                        </span>

                                        <span>
                                            ✓ Creating blockchain fingerprint
                                        </span>

                                    </div>

                                </div>

                            )}


                            {/* RISK PREVIEW */}

                            {result && (

                                <div className="sc-risk-preview">

                                    <div className="sc-risk-top">

                                        <span>
                                            Fraud risk
                                        </span>

                                        <strong>
                                            {risk}%
                                        </strong>

                                    </div>


                                    <div className="sc-risk-bar">

                                        <div
                                            className={riskClass}
                                            style={{
                                                width: `${Math.min(
                                                    risk,
                                                    100
                                                )}%`
                                            }}
                                        ></div>

                                    </div>


                                    <div className="sc-risk-bottom">

                                        <span>
                                            {riskLabel}
                                        </span>

                                        <span>
                                            0 — 100
                                        </span>

                                    </div>

                                </div>

                            )}

                        </aside>

                    </div>


                    {/* RESULT */}

                    {result && (

                        <section className="sc-result">

                            <div className="sc-result-header">

                                <div>

                                    <div className="sc-eyebrow">
                                        ANALYSIS COMPLETE
                                    </div>

                                    <h2>
                                        Transaction intelligence report
                                    </h2>

                                </div>


                                <span
                                    className={
                                        result.status === "SUCCESS"
                                            ? "sc-result-status success"
                                            : "sc-result-status danger"
                                    }
                                >
                                    {result.status}
                                </span>

                            </div>


                            <div className="sc-result-grid">

                                <div className="sc-result-main">

                                    <div className="sc-result-block">

                                        <span>
                                            Transaction
                                        </span>

                                        <strong>
                                            {result.transaction_id}
                                        </strong>

                                    </div>


                                    <div className="sc-result-block danger-block">

                                        <span>
                                            Root cause
                                        </span>

                                        <strong>
                                            {result.root_cause}
                                        </strong>

                                    </div>


                                    <div className="sc-result-block ai-block">

                                        <span>
                                            AI explanation
                                        </span>

                                        <p>
                                            {result.ai_explanation}
                                        </p>

                                    </div>


                                    <div className="sc-result-block recommendation-block">

                                        <span>
                                            Recommended action
                                        </span>

                                        <p>
                                            {result.recommendation}
                                        </p>

                                    </div>

                                </div>


                                <div className="sc-result-side">

                                    <div className="sc-risk-card">

                                        <span>
                                            Fraud risk score
                                        </span>

                                        <div className="sc-risk-number">

                                            {risk}

                                            <small>
                                                /100
                                            </small>

                                        </div>


                                        <div className="sc-risk-bar">

                                            <div
                                                className={riskClass}
                                                style={{
                                                    width: `${Math.min(
                                                        risk,
                                                        100
                                                    )}%`
                                                }}
                                            ></div>

                                        </div>


                                        <strong>
                                            {riskLabel}
                                        </strong>

                                    </div>


                                    <div className="sc-blockchain-card">

                                        <div className="sc-chain-icon">
                                            ⬡
                                        </div>

                                        <div>

                                            <span>
                                                Blockchain verification
                                            </span>

                                            <strong>
                                                ✓ Verified successfully
                                            </strong>

                                        </div>


                                        <code>
                                            {result.blockchain_hash}
                                        </code>

                                    </div>

                                </div>

                            </div>


                            {/* ACTIONS */}

                            <div className="sc-result-actions">

                                <button
                                    className="sc-secondary-button"
                                    onClick={() => window.print()}
                                >
                                    🖨 Print report
                                </button>


                                <button
                                    className="sc-primary-button"
                                    onClick={resetForm}
                                >
                                    Analyze another payment →
                                </button>

                            </div>

                        </section>

                    )}

                </section>

            </main>

            <BottomNav />
        </>
    );
}

export default Analyze;