import React from "react";

export default function Main() {
  const [ingredientArr, setIngredientArr] = React.useState(["Maggi", "Rice"]);
  const ingredients = ingredientArr.map((ing) => <li key={ing}>{ing}</li>);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredientArr((prevIngredientArr) => [
      ...prevIngredientArr,
      newIngredient,
    ]);
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

      <div className="cta-box">
        <p>
          Send the ingredients to Chef Aminat to give you the{" "}
          <em>best recipe</em> to make the <em>sweetest food</em> possible.
        </p>
        <button>Get Recipe</button>
      </div>

      <div className="recipe-box">
        <h4>Ingredients to use:</h4>
        <ul>
          <li>2 Cubes of Maggi</li>
          <li>2 Cups of Rice</li>
          <li>1 Liter of Water</li>
          <li>5 Spoons of Pepper</li>
          <li>5 Spoons of Oil</li>
          <li>Meat and Fish</li>
        </ul>
        <h3>Recipe Steps:</h3>
        <ol>
          <li>
            Blend the Pepper Base: Blend tomatoes, red bell peppers, onions,
            scotch bonnet peppers, garlic, and ginger into a smooth paste.
          </li>
          <li>
            Fry the Tomato Paste and Base: Heat oil in a large pot, sauté
            onions, then add tomato paste and fry for a few minutes until it
            darkens. Add the blended pepper mixture and cook until reduced and
            the oil separates.
          </li>
          <li>
            Season the Sauce: Add curry powder, thyme, bay leaves, bouillon
            cubes, and salt to the tomato mixture, stirring to combine.
          </li>
          <li>
            Add Rice and Stock: Stir in thoroughly rinsed, uncooked, long-grain
            parboiled rice until fully coated, then add chicken or beef stock.
          </li>
          <li>
            Seal and Steam: Cover the pot with aluminum foil to trap steam, then
            add the lid, and cook on low heat for 20-30 minutes.
          </li>
          <li>
            Stir and Rest: Once the rice is tender, stir it gently to fluff,
            then let it rest for 10-15 minutes before serving.
          </li>
        </ol>
      </div>
    </main>
  );
}
