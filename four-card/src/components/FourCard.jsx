import "./FourCard.css";
import SupervisorIcon from "../assets/images/icon-supervisor.svg";
import TeamIcon from "../assets/images/icon-team-builder.svg";
import KarmaIcon from "../assets/images/icon-karma.svg";
import CalculatorIcon from "../assets/images/icon-calculator.svg";

const FourCard = () => {
  return (
    <section className="fourcard">
      <article className="card supervisor">
        <h3>Supervisor</h3>
        <p>Monitors activity to identify project roadblocks</p>
        <img src={SupervisorIcon} alt="card-icon" />
      </article>

      <div className="card-column">
        <article className="card team-builder">
          <h3>Team Builder</h3>
          <p>
            Scans our talent network to create the optimal team for your project
          </p>
          <img src={TeamIcon} alt="card-icon" />
        </article>

        <article className="card karma">
          <h3>Karma</h3>
          <p>Regularly evaluates our talent to ensure quality</p>
          <img src={KarmaIcon} alt="card-icon" />
        </article>
      </div>

      <article className="card calculator">
        <h3>Calculator</h3>
        <p>Uses data from past projects to provide better delivery estimates</p>
        <img src={CalculatorIcon} alt="card-icon" />
      </article>
    </section>
  );
};

export default FourCard;
