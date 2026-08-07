import type {
  DetectionHistoryFilters,
  DetectionHistoryItem,
} from "../types/detectionHistory";

const mockHistoryData: DetectionHistoryItem[] = [
  {
    id: "hist-001",
    thumbnail: "/images/history-thumb-1.jpg",
    filename: "city-crossing.jpg",
    objects: 14,
    confidence: 96.4,
    date: "2026-08-04T10:20:00.000Z",
    status: "processed",
  },
  {
    id: "hist-002",
    thumbnail: "/images/history-thumb-2.jpg",
    filename: "warehouse-scan.mp4",
    objects: 8,
    confidence: 91.7,
    date: "2026-08-03T14:08:00.000Z",
    status: "flagged",
  },
  {
    id: "hist-003",
    thumbnail: "/images/history-thumb-3.jpg",
    filename: "parking-lot.mov",
    objects: 19,
    confidence: 94.9,
    date: "2026-08-02T09:45:00.000Z",
    status: "processed",
  },
  {
    id: "hist-004",
    thumbnail: "/images/history-thumb-4.jpg",
    filename: "sidewalk-alert.jpg",
    objects: 6,
    confidence: 89.1,
    date: "2026-08-01T18:32:00.000Z",
    status: "pending",
  },
];

const filterHistory = (
  data: DetectionHistoryItem[],
  filters: DetectionHistoryFilters,
) => {
  const normalizedSearch = filters.search.trim().toLowerCase();

  return data.filter((item) => {
    const searchMatch =
      item.filename.toLowerCase().includes(normalizedSearch) ||
      item.status.toLowerCase().includes(normalizedSearch);

    const objectMatch =
      filters.objectType === "" ||
      item.filename.toLowerCase().includes(filters.objectType.toLowerCase());

    const confidenceMatch =
      filters.confidenceRange === "" ||
      (filters.confidenceRange === "high" && item.confidence >= 95) ||
      (filters.confidenceRange === "medium" && item.confidence >= 90) ||
      (filters.confidenceRange === "low" && item.confidence < 90);

    const dateMatch =
      filters.dateRange === "" ||
      (filters.dateRange === "today" &&
        item.date.startsWith(new Date().toISOString().slice(0, 10))) ||
      (filters.dateRange === "week" &&
        new Date(item.date) >=
          new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) ||
      (filters.dateRange === "month" &&
        new Date(item.date) >= new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));

    return searchMatch && objectMatch && confidenceMatch && dateMatch;
  });
};

export const fetchDetectionHistory = async (
  filters: DetectionHistoryFilters,
  page: number,
  pageSize: number,
): Promise<{ items: DetectionHistoryItem[]; total: number }> => {
  await new Promise((resolve) => setTimeout(resolve, 450));
  const filtered = filterHistory(mockHistoryData, filters);
  const startIndex = (page - 1) * pageSize;
  return {
    items: filtered.slice(startIndex, startIndex + pageSize),
    total: filtered.length,
  };
};
