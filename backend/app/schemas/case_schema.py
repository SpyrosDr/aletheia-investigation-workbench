from pydantic import BaseModel, Field


class CaseInput(BaseModel):
    context: str
    description: str
    evidence_items: list[str] = Field(default_factory=list)
