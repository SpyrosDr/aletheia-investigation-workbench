# Aletheia Investigation Workbench

Aletheia Investigation Workbench is an AI-assisted fraud investigation backend designed to help investigators structure, assess, and document fraud-related cases.

The project is not intended to be a fraud detection engine, AML transaction monitoring system, or alert-generation platform. Instead, it focuses on the investigation phase after a suspicious case, alert, concern, or internal issue has already been identified.

The backend currently supports a case-based workflow where a user can provide:

* an investigation context,
* a case description,
* evidence items or supporting notes.

The system then returns an initial structured assessment, including risk indicators, suggested next steps, and a draft summary.

## Current MVP Scope

The current backend MVP includes:

* FastAPI backend setup,
* case assessment endpoint,
* modular route structure,
* schema layer for request validation,
* service layer for investigation logic,
* initial AI route structure,
* placeholder AI provider layer,
* sample case folder for fake demonstration data.

The active endpoint is:

```txt
POST /ai/assess-case
```

This endpoint accepts a case context, description, and evidence items, then returns a basic risk assessment.

## Intended Investigation Workflow

The long-term workflow is:

```txt
Case creation
↓
Evidence intake
↓
Entity extraction
↓
Timeline construction
↓
Fraud typology mapping
↓
Risk assessment
↓
Investigation summary
↓
Case package
```

The AI component is intended to support, not replace, the investigator. Human review remains central to all conclusions.

## Planned Features

Planned backend features include:

* case creation and storage,
* evidence item management,
* mock AI provider,
* real AI provider integration,
* entity extraction,
* timeline generation,
* risk assessment,
* report generation,
* fake sample cases for testing and demonstration,
* safe configuration using environment variables.

## Security and Data Handling

This repository should contain only source code and fake sample evidence.

It should never contain:

* real API keys,
* real customer data,
* real investigation files,
* real financial records,
* confidential evidence,
* production credentials.

Local secrets should be stored in a `.env` file, which must not be committed to GitHub. Public configuration examples should be stored in `.env.example`.
