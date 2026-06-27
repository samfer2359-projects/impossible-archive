import { useNavigate, useParams } from "react-router-dom";
import { archives } from "../data/archive.js";

function ArchiveDetailPage() {
  const { id } = useParams();

  const archive = archives.find(
    (item) => item.id === Number(id)
  );

  const navigate = useNavigate();

  if (!archive) {
    return <p>Archive not found</p>;
  }

  return (
  <div className="archive-detail">
    <button className="back-button" onClick={() => navigate("/archive")}>
  Back to Archive
</button>

    <h1>{archive.title}</h1>

    <div className="detail-section">
      <h3>CLASSIFICATION</h3>
      <p>{archive.classification}</p>
    </div>

    <div className="detail-section">
      <h3>THREAT LEVEL</h3>
      <p>{archive.threatLevel}</p>
    </div>

    <div className="detail-section">
      <h3>DESCRIPTION</h3>
      <p>{archive.description}</p>
    </div>

    <div className="detail-section">
      <h3>ORIGIN</h3>
      <p>{archive.origin}</p>
    </div>

    <div className="detail-section">
      <h3>DISCOVERED BY</h3>
      <p>{archive.discoveredBy}</p>
    </div>

    <div className="detail-section">
      <h3>SYSTEM NOTES</h3>
      <p>{archive.notes}</p>
    </div>

    <button onClick={() => {
  window.open(
    `https://www.google.com/search?q=${encodeURIComponent(archive.research.google)}`,
    "_blank"
  );
}}>
  🔍 Google Research
</button>

<button onClick={() => {
  window.open(
    `https://www.youtube.com/results?search_query=${encodeURIComponent(archive.research.youtube)}`,
    "_blank"
  );
}}>
  ▶ YouTube Research
</button>

  </div>
);
}

export default ArchiveDetailPage;