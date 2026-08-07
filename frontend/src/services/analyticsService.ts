import type { AnalyticsData } from "../types/analytics";

const analyticsMockData: AnalyticsData = {
  summary: {
    detectionCount: 842,
    successRate: 97.3,
    averageConfidence: 93.8,
  },
  weeklyActivity: [
    { day: "Mon", count: 98 },
    { day: "Tue", count: 115 },
    { day: "Wed", count: 132 },
    { day: "Thu", count: 154 },
    { day: "Fri", count: 174 },
    { day: "Sat", count: 89 },
    { day: "Sun", count: 80 },
  ],
  monthlySeries: [
    { month: "Jan", count: 620 },
    { month: "Feb", count: 690 },
    { month: "Mar", count: 720 },
    { month: "Apr", count: 770 },
    { month: "May", count: 800 },
    { month: "Jun", count: 820 },
    { month: "Jul", count: 842 },
  ],
  mostDetectedObjects: [
    { label: "Person", count: 324, share: 38 },
    { label: "Vehicle", count: 186, share: 22 },
    { label: "Backpack", count: 132, share: 15 },
    { label: "Drone", count: 96, share: 11 },
    { label: "Helmet", count: 74, share: 9 },
  ],
};

const wait = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const fetchAnalyticsData = async (): Promise<AnalyticsData> => {
  await wait(450);
  return analyticsMockData;
};
