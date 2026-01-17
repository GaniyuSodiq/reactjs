import React from "react"

export default function Main() {

    const [ingredientArr, setIngredientArr] = React.useState(["Amala", "Gbegiri", "Ewedu"])

    const ingredients = ingredientArr.map(ing => <li key={ing}>{ing}</li>)

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

    return (
        <>
            <main className="mainPage">
                <form action="" onSubmit={submitIngredient} className="addIngredientForm">
                    <input
                        type="text"
                        aria-label="add ingredient"
                        name="addIngredient"
                        className="addIngredientInput"
                    />
                    <button className="addIngredientBtn">Add Ingredient</button>
                </form>
                <div className="ingredientsAtHand">
                    <h3>Ingredients at hand:</h3>
                    <ul>{ingredients}</ul>
                    <div className="ctaBox">
                        <p>Send the ingredient to Chef Simi to get the best recipe you could get</p>
                        <button>Send To Chef</button>
                    </div>
                </div>
            </main>
        </>
    )
}