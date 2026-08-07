from fastapi import APIRouter

router = APIRouter(tags=["Health"])


@router.get("/")
def root():
    return {
        "message": "AI Vision Studio Backend Running 🚀"
    }


@router.get("/health")
def health():
    return {
        "status": "healthy"
    }