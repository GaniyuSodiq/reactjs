import './index.css'
import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById("root"))


// CUSTOM COMPONENT
// lets say we want to run our jsx from from a function

// function temporaryName() { instead of camelCase, components use PascalCase
function TemporaryName() {
    // we can just start the jsx at the fron of return keyword, hwever we can put jsx in () too
    return (
        <main>
            <img src="src/assets/react.svg" alt="" /><h1>Fun Facts About React</h1>
            <div className='content'>
                <div className='lists'>
                    <ul>
                        <li>React is a library, not a framework</li>
                        <li>Born out of Facebook's need for a better UI</li>
                        <li>Powers more than just web apps</li>
                        <li>Loved by industry giants</li>
                    </ul>
                </div>
                <div>
                    <img src="src/assets/react.svg" alt="" className='img-right' />
                </div>
            </div>
        </main>
    )
}

/**
root.render(
  temporaryName() // this works the same way as before
  // and it make sence bcs this function returns the jsx we need for our .render()
  // but this is not exactly how we use components in react
)
*/

// Components are written in Pascal Case: temporaryName will be TemporaryName
// And instead of calling it with brackets TemporaryName(), 
// we call it by putting in self closing html angle bracket <TemporaryName />
/**

root.render(
    <TemporaryName />
)

*/

// CHALLENGE - create a Page component. List why u learn react
function Page() {
    return (
        <div>
            <header>
                <img src="src/assets/react.svg" alt="React Logo" />
            </header>
            <main>
                <h1>Reasons I'm Excited To Learn React</h1>
                <ol>
                    <li>I WANT TO LEARN REACT NATIVE</li>
                    <li>I NEED A BETTER INCOME</li>
                    <li>I WANT TO CREATE SOFTWARE ENGINEERING COMPANY</li>
                </ol>
            </main>
            <footer>
                <small>c 2025 <span>Ganiyu</span> Developement. All rights reserved</small>
            </footer>
        </div>
    )
}


root.render(
        <Page />
        /* components can also be written in opening and closing bracket
        <Page>Some content can be here</Page> */ 
)



// CHALLENGE add a header and footer component

// function Header() {
//     return (
//         <header>
//             <img src="src/assets/react.svg" alt="React Logo" />

//         </header>
//     )
// }

// function Footer() {
//     return (
//         <footer>
//             <small>c 2025 <span>Ganiyu</span> Developement. All rights reserved</small>
//         </footer>
//     )
// }

// root.render(
//     <>
//         <Header />
//         <Page />
//         <Footer />
//     </>
// )