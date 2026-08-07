from fastapi import APIRouter

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)
from app.schemas.user import UserCreate


@router.post("/register")
def register(user: UserCreate):
    return {
        "message": "User received successfully!",
        "user": user
    }