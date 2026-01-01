import "./RecipeHeader.css";
import HeaderImage from "../assets/images/image-omelette.jpeg";

const RecipeHeader = () => {
  return (
    <header>
      <img
        src={HeaderImage}
        alt="A freshly cooked omelette served on a plate"
      />
      <div className="recipeTitle">
        <h1>Simple Omelette Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
      <div className="recipeTime">
        <p>Preparation time</p>
        <ul>
          <li>
            <span>Total:</span>
            Approximately 10 minutes
          </li>
          <li>
            <span>Preparation:</span>5 minutes
          </li>
          <li>
            <span>Cooking:</span>5 minutes
          </li>
        </ul>
      </div>
    </header>
  );
};

export default RecipeHeader;
