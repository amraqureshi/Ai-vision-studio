export interface VideoFileInfo {
  name: string;
  sizeMB: number;
  duration: string;
  resolution: string;
}

export interface VideoDetectionSummary {
  processedFrames: number;
  totalObjects: number;
  estimatedTime: string;
}

export interface VideoProcessingStatus {
  progress: number;
  estimatedTime: string;
}
