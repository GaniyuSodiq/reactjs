// HERE IS AN APP THAT COUNTS HOW MANY TIMES BOB IS GOING TO SAY STATE IN THIS ENTIRE SECTION

import React from "react"

export default function App() {

    const [count, setCount] = React.useState(0)
   
    /**
     * in the body of the callback fn we need to return.. 
     * the new value we want to state to be on the next render
     * we could return count + 1, which is not different from what we had before
     * the different is that this callback function will passed the oldValue of the state... 
     * before your setCount ran  
     * so with this I can use the oldValue in place of wht used to be count. this works!
     *   
    function add(){
      setCount(function(oldValue){
        return oldValue + 1
      })
    }
    * And instead of using oldValue, we can use prev followed by the state variable name
    * in the case count. so we use prevCount instead of oldValue
    
    function add(){
      setCount(function(prevCount){
        return prevCount + 1
      })
    }
    * At first this might look like extra work but if we take the more easy sysntax of arrow fn
    * we can simply say 
    
    function add(){
      setCount(prevCount => prevCount + 1)
    }
    * and in the end it is not really different from what we had before
    * BUT WHY DO WE HAVE TO DO THIS
    * 
    * Note: If you eve need the old value of state
    * to help you determine the new value of state,
    * you should pass a callback function to your 
    * state setter function instead of using state directly.
    * This callback function will recieve the old value 
    * of state has its parameter, which you can then use
    * to determine your new value of state.
    * THIS IS A GENERAL RULE. 
    * The issue of using state directly is nt something you will 
    * come accross often but better safe than sorry. 
    * And the syntax are even similar and simple.
    * 
    * lets see the issue with using the state directly
    *     
    function add(){
      setCount(prevCount => prevCount + 1)
      setCount(prevCount => prevCount + 1)
      setCount(prevCount => prevCount + 1)
    }

    function minus(){
      setCount(count - 1)
      setCount(count - 1)
      setCount(count - 1)
    }
      the add function will add increament by 3 
      and the minus will only decrease by 1

      you would expect the minus too to be by 3... but it doesnt work except in the callback fn
    */
    function add(){
      setCount(prevCount => prevCount + 1)
    }

    // function minus(){
    //   setCount(count - 1)
    // }

    function minus(){
      setCount(prevCount => prevCount -1)
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
