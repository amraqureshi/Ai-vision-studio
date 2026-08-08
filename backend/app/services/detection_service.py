from ultralytics import YOLO

model = YOLO("yolo11n.pt")
def detect_image(image_path: str):
    results = model(image_path)
    return results