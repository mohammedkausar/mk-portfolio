import logging
from fastapi import APIRouter, HTTPException, status, Request
from app.schemas import ContactRequest
from app.utils.email import send_contact_email
from app.utils.rate_limit import is_allowed

router = APIRouter()
logger = logging.getLogger("portfolio-backend.contact")

@router.post("/contact")
async def submit_contact(data: ContactRequest, request: Request):
    logger.info(
        "Contact request received | name=%s | email=%s",
        data.name,
        data.email,
    )

    ip = (
        request.headers.get("x-forwarded-for", "")
        .split(",")[0]
        .strip()
        or request.client.host
    )

    # Rate limit
    if not is_allowed(ip):
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="You can submit this form only 3 times per day."
        )

    # Honeypot bot check
    if data.company:
        logger.warning("Bot detected | email=%s", data.email)
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="Too many requests. Please try again later."
        )

    try:
        send_contact_email(data)
    except HTTPException:
        raise
    except Exception:
        logger.error("Contact processing failed", exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Something went wrong! Please try again later."
        )

    logger.info("Contact request processed successfully")

    return {
        "status": "success",
        "message": "Contact details received"
    }
