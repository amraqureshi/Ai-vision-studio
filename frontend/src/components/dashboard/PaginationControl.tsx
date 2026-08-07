import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationControlProps {
  currentPage: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
}

const PaginationControl = ({
  currentPage,
  pageSize,
  total,
  onPageChange,
}: PaginationControlProps) => {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-slate-950/75 p-5 shadow-xl shadow-slate-950/20 sm:flex-row sm:items-center sm:justify-between">
      <div className="text-sm text-slate-300">
        Showing {Math.min((currentPage - 1) * pageSize + 1, total)}-
        {Math.min(currentPage * pageSize, total)} of {total} results
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-white/10 bg-slate-900/85 text-slate-200 transition disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronLeft size={18} />
        </button>
        <span className="text-sm text-slate-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          type="button"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-white/10 bg-slate-900/85 text-slate-200 transition disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default PaginationControl;
