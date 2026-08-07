import type { DetectionHistoryItem } from "../../types/detectionHistory";
import { Download, Trash2 } from "lucide-react";

interface DetectionHistoryTableProps {
  items: DetectionHistoryItem[];
  onDownload: (id: string) => void;
  onDelete: (id: string) => void;
}

const DetectionHistoryTable = ({
  items,
  onDownload,
  onDelete,
}: DetectionHistoryTableProps) => {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-xl shadow-slate-950/20">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/10 text-sm text-slate-300">
          <thead className="bg-slate-900/90 text-slate-400">
            <tr>
              <th className="px-6 py-4 text-left font-semibold uppercase tracking-[0.21em]">
                Thumbnail
              </th>
              <th className="px-6 py-4 text-left font-semibold uppercase tracking-[0.21em]">
                Filename
              </th>
              <th className="px-6 py-4 text-left font-semibold uppercase tracking-[0.21em]">
                Objects
              </th>
              <th className="px-6 py-4 text-left font-semibold uppercase tracking-[0.21em]">
                Confidence
              </th>
              <th className="px-6 py-4 text-left font-semibold uppercase tracking-[0.21em]">
                Date
              </th>
              <th className="px-6 py-4 text-left font-semibold uppercase tracking-[0.21em]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 bg-slate-950/90">
            {items.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4">
                  <div className="flex h-14 w-20 items-center justify-center rounded-3xl bg-slate-900/85 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {item.thumbnail}
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-white">
                  {item.filename}
                </td>
                <td className="px-6 py-4">{item.objects}</td>
                <td className="px-6 py-4">{item.confidence.toFixed(1)}%</td>
                <td className="px-6 py-4">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => onDownload(item.id)}
                      className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400/15"
                    >
                      <Download size={14} />
                      Download
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete(item.id)}
                      className="inline-flex items-center gap-2 rounded-full bg-rose-400/10 px-4 py-2 text-xs font-semibold text-rose-300 transition hover:bg-rose-400/20"
                    >
                      <Trash2 size={14} />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetectionHistoryTable;
