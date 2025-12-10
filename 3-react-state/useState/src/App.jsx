import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there's exactly 1 unread message, it should read "You have 
     *   1 unread message" (singular)
     * - If there are > 1 unread messages, display "You have <n> unread
     *   messages" (plural)
     */

    // there are couple of ways to achieve these results
    // I used nested ternary but the if statement is what the tutor used

    /**
        let text
    
        if (messages.length === 0){
            text = "You're all caught up!"
        } else if(messages.length === 1){
            text = "Yoo have an unread message"
        } else {
            text = `You have ${messages.length} unread messages`
        }
     */

    // if these conditions are even more than 3 
    // we caould have them in a function like below that returns the text result
    function determineText() {
        if (messages.length === 0) {
            return "You're all caught up!"
        } else if (messages.length === 1) {
            return "Yoo have an unread message"
        } else {
            return `You have ${messages.length} unread messages`
        }
    }


    return (
        <div>
            {/* <h1>{messages.length === 0 ?
                "You're all caught up!" : messages.length === 1
                    ? "Yoo have an unread message" : `You have ${messages.length} unread messages`}
            </h1> */}

            {/* <h1>{text}</h1> */}

            <h1>{determineText()}</h1>
        </div>
    )
}
