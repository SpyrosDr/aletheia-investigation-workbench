import { useState } from "react";
import "./App.css";

function App() {
  const [context, setContext] = useState("Auditor reviewing possible vendor misuse");
  const [description, setDescription] = useState("");
  const [evidenceItems, setEvidenceItems] = useState([
    { title: "", content: "", type: "" }
  ]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  function addEvidenceItem() {
    setEvidenceItems([
      ...evidenceItems,
      { title: "", content: "", type: "" }
    ]);
  }

  function updateEvidence(index, field, value) {
    const updated = [...evidenceItems];
    updated[index][field] = value;
    setEvidenceItems(updated);
  }

  async function assessCase() {
    setLoading(true);
    setResult(null);

    const response = await fetch("/api/assess-case", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        context,
        description,
        evidence_items: evidenceItems.map(
          (e) => `${e.title} ${e.content} ${e.type}`
        ),
      }),
    });

    const data = await response.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">Aletheia Investigation Workbench</p>
        <h1>Initial Case Assessment</h1>
        <p className="intro">
          Enter a short case description and supporting evidence. The workbench
          will generate an initial risk view, indicators, next steps, and a draft
          summary.
        </p>

        <label>
          Case context
          <select value={context} onChange={(e) => setContext(e.target.value)}>
            <option>Auditor reviewing possible vendor misuse</option>
            <option>AML analyst reviewing suspicious transactions</option>
            <option>Company checking possible employee asset misuse</option>
            <option>Fraud team reviewing account takeover indicators</option>
          </select>
        </label>

        <label>
          Case description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Example: Several invoices were submitted by a new vendor with similar bank details to an employee."
          />
        </label>

        <h3>Evidence Items</h3>
        
        {evidenceItems.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "8px",
            }}
          >
            <input
              placeholder="Title"
              value={item.title}
              onChange={(e) =>
                updateEvidence(index, "title", e.target.value)
              }
              style={{ width: "100%", marginBottom: "8px" }}
            />
        
            <input
              placeholder="Type (optional)"
              value={item.type}
              onChange={(e) =>
                updateEvidence(index, "type", e.target.value)
              }
              style={{ width: "100%", marginBottom: "8px" }}
            />
        
            <textarea
              placeholder="Evidence details"
              value={item.content}
              onChange={(e) =>
                updateEvidence(index, "content", e.target.value)
              }
            />
          </div>
        ))}
        
        <button type="button" onClick={addEvidenceItem}>
          + Add Evidence Item
        </button>

        <button onClick={assessCase} disabled={loading || !description}>
          {loading ? "Assessing..." : "Assess Case"}
        </button>
      </section>

      {result && (
        <section className="card result">
          <h2>Assessment Result</h2>
          <p>
            <strong>Risk level:</strong> {result.risk_level}
          </p>

          <h3>Risk indicators</h3>
          <ul>
            {result.risk_indicators.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Next steps</h3>
          <ul>
            {result.next_steps.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Draft summary</h3>
          <p>{result.draft_summary}</p>
        </section>
      )}
    </main>
  );
}

export default App;
