import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import AnalyticsCard from "../components/dashboard/AnalyticsCard";
import AnalyticsLineChart from "../components/dashboard/AnalyticsLineChart";
import AnalyticsBarChart from "../components/dashboard/AnalyticsBarChart";
import AnalyticsPieChart from "../components/dashboard/AnalyticsPieChart";
import { fetchAnalyticsData } from "../services/analyticsService";
import type { AnalyticsData } from "../types/analytics";

const AnalyticsPage = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    void fetchAnalyticsData().then(setData);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px] rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-2xl shadow-slate-950/40">
          <p className="text-center text-slate-400">
            Loading analytics dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-[1480px] rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <PageHeader
          title="Analytics"
          subtitle="Vision performance and detection trends."
          description="Track activity, confidence, and object distribution with a mock analytics dashboard built for scale."
          actions={
            <div className="flex items-center gap-3 text-slate-300">
              <BarChart3 size={20} className="text-cyan-400" />
              <span className="text-sm uppercase tracking-[0.28em] text-slate-400">
                Analytics overview
              </span>
            </div>
          }
          className="border-b border-white/10 pb-5"
        />

        <section className="mt-8 grid gap-6 xl:grid-cols-3">
          <AnalyticsCard
            title="Detection count"
            value={data.summary.detectionCount.toLocaleString()}
            detail="Total detections processed over the current period."
            icon={<TrendingUp size={22} />}
          />
          <AnalyticsCard
            title="Success rate"
            value={`${data.summary.successRate.toFixed(1)}%`}
            detail="Proportion of detections completed without false negatives."
            icon={<CheckCircle2 size={22} />}
          />
          <AnalyticsCard
            title="Average confidence"
            value={`${data.summary.averageConfidence.toFixed(1)}%`}
            detail="Average AI confidence score across all detections."
            icon={<ShieldCheck size={22} />}
          />
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <AnalyticsLineChart data={data.monthlySeries} />
          <AnalyticsPieChart objects={data.mostDetectedObjects} />
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <AnalyticsBarChart data={data.weeklyActivity} />
          <div className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-xl shadow-slate-950/20">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                  Activity summary
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Weekly performance
                </h3>
              </div>
              <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-400">
                Updated daily
              </span>
            </div>
            <div className="mt-6 space-y-4">
              {data.weeklyActivity.map((point) => (
                <div
                  key={point.day}
                  className="flex items-center justify-between gap-3 rounded-3xl bg-slate-900/85 px-4 py-4"
                >
                  <span className="text-sm text-slate-300">{point.day}</span>
                  <span className="text-sm font-semibold text-white">
                    {point.count} detections
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default AnalyticsPage;
