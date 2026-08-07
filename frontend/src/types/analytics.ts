export interface AnalyticsSummary {
  detectionCount: number;
  successRate: number;
  averageConfidence: number;
}

export interface WeeklyActivityPoint {
  day: string;
  count: number;
}

export interface MonthlyDetectionPoint {
  month: string;
  count: number;
}

export interface DetectedObjectShare {
  label: string;
  count: number;
  share: number;
}

export interface AnalyticsData {
  summary: AnalyticsSummary;
  weeklyActivity: WeeklyActivityPoint[];
  monthlySeries: MonthlyDetectionPoint[];
  mostDetectedObjects: DetectedObjectShare[];
}
