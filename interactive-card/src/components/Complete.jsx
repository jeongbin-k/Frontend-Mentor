import "./Complete.css";
import iconComplete from "../assets/images/icon-complete.svg";

const Complete = ({ handleContinue }) => {
  return (
    <div className="complete-container">
      <img src={iconComplete} alt="complete" />
      <h1>THANK YOU!</h1>
      <p>We've added your card details</p>
      <button className="confirm-btn" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default Complete;
