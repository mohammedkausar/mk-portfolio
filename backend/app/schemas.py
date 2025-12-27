from typing import Optional
from pydantic import BaseModel, EmailStr

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    whatsapp: str
    message: str
    company: Optional[str] = None
