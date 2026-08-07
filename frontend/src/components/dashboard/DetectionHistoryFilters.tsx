import { Search } from "lucide-react";
import InputField from "../ui/InputField";
import Button from "../ui/Button";
import type { DetectionHistoryFilters } from "../../types/detectionHistory";

interface DetectionHistoryFiltersProps {
  filters: DetectionHistoryFilters;
  onChange: (filters: DetectionHistoryFilters) => void;
  onReset: () => void;
}

const objectOptions = ["", "person", "vehicle", "backpack", "drone"];
const confidenceOptions = [
  { value: "", label: "All confidence" },
  { value: "high", label: "High (>= 95%)" },
  { value: "medium", label: "Medium (>= 90%)" },
  { value: "low", label: "Low (< 90%)" },
];

const dateOptions = [
  { value: "", label: "Any date" },
  { value: "today", label: "Today" },
  { value: "week", label: "Past 7 days" },
  { value: "month", label: "Past 30 days" },
];

const DetectionHistoryFilters = ({
  filters,
  onChange,
  onReset,
}: DetectionHistoryFiltersProps) => {
  return (
    <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            History filters
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Refine your detection log
          </h2>
        </div>
        <Button
          variant="ghost"
          className="max-w-[180px]"
          onClick={onReset}
          type="button"
        >
          Reset filters
        </Button>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        <InputField
          label="Search"
          icon={<Search size={16} />}
          placeholder="Search by filename or status"
          value={filters.search}
          onChange={(event) =>
            onChange({ ...filters, search: event.target.value })
          }
        />
        <div>
          <label className="block text-sm font-medium text-slate-300">
            Date filter
          </label>
          <select
            className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/85 px-4 py-4 text-slate-100 outline-none transition duration-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            value={filters.dateRange}
            onChange={(event) =>
              onChange({ ...filters, dateRange: event.target.value })
            }
          >
            {dateOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300">
            Object filter
          </label>
          <select
            className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/85 px-4 py-4 text-slate-100 outline-none transition duration-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            value={filters.objectType}
            onChange={(event) =>
              onChange({ ...filters, objectType: event.target.value })
            }
          >
            {objectOptions.map((objectType) => (
              <option key={objectType} value={objectType}>
                {objectType === "" ? "All objects" : objectType}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300">
            Confidence filter
          </label>
          <select
            className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/85 px-4 py-4 text-slate-100 outline-none transition duration-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            value={filters.confidenceRange}
            onChange={(event) =>
              onChange({ ...filters, confidenceRange: event.target.value })
            }
          >
            {confidenceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DetectionHistoryFilters;
