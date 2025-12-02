import React from "react"

export default function App() {

  // simply changin a local variable is not gonna make react re-run our component
  // see the code below
  // if I click the btn on page for it to change to 'Heck Yes', it will not
  // bcs 'state' here is a local variable. not a useState variable

  // let state = "Yes o"

  // function handleClick() {
  //   state = "Heck Yes!"
  // }

  /**
   * Instead we have to use a function that is provided by React...
   * ...to save the variable in an actual 'State'
   * We need to first import the function from React using
   * either: import {useState} from "react"
   * or: import React form "react"
   */
  // const result = React.useState() // useState is an array of undefined and a fn: [undefined, ƒ]
  // console.log(result) // [undefined, ƒ]

  const result2 = React.useState("Hello") // ['Hello', ƒ] . "Hello and fn"
  console.log(result2) // ['Hello', ƒ]

  // if we are calling useState and we pass in a value like "Hello" here
  // this value is uses as the initial state.
  // we use it if we want our state to start from a particular value

  // const [result, func] = React.useState("Yes") 

  // so now 'result' is a state variable instead of a local value
  // and we use the variable in our code {result[0]} or better {result}
  // this {result[0]} is bcs when we call React.useState(), we recieve an array in return
  // and we dont use {result[0]} to reference the array value
  // instead we distructure the array like this: 
  // const [result, func] = React.useState("Yes")
  // what the code above means is that.. we know the content of the rhs is ['Yes', ƒ]
  // we are only distructuring them to their individual variable name
  // const [result, func] = ['Yes', ƒ]
  // in other words: // const result = "Yes"  // const func = f
  // we can use any variable name unlike in object destructuring that the name is not flexible
  // const [isImportant, func] = React.useState("Yes")

  // we now that changing a local variabe will not re-render the page, even the default state value
  // but if we call the function and provide a new value...
  // ...React will re-render the page with the new value
  // it will update state and triger React to re-render the page with the updated state

  // there is a naming convention for the func, 
  // it starts with 'set' and ends with the initial state variable name: isImportant
  // making 'setIsImportant'
  const [isImportant, setIsImportant] = React.useState("Yes")
  // we can call the function by setIsImportant("Heck Yes"), it would work but that would lead to error
  // bcs each time the page renders, it will re-render again thereby causing a loop

  function handleClick(){
    setIsImportant("Heck Yes")
  }

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      {/* <button onClick={handleClick} className="value">{state}</button> */}
      <button onClick={handleClick} className="value">{isImportant}</button>
    </main>
  )
}

// but how do we get back to the previous state value??
