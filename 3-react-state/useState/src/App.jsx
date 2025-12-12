import pads from "./pads"
import React from "react"

export default function App() {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */

    const [padsState, setPadsState] = React.useState(pads)

    const mappedPads = padsState.map(pad => <button key={pad.id}></button>)
    return (
        <main>
            <div className="pad-container">
                {mappedPads}
            </div>
        </main>
    )
}
