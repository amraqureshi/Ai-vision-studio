export interface DetectionResult {
  objectName: string;
  confidence: number;
  boundingBox: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface DetectionSummary {
  totalObjects: number;
  averageConfidence: number;
}
