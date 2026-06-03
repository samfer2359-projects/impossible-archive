import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      <div className="home-panel">

        <h1>The Impossible Archive</h1>

        <p>CLASSIFIED COSMIC DATABASE INTERFACE</p>

        <hr />

        <p>
          The Impossible Archive is a recovered database containing records
          of anomalous cosmic phenomena, impossible technologies, abandoned
          megastructures, rogue artificial intelligences, lost civilizations,
          unexplained transmissions, and discoveries that appear to violate
          known laws of reality.
        </p>

        <hr />

        <h3>RECOVERED SUBJECTS</h3>

        <ul>
          <li>Temporal Anomalies</li>
          <li>Deep-Space Signals</li>
          <li>Alien Civilizations</li>
          <li>Impossible Technologies</li>
          <li>Megastructures</li>
          <li>Rogue Artificial Intelligences</li>
          <li>Unidentified Cosmic Entities</li>
          <li>Reality Distortion Events</li>
        </ul>

        <hr />

        <h3>WARNING</h3>

        <p>
          Multiple records contain contradictory information.
        </p>

        <p>
          Several entries describe events that should be impossible.
        </p>

        <p>
          Archive authenticity remains unresolved.
        </p>

        <button onClick={() => navigate("/archive")}>
          ENTER ARCHIVE
        </button>

      </div>

    </div>
  );
}

export default HomePage;