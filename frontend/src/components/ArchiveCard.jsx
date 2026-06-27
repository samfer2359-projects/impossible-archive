import { useNavigate } from "react-router-dom";

function ArchiveCard(props){
    const { id, title, classification, threatLevel } = props;
    const navigate = useNavigate();

     return (
     <div className="archive-card" onClick={() => navigate(`/archive/${id}`)}>
        <h2>{title}</h2>
      <p>CLASSIFICATION: {classification}</p>
      <p>THREAT LEVEL: {threatLevel}</p>
      </div>
     );
}

export default ArchiveCard;