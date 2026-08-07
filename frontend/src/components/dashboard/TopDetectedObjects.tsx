import { motion } from "framer-motion";

const objects = [
  { label: "Person", count: 423, color: "from-cyan-400 to-sky-400" },
  { label: "Vehicle", count: 312, color: "from-fuchsia-400 to-violet-400" },
  { label: "Helmet", count: 167, color: "from-emerald-400 to-cyan-400" },
  { label: "Animal", count: 84, color: "from-amber-400 to-orange-400" },
];

const TopDetectedObjects = () => {
  return (
    <motion.section
      className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-xl shadow-slate-950/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Top Detected Objects
          </h3>
          <p className="text-sm text-slate-400">
            Most frequent detections by count.
          </p>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        {objects.map((item) => (
          <div
            key={item.label}
            className="rounded-[1.5rem] border border-white/10 bg-slate-900/85 p-4"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-2 text-xl font-semibold text-white">
                  {item.count}
                </p>
              </div>
              <div
                className={`h-3 w-32 rounded-full bg-gradient-to-r ${item.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default TopDetectedObjects;
