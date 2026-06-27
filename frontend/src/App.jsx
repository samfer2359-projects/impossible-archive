import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import HomePage from "./pages/HomePage";
import ArchiveListPage from "./pages/ArchiveListPage";
import ArchiveDetailPage from "./pages/ArchiveDetailPage";
import ScanPage from "./pages/ScanPage";

import VideoBackground from "./components/VideoBackground";
import BotWidget from "./components/BotWidget";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
    });
  }, [location]);

  return null;
}

function FloatingScanButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/scan")}
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: 1000,
        padding: "10px 14px",
        background: "#00ffcc",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      SCAN
    </button>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />

      <VideoBackground />
      <BotWidget />
      <FloatingScanButton />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archive" element={<ArchiveListPage />} />
        <Route path="/archive/:id" element={<ArchiveDetailPage />} />
        <Route path="/scan" element={<ScanPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;