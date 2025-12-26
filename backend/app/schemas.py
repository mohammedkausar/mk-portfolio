from pydantic import BaseModel, EmailStr

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    whatsapp: str
    message: str
