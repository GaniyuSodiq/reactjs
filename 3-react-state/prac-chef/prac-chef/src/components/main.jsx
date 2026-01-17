import React from "react"
import IngredientBox from "./Ingredientbox"
import RecipeBox from "./RecipeBox"

export default function Main() {

    const [ingredientArr, setIngredientArr] = React.useState([])

    const ingredients = ingredientArr.map(ing => <li key={ing}>{ing} </li>)

    function asubmitIngredient(formData) {
        const newIngredient = formData.get("addIngredient")
        setIngredientArr(prevIngredients => [...prevIngredients, newIngredient])
    }

    function submitIngredient(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("addIngredient")
        setIngredientArr(prevIngredients => [...prevIngredients, newIngredient])
        event.currentTarget.reset()
    }

    const [recipeBox, setRecipeBox] = React.useState(false)

    function toggleRecipe() {
        setRecipeBox(prevRecipeBox => !prevRecipeBox)
    }

    return (
        <>
            <main className="mainPage">
                <form action="" onSubmit={submitIngredient} className="addIngredientForm">
                    <input
                        type="text"
                        aria-label="add ingredient"
                        name="addIngredient"
                        className="addIngredientInput"
                        placeholder="Rice"
                    />
                    <button className="addIngredientBtn">Add Ingredient</button>
                </form>

                <IngredientBox
                    ingredientArr={ingredientArr}
                    ingredients={ingredients}
                    handleToggleRecipe={toggleRecipe}
                />

                {recipeBox && <RecipeBox/>}
            </main>
        </>
    )
}