from fastapi import APIRouter, UploadFile, File
from app.services.detection_service import detect_image

router = APIRouter(
    prefix="/api/detection",
    tags=["Detection"]
)


@router.post("/image")
async def detect_uploaded_image(file: UploadFile = File(...)):
    image_data = await file.read()

    with open("temp_image.jpg", "wb") as f:
        f.write(image_data)

    results = detect_image("temp_image.jpg")

    return {
        "filename": file.filename,
        "detections": [
            {
                "class": results[0].names[int(box.cls[0])],
                "confidence": float(box.conf[0])
            }
            for box in results[0].boxes
        ]
    }