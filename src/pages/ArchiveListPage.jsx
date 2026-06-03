import { useState } from "react";
import ArchiveCard from "../components/ArchiveCard";
import { archives } from "../data/archive.js";

function ArchiveListPage() {
  const [search, setSearch] = useState("");
  const filtered = archives.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

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
      <div className="archive-grid">
        {filtered.length === 0 ? (
        <p>No anomalies found in archive</p>
      ) : (
        filtered.map((item, index) => (
          <ArchiveCard
            key={item.id}
            id={item.id}
            title={item.title}
            classification={item.classification}
            threatLevel={item.threatLevel}
          />
        ))
      )}
      </div>
    </div>
  );
}

export default ArchiveListPage;