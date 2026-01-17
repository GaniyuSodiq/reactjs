export default function Main() {
    return (
        <>
            <main className="mainPage">
                <form action="submitIngredient" className="addIngredientForm">
                    <input
                        type="text"
                        aria-label="add ingredient"
                        name="addIngredient" 
                        className="addIngredientInput"
                    />
                    <button className="addIngredientBtn">Add Ingredient</button>
                </form>
            </main>
        </>
    )
}