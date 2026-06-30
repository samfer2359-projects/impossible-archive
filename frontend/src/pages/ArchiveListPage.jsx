import { useState, useEffect } from "react";
import ArchiveCard from "../components/ArchiveCard";
import { archives } from "../data/archive.js";
import { useNavigate } from "react-router-dom";

function ArchiveListPage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = archives.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("openBot"));
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="archive-container">
      <h1>The Impossible Archive</h1>
      <p>Classification Database Active</p>

      <input
        type="text"
        placeholder="Search the archive..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* SPECIAL CARD */}
        <div
          className="archive-card recover-card"
          onClick={() => navigate("/scan")}
        >
          <h2>+ Recover New Artifact</h2>
          <p>Generate a new classified archive entry</p>
          <p className="recover-action">→ Begin Recovery</p>
        </div> <br />

      <div className="archive-grid">
        {filtered.map((item) => (
          <ArchiveCard
            key={item.id}
            id={item.id}
            title={item.title}
            classification={item.classification}
            threatLevel={item.threatLevel}
          />
        ))}

        
      </div>
    </div>
  );
}

export default ArchiveListPage;