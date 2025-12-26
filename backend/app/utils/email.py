import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv
load_dotenv()

def send_contact_email(data):
    msg = EmailMessage()
    msg["Subject"] = f'New Contact Message from - {data.name}'
    msg["From"] = os.getenv("EMAIL_USER")
    msg["To"] = os.getenv("EMAIL_TO")

    msg.set_content(
        f"""
Name: {data.name}
Email: {data.email}
WhatsApp: {data.whatsapp}

Message:
{data.message}
"""
    )

    with smtplib.SMTP(os.getenv("EMAIL_HOST"), int(os.getenv("EMAIL_PORT"))) as server:
        server.starttls()
        server.login(
            os.getenv("EMAIL_USER"),
            os.getenv("EMAIL_PASSWORD"),
        )
        server.send_message(msg)
