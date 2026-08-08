export interface DetectionBoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface DetectionResult {
  objectName: string;
  confidence: number;
  boundingBox: DetectionBoundingBox;
}

export interface DetectionSummary {
  totalObjects: number;
  averageConfidence: number;
}

export interface ImageDetectionApiResult {
  class: string;
  confidence: number;
}

export interface ImageDetectionApiResponse {
  filename: string;
  detections: ImageDetectionApiResult[];
}

export interface ImageDetectionResponse {
  summary: DetectionSummary;
  results: DetectionResult[];
}
