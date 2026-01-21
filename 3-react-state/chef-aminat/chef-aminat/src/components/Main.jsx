import React from "react";

export default function Main() {
    const [ingredientArr, setIngredientArr] = React.useState(["Maggi", "Rice"])
    const ingredients = ingredientArr.map(ing => <li key={ing}>{ing}</li>)

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredientArr(prevIngredientArr => [...prevIngredientArr, newIngredient])
    }
  return (
    <main>
      <form action={addIngredient}>
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="Maggi"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>

      <div className="ingredient-list">
        <h2>Ingredients List:</h2>
        <ul>{ingredients}</ul>
      </div>
    </main>
  );
}
