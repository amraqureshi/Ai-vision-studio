import type {
  DetectionResult,
  ImageDetectionApiResponse,
  ImageDetectionResponse,
} from "../types/imageDetection";

const API_BASE_URL = "http://127.0.0.1:8000";

const emptyBoundingBox = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

export const fetchDetectionResults = async (
  file: File,
): Promise<ImageDetectionResponse> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_BASE_URL}/api/detection/image`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      errorText || "Unable to fetch detection results. Please try again.",
    );
  }

  const data: ImageDetectionApiResponse = await response.json();

  const results: DetectionResult[] = data.detections.map((detection) => ({
    objectName: detection.class,
    confidence: Number((detection.confidence * 100).toFixed(1)),
    boundingBox: { ...emptyBoundingBox },
  }));

  const totalObjects = results.length;
  const averageConfidence =
    totalObjects > 0
      ? Number(
          (
            results.reduce((sum, result) => sum + result.confidence, 0) /
            totalObjects
          ).toFixed(1),
        )
      : 0;

  return {
    summary: {
      totalObjects,
      averageConfidence,
    },
    results,
  };
};
