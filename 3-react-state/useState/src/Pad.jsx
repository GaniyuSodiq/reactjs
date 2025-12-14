import React from "react"
export default function Pad(props) {
    /**
     * Challenge 4: 
     * Create state controlling whether
     * this pad is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the pad is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each pad should toggle it on and off.
     */
    const [onState, setOnState] = React.useState(props.on)

    function toggleState(){
        setOnState(prevOn => !prevOn)
    }
    return (
        <button
            style={{ backgroundColor: props.color }}
            className={onState ? "on" : undefined}
            onClick={toggleState}
        ></button>
    )
}