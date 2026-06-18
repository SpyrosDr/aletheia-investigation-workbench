# Aletheia Investigation Workbench

An early-stage, open-source workbench for organizing fraud-related evidence, mapping risk indicators, and drafting explainable investigation summaries.

The goal is to support investigators, auditors, compliance teams, and fraud analysts with a structured place to capture case context, add evidence items, identify possible fraud patterns, and prepare clear next-step recommendations.

## Current Status

This project is currently an MVP/prototype.

It includes:

- A React frontend for entering case context, case description, and multiple evidence items
- A FastAPI backend for assessing a submitted case
- Basic risk-indicator detection for vendor/procurement, account-related, and transaction-related signals
- A simple draft summary and suggested next steps

The current backend logic is intentionally simple. The long-term direction is to evolve this into a more capable AI-assisted investigation workflow with better evidence handling, typology mapping, timelines, and explainable outputs.

## Why This Exists

Fraud investigations often involve scattered notes, invoices, emails, transaction records, screenshots, and assumptions. Even early case assessment can become messy quickly.

This project explores how an investigation workbench could help users:

- Structure messy evidence into case-ready inputs
- Identify possible fraud typologies and risk indicators
- Build a timeline of relevant events
- Document assumptions, gaps, and next steps
- Produce clear, reviewable investigation summaries

## Planned Direction

Near-term ideas include:

- Cleaner two-panel investigation layout
- Evidence list and evidence timeline
- Optional evidence categories with automatic classification later
- Case typology library, such as vendor fraud, account takeover, AML red flags, insider misuse, and document manipulation
- Better scoring logic and clearer explanations
- Exportable case summaries
- Example synthetic fraud cases for testing and demonstration

Longer-term ideas include:

- AI-assisted evidence classification
- AI-assisted timeline construction
- Entity extraction for people, companies, accounts, invoices, and transactions
- Investigation checklist generation
- Analyst review controls and audit trail concepts

## Important Note

This project is not ready for real confidential investigations.

Use only synthetic, anonymized, or demo data. Do not upload real sensitive case material, personal data, banking data, client records, or confidential documents.

## Tech Stack

- Frontend: React with Vite
- Backend: FastAPI
- Language: JavaScript and Python

## Run Locally

### Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python3 -m uvicorn app.main:app --reload
```

The backend runs on:

```text
http://127.0.0.1:8000
```

### Frontend

```bash
cd frontend
npm install
npm run dev -- --host 0.0.0.0
```

The frontend usually runs on:

```text
http://localhost:5173
```

## How To Contribute

This project is still small, so the best contributions are practical and focused.

Useful areas include:

- Improving the frontend layout and user experience
- Adding better evidence-item handling
- Creating synthetic fraud case examples
- Improving the backend assessment logic
- Adding tests
- Writing documentation for fraud typologies and investigation workflows
- Suggesting realistic investigation features from audit, compliance, AML, or fraud-prevention experience

If you are not sure where to start, open an issue with an idea or improvement suggestion.

## License

MIT License.
