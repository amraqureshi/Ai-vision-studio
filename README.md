# 🚀 AI Vision Studio

> A full-stack AI-powered object detection platform built with **React, TypeScript, FastAPI, and YOLOv11**.

AI Vision Studio is a computer vision web application that allows users to upload images and detect objects using a YOLOv11 object detection model.

The project combines a modern React frontend with a Python FastAPI backend and an Ultralytics YOLOv11 detection service to create a complete end-to-end AI application.

---

## 📌 Overview

AI Vision Studio demonstrates how a deep learning object detection model can be integrated into a full-stack web application.

Users can upload an image through the frontend. The image is sent to the FastAPI backend, where it is processed using YOLOv11. The backend extracts the detected object classes and confidence scores and returns the results to the frontend.

### 🔄 Application Workflow

```text
                    User
                     │
                     ▼
          ┌─────────────────────┐
          │   React Frontend    │
          │ TypeScript + Vite   │
          └──────────┬──────────┘
                     │
                     │ Image Upload
                     ▼
          ┌─────────────────────┐
          │   FastAPI Backend   │
          │      REST API       │
          └──────────┬──────────┘
                     │
                     │ Uploaded Image
                     ▼
          ┌─────────────────────┐
          │      YOLOv11        │
          │    Ultralytics      │
          └──────────┬──────────┘
                     │
                     │ Detection
                     ▼
          ┌─────────────────────┐
          │ Object Class +      │
          │ Confidence Score    │
          └──────────┬──────────┘
                     │
                     ▼
          ┌─────────────────────┐
          │   React Frontend    │
          │  Results Display    │
          └─────────────────────┘
✨ Features
🎯 AI Object Detection
Image-based object detection
YOLOv11 integration
Ultralytics object detection
Multiple object detection in a single image
Object class identification
Confidence score for each detection
Detection results returned as JSON
Detection results displayed in the frontend
🖼️ Image Upload & Detection

The application provides an image detection interface where users can upload an image.

The uploaded image is sent to the backend through a REST API.

The backend then:

Receives the uploaded image
Temporarily processes the image
Passes the image to YOLOv11
Runs object detection
Extracts detected classes
Extracts confidence scores
Returns the results to the frontend
Detection Flow
Image
  ↓
Upload
  ↓
FastAPI
  ↓
YOLOv11
  ↓
Object Detection
  ↓
Class + Confidence
  ↓
JSON Response
  ↓
Frontend
🌐 Backend

The backend is built using FastAPI.

It provides the REST API used by the frontend and acts as the connection between the web application and the YOLO model.

Backend functionality
FastAPI application
REST API routing
Health check API
Image upload API
YOLO detection service
JSON responses
Swagger/OpenAPI documentation
SQLite database
SQLAlchemy integration
User model
Authentication foundation
Password hashing utilities
🤖 YOLOv11 Integration

AI Vision Studio uses the Ultralytics YOLOv11 model for object detection.

The model is loaded by the detection service:

from ultralytics import YOLO

model = YOLO("yolo11n.pt")

The uploaded image is passed to the model:

results = model(image_path)

The detection results contain information such as:

Object class
Confidence score
Bounding box coordinates
Detection information

The backend extracts the relevant information and converts it into a simple JSON response for the frontend.

🧪 Detection Testing

The YOLO detection service was tested independently before connecting it to the API.

A sample image containing a bus and multiple people was processed successfully.

Example result
4 persons
1 bus

Example confidence scores returned by YOLO:

Bus     → 94.02%
Person  → 88.82%
Person  → 87.83%
Person  → 85.58%
Person  → 62.19%

This verified that the YOLO model was correctly loading and performing object detection.

🔌 API
Health Endpoints
Root
GET /

Example response:

{
  "message": "AI Vision Studio Backend Running 🚀"
}
Health Check
GET /health

Example response:

{
  "status": "healthy"
}
Authentication
Register
POST /auth/register

The project contains the backend structure for user registration, including the user model, schemas, password hashing, and authentication service foundation.

Image Detection
Detect Image
POST /api/detection/image

The endpoint accepts an image using:

multipart/form-data

The uploaded image is processed using YOLOv11.

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
📚 Swagger Documentation

FastAPI automatically generates interactive API documentation using Swagger/OpenAPI.

Once the backend is running, open:

http://127.0.0.1:8000/docs

The Swagger interface allows the available APIs to be tested directly from the browser.

For image detection:

POST /api/detection/image

The image can be selected using the file upload field and the endpoint can be executed directly from Swagger.

The endpoint was successfully tested and returned an HTTP 200 OK response with detection results.

🎨 Frontend

The frontend is built using:

React
TypeScript
Vite
Tailwind CSS

The frontend communicates with the FastAPI backend through API requests.

Frontend functionality completed
Image Detection page
Image upload interface
Backend API integration
Image upload to FastAPI
Receiving YOLO detection results
Displaying detected object classes
Displaying confidence scores
Production build verification

The frontend was successfully verified using:

npm run build

The TypeScript compilation and Vite production build completed successfully.

🗄️ Database

The backend uses SQLite and SQLAlchemy.

A user model has been implemented with fields including:

id
username
email
hashed_password
created_at

The database layer is separated from the API and service layers to maintain a modular backend architecture.

👤 Authentication Foundation

AI Vision Studio includes the foundation for authentication.

Implemented components include:

User model
User registration structure
User schema
Authentication service
Password hashing
Authentication API routing
Database integration

The authentication system can be extended in the future with complete JWT authentication and protected routes.

🏗️ Architecture

The application follows a modular full-stack architecture.

┌───────────────────────────────────────────────┐
│                  FRONTEND                     │
│                                               │
│        React + TypeScript + Vite              │
│                                               │
│          Image Detection Interface            │
└───────────────────────┬───────────────────────┘
                        │
                        │ REST API
                        ▼
┌───────────────────────────────────────────────┐
│                   BACKEND                     │
│                                               │
│                  FastAPI                      │
│                                               │
│          API Routes + Services                │
└───────────────┬───────────────────┬───────────┘
                │                   │
                ▼                   ▼
      ┌─────────────────┐   ┌─────────────────┐
      │    YOLOv11      │   │ SQLite Database │
      │ Object Detection│   │  + SQLAlchemy   │
      └────────┬────────┘   └─────────────────┘
               │
               ▼
      ┌─────────────────┐
      │ Detection Data  │
      │ Class + Score   │
      └────────┬────────┘
               │
               ▼
        React Results UI
🛠️ Tech Stack
Frontend
Technology	Purpose
React	User interface
TypeScript	Type-safe frontend development
Vite	Frontend development and build tool
Tailwind CSS	UI styling
Backend
Technology	Purpose
Python	Backend programming
FastAPI	REST API framework
Uvicorn	ASGI server
SQLAlchemy	Database ORM
SQLite	Database
Pydantic	Data validation
Pydantic Settings	Configuration management
Passlib	Password hashing
AI / Computer Vision
Technology	Purpose
YOLOv11	Object detection
Ultralytics	YOLO framework
PyTorch	Deep learning framework
Torchvision	Computer vision utilities
OpenCV	Image processing
Pillow	Image handling
Development Tools
Git
GitHub
Visual Studio Code
Swagger / OpenAPI
npm
Python Virtual Environment
📂 Project Structure
AI Vision Studio
│
├── backend
│   │
│   ├── app
│   │   │
│   │   ├── api
│   │   │   └── routes
│   │   │       ├── auth.py
│   │   │       ├── detection.py
│   │   │       └── health.py
│   │   │
│   │   ├── core
│   │   │   └── config.py
│   │   │
│   │   ├── database
│   │   │   ├── database.py
│   │   │   ├── dependencies.py
│   │   │   ├── init_db.py
│   │   │   └── models.py
│   │   │
│   │   ├── schemas
│   │   │
│   │   ├── services
│   │   │   ├── auth_service.py
│   │   │   └── detection_service.py
│   │   │
│   │   └── utils
│   │
│   └── main.py
│
├── frontend
│   │
│   └── src
│       ├── components
│       ├── pages
│       ├── services
│       ├── types
│       └── ...
│
├── .gitignore
└── README.md
🚀 Getting Started
Prerequisites

Make sure you have the following installed:

Python 3.12
Node.js
npm
Git
1. Clone the Repository
git clone https://github.com/amraqureshi/Ai-vision-studio.git

Navigate into the project:

cd Ai-vision-studio
2. Backend Setup

Navigate to the backend:

cd backend

Create a virtual environment:

python -m venv venv

Activate the virtual environment on Windows:

venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt

Start the backend:

uvicorn main:app --reload

The backend will be available at:

http://127.0.0.1:8000
3. Open Swagger

Open:

http://127.0.0.1:8000/docs

You can use Swagger to test:

GET  /
GET  /health
POST /auth/register
POST /api/detection/image
4. Frontend Setup

Open a new terminal.

Navigate to the frontend:

cd frontend

Install dependencies:

npm install

Start the development server:

npm run dev

Vite will provide the local frontend URL, usually:

http://localhost:5173
🔄 Running the Complete Application

Start the backend in one terminal:

cd backend
venv\Scripts\activate
uvicorn main:app --reload

Start the frontend in another terminal:

cd frontend
npm run dev

Then open the frontend in your browser.

Navigate to the image detection page and upload an image.

The application will process the image through the complete pipeline:

React
  ↓
FastAPI
  ↓
Image Upload
  ↓
YOLOv11
  ↓
Object Detection
  ↓
Class + Confidence
  ↓
FastAPI JSON Response
  ↓
React UI
🧪 Testing

The application has been tested at multiple levels.

Backend Testing

The following were verified:

FastAPI server startup
Root endpoint
Health endpoint
Swagger documentation
Image upload endpoint
YOLO model loading
YOLO image inference
Detection response generation
YOLO Testing

The YOLO detection service was directly tested with a sample image.

The model successfully detected:

1 bus
4 persons

The model returned confidence scores for every detection.

API Testing

The image detection endpoint was tested using Swagger.

Endpoint:

POST /api/detection/image

Result:

HTTP 200 OK

The response contained:

Filename
Detected object classes
Confidence scores
Frontend Testing

The frontend production build was verified using:

npm run build

The build completed successfully with TypeScript and Vite.

📊 Current Project Status
✅ Completed
Frontend
React application
TypeScript setup
Vite setup
Tailwind CSS
Image detection interface
Image upload
API integration
Detection results display
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
Pydantic configuration
AI
Ultralytics installation
YOLOv11 model
YOLO detection service
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
Project
Git repository
GitHub repository
.gitignore
Environment configuration
Documentation
README
🚧 Future Improvements

The current project focuses on image-based object detection.

The architecture can be extended with additional features.

🔐 Authentication
Complete JWT authentication
Login functionality
Access tokens
Protected routes
User sessions
🎥 Video Detection
Video upload
Frame-by-frame object detection
Object tracking
Video detection results
📷 Webcam Detection
Live webcam feed
Real-time object detection
Real-time confidence scores
📊 Analytics
Detection history
Object frequency statistics
Detection charts
Recent detections
User-specific analytics
📄 Reports
Export detection results
CSV export
JSON export
Downloadable reports
☁️ Deployment
Production frontend deployment
Production backend deployment
Cloud database
Environment-based configuration
Application monitoring
🗺️ Roadmap
Project Architecture
        ✅
        │
        ▼
React Frontend
        ✅
        │
        ▼
FastAPI Backend
        ✅
        │
        ▼
SQLite + SQLAlchemy
        ✅
        │
        ▼
Authentication Foundation
        ✅
        │
        ▼
YOLOv11 Integration
        ✅
        │
        ▼
Image Detection API
        ✅
        │
        ▼
Frontend Detection Integration
        ✅
        │
        ▼
Complete JWT Authentication
        🔜
        │
        ▼
Detection History
        🔜
        │
        ▼
Video Detection
        🔜
        │
        ▼
Webcam Detection
        🔜
        │
        ▼
Analytics & Reports
        🔜
        │
        ▼
Production Deployment
        🔜
🔐 Security & Configuration

Sensitive configuration files are excluded from version control.

The project uses .gitignore to prevent environment-specific and generated files from being committed.

The following types of files are excluded:

.env
venv/
node_modules/
__pycache__/
*.pyc
temporary uploaded images
generated YOLO outputs
build files
cache files
📈 Example Detection

For testing, a sample image containing a bus and several people was processed.

Input
bus.jpg
YOLO Detection
Bus
Person
Person
Person
Person
Example Confidence
Bus     → 94.02%
Person  → 88.82%
Person  → 87.83%
Person  → 85.58%
Person  → 62.19%

The result demonstrates that the YOLO model can identify multiple objects within the same image and provide confidence values for each detection.

🎓 Project Purpose

AI Vision Studio was developed as a practical full-stack AI project to demonstrate the integration of:

Artificial Intelligence
Computer Vision
Deep Learning
Object Detection
REST APIs
Frontend Development
Backend Development
Database Management

The project demonstrates how a machine learning model can be integrated into a web application and exposed through a REST API.

🌟 Key Highlights
✅ Full-stack AI application
✅ React + TypeScript frontend
✅ FastAPI backend
✅ YOLOv11 object detection
✅ Image upload API
✅ Real AI inference
✅ Detection confidence scores
✅ Swagger API documentation
✅ SQLite + SQLAlchemy
✅ Authentication foundation
✅ Frontend ↔ Backend integration
🤝 Contributing

Contributions, ideas, and suggestions are welcome.

To contribute:

Fork the repository
Create a new branch
Make your changes
Commit your changes
Push your branch
Create a pull request
📄 License

This project was developed for educational and internship purposes.

👨‍💻 Author
Amra Qureshi

B.E. Artificial Intelligence & Data Science

GitHub:

https://github.com/amraqureshi

Project Repository:

https://github.com/amraqureshi/Ai-vision-studio

🙏 Acknowledgements

Special thanks to the open-source technologies used in this project:

Ultralytics
FastAPI
React
PyTorch
Vite
🚀 AI Vision Studio
React + TypeScript + FastAPI + YOLOv11

Turning AI object detection into a practical full-stack web application.
