import { useState } from "react";
import CinematicPlayer from "../components/CinematicPlayer";

function ScanPage() {
  const [object, setObject] = useState("");
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(false);

  
  async function handleRecovery() {
    if (!object.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/generate-story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ object }),
      });

      const data = await res.json();
      setStory(data);
    } catch (err) {
      console.error("Error generating story:", err);
    }

    setLoading(false);
  }

  function handleReset() {
    setStory(null);
    setObject("");
  }

  if (story) {
    return (
      <CinematicPlayer story={story} onEnd={handleReset} />
    );
  }

  return (
    <div className="scan-container">
      <h1>Scan Artifact</h1>

      <p>Enter object for reconstruction</p>

      <input
        type="text"
        placeholder="e.g. watch, signal, ship fragment..."
        value={object}
        onChange={(e) => setObject(e.target.value)}
      />

      <button onClick={handleRecovery} disabled={loading}>
        {loading ? "Recovering..." : "Initiate Recovery"}
      </button>
    </div>
  );
}

export default ScanPage;