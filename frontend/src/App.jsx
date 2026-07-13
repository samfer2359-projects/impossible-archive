import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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

function AppLayout({ children }) {
  const location = useLocation();

  
  const showBot = location.pathname !== "/";

  return (
    <>
      <VideoBackground />
      <AnalyticsTracker />

      {showBot && <BotWidget />}

      <div className="app-container">{children}</div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <HomePage />
            </AppLayout>
          }
        />

        <Route
          path="/archive"
          element={
            <AppLayout>
              <ArchiveListPage />
            </AppLayout>
          }
        />

        <Route
          path="/archive/:id"
          element={
            <AppLayout>
              <ArchiveDetailPage />
            </AppLayout>
          }
        />

        <Route
          path="/scan"
          element={
            <AppLayout>
              <ScanPage />
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;