import { useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


function BotWidget() {
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function askBot(queryId) {
    try {
      setLoading(true);
      setResponse("");

      const res = await fetch(`${BACKEND_URL}/bot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ queryId }),
      });

      const data = await res.json();

      setTimeout(() => {
        setResponse(data.answer);
        setLoading(false);
      }, 600);

    } catch (err) {
      setLoading(false);
      setResponse("ERROR: ARCHIVE CONNECTION FAILED");
    }
  }

  return (
    <div className="bot-container">

      <button
        className="bot-toggle"
        onClick={() => setOpen(!open)}
      >
        🤖
      </button>

      {open && (
        <div className="black-box bot-panel">

          <div className="terminal-header">
            ARCHIVE_GUIDE_v1.0
          </div>

          <p className="boot-text">
            SYSTEM LINK ESTABLISHED...
          </p>

          <div className="bot-buttons">
            <button onClick={() => askBot("what_is_archive")}>
              What is this archive?
            </button>

            <button onClick={() => askBot("scan_work")}>
              How does scanning work?
            </button>

            <button onClick={() => askBot("what_happens_recovery")}>
              What is recovery?
            </button>

            <button onClick={() => askBot("self_destruct")}>
              What is self-destruction?
            </button>

            <button onClick={() => askBot("who_are_you")}>
              Who are you?
            </button>
          </div>

          <div className="bot-response blue-text">
            {loading ? "SCANNING ARCHIVE MEMORY..." : response}
          </div>

        </div>
      )}
    </div>
  );
}

export default BotWidget;