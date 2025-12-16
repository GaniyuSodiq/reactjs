import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData)

    // function toggleAllOff(){
    //     console.log("toggle all off")
    //     setPads(prevPads => prevPads.map(pad => ({...pad, on: false})))
    // }

    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Pad components
     * and set it up so when they get clicked, the function runs
    */

        /**
         * Challenge:
         * Call setPads to update the state of the one pad that was
         * clicked. Map over the previous pads array, and if the current
         * item you're iterating over has the same id as the `id` passed
         * to this function, then return a new object with the `on` value
         * set to the opposite of what it was before.
         * Otherwise (if the ids don't match), just return the previous
         * item as it was, unchanged.
         */

    function togglePad(id){
        console.log(id)
        // setPads(prevPads => prevPads.map(pad => pad.id === id ? {...pad, on: !on} : pad))
        
        // 😁😁😁😁😁 ANOTHER HAPPY FEELING MOMENT
        // did you know that i was strucgling to get this code to work since yesteday
        // i kept getting error and i knew that i understand what the syntax is doing 
        // but couldnt identity the lapse
        // i went online and do some research on my own - without checing the tutors code
        // i got a semilar scenerio that wasnt using state but mapping over array of obj and modify one
        // i look thru their code, understand it, and see what i was doing wrong
        // their code wasnt even using ternery op or arro fn, but i understand        
        setPads(prevPads => prevPads.map(pad => pad.id === id ? ({...pad, on: !pad.on}) : pad))
        // below is the tutor's solution
        /**
        function toggle(id){
            setPads(prevPads => prevPads.map(item => {
                return item.id === id ? {...item, on: item.on}, item   
            }))
        } 
        */
    }

    const buttonElements = pads.map(pad => (
        <Pad key={pad.id} id={pad.id} color={pad.color} on={pad.on} togglePadFn={togglePad}/>
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
            
        </main>
    )
}
