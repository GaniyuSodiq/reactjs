// HERE IS AN APP THAT COUNTS HOW MANY TIMES BOB IS GOING TO SAY STATE IN THIS ENTIRE SECTION

import React from "react"

export default function App() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
    */
    const [count, setCount] = React.useState(0)

    /**
     * Challenge: 
     * Create a function called 'add' that runs when the + button is clicked
     * you can just console log "add" for now
    */
    // function add(){
    //   console.log("add")
    // }

    /**
     * Challenge: 
     * see if you can think of a way to add 1 to the count
     * everytime the button is clicked
    */    
    function add(){
      console.log("add")
      setCount(count + 1)
      // if you try to do setCount(count++) you will get an error that says:
      // 'you cant assign to a constant variable'
      // and you then go ahead to change the count declaration to:
      // let [count, setCount] = React.useState(0)
      // and it worked partially... bcs 'count' is now declared with 'let'
      // but this is a no no in React bcs count++ is 'count = count + 1'
      // and it is directly modifying the count in the LHS
      // modifying state directly is ano no in react. REMMBER THAT
      // on the contrary, setCount(count + 1) on gives setCount the value of count + 1
    }

    /**
     * Challenge: 
     * Add functionality to the minus 
    */
    function minus(){
      setCount(count - 1)
    }

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={minus} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button onClick={add} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
