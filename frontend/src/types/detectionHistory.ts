export interface DetectionHistoryItem {
  id: string;
  thumbnail: string;
  filename: string;
  objects: number;
  confidence: number;
  date: string;
  status: "processed" | "pending" | "flagged";
}

export interface DetectionHistoryFilters {
  search: string;
  dateRange: string;
  objectType: string;
  confidenceRange: string;
}
