from fastapi import APIRouter

from app.schemas.case_schema import CaseInput
from app.services.ai_service import assess_case_risk


router = APIRouter(
    prefix="/ai",
    tags=["AI"],
)


@router.post("/assess-case")
def assess_case(case: CaseInput):
    return assess_case_risk(case)
