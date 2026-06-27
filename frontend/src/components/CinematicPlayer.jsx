import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const BOOT_TIME = 3000;
const LINE_DELAY = 30000;
const TYPE_SPEED = 70;
const FINAL_TIME = 8000;



function speak(text) {
  if (!window.speechSynthesis) return;

  const u = new SpeechSynthesisUtterance(text);

  u.rate = 1;
  u.pitch = 0.9;
  u.volume = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}



function useTypewriter(text, speed = TYPE_SPEED) {
  const [out, setOut] = useState("");

  useEffect(() => {
    if (!text) return;

    setOut("");
    let i = 0;

    const interval = setInterval(() => {
      setOut(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return out;
}


function CinematicPlayer({ story, onEnd }) {
  const navigate = useNavigate();

  const [phase, setPhase] = useState("boot");
  const [index, setIndex] = useState(0);

  const scenes = story?.scenes || [];
  const current = scenes[index];

  const typed = useTypewriter(current?.text);



  useEffect(() => {
    if (!story) return;

    const t = setTimeout(() => {
      setPhase("run");
    }, BOOT_TIME);

    return () => clearTimeout(t);
  }, [story]);



  useEffect(() => {
    if (phase !== "run") return;
    if (!current) return;

    
    speak(current.text);

    const t = setTimeout(() => {
      setIndex((p) => p + 1);
    }, LINE_DELAY);

    return () => clearTimeout(t);
  }, [index, phase, current]);



  useEffect(() => {
    if (!story) return;
    if (index < scenes.length) return;

    setPhase("final");

    const t = setTimeout(() => {
      window.speechSynthesis.cancel();
      onEnd?.();
      navigate("/archive");
    }, FINAL_TIME);

    return () => clearTimeout(t);
  }, [index, scenes.length, story, navigate, onEnd]);

  if (!story) return null;

  return (
    <div className="terminal-fullscreen">

      
      {phase === "boot" && (
        <div className="terminal-boot">
          <p>INITIALIZING SYSTEM...</p>
          <p>LOADING ARCHIVE MEMORY...</p>
          <p className="glitch">
            WARNING: UNKNOWN ENTITY DETECTED
          </p>
        </div>
      )}

      
      {phase === "run" && (
        <div className="terminal-box">

          <div className="terminal-header">
            ARCHIVE_TERMINAL_v10.0
          </div>

          
          {scenes.slice(0, index).map((s, i) => (
            <p key={i} className="green">
              &gt; SYSTEM: {s.text}
            </p>
          ))}

         
          {current && (
            <p className="green">
              &gt; SYSTEM: {typed}
              <span className="cursor">▍</span>
            </p>
          )}

        </div>
      )}

    
      {phase === "final" && (
        <div className="final-screen">
          <div className="red-flash" />
          <h1>⚠ SYSTEM COMPROMISED ⚠</h1>
          <p>ARCHIVE HAS BEEN CORRUPTED</p>
        </div>
      )}

    </div>
  );
}

export default CinematicPlayer;