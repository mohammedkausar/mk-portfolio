from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.contact import router as contact_router
from app.logging_config import setup_logging
import logging
from dotenv import load_dotenv
load_dotenv()

setup_logging()
logger = logging.getLogger("portfolio-backend")

app = FastAPI(title="Portfolio Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
       "*"
    ],
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)

app.include_router(contact_router, prefix="/api")

@app.get("/")
def health():
    logger.info("Health check hit")
    return {"status": "ok"}
