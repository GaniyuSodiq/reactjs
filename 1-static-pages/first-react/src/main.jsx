import './index.css'
import { createRoot } from 'react-dom/client'
import Header from './header'
import MainContent from './MainContent'
import Footer from './Footer'

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
// function Page() {
//     return (
//         <div>
//             <header>
//                 <img src="src/assets/react.svg" alt="React Logo" />
//             </header>
//             <main>
//                 <h1>Reasons I'm Excited To Learn React</h1>
//                 <ol>
//                     <li>I WANT TO LEARN REACT NATIVE</li>
//                     <li>I NEED A BETTER INCOME</li>
//                     <li>I WANT TO CREATE SOFTWARE ENGINEERING COMPANY</li>
//                 </ol>
//             </main>
//             <footer>
//                 <small>c 2025 <span>Ganiyu</span> Developement. All rights reserved</small>
//             </footer>
//         </div>
//     )
// }


// root.render(
//         <Page />
//         /* components can also be written in opening and closing bracket
//         <Page>Some content can be here</Page> */ 
// )




// ❤️‍🔥 FRAGMENT - a built-in component from React
// we first import it

import { Fragment } from 'react'

// we can render it as if it were a regular html element

// function Page() {
//     return (
//         <Fragment>
//             <header>
//                 <img src="src/assets/react.svg" alt="React Logo" />
//             </header>
//             <main>
//                 <h1>Reasons I'm Excited To Learn React</h1>
//                 <ol>
//                     <li>I WANT TO LEARN REACT NATIVE</li>
//                     <li>I NEED A BETTER INCOME</li>
//                     <li>I WANT TO CREATE SOFTWARE ENGINEERING COMPANY</li>
//                 </ol>
//             </main>
//             <footer>
//                 <small>c 2025 <span>Ganiyu</span> Developement. All rights reserved</small>
//             </footer>
//         </Fragment>
//     )
// }

// root.render(
//         <Page />
// )

/**
 * There is a little difference in using Fragments compare to using div to house our html tags
 * 
 * When we used a div - remeber the div renders inside the <div id="root"> </div> in our html
 * So what we end up getting is another div inside the html root div
 * 
 * When we use a Fragment, React will not insert another level of element
 * Fragment just allows us to have multiple html node inside of our .render 
 * without us worrying about an unnecessary node in our html
 * 
 * And using Fragment has been simplified 
 * we can just use '<> </>' tags and disregard the import too
 */

// function Page() {
//     return (
//         <>
//             <header>
//                 <img src="src/assets/react.svg" alt="React Logo" />
//             </header>
//             <main>
//                 <h1>Reasons I'm Excited To Learn React</h1>
//                 <ol>
//                     <li>I WANT TO LEARN REACT NATIVE</li>
//                     <li>I NEED A BETTER INCOME</li>
//                     <li>I WANT TO CREATE SOFTWARE ENGINEERING COMPANY</li>
//                 </ol>
//             </main>
//             <footer>
//                 <small>c 2025 <span>Ganiyu</span> Developement. All rights reserved</small>
//             </footer>
//         </>
//     )
// }

/**
 * So you can see this empty tags in react 
 * know that this allows us to render sibling react element
 */



// ❤️‍🔥 CUSTOM COMPONENTS & PARENT CHILD IDEA

// CHALLENGE add a header, main and footer component

// function Header() {
//     return (
//         <header>
//             <img src="src/assets/react.svg" alt="React Logo" />

//         </header>
//     )
// }

// function MainContent() {
//     return (
//         <main>
//             <h1>Reasons I'm Excited To Learn React</h1>
//             <ol>
//                 <li>I WANT TO LEARN REACT NATIVE</li>
//                 <li>I NEED A BETTER INCOME</li>
//                 <li>I WANT TO CREATE SOFTWARE ENGINEERING COMPANY</li>
//             </ol>
//         </main>
//     )
// }

// function Footer() {
//     return (
//         <footer>
//             <small>c 2025 <span>Ganiyu</span> Developement. All rights reserved</small>
//         </footer>
//     )
// }

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />            
        </>
    )
}

root.render(
    <Page />
)
// PARENT CHILD COMPONENTS IDEA
// The idea of Parent/Child is like what we have in the example above
// We have the individual components Header, MainContent, Footer
// we can as well put these 3 inside the .render(), but we made another component called Page
// We put the others inside Page. Page here is the Parent and Header, MainContent and Footer are the Children
// This can go further down where a child, eg Header in this case, will be a parent for another component
// and that other component too will have its own child component.
// And Page here can be a child of another component




// ❤️‍🔥 STYLING WITH CLASSES
// whenever we ares tyling something in JSX, we use 'className' not 'class'

// function Header() {
//     return (
//         <header className='header'>
//             <img src="src/assets/react.svg" alt="React Logo" />
//             <nav>
//                 <ul className='nav-list'>
//                     <li className='list-item'>Pricing</li>
//                     <li className='list-item'>About</li>
//                     <li className='list-item'>Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }
