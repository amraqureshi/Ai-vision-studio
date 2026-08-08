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
