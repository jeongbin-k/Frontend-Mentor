import "./Instructions.css";

const Instructions = () => {
  return (
    <section className="section-box">
      <div className="instructions-content">
        <h1>Instructions</h1>
        <ol>
          <li>
            <span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of
            salt and pepper until they are well mixed. You can add a tablespoon
            of water or milk for a fluffier
          </li>
          <li>
            <span> Heat the pan: </span>Place a non-stick frying pan over medium
            heat and add butter or oil.
          </li>
          <li>
            <span>Cook the omelette: </span>Once the butter is melted and
            bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
            coat the surface.
          </li>
          <li>
            <span> Add fillings (optional): </span>When the eggs begin to set at
            the edges but are still slightly runny in the middle, sprinkle your
            chosen fillings over one half of the
          </li>
          <li>
            <span> Fold and serve: </span>As the omelette continues to cook,
            carefully lift one edge and fold it over the fillings. Let it cook
            for another minute, then slide it onto a
          </li>
          <li>
            <span>Enjoy: </span>Serve hot, with additional salt and pepper if
            needed.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Instructions;
