# 🚀 AI Vision Studio

> A modern AI-powered object detection platform built with **React + FastAPI + YOLO**, supporting image, video, and webcam object detection with analytics, history tracking, and a clean dashboard.

![Python](https://img.shields.io/badge/Python-3.12-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?logo=fastapi)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript)
![SQLite](https://img.shields.io/badge/SQLite-Database-003B57?logo=sqlite)

---

## 📌 Overview

AI Vision Studio is a full-stack AI application that enables users to upload images, videos, or use a webcam for real-time object detection.

The project is designed with a production-style architecture separating the frontend and backend, making it scalable and easy to maintain.

---

## ✨ Features

### 🎯 AI Detection
- Image Object Detection
- Video Object Detection
- Webcam Detection
- Detection Results Visualization

### 📊 Dashboard
- Detection Analytics
- Detection History
- Recent Detections
- Detection Metrics
- Interactive Charts

### 👤 Authentication
- User Registration
- User Login
- Password Hashing
- JWT Authentication *(In Progress)*

### ⚙️ Settings
- User Profile
- Theme Toggle
- Language Selection

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS

### Backend
- FastAPI
- SQLAlchemy
- SQLite
- Passlib
- Pydantic

### AI (Upcoming)
- YOLOv11
- OpenCV
- Ultralytics

---

## 📂 Project Structure

```
AI Vision Studio
│
├── backend
│   ├── app
│   │   ├── api
│   │   ├── core
│   │   ├── database
│   │   ├── schemas
│   │   ├── services
│   │   └── utils
│   └── main.py
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── services
│
└── README.md
```

---

## 🚧 Current Progress

### ✅ Completed

- Frontend UI
- Project Structure
- FastAPI Backend
- SQLite Integration
- SQLAlchemy Setup
- User Model
- API Routing
- Swagger Documentation
- Password Hashing Utilities

### 🚀 In Progress

- User Registration
- Login Authentication
- JWT Tokens
- Protected Routes

### 🔜 Planned

- YOLOv11 Integration
- Image Detection
- Video Detection
- Webcam Detection
- Detection History
- Export Reports
- User Profile
- Deployment

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/amraqureshi/Ai-vision-studio.git
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend:

```
http://127.0.0.1:8000
```

Swagger:

```
http://127.0.0.1:8000/docs
```

---

## 📈 Roadmap

- [x] Frontend Architecture
- [x] FastAPI Backend
- [x] SQLite Database
- [x] SQLAlchemy Models
- [x] Swagger APIs
- [ ] Authentication
- [ ] JWT
- [ ] YOLO Integration
- [ ] Image Detection
- [ ] Video Detection
- [ ] Webcam Detection
- [ ] Detection History
- [ ] Deployment

---

## 🤝 Contributing

Contributions, ideas, and suggestions are welcome.

Feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Amra Qureshi**

GitHub:
https://github.com/amraqureshi
