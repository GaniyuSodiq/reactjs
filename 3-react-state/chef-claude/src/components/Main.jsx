export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const mappedIngredients = ingredients.map(ingr => <li key={ingr}>{ingr}</li>)

    function handleOnSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        alert(newIngredient)
        ingredients.push(newIngredient)
        console.log(ingredients)
    }
    
    return (
        <main>
            <form action="" onSubmit={handleOnSubmit}>
                <label htmlFor="addIngredient" className="add-ingredient-form">
                    <input
                        type="text"
                        placeholder="e.g oregano"
                        aria-label="Add ingredient"
                        id="addIngredient"
                        name="ingredient" 
                    />
                    <button>Add Ingredient</button>
                </label>
            </form>
            <ul>
                {mappedIngredients}
            </ul>
        </main>
    )
}