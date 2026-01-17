export default function IngredientBox(props) {
    return (
        <>
            <div className="ingredientsBox">
                {props.ingredientArr.length > 0 ? <div className="ingredientsAtHand">
                    <h3>Ingredients at hand:</h3>
                    <ul>{props.ingredients}</ul>
                </div> : null}

                {props.ingredientArr.length > 3 && <div className="ctaBox">
                    <p>Send the ingredients to Chef Simi to get the best recipe you could get</p>
                    <button onClick={props.handleToggleRecipe}>Send To Chef</button>
                </div>}
            </div>
        </>
    )
}