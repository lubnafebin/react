import { useState } from "react";
import { ClaudeRecipe } from "./components/ClaudeRecipe";
import { IngredientsList } from "./components/IngredientsList";
import { getRecipeFromMistral } from "./ai";

export const Home = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(false);

  async function getRecipe() {
    const generatedRecipe = await getRecipeFromMistral(ingredients);
    setRecipe(generatedRecipe);
  }

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
      <div className="main-container">
        {ingredients.length > 0 && (
          <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
        )}
        {recipe && <ClaudeRecipe recipe={recipe} />}
      </div>
    </main>
  );
};
