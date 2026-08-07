import { BarChart3, Camera, FileImage, Layers, Sparkles } from "lucide-react";
import DashboardCard from "../components/dashboard/DashboardCard";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import RecentDetections from "../components/dashboard/RecentDetections";
import DetectionActivity from "../components/dashboard/DetectionActivity";
import TopDetectedObjects from "../components/dashboard/TopDetectedObjects";
import QuickUpload from "../components/dashboard/QuickUpload";

const stats = [
  {
    title: "Images Processed",
    value: "18.4K",
    change: "+12%",
    icon: <FileImage size={22} />,
  },
  {
    title: "Videos Processed",
    value: "6.2K",
    change: "+8.3%",
    icon: <Camera size={22} />,
  },
  {
    title: "Objects Detected",
    value: "124K",
    change: "+9.2%",
    icon: <Layers size={22} />,
  },
  {
    title: "Average Confidence",
    value: "94.6%",
    change: "+1.6%",
    icon: <Sparkles size={22} />,
  },
];

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1480px] gap-6 xl:grid-cols-[280px_1fr]">
        <Sidebar />
        <main className="space-y-6">
          <Topbar />
          <section className="grid gap-6 xl:grid-cols-4">
            {stats.map((item) => (
              <DashboardCard
                key={item.title}
                title={item.title}
                value={item.value}
                change={item.change}
                icon={item.icon}
              />
            ))}
          </section>
          <section className="grid gap-6 xl:grid-cols-[1.55fr_0.9fr]">
            <RecentDetections />
            <div className="grid gap-6">
              <DetectionActivity />
              <TopDetectedObjects />
              <QuickUpload />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
