export default function Main(){
    return(
        <main>
            <form action="" className="add-ingredient-form">
                {/* arial -label is same as puting the form component into lable tags
                both arial-lable and label tags are use for screen readers to knw what to do with the...
                ..form component
                placeholder is where u give example of what to be in the form
                placeholder is not where you put the title / what the does does like Add Ingridient */}
                <input 
                    aria-label="Add Ingridient" 
                    type="text" 
                    placeholder="e.g. Oregano"
                />

                <button>Add Ingredient</button>
            </form>
        </main>
    )
}