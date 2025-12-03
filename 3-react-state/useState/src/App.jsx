export default function App() {
  /**
   * Challenge: Replace the if/else below with a ternary
   * to determine the text that should display on the page
   */
  // const isGoingOut = true

  // let answer  // 👈 Use ternary here

  // let answer = isGoingOut ? "Yes" : "No"

  // Remove the code below 👇 once your ternary is done
  // if(isGoingOut === true) {
  //     answer = "Yes"
  // } else {
  //     answer = "No"
  // }

  /**
   * Ternary operator is just a way to have if/else statement on a single line
   * let answer = isGoingOut === true ? "Yes" : "No"
   * Ternary operator is simply asking a question: 
   * is isGoingOut true ? return "Yes" if true and return "No" if false
   * it can be written as 'const answer = isGoingOut ? "Yes" : "No"
   * we change to const bcs we are not in the if else scope anymore
   * and the isGoingOut is alreadya bollean so no need to equate it to true, 
   * String is already truthy by default
   * 
   * Note that we we are rendering the result as answer in our component.
   * there is another way to do this and that is to move the ternary into my component.
  */

  /**
   * Challenge: move the Ternary directly inside the JSX
  */
  const isGoingOut = true

  /**
   * so we no longer need answer variable
   * we simple use what the ternary operator returns
  */

  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button className="value">{isGoingOut ? "Yes" : "No"}</button>
    </main>
  )
}
