export default function Joke(props){
    return (
        <article>
            <p style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</p>
            <p>Punchline: {props.punchline ? props.punchline  : "this joke doesnt have punchline"}</p>
        </article>

        /**
         * CONDITIONAL RENDERING
         * 1
         * {props.setup && <p>Setup: {props.setup}</p>}
         * if LHS is trutty, return RHS
         * 
         * 2
         * <p>Setup: {props.setup ? props.setup : "this joke doesnt have setup"}</p>
         * 
         * 3
         * <p style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</p>
         */
    )
}

