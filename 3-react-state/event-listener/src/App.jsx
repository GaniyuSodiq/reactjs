
import reactImage from "./assets/react.svg"
export default function App() {
  
  function handleClick() {
    console.log("I was clicked!")
  }

  function handleMouseHover(){
    console.log("I was hovered")
  }
  
  /**
   * Challenge: add our new function to the button
   */
  
  return (
    <main className="container">
      <img
        src={reactImage}
        alt="Placeholder image from Picsum"
        onMouseEnter={handleMouseHover}
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  )
}
