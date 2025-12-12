import { useState } from "react";

export const Home = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShow, setRecipeShow] = useState(false);
  function toggleRecipeShown() {
    setRecipeShow((prevShown) => !prevShown);
  }
  const list = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  }
  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>+ Add Ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <section>
          <h2>Ingredients on Hand:</h2>
          <ul className="list-items">{list}</ul>
          {ingredients.length > 3 && (
            <div className="recipe-container">
              <div>
                <h3>Ready for recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={toggleRecipeShown}>Get a recipe</button>
            </div>
          )}
        </section>
      )}
      {recipeShow && (
        <section>
          <h2>Chef claude recommends:</h2>
          <article>
            <p></p>
            <h3></h3>
            <strong>Ingredients</strong>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <strong>Instructions</strong>
            <ol>
              <li></li>
              <li></li>
              <li></li>
            </ol>
          </article>
        </section>
      )}
    </main>
  );
};
