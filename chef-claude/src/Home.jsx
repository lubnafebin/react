import { useState } from "react";

export const Home = () => {
  const [ingredients, setIngredients] = useState([]);
  const list = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));
  console.log(list);

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
          <div className="recipe-container">
            <div>
              <h3>Ready for recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button>Get a recipe</button>
          </div>
        </section>
      )}
    </main>
  );
};
