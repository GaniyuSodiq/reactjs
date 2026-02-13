import React from "react";

export default function Main() {
  // const key = Math.random() * Math.random();
  // const key = IDgenerator();
  // this do not work as expected
  // all the keys keep taking the new one generated

  function IDgenerator() {
    return Math.random() * Math.random();
  }

  // const [count, setCount] = React.useState(0);
  const [ingredientArr, setIngredientArr] = React.useState([]);
  let count = 0
  const ingredients = ingredientArr.map(function (ing) {
    // const key = IDgenerator();
    // const key = ingredientArr.length;   
    // let count = 0 
    // const key = count + 1
    const key = count++
    return (
      <li key={key} id={key}>
        <span>{ing}</span>{" "}
        <span className="delete" onClick={() => removeIngredient(key)}></span>
      </li>
    );
  });

  console.log(ingredients);

  const [recipeShown, setRecipeShown] = React.useState(false);
  function toggleRecipeShown() {
    setRecipeShown((prev) => !prev);
  }

  function addIngredient(formData) {
    // setCount((prevCount) => prevCount + 1);
    const newIngredient = formData.get("ingredient");
    setIngredientArr((prevIngredientArr) => [
      ...prevIngredientArr,
      newIngredient,
    ]);
  }

  // prevIngArr.filter((ingre) => ingre === !ingredientArr[ingredientToRemove]),
  function removeIngredient(ingredientToRemove) {
    console.log(`Clicked ${ingredientToRemove}`);
    setIngredientArr((prevIngArr) =>
      prevIngArr.filter((ingre) => ingre !== ingredientArr[ingredientToRemove]),
    );
  }
 // BUG TO FIX LETER 
 // now that i am able to remove the ingredient from the list, another issue arise
 // if there are 2 or more same ingredient on the list, removing one removes the rest
 // how will I fix this?
 // i feel making the array and array of objects would do that bcs
 // i cant think of a way to remove with arr.lenght here
 // prevIngArr.filter((ingre) => ingre !== ingredientArr[ingredientToRemove])
 // but i can remove with .id etc


 // FEATURE TO ADD NOW - implement AI
 // i want to send the list of ingredient to Hugging face AI and get out jsx or recipe
 // how?
 // i will use my screensaver problem solving technique steps
 // i want to send a list of ingredients to HF and get it to produce recipe
 // how do i connect to HF api?
 // how do I query AI from my code
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

      {ingredientArr.length > 0 && (
        <div className="ingredient-list">
          <h2>Ingredients List:</h2>
          <ul>{ingredients}</ul>
        </div>
      )}

      {ingredientArr.length > 3 && (
        <div className="cta-box">
          <p>
            Send the ingredients to Chef Aminat to give you the{" "}
            <em>best recipe</em> to make the <em>sweetest food</em> possible.
          </p>
          <button onClick={toggleRecipeShown}>Get Recipe</button>
        </div>
      )}

      {recipeShown && (
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
              Add Rice and Stock: Stir in thoroughly rinsed, uncooked,
              long-grain parboiled rice until fully coated, then add chicken or
              beef stock.
            </li>
            <li>
              Seal and Steam: Cover the pot with aluminum foil to trap steam,
              then add the lid, and cook on low heat for 20-30 minutes.
            </li>
            <li>
              Stir and Rest: Once the rice is tender, stir it gently to fluff,
              then let it rest for 10-15 minutes before serving.
            </li>
          </ol>
        </div>
      )}
    </main>
  );
}
