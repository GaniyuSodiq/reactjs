export default function Joke(props){
    return (
        <article>
            <p style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</p>
            <p>Punchline: {props.punchline ? props.punchline  : "this joke doesnt have punchline"}</p>
        </article>
    )
}

