import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import HomePage from "./pages/HomePage";
import ArchiveListPage from "./pages/ArchiveListPage";
import ArchiveDetailPage from "./pages/ArchiveDetailPage";
import VideoBackground from "./components/VideoBackground";

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

function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />

      <VideoBackground />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archive" element={<ArchiveListPage />} />
        <Route path="/archive/:id" element={<ArchiveDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;