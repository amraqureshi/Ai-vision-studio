import type {
  DetectionResult,
  DetectionSummary,
} from "../types/imageDetection";

const mockResults: DetectionResult[] = [
  {
    objectName: "Person",
    confidence: 98.2,
    boundingBox: { x: 84, y: 102, width: 180, height: 432 },
  },
  {
    objectName: "Bicycle",
    confidence: 93.7,
    boundingBox: { x: 382, y: 120, width: 150, height: 112 },
  },
  {
    objectName: "Backpack",
    confidence: 91.1,
    boundingBox: { x: 178, y: 384, width: 96, height: 134 },
  },
];

const mockSummary: DetectionSummary = {
  totalObjects: 12,
  averageConfidence: 94.3,
};

export const fetchDetectionResults = async (
  file: File,
): Promise<{ summary: DetectionSummary; results: DetectionResult[] }> => {
  // Placeholder for backend API integration
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { summary: mockSummary, results: mockResults };
};
