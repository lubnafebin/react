import { useState } from "react";

export const Home = () => {
  const [ingredients,setIngredients] = useState([])
  const list = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient"
        />
        <button>+ Add Ingredient</button>
      </form>
      <ul>{list}</ul>
    </main>
  );
};
