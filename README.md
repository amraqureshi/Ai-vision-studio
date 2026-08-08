# 🚀 AI Vision Studio

> A full-stack AI-powered object detection application built with React, FastAPI, and YOLOv11.

AI Vision Studio is a computer vision web application that allows users to upload images and detect objects using a YOLOv11 deep learning model.

The project connects a React + TypeScript frontend with a FastAPI backend and an Ultralytics YOLOv11 detection service to create a complete image detection workflow.

---

## ✨ Features

### 🤖 AI Object Detection

- Upload images through the web interface
- Detect multiple objects in an image
- Powered by YOLOv11
- Identify detected object classes
- Display confidence scores
- Perform real AI inference
- Return detection results through a REST API

### 🎨 Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Image Detection page
- Image upload functionality
- Backend API integration
- Detection results displayed in the UI

### ⚙️ Backend

- FastAPI REST API
- Image upload endpoint
- YOLO detection service
- Health check endpoints
- Swagger/OpenAPI documentation
- SQLite database
- SQLAlchemy ORM
- User model
- Authentication foundation
- Password hashing support

---

## 🧠 How It Works

The application follows an end-to-end image detection pipeline:

```text
User uploads image
        ↓
React Frontend
        ↓
FastAPI Backend
        ↓
YOLOv11 Model
        ↓
Object Detection
        ↓
Class + Confidence
        ↓
JSON Response
        ↓
Results displayed in React
```

### Detection Flow

1. The user selects an image from the Image Detection page.
2. The React frontend sends the image to the FastAPI backend.
3. FastAPI receives the uploaded image.
4. The backend passes the image to the YOLOv11 detection service.
5. YOLOv11 performs object detection.
6. The backend extracts the detected classes and confidence scores.
7. The results are returned as JSON.
8. The frontend displays the detection results.

---

## 🖼️ Example Detection

The detection pipeline was tested using a sample image containing a bus and multiple people.

YOLO successfully detected:

- **1 Bus**
- **4 Persons**

Example confidence scores:

| Object | Confidence |
|---|---:|
| Bus | 94.02% |
| Person | 88.82% |
| Person | 87.83% |
| Person | 85.58% |
| Person | 62.19% |

This confirmed that the YOLO model was successfully loaded and performing real object detection.

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React | User interface |
| TypeScript | Type-safe development |
| Vite | Development and build tool |
| Tailwind CSS | Styling |

### Backend

| Technology | Purpose |
|---|---|
| Python | Backend development |
| FastAPI | REST API |
| Uvicorn | ASGI server |
| SQLAlchemy | Database ORM |
| SQLite | Database |
| Pydantic | Data validation |
| Pydantic Settings | Configuration |
| Passlib | Password hashing |

### AI & Computer Vision

| Technology | Purpose |
|---|---|
| YOLOv11 | Object detection |
| Ultralytics | YOLO framework |
| PyTorch | Deep learning |
| Torchvision | Computer vision utilities |
| OpenCV | Image processing |
| Pillow | Image handling |

### Development Tools

- Git
- GitHub
- Visual Studio Code
- Swagger / OpenAPI
- npm
- Python Virtual Environment

---

## 🏗️ Architecture

```text
┌─────────────────────┐
│   React Frontend    │
│  TypeScript + Vite  │
└──────────┬──────────┘
           │
           │ HTTP Request
           ▼
┌─────────────────────┐
│   FastAPI Backend   │
│      REST API       │
└──────────┬──────────┘
           │
           │ Image
           ▼
┌─────────────────────┐
│      YOLOv11        │
│   Object Detection  │
└──────────┬──────────┘
           │
           │ Detection Results
           ▼
┌─────────────────────┐
│ Class + Confidence  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Detection Results   │
│    in Frontend      │
└─────────────────────┘
```

---

## 📂 Project Structure

```text
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
│   │   ├── services/
│   │   │   ├── auth_service.py
│   │   │   └── detection_service.py
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
```

---

## 🔌 API Endpoints

### Health Check

#### Root

```http
GET /
```

Response:

```json
{
  "message": "AI Vision Studio Backend Running 🚀"
}
```

#### Health

```http
GET /health
```

Response:

```json
{
  "status": "healthy"
}
```

### 🖼️ Image Detection

```http
POST /api/detection/image
```

The endpoint accepts an image using `multipart/form-data`.

Example response:

```json
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
```

---

## 📚 Swagger Documentation

FastAPI provides interactive API documentation through Swagger UI.

After starting the backend, open:

```text
http://127.0.0.1:8000/docs
```

The image detection endpoint can be tested directly from Swagger:

```text
POST /api/detection/image
```

Upload an image, execute the request, and the API returns the detected objects and their confidence scores.

---

## 🗄️ Database

The backend uses **SQLite** with **SQLAlchemy**.

The project includes a user model containing fields such as:

```text
id
username
email
hashed_password
created_at
```

The database layer is separated from the API and service layers to keep the backend modular and maintainable.

---

## 🔐 Authentication Foundation

The project includes the foundation for user authentication.

Current components include:

