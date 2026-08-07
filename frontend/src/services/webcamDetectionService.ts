import type {
  WebcamSnapshot,
  WebcamStatus,
  DetectedObject,
} from "../types/webcamDetection";

const mockDetectedObjects: DetectedObject[] = [
  { label: "Person", confidence: 97.8, instances: 1 },
  { label: "Traffic sign", confidence: 92.4, instances: 2 },
  { label: "Drone", confidence: 88.1, instances: 1 },
  { label: "Backpack", confidence: 84.6, instances: 3 },
];

const initialStatus: WebcamStatus = {
  connection: "disconnected",
  phase: "idle",
  fps: 0,
  averageConfidence: 0,
};

const activeStatus: WebcamStatus = {
  connection: "connected",
  phase: "warming-up",
  fps: 8,
  averageConfidence: 0,
};

const scanningStatus: WebcamStatus = {
  connection: "connected",
  phase: "scanning",
  fps: 28,
  averageConfidence: 91.6,
  lastCapturedAt: "Just now",
};

const mockSnapshot: WebcamSnapshot = {
  capturedAt: new Date().toISOString(),
  detectedObjects: mockDetectedObjects.length,
  averageConfidence: 90.7,
  previewLabel: "Snapshot captured successfully",
  objects: mockDetectedObjects,
};

const wait = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

export const initializeWebcamSession = async (): Promise<WebcamStatus> => {
  await wait(700);
  return activeStatus;
};

export const refreshWebcamMetrics = async (): Promise<WebcamStatus> => {
  await wait(450);
  return scanningStatus;
};

export const terminateWebcamSession = async (): Promise<WebcamStatus> => {
  await wait(300);
  return initialStatus;
};

export const captureWebcamSnapshot = async (): Promise<WebcamSnapshot> => {
  await wait(650);
  return {
    ...mockSnapshot,
    capturedAt: new Date().toISOString(),
  };
};
