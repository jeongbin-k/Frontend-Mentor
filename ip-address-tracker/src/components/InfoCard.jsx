import "./InfoCard.css";

const InfoCard = ({ ip, location, timezone, isp }) => {
  return (
    <div className="infocard">
      <div className="info-item">
        <span className="info-label">IP ADDRESS</span>
        <p className="info-data">{ip}</p>
      </div>
      <div className="info-item">
        <span className="info-label">LOCATION</span>
        <p className="info-data">{location}</p>
      </div>
      <div className="info-item">
        <span className="info-label">TIMEZONE</span>
        <p className="info-data">{timezone}</p>
      </div>
      <div className="info-item">
        <span className="info-label">ISP</span>
        <p className="info-data">{isp}</p>
      </div>
    </div>
  );
};

export default InfoCard;
