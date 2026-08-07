import { motion } from "framer-motion";

const detections = [
  { label: "Person", time: "2m ago", confidence: "98.2%", source: "Camera 3" },
  {
    label: "Delivery Truck",
    time: "14m ago",
    confidence: "92.4%",
    source: "Entrance Gate",
  },
  {
    label: "Helmet",
    time: "47m ago",
    confidence: "95.1%",
    source: "Dock camera",
  },
  {
    label: "Forklift",
    time: "1h ago",
    confidence: "91.8%",
    source: "Loading bay",
  },
];

const RecentDetections = () => {
  return (
    <motion.section
      className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-xl shadow-slate-950/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex items-center justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Recent Detections
          </h3>
          <p className="text-sm text-slate-400">
            Live object recognition events from the last hour.
          </p>
        </div>
        <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-400">
          Active
        </span>
      </div>
      <div className="mt-6 space-y-4">
        {detections.map((item, index) => (
          <div
            key={item.label}
            className="rounded-[1.5rem] border border-white/10 bg-slate-900/85 p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-slate-400">{item.source}</p>
                <p className="text-lg font-semibold text-white">{item.label}</p>
              </div>
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                {item.confidence}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-400">{item.time}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default RecentDetections;
