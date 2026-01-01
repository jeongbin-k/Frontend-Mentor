import "./App.css";
import "./resect.css";
import RecipeHeader from "./components/RecipeHeader";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";

function App() {
  return (
    <>
      <div className="recipe-content">
        <RecipeHeader />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </div>
    </>
  );
}

export default App;
