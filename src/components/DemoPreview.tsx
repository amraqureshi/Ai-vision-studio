import { motion } from "framer-motion";

const DemoPreview = () => {
  return (
    <section
      id="demo"
      className="space-y-10 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow sm:p-10 lg:p-12"
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-sky-300">
            Demo preview
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Live insights from the vision dashboard.
          </h2>
          <p className="max-w-2xl text-slate-300">
            Explore the AI Vision Studio dashboard with seamless model reports,
            detection overlays, and performance alerts in one polished
            interface.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/90 p-5 text-slate-300 shadow-xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                Model accuracy
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">94.3%</p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-5 text-slate-300 shadow-xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                Active streams
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">7</p>
            </div>
          </div>
        </div>

        <motion.div
          className="glass-card relative overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-2xl shadow-slate-950/30"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative grid gap-6">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-5">
              <div className="mb-4 flex items-center justify-between text-slate-300">
                <span className="text-sm uppercase tracking-[0.26em] text-slate-400">
                  Stream view
                </span>
                <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-300">
                  Live
                </span>
              </div>
              <div className="h-56 rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-4">
                <div className="h-full rounded-[1.3rem] bg-slate-950/90 p-4">
                  <div className="flex h-full flex-col justify-between">
                    <div className="grid gap-3 text-slate-300">
                      <div className="flex items-center justify-between text-sm">
                        <span>Camera 3</span>
                        <span className="text-emerald-300">Online</span>
                      </div>
                      <div className="rounded-3xl bg-slate-900/80 p-3 text-sm text-slate-300">
                        Detected: 23 objects · 4 classes
                      </div>
                      <div className="rounded-3xl bg-slate-900/80 p-3 text-sm text-slate-300">
                        Drift: 0.8% · Alerts: 1
                      </div>
                    </div>
                    <div className="mt-3 grid gap-3 rounded-[1.3rem] bg-slate-900/80 p-4 text-slate-300">
                      <div className="flex items-center justify-between text-sm">
                        <span>Frame rate</span>
                        <span>28 FPS</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Live threats</span>
                        <span className="text-amber-300">2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Analytics", "Metrics", "Alerts", "Models"].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] bg-slate-900/90 px-4 py-4 text-sm text-slate-300 shadow-inner shadow-slate-950/20"
                >
                  <p className="text-slate-400">{item}</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {item === "Analytics"
                      ? "Heatmaps"
                      : item === "Models"
                        ? "12 active"
                        : item === "Metrics"
                          ? "AP 91.4"
                          : "Critical"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoPreview;
