import { useNavigate } from "react-router-dom";

function ArchiveCard(props) {
  const { id, title, classification, threatLevel, recover } = props;
  const navigate = useNavigate();

  function handleClick() {
    if (recover) {
      navigate("/scan");
    } else {
      navigate(`/archive/${id}`);
    }
  }

  return (
    <div
      className={`archive-card ${recover ? "recover-card" : ""}`}
      onClick={handleClick}
    >
      <h2>{title}</h2>

      {!recover && (
        <>
          <p>CLASSIFICATION: {classification}</p>
          <p>THREAT LEVEL: {threatLevel}</p>
        </>
      )}

      {recover && <p>Generate a new archive entry from an object</p>}
    </div>
  );
}

export default ArchiveCard;