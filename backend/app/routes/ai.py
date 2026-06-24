from fastapi import APIRouter

from app.schemas.case_schema import CaseAssessmentResponse, CaseInput
from app.services.ai_service import assess_case_risk


router = APIRouter(
    prefix="/ai",
    tags=["AI"],
)


@router.post("/assess-case", response_model=CaseAssessmentResponse)
def assess_case(case: CaseInput):
    return assess_case_risk(case)
