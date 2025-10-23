export default function App() {

  function handleClick() {
    alert("hello Sodiq")
  }

  function handleMouseOver() {
    alert("Moused over")
  }

  return (
    <main className="container">
      <img
        onMouseOver={handleMouseOver}
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
      />
      <button onClick={handleClick}>Click Me</button>
    </main>
  )
}