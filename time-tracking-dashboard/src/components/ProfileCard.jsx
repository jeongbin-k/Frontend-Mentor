import "./ProfileCard.css";
import author from "/images/image-jeremy.png";

const ProfileCard = ({ timeframe, setTimeframe }) => {
  const option = ["Daily", "Weekly", "Monthly"];

  return (
    <div className="profile-container">
      <div className="profile-top">
        <img src={author} alt="Jeremy" className="profile-img" />
        <div className="profile-text">
          <span>Report for</span>
          <p>Jeremy Robson</p>
        </div>
      </div>
      <div className="profile-menu">
        <ul>
          {option.map((option) => (
            <li
              key={option}
              onClick={() => setTimeframe(option.toLowerCase())}
              className={timeframe === option.toLowerCase() ? "active" : ""}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
