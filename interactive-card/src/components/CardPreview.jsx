import "./CardPreview.css";
import CardLogo from "../assets/images/card-logo.svg";

const CardPreview = ({ formData }) => {
  return (
    <div className="cardpreview">
      <div className="card-front">
        <img src={CardLogo} alt="CardLogo" />
        <p>{formData.number || "0000 0000 0000 0000"}</p>
        <div className="card-name">
          <span>{formData.name || "JANE APPLESEED"}</span>
          <span>
            {formData.yy || "00"} / {formData.mm || "00"}
          </span>
        </div>
      </div>
      <div className="card-back">
        <span>{formData.cvc || "123"}</span>
      </div>
    </div>
  );
};

export default CardPreview;
