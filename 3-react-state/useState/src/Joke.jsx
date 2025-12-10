import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    function handleToggle(){
        setIsShown(prevIsShown => !prevIsShown)
    }
    console.log(isShown)


    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            {<button onClick={handleToggle}>{isShown ? "Hide " : "View "}punchline</button>}
            {/* // now that we have 2 different options to chse what to display from, we use ternary operator


            // There is a little bit of pushback in the react community to using the && operatr at all
            // bcs of that 0 bug we saw earliear
            // bugs like this can be easily dodge if we use ternary operator 
            // and inplaces where the answer can be either one thing on nothing,
            // we use null as the nothing/false part
            // using the above samples - can turn them to ternary like below
            {props.setup ? <h3>{props.setup}</h3> : null}
            {isShown ? <p>{props.punchline}</p> : null} 
            // these 2 rendering types will solve 90% of ur conditional rendering taks
            // in the other 10%, where the options are 3 or more, u can use if-else or others
            */}
            <hr />
        </div>
    )
}