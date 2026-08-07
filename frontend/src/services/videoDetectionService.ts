import type {
  VideoDetectionSummary,
  VideoFileInfo,
  VideoProcessingStatus,
} from "../types/videoDetection";

const mockFileInfo: VideoFileInfo = {
  name: "production-line.mp4",
  sizeMB: 38.4,
  duration: "00:02:17",
  resolution: "1920x1080",
};

const mockSummary: VideoDetectionSummary = {
  processedFrames: 4120,
  totalObjects: 567,
  estimatedTime: "00:00:35",
};

const mockProcessingStatus: VideoProcessingStatus = {
  progress: 0,
  estimatedTime: "00:00:35",
};

export const fetchVideoFileInfo = async (
  file: File,
): Promise<VideoFileInfo> => {
  // Backend placeholder: return metadata for uploaded video
  await new Promise((resolve) => setTimeout(resolve, 400));
  return { ...mockFileInfo, name: file.name };
};

export const processVideoDetection = async (
  file: File,
  onProgress: (status: VideoProcessingStatus) => void,
): Promise<VideoDetectionSummary> => {
  // Backend placeholder: process video and emit progress updates
  for (let progress = 10; progress <= 100; progress += 20) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    onProgress({ progress, estimatedTime: mockProcessingStatus.estimatedTime });
  }

  return mockSummary;
};
