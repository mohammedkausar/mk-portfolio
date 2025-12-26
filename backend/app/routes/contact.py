import logging
from fastapi import APIRouter, HTTPException
from app.schemas import ContactRequest
from app.utils.email import send_contact_email
from dotenv import load_dotenv
load_dotenv()

router = APIRouter()
logger = logging.getLogger("portfolio-backend.contact")

@router.post("/contact")
async def submit_contact(data: ContactRequest):
    logger.info(
        "Contact request received | name=%s | email=%s",
        data.name,
        data.email,
    )

    try:
       send_contact_email(data)
    except Exception as e:
        logger.error("Contact processing failed", exc_info=e)
        raise HTTPException(status_code=500, detail="Internal server error")

    logger.info("Contact request processed successfully")

    return {
        "status": "success",
        "message": "Contact details received"
    }
