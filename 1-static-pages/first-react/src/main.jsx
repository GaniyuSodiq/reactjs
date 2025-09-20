import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

root.render(
  <main>
    <img src="src/assets/react.svg"></img>
    <h1>Welcome, React</h1>
  </main>
)

// with static images that aren't going to be changing or coming froma CDN or database,
// there is a unique way to deal with them in react

// in vanilla js html img is called like like this: <img src = "assets/react.svg">
// bcs the code file is in the same location as the assets folder
// it is somehow different here and it can be a challenge in reactjs, 
// a quick fix is to use absolute path like in the .render()
// <img src="src/assets/react.svg"></img>

// JSX expression must have one parent element.