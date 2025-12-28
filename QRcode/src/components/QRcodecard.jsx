import "./QRcodecard.css";
import qrimage from "../assets/image-qr-code.png";

const QRcodecard = () => {
  return (
    <div className="qrcard">
      <div className="qrcard-img">
        <img src={qrimage} alt="QR code to Frontend Mentor" />
      </div>
      <div className="qrcard-text">
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the Qr code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QRcodecard;
