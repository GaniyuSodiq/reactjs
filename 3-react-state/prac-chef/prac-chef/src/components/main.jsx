import React from "react"

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

                <div>
                    {ingredientArr.length > 0 ? <div className="ingredientsAtHand">
                        <h3>Ingredients at hand:</h3>
                        <ul>{ingredients}</ul>
                    </div> : null}

                    {ingredientArr.length > 3 && <div className="ctaBox">
                        <p>Send the ingredient to Chef Simi to get the best recipe you could get</p>
                        <button>Send To Chef</button>
                    </div>}
                </div>

                <div className="recipeBox">
                    <h2>Nigerian Jollof Rice</h2>
                    <h4>Ingredients and Quantity</h4>
                    <ul>
                        <li>2 cups of rice</li>
                        <li>4 tea spoons of maggi</li>
                        <li>1 complete onion</li>
                        <li>2 litters of water</li>
                    </ul>
                    <h4>Cooking steps</h4>
                    <ol>
                        <li>2 cups of rice</li>
                        <li>4 tea spoons of maggi</li>
                        <li>1 complete onion</li>
                        <li>2 litters of water</li>
                    </ol>
                </div>
            </main>
        </>
    )
}