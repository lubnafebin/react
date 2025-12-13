export const IngredientsList = (props) => {
  const list = props.ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  return (
    <section>
      <h2>Ingredients on Hand:</h2>
      <ul className="list-items">{list}</ul>
      {props.ingredients.length > 3 && (
        <div className="recipe-container">
          <div>
            <h3>Ready for recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.toggleRecipeShown}>Get a recipe</button>
        </div>
      )}
    </section>
  );
};
