import { useState } from "react";
import { ClaudeRecipe } from "./components/ClaudeRecipe";
import { IngredientsList } from "./components/IngredientsList";

export const Home = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShow, setRecipeShow] = useState(false);
  function toggleRecipeShown() {
    setRecipeShow((prevShown) => !prevShown);
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
          <IngredientsList
            ingredients={ingredients}
            toggleRecipeShown={toggleRecipeShown}
          />
        )}
        {recipeShow && <ClaudeRecipe />}
      </div>
    </main>
  );
};
