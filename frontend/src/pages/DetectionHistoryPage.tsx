import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, CalendarDays } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import DetectionHistoryFilters from "../components/dashboard/DetectionHistoryFilters";
import DetectionHistoryTable from "../components/dashboard/DetectionHistoryTable";
import PaginationControl from "../components/dashboard/PaginationControl";
import { fetchDetectionHistory } from "../services/detectionHistoryService";
import type {
  DetectionHistoryFilters as Filters,
  DetectionHistoryItem,
} from "../types/detectionHistory";

const initialFilters: Filters = {
  search: "",
  dateRange: "",
  objectType: "",
  confidenceRange: "",
};

const DetectionHistoryPage = () => {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [history, setHistory] = useState<DetectionHistoryItem[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(4);
  const [loading, setLoading] = useState(false);

  const loadHistory = async () => {
    setLoading(true);
    const response = await fetchDetectionHistory(
      filters,
      currentPage,
      pageSize,
    );
    setHistory(response.items);
    setTotal(response.total);
    setLoading(false);
  };

  useEffect(() => {
    void loadHistory();
  }, [filters, currentPage]);

  const onDeleteItem = (id: string) => {
    setHistory((current) => current.filter((item) => item.id !== id));
    setTotal((count) => Math.max(0, count - 1));
  };

  const onDownloadItem = (id: string) => {
    console.log(`Download request for item ${id}`);
  };

  const onResetFilters = () => {
    setFilters(initialFilters);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-[1300px] rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <PageHeader
          title="Detection History"
          subtitle="Review past detections with filters and actions."
          description="Search, filter, and paginate through history entries using mock data."
          actions={
            <div className="flex items-center gap-3 text-slate-300">
              <CalendarDays size={20} className="text-cyan-400" />
              <span className="text-sm uppercase tracking-[0.28em] text-slate-400">
                Query history snapshot
              </span>
            </div>
          }
          className="border-b border-white/10 pb-5"
        />

        <div className="mt-8 space-y-6">
          <DetectionHistoryFilters
            filters={filters}
            onChange={(updatedFilters) => {
              setFilters(updatedFilters);
              setCurrentPage(1);
            }}
            onReset={onResetFilters}
          />

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-slate-300">
                <Search size={18} />
                <p className="text-sm">Filtered detection log</p>
              </div>
              <p className="text-sm text-slate-400">
                Showing the latest records first with action controls.
              </p>
            </div>

            {loading ? (
              <div className="mt-6 rounded-[1.75rem] border border-dashed border-white/10 bg-slate-900/85 p-10 text-center text-slate-400">
                Loading detection history...
              </div>
            ) : (
              <>
                <DetectionHistoryTable
                  items={history}
                  onDownload={onDownloadItem}
                  onDelete={onDeleteItem}
                />
                <div className="mt-6">
                  <PaginationControl
                    currentPage={currentPage}
                    pageSize={pageSize}
                    total={total}
                    onPageChange={setCurrentPage}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DetectionHistoryPage;