- User model
- User schema
- Registration structure
- Authentication service
- Password hashing
- Authentication routing
- Database integration

Complete JWT authentication and protected routes are planned for a future version.

---

## 🧪 Testing & Verification

The application was tested at multiple levels.

### YOLO Model Testing

The YOLO detection service was tested independently using a sample image.

The model successfully detected multiple objects and returned confidence scores.

### Backend Testing

Verified:

- FastAPI server startup
- Root endpoint
- Health endpoint
- Swagger documentation
- Image upload endpoint
- YOLO inference
- Detection response

### Frontend Testing

The frontend production build was verified using:

```bash
npm run build
```

The TypeScript compilation and Vite production build completed successfully.

### End-to-End Testing

The complete workflow was verified:

```text
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
JSON Response
   ↓
Frontend Display
```

---

## 📊 Current Status

### ✅ Completed

- React frontend
- TypeScript setup
- Vite setup
- Tailwind CSS
- Image Detection page
- Image upload
- FastAPI backend
- REST API routing
- Health endpoints
- YOLOv11 integration
- YOLO detection service
- Image detection API
- Object class extraction
- Confidence score extraction
- Frontend-to-backend integration
- Detection result display
- SQLite database
- SQLAlchemy setup
- User model
- Password hashing foundation
- Swagger/OpenAPI documentation
- YOLO detection testing
- Frontend production build
- GitHub repository

### 🔜 Planned

- Complete JWT authentication
- Login functionality
- Protected routes
- Detection history
- Video object detection
- Webcam detection
- Advanced analytics
- Detection reports
- Cloud deployment

---

## 🗺️ Roadmap

| Feature | Status |
|---|---|
| Project Architecture | ✅ Completed |
| React Frontend | ✅ Completed |
| FastAPI Backend | ✅ Completed |
| SQLite + SQLAlchemy | ✅ Completed |
| YOLOv11 Integration | ✅ Completed |
| Image Detection API | ✅ Completed |
| Frontend Detection Integration | ✅ Completed |
| Swagger API Testing | ✅ Completed |
| JWT Authentication | 🔜 Planned |
| Detection History | 🔜 Planned |
| Video Detection | 🔜 Planned |
| Webcam Detection | 🔜 Planned |
| Analytics | 🔜 Planned |
| Reports | 🔜 Planned |
| Deployment | 🔜 Planned |

---

## 🔐 Configuration & Git

The repository uses `.gitignore` to keep local and generated files out of version control.

Ignored files include:

```text
.env
venv/
node_modules/
__pycache__/
*.pyc
temporary uploaded files
generated detection outputs
build/cache files
```

This helps keep the repository clean and prevents environment-specific files from being committed.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

- Python 3.12
- Node.js
- npm
- Git

### Clone the Repository

```bash
git clone https://github.com/amraqureshi/Ai-vision-studio.git
cd Ai-vision-studio
```

### Backend Setup

```bash
cd backend
python -m venv venv
```

Activate the virtual environment on Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the backend:

```bash
uvicorn main:app --reload
```

Backend:

```text
http://127.0.0.1:8000
```

Swagger:

```text
http://127.0.0.1:8000/docs
```

### Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will usually be available at:

```text
http://localhost:5173
```

---

## 💡 Why AI Vision Studio?

AI Vision Studio was built to explore how an AI/ML model can be integrated into a practical web application instead of being used only through a Python script or notebook.

The project brings together:

- Artificial Intelligence
- Computer Vision
- Deep Learning
- REST APIs
- Frontend development
- Backend development
- Database integration

The result is a complete workflow from **image upload → AI inference → detection results in the browser**.

---

## 🎓 Learning Outcomes

This project provided hands-on experience with:

- Integrating YOLOv11 into a Python application
- Working with the Ultralytics framework
- Running object detection inference
- Building REST APIs using FastAPI
- Handling image uploads
- Connecting a React frontend to a Python backend
- Sending and receiving JSON data
- Displaying machine learning results in a web interface
- Working with SQLAlchemy and SQLite
- Structuring a full-stack application
- Testing APIs with Swagger
- Using Git and GitHub for project management

---

## 🤝 Contributing

Contributions, suggestions, and ideas are welcome.

To contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push your branch
6. Open a pull request

---

## 📄 License

This project was developed for **educational and internship purposes**.

---

## 👨‍💻 Author

### Amra Qureshi

**B.E. Artificial Intelligence & Data Science**

GitHub:  
https://github.com/amraqureshi

Project Repository:  
https://github.com/amraqureshi/Ai-vision-studio

---

## 🙏 Acknowledgements

This project uses the following open-source technologies:

- [Ultralytics YOLO](https://github.com/ultralytics/ultralytics)
- [FastAPI](https://fastapi.tiangolo.com/)
- [React](https://react.dev/)
- [PyTorch](https://pytorch.org/)
- [Vite](https://vite.dev/)
- [SQLAlchemy](https://www.sqlalchemy.org/)

---

## ⭐ AI Vision Studio

**React + TypeScript + FastAPI + YOLOv11**

> Turning AI object detection into a practical full-stack web application.
