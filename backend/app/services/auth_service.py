from sqlalchemy.orm import Session

from app.database.models import User
from app.schemas.user import UserCreate
from app.core.security import hash_password