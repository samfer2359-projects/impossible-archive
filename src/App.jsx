import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArchiveListPage from "./pages/ArchiveListPage";
import ArchiveDetailPage from "./pages/ArchiveDetailPage";
import VideoBackground from "./components/VideoBackground";

function App() {
  return (
    <BrowserRouter>
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