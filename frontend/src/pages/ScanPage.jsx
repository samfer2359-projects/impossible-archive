import { useState, useEffect } from "react";
import CinematicPlayer from "../components/CinematicPlayer";

const SPACE_TIDBITS = [
  "🪐 Saturn could float in water (if you had a giant enough bathtub).",
  "🚀 A day on Venus is longer than its year.",
  "🌌 There are more stars in the universe than grains of sand on Earth.",
  "🛰️ Space is completely silent — no air means no sound.",
  "☄️ Some meteors are older than Earth itself.",
  "🪐 Jupiter has a storm bigger than Earth that’s been raging for centuries."
];

const SPACE_JOKES = [
  "👨‍🚀 Why don’t astronauts use email? They hate space spam.",
  "🪐 I tried to name a planet… but it had no atmosphere.",
  "🚀 My rocket diet is going great — I’ve lost launch weight.",
  "🌌 I told a joke in space… no one heard it 😭"
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function ScanPage() {
  const [object, setObject] = useState("");
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!loading) return;

    setMessage(getRandom(SPACE_TIDBITS));

    const interval = setInterval(() => {
      const isJoke = Math.random() > 0.7;
      setMessage(isJoke ? getRandom(SPACE_JOKES) : getRandom(SPACE_TIDBITS));
    }, 2500);

    return () => clearInterval(interval);
  }, [loading]);

  async function handleRecovery() {
    if (!object.trim()) return;

    setLoading(true);

    try {
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

      const res = await fetch(`${BACKEND_URL}/generate-story`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ object }),
      });

      if (!res.ok) throw new Error("API_FAILED");

      const data = await res.json();
      setStory(data);
    } catch (err) {
      setMessage("⚠️ Signal lost… space is ignoring us today.");
    }

    setLoading(false);
  }

  function handleReset() {
    setStory(null);
    setObject("");
  }

  if (story) {
    return <CinematicPlayer story={story} onEnd={handleReset} />;
  }

  return (
    <div className="scan-container">
      <h1>🛰️ Artifact Scanner</h1>

      <p>Enter object for recovery</p>

      <input
        value={object}
        placeholder="e.g. alien device, signal, fragment..."
        onChange={(e) => setObject(e.target.value)}
      />

      <button onClick={handleRecovery} disabled={loading}>
        {loading ? "Scanning space..." : "Initiate Recovery"}
      </button>

      {loading && (
        <div style={{ marginTop: "20px", opacity: 0.85 }}>
          <p>🌌 Deep space scan in progress...</p>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}