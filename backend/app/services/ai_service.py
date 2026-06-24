from app.ai.providers.mock_provider import assess_case
from app.schemas.case_schema import CaseInput


def assess_case_risk(case: CaseInput) -> dict:
    return assess_case(case)
