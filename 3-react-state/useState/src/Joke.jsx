import React from "react"

export default function Joke(props) {
    /**
     * Challenge 1:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    const [isShown, setIsShown] = React.useState(false)
    function handleToggle(){
        setIsShown(prevIsShown => !prevIsShown)
    }
    console.log(isShown)


    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {/* 
                 * Challenge2:
                 * only display the puchline parapgh if isShown is true
            */ }
            {/*ONE WAY {isShown ? <p>{props.punchline}</p> : <p></p> } */}
            {isShown && <p>{props.punchline}</p>}
            {/* // why did the above code too work?
            // we always use && to check if the LHS and RHS are true then run the code
            if (true && true) {
                console.log("Everything was true")
            }
            // however it is not entirely tru that both have to true before th code would work
            // (true && true)
            // what is really happening in the condition is left to right evaluation
            // the cpt checks the LHS, if it is truthy value, it checks the RHS too
            // if the LHS is falsy value, the execution stopped, the next line of code would not work
            // if we have (true && console.log("this code is running"))
            // the RHS will run bcs the LHS is truthy 

            // so the sign '&&' is a quick way to display / not display something */}
            <button onClick={handleToggle}>{isShown ? "Close" : "Open"}</button>
            <hr />
        </div>
    )
}