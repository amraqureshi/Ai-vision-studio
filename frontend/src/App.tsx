import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/layout/AuthLayout";
import DashboardPage from "./pages/DashboardPage";
import ImageDetectionPage from "./pages/ImageDetectionPage";
import VideoDetectionPage from "./pages/VideoDetectionPage";
import WebcamDetectionPage from "./pages/WebcamDetectionPage";
import DetectionHistoryPage from "./pages/DetectionHistoryPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/image-detection" element={<ImageDetectionPage />} />
      <Route path="/video-detection" element={<VideoDetectionPage />} />
      <Route path="/webcam-detection" element={<WebcamDetectionPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/detection-history" element={<DetectionHistoryPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
