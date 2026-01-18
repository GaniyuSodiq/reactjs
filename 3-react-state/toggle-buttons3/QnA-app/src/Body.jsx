import React from "react"

import Question from "./Question"
import questions from "./assets/questions"



export default function Body() {

    // i can be getting the data directly from the questions.js array but 
    // the doesnt seem right... so I will bring the array into my own array
    // and use my newly created array the way i want to
    // i can even save this new array in state, 

    // const theQuestions = questions

    const [theQuestions, setTheQuestions] = React.useState(questions)


    return (
        <main>
            <Question qn={theQuestions[0].question} />
            <div className="controls">
                <span>⬅️</span>
                <span>➡️</span>
            </div>
        </main>
    )
}