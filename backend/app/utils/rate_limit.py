# app/utils/rate_limit.py
import time
from collections import defaultdict

REQUESTS = defaultdict(list)
WINDOW = 24 * 60 * 60   # 24 hours
MAX_REQUESTS = 3       # per IP per day

def is_allowed(ip: str) -> bool:
    now = time.time()

    # keep only requests from last 24h
    REQUESTS[ip] = [t for t in REQUESTS[ip] if now - t < WINDOW]

    if len(REQUESTS[ip]) >= MAX_REQUESTS:
        return False

    REQUESTS[ip].append(now)
    return True
