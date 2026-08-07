export type WebcamConnectionState = "connected" | "disconnected" | "pending";
export type WebcamDetectionPhase =
  | "idle"
  | "warming-up"
  | "scanning"
  | "captured";

export interface DetectedObject {
  label: string;
  confidence: number;
  instances: number;
}

export interface WebcamStatus {
  connection: WebcamConnectionState;
  phase: WebcamDetectionPhase;
  fps: number;
  averageConfidence: number;
  lastCapturedAt?: string;
}

export interface WebcamSnapshot {
  capturedAt: string;
  detectedObjects: number;
  averageConfidence: number;
  previewLabel: string;
  objects: DetectedObject[];
}
