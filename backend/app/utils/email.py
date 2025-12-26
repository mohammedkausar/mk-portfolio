import os
import resend
from app.schemas import ContactRequest

resend.api_key = os.getenv("RESEND_API_KEY")

def send_contact_email(data: ContactRequest):
    response = resend.Emails.send({
        "from": os.getenv("FROM_EMAIL"),
        "to": os.getenv("TO_EMAIL"),
        "subject": f"New contact from {data.name}",
        "html": f"""
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>WhatsApp:</strong> {data.whatsapp}</p>
        <p><strong>Message:</strong></p>
        <p>{data.message}</p>
        """
    })

    if not response or "id" not in response:
        raise RuntimeError("Email send failed")

    return response
