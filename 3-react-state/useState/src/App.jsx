import React from "react"

export default function App() {
  /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. 
     * Initialize the state array as an empty array
     * 
     * Don't worry about fixing `addFavoriteThing` quite yet.
     */
  // const myFavoriteThings = []
  const [myFavoriteThings, setMyFavoriteThings] = React.useState([])

  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  // the main purpose of this app is to see how to add things into the array
  function addFavoriteThing() {
    // We'll work on this next, nothing to do here yet.

    // You can say I know how to add somthing int a array.. then use:
    // myFavoriteThings.push("blablan")
    /**
     * there are a couple of things wrong with above way
     * 1: simply modifying the state doesnt re-render the view in React
     * there is something special about the state setter eg here setMyFavoriteThings... 
     * that does triger re-render in react
     * myFavoriteThings.push("blablan") will add blablan to the array but will not trigger rerender
     * 2: it is an important rul that you never ever want to directly modify state
     * things like .push does not make duplicate, it modifies the original array
     * 
     * just like the way we did not want setCount(count++)
     * we said it gives setCount(count = count + 1)
     * and we cannot modify state directly in React, count is a state, count + 1 modifies it
     * similarly myFavoriteThings.push("blablan") is a bad idea in react
     * 
     * to modify a state in React, we have to use the setter function
     * and when we use it, we have to decide if we need the current state or not
     * if we need the current state, we use callback fn
     * 
    */
//   setMyFavoriteThings(prevFavThings => [...prevFavThings, "Test"])
   /**
    * We need the previous Array here, thats y we use callback fn
    * [...prevFavThings, "Test"]
    * here we use desstructure to drop the items in the prev array then join the new item with them
    * so the final trick to get allFavoriteThings items to display is
    */
    
   setMyFavoriteThings(
    prevFavThings => [
      ...prevFavThings, 
      allFavoriteThings[prevFavThings.length]
    ])
    /**
     * at first click, prevFavThings.length is 0 bcs we started with nothing
     * this makes allFavoriteThings[0],... 
     * ...and drop its first item which is "💦🌹" into myFavoriteThings
     * 
     * at second click, prevFavThings.length is 1 bcs it now has "💦🌹"
     * this makes allFavoriteThings[1],... 
     * ...and drop its second item which is "😺" into myFavoriteThings
     * 
     * at the third click, prevFavThings.length is 2 bcs it now has "💦🌹" and "😺"
     * this makes allFavoriteThings[2],...
     * ...and drop its third item which is "💡🫖" into myFavoriteThings
     * 
     * and so on... 
     */
  }
  
  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}