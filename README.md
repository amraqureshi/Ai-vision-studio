# 🚀 AI Vision Studio

> **AI-powered object detection built with React, FastAPI, and YOLOv11.**

AI Vision Studio is a full-stack computer vision application that allows users to upload images and detect objects using a **YOLOv11** deep learning model.

The project connects a modern **React + TypeScript frontend** with a **FastAPI backend** and an **Ultralytics YOLOv11 detection service**, creating a complete end-to-end AI inference workflow.

---

## ✨ What It Does

AI Vision Studio allows a user to:

1. Upload an image through the web interface.
2. Send the image to the FastAPI backend.
3. Process the image using YOLOv11.
4. Detect objects present in the image.
5. Extract the detected object classes and confidence scores.
6. Return the results through the API.
7. Display the results directly in the frontend.

### 🔄 Detection Pipeline

```text
Image Upload
     ↓
React + TypeScript
     ↓
FastAPI REST API
     ↓
YOLOv11 / Ultralytics
     ↓
Object Detection
     ↓
Class + Confidence
     ↓
JSON Response
     ↓
Detection Results in UI

🎯 Features

AI Object Detection
YOLOv11-powered object detection
Image upload and inference
Multiple objects detected from a single image
Object class identification
Confidence scores for detections
Real AI inference through the backend
Detection results displayed in the frontend
Frontend
React-based interface
TypeScript
Vite
Tailwind CSS
Image detection page
Image upload functionality
Backend API integration
Detection result display
Confidence score display
Backend
FastAPI REST API
Image upload endpoint
YOLO detection service
Health check endpoints
Swagger/OpenAPI documentation
SQLite database
SQLAlchemy ORM
User model
Password hashing foundation
Authentication structure

🖼️ Example Detection

The application was tested using a sample image containing a bus and multiple people.

Detection Result
4 persons
1 bus

Example confidence scores returned by YOLO:

Bus     → 94.02%
Person  → 88.82%
Person  → 87.83%
Person  → 85.58%
Person  → 62.19%

This verified that the YOLO model was successfully loaded and that the backend could perform real object detection on an uploaded image.

🧠 How It Works

The project separates the frontend, backend, and AI inference layers.

1. Frontend

The user selects an image from the Image Detection page.

The React frontend sends the image to the backend using a multipart form-data request.

2. FastAPI Backend

FastAPI receives the uploaded image through:

POST /api/detection/image

The backend temporarily processes the uploaded image and passes it to the YOLO detection service.

3. YOLOv11

The detection service loads the YOLOv11 model using Ultralytics:

from ultralytics import YOLO

model = YOLO("yolo11n.pt")

The image is then passed to the model for inference.

4. Detection Results

YOLO returns detection information including:

Object class
Confidence score
Bounding box information

The backend extracts the relevant information and returns a simplified JSON response.

5. Frontend Display

The React frontend receives the response and displays the detected objects and confidence scores to the user.

🛠️ Tech Stack
Frontend
Technology	Purpose
React	User interface
TypeScript	Type-safe development
Vite	Development and build tool
Tailwind CSS	Styling
Backend
Technology	Purpose
Python	Backend development
FastAPI	REST API
Uvicorn	ASGI server
SQLAlchemy	ORM
SQLite	Database
Pydantic	Data validation
Pydantic Settings	Configuration
Passlib	Password hashing
AI / Computer Vision
Technology	Purpose
YOLOv11	Object detection
Ultralytics	YOLO framework
PyTorch	Deep learning
Torchvision	Computer vision utilities
OpenCV	Image processing
Pillow	Image handling
Development
Git
GitHub
VS Code
Swagger / OpenAPI
npm
Python Virtual Environment

🏗️ Project Architecture

AI Vision Studio follows a simple full-stack architecture:

┌──────────────────────┐
│    React Frontend    │
│  TypeScript + Vite   │
└──────────┬───────────┘
           │
           │ HTTP Request
           ▼
┌──────────────────────┐
│   FastAPI Backend    │
│      REST API        │
└──────────┬───────────┘
           │
           │ Image
           ▼
┌──────────────────────┐
│      YOLOv11         │
│     Detection        │
└──────────┬───────────┘
           │
           │ Results
           ▼
┌──────────────────────┐
│ Classes + Confidence │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│    React Results     │
│         UI           │
└──────────────────────┘

📂 Project Structure

AI Vision Studio/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   └── routes/
│   │   │       ├── auth.py
│   │   │       ├── detection.py
│   │   │       └── health.py
│   │   │
│   │   ├── core/
│   │   │   └── config.py
│   │   │
│   │   ├── database/
│   │   │   ├── database.py
│   │   │   ├── dependencies.py
│   │   │   ├── init_db.py
│   │   │   └── models.py
│   │   │
│   │   ├── schemas/
│   │   │
│   │   ├── services/
│   │   │   ├── auth_service.py
│   │   │   └── detection_service.py
│   │   │
│   │   └── utils/
│   │
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── types/
│   │   └── ...
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── .gitignore
└── README.md
🔌 API
Health Check
Root
GET /

Example response:

{
  "message": "AI Vision Studio Backend Running 🚀"
}
Health
GET /health

Example response:

{
  "status": "healthy"
}

🖼️ Image Detection

Endpoint
POST /api/detection/image
Request

The endpoint accepts an image using:

multipart/form-data
Example Response
{
  "filename": "bus.jpg",
  "detections": [
    {
      "class": "bus",
      "confidence": 0.9402
    },
    {
      "class": "person",
      "confidence": 0.8882
    },
    {
      "class": "person",
      "confidence": 0.8783
    }
  ]
}
📚 Swagger API Documentation

FastAPI provides interactive API documentation through Swagger.

After starting the backend, open:

http://127.0.0.1:8000/docs

The detection endpoint can be tested directly from Swagger:

POST /api/detection/image

Select an image, click Execute, and the backend will run YOLO inference and return the detection results.

The image detection endpoint was successfully tested through Swagger.

🗄️ Database

The backend uses SQLite with SQLAlchemy.

A user model has been implemented with fields including:

id
username
email
hashed_password
created_at

The database layer is separated from the API and service layers to keep the backend modular and maintainable.

🔐 Authentication Foundation

The project includes the foundation for user authentication.

Current backend components include:

User model
User schema
Registration structure
Authentication service
Password hashing
Authentication routing
Database integration

Complete JWT authentication and protected routes are planned as future improvements.

🧪 Testing & Verification

The application was tested at multiple levels during development.

YOLO Model

The YOLO model was successfully loaded and tested independently.

The detection service successfully processed an image and returned YOLO detection results.

Backend

Verified:

FastAPI startup
Root endpoint
Health endpoint
Swagger documentation
Image upload endpoint
YOLO inference
Detection response
Frontend

The frontend was successfully built using:

npm run build

The TypeScript compilation and Vite production build completed successfully.

End-to-End Flow

The complete image detection workflow was verified:

Frontend
   ↓
Image Upload
   ↓
FastAPI
   ↓
YOLOv11
   ↓
Detection Results
   ↓
FastAPI JSON
   ↓
Frontend Display

📊 Current Status

✅ Completed

Frontend
React application
TypeScript
Vite
Tailwind CSS
Image Detection page
Image upload
Backend integration
Detection result display
Confidence score display
Production build verification
Backend
FastAPI application
REST API routing
Health endpoints
Image upload API
YOLO detection service
Swagger documentation
SQLite integration
SQLAlchemy setup
User model
Authentication foundation
Password hashing
AI
Ultralytics YOLO integration
YOLOv11 model
Image inference
Object class extraction
Confidence score extraction
Successful detection testing
Integration
React → FastAPI
FastAPI → YOLOv11
YOLOv11 → FastAPI
FastAPI → React
Complete image detection workflow

🚧 Future Improvements


The current version focuses on image-based object detection.

Planned improvements include:

🔐 Authentication

Complete JWT authentication
Login functionality
Protected routes
User sessions

🎥 Video Detection

Video upload
Frame-by-frame detection
Object tracking

📷 Webcam Detection

Live webcam feed
Real-time object detection
Live confidence scores

📊 Analytics

Detection history
Object frequency statistics
Detection charts
Recent detections

📄 Reports

Export detection results
CSV/JSON export
Downloadable reports

☁️ Deployment

Production frontend deployment
Backend deployment
Cloud database
Environment configuration
Monitoring

🗺️ Roadmap

Feature	Status
Project Architecture	✅ Completed
React Frontend	✅ Completed
FastAPI Backend	✅ Completed
SQLite + SQLAlchemy	✅ Completed
Authentication Foundation	✅ Completed
YOLOv11 Integration	✅ Completed
Image Detection API	✅ Completed
Frontend Detection Integration	✅ Completed
JWT Authentication	🔜 Planned
Detection History	🔜 Planned
Video Detection	🔜 Planned
Webcam Detection	🔜 Planned
Analytics	🔜 Planned
Reports	🔜 Planned
Deployment	🔜 Planned

🔐 Security & Configuration

Sensitive configuration files are excluded from version control.

The repository ignores development and generated files such as:

.env
venv/
node_modules/
__pycache__/
*.pyc
temporary uploaded files
generated detection outputs
build/cache files

This keeps environment-specific files and generated artifacts out of the source repository.

🚀 Getting Started

Prerequisites

Make sure you have:

Python 3.12
Node.js
npm
Git
1. Clone the Repository
git clone https://github.com/amraqureshi/Ai-vision-studio.git
cd Ai-vision-studio
2. Backend Setup

Navigate to the backend:

cd backend

Create a virtual environment:

python -m venv venv

Activate it on Windows:

venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt

Start the FastAPI server:

uvicorn main:app --reload

Backend:

http://127.0.0.1:8000

Swagger:

http://127.0.0.1:8000/docs
3. Frontend Setup

Open another terminal and navigate to:

cd frontend

Install dependencies:

npm install

Start the frontend:

npm run dev

Vite will provide the frontend URL, usually:

http://localhost:5173

▶️ Running the Application

Start the backend:

cd backend
venv\Scripts\activate
uvicorn main:app --reload

Then start the frontend in another terminal:

cd frontend
npm run dev

Open the frontend in your browser and navigate to the Image Detection page.

Upload an image and the application will perform the complete detection workflow.

💡 Why This Project?

AI Vision Studio was built to explore how an AI/ML model can be turned into a usable web application rather than running only inside a notebook or Python script.

The project combines:

Artificial Intelligence
Computer Vision
Deep Learning
REST APIs
Backend development
Frontend development
Database integration

It demonstrates the complete journey from image upload to AI inference to user-facing results.

🎓 Learning Outcomes

Through this project, the following concepts were explored:

Integrating YOLO with Python applications
Running object detection inference
Working with Ultralytics
Building REST APIs with FastAPI
Handling image uploads
Connecting React to a Python backend
Returning AI results through JSON
Displaying model predictions in a frontend
Working with SQLAlchemy and SQLite
Structuring a full-stack application
Using Git and GitHub for project management


🤝 Contributing

Contributions and suggestions are welcome.

To contribute:

Fork the repository
Create a new branch
Make your changes
Commit your changes
Push the branch
Open a pull request

📄 License

This project was developed for educational and internship purposes.

👨‍💻 Author
Amra Qureshi

B.E. Artificial Intelligence & Data Science

GitHub:
https://github.com/amraqureshi

Project:
https://github.com/amraqureshi/Ai-vision-studio

🙏 Acknowledgements

This project uses the following open-source technologies:

Ultralytics YOLO
FastAPI
React
PyTorch
Vite
SQLAlchemy

⭐ AI Vision Studio

React + TypeScript + FastAPI + YOLOv11

Turning AI object detection into a practical full-stack web application.
