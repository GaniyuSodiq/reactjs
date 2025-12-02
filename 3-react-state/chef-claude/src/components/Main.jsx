export default function Main(){
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    /**
     * 1: Review Challenge:
     * Map over the list of ingredients and render them as list items
     * 
     * Note: We're doing things a weird way here. Don't worry,
     * we're building up to learning the right way 🙂
     * 
     * key is included to prevent react from showing the key error for array items
     */

    const ingredientsListItems = ingredients.map(ingredient => 
        (<li key={ingredient}> {ingredient} </li>)
        // the extra brcket() is use to take advantage of the return benefit in single arr fn
    )


    /**
     * 2: Another challenge:
     * add onSubmit eventListener on the form and get it diapl "form submitted" to console
     */

    function handleSubmit(event){
        // to stop the submit from reloading the page
        // and if you look down on the form opening tag, thisis where we use this fn with onSubmit
        event.preventDefault()
        console.log("form submitted")
        // the reason we disnt use it in the submit button is:
        // 1: we want to the user to be able to submit the form by pressing Enter key not just submit btn
        // 2: being in the form looks more semantic. submit btn will work despit the onSubmit in the form tag.
        
        /**
         * 3: Another challenge:
         * A: how can we grab the igredient that was added to the input?
         * B: And put it in the array?
        */
        // --A: how can we grab the igredient that was added to the input?
        // in order to grab the indgredient typed into the input
        // we need to grab the form data that was submitted with the form
        // in another word...
        // in order to grab the text of the of the input field that has attribute name="ingredient",
        // we need to do that thru form data
        // we can grab the form data on the html form itself
        // or grab it from the form DOM thru the 'event'

        // grab the form data from the form DOM thru the 'event'
        const formData = new FormData(event.currentTarget)
        // get the ingredient data from the form data we grabbed above
        const newIngredient = formData.get("ingredient")

        // --B: And put the new ingredient into the array?
        ingredients.push(newIngredient)
        console.log(ingredients)

        /**
         * By default React doe not automatically upate the page for us
         * in the imparative vanilla js. we would have a fn re-render the list when new item is added
         * But React is declarative so there is a better way to do that here
         * We want to just update our data ie the list and have react sense that then update d page or us
         * THAT IS WEHRE THE CONCEPT OF REACT STATE COMES IN 😁❤️‍🔥
         */
    }



    return(
        <main>
            <form action="" className="add-ingredient-form" onSubmit={handleSubmit}>
                <input 
                    aria-label="Add Ingridient" 
                    type="text" 
                    placeholder="e.g. Oregano"
                    // Whenever we are submitting a form, our input(s) must have a name
                    name="ingredient"
                    // If the page reloads (by commenting out the preventDefault() above), 
                    // we will see the URL change to: http://localhost:5173/?ingredient=Maggi
                    // Maggi is the value typed into the input field
                    // But modern development doesnt need the page to reload in this way
                />

                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}