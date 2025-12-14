import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData)

    const buttonElements = pads.map(pad => (
        <Pad key={pad.id} color={pad.color} on={pad.on}/>
    ))

    function toggleAllOff(){
        console.log("toggle all off")
        setPads(prevPads => prevPads.map(pad => ({...pad, on: false})))
    }
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
            <button 
             style={{opacity:"1"}}
             onClick={toggleAllOff}
            >Turn all off</button>
        </main>
    )
}
