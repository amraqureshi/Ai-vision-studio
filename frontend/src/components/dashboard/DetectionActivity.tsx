import { motion } from "framer-motion";

const activity = [
  { label: "00:00", value: 8 },
  { label: "02:00", value: 17 },
  { label: "04:00", value: 24 },
  { label: "06:00", value: 18 },
  { label: "08:00", value: 26 },
  { label: "10:00", value: 33 },
  { label: "12:00", value: 29 },
];

const DetectionActivity = () => {
  return (
    <motion.section
      className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-xl shadow-slate-950/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Detection Activity
          </h3>
          <p className="text-sm text-slate-400">
            Hourly object detection count across your live streams.
          </p>
        </div>
        <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-400">
          Live
        </span>
      </div>
      <div className="mt-6 grid gap-4">
        <div className="flex items-end gap-3">
          {activity.map((item) => (
            <div key={item.label} className="flex-1 text-center">
              <div className="mx-auto mb-2 h-[140px] w-full max-w-[42px] rounded-3xl bg-slate-900/80">
                <div
                  className="mx-auto h-full w-full rounded-3xl bg-gradient-to-t from-cyan-400 via-cyan-300 to-slate-300"
                  style={{ height: `${item.value * 2.4}%` }}
                />
              </div>
              <p className="text-xs text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default DetectionActivity;
