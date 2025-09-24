
// ❤️‍🔥❤️‍🔥❤️‍🔥 SECTION 1 - STATIC PAGES
/**
 * HTML FILE
 * <body>
    <!--
    Why static pages?

    You must have known how to build static pages in html css and js.
    The reason we are doing it again for react is for u to understand...

    HOW TO THINK IN REACT
    writing a good react code requires a bit paradigm shift from how you are used 
    to build web apps in html css and vanilla js
    -->
    
    <!-- <h1>Hello World!</h1>  -->
    <!-- 
    this is the basic html way 
    but we dont write code like this in reactjs
    instead of adding anything manually to our markup, 
    react will take this in our javascript and add the content to our html for us
    we just need to have a place holder tag (ie div) in our html file
    the div will usually have an id of root  
    -->
    <div id="root"></div>
    <!-- this is the place where react will place all the markup we generate from our jsx -->


    <script src="index.jsx"></script>
</body>
 */

//❤️‍🔥 to setup the most basic react app,
// you need to do 2 things

// 1- create a root
// 2- render some markup to the root

// to create a root, 
// i need to import a method called root from the react DOM library from a sub module called reactClient
// import { createRoot } from "react-dom/client"

// we then use the method to create a root
// what we need to pass to the createRoot method is the dom node in our index.html
// const root = createRoot(document.getElementById("root"))

// why is it called 'root'
// since we are going to be rendering all of our markup using react in our javascript files,
// we need one central location where react can insert all of that content
// the div with the id of root that we setup in index.html, 
// will be the root of our application
// it is the one place where react will insert everything
// what we need to pass to the createRoot method is the dom node in our index.html

// now that we have root in our js, 
// i can call a method on that root, a method called render
// and pass in what looks alot like normal html
// root.render(<h1>Hello, React!</h1>)

// CHALLENGE - rewrite the first 3 react code we have above this sentence

// import {createRoot} from "react-dom/client"
// const root = createRoot(document.getElementById("root"))
// root.render(<h4>Wowo</h4>)

// you might see a similar way in the wild. which is the same thing.

// import ReactDOM from "react-dom/client"
// ReactDOM.createRoot(document.getElementById("root")).render(<h4>Wowo</h4>)

/*
CHALLENGE - setup a react app from scratch
this time, try rendering an un-ordered list with 2-3 list items
with why you are excited to learn rwact

import { createRoot } from "react-dom/client"
const root1 = createRoot(document.getElementById("root"))
root1.render(
    <ol>
        <li>To create React NAtive</li>
        <li>Build SaaS business</li>
        <li>Build brand online</li>
    </ol>
)
*/

//❤️‍🔥 HOW TO SETUP REACT PROJECT LOCALLY USING VITE
// Vite - fast in french
// you need to have Node and NPM setup
// NPM mostly comes with node so I installed node from the official webpage - .exe
// then i used 'npm create vite@latest'
// give the project a name, selected the framwork and the variant.
// cd into the project name. run 'npm install'
// next is to run run the Dev server. we can do that in VScode
// code . to open the current folder in vscode
// once i am in vscode, i can run 'npm run dev' - my vscode gave error, i had to run it in bash
// run this in powershell admin 'Set-ExecutionPolicy RemoteSigned' it fix the error
// this will spin up a dev server on port  http://localhost:5173/
// i just need to go to the address to see the project created with vite

/**
    ❤️‍🔥 JAVASCRIPT LIBRARIES/FRAMEWORKS 

    LIBRARY is a collection of reuseable code
    reduxes the need to write repetitive/complex things from scratch
    you control how wehn it is used
    no/few boundaries

    FRAMEWORK is predetermined architecture - you follow a specified pettern of development
    you work within the boundaries set by the framework
    there is "Right" and "wrong" way to use the framework

    REACT is considered to be a library

    When you might not use a library/framework 
    * when u are buiding small projects
    * when network load is a problem in users location
*/

/**
    ❤️‍🔥 React.createElement()

    import {createRoot} from "react-dom/client"
    const root = createRoot(document.getElementById("root"))
    root.render(<h4>Wowo</h4>)

    it might be a little bit starnge to have our html inside our javascript
    yes, when react was first introduced, html in js didnt exist

    react exported a function called createElement, similar to document.createElement() in vanilla js
    import {createElement} from "react"
    it takes in 3 parameters

    1- what type of html element you want to create
    2- props
    3- what is the children of the html element. the content in the tag

    so it looks like this
    root.render(
        reactElement("h1", null, "this is an h1 content")
    )

    we can the save the createElement fn inside a variable and use the variable name in .render()

    const reactElement = createElement("h1", null, "this is an h1 content")
    root.render(
        reactElement
    )

    if you console.log(reactElement), 
    {$$typeof: Symbol(react.transitional.element), type: 'h1', key: null, props: {…}, _owner: null, …}
    you will see that is an object that has info
    about the DOM node that is going to be inserted by react into our actual DOM

    this object is just a regular js object
    it needs to be structured the way it is so that react can undertsnad what it is

    it is just a javascript object

    Maybe the react team figured this way of writing html isnt so cool

    but this led to jsx 

    root.render(<h4>Wowo</h4>)

    root1.render(
        <ol>
            <li>To create React NAtive</li>
            <li>Build SaaS business</li>
            <li>Build brand online</li>
        </ol>
    )

    basically having html in javascript
 */

/**
    // ❤️‍🔥 JSX

    as you can see, using createElement is not the greatest experince.
    createElement even gets crazier when you have html elements inside each other
    so this difficulty quickly gave birth to JSX

    const reactElement = <h1><span>Hello ReactJS</span></h1>
    root.render(
        reactElement
    )

    under the hood, react is going to turn the jsx into the createElement() call we saw earlier
    JSX is a syntactic sugar on top of the createElement()
 */

/**
    WHY REACT? IT IS COMPOSABLE
    
    why you should graduate from vanilla kavascript

    Composable means that you can create easily reuseable and interchangeable pieces of the web
    that can be combined in various ways to create complex systems


 */

/**
   ❤️‍🔥 COMPONENT

    this is like lego block that you use to build bigger block
    this lego is a chunk of code written somewhere and used in another place

    <div>
        <MyAwesomeNavBar />
        <MyContent />
        <MyFooter />
    </div>

    each lego/component is a function that return JSX ie HTML written in JS

    function MyContent(){
        return (
            <>
                <p>THIS IS THE Content OF MY PAGE</p>
            </>
        )
    }
    export default Content

 */

/**
    WHY REACT? IT IS DECLARATIVE

    It is declarative means we can lean on react to handle the manual and tedious task,
    that we otherwise would have to worry about ourselves

    what is declarative/imperative 

    Declarative: what should be done
    the computer says just tell me what needs to happen and i will worry about how to do it.

    Imperative: how should it be done
    the computer says describe to me every step on how to do something and i will do it.

    in imperative, we have to tell the computer what to do every single step
    like the code below
*/

    const root = document.getElementById("root")

    const newH1 = document.createElement("h1")
    newH1.textContent = "This is manual, imperative coding"
    newH1.className = "header"

    root.appendChild(newH1)

    // we dont have to do all this in React.


/** ANOTHER CHALLENGE

import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

root.render(
  <main>
    <img src="src/assets/react.svg"></img>
    <h1>Welcome, React</h1>
  </main>
)

*/

// with static images that aren't going to be changing or coming froma CDN or database,
// there is a unique way to deal with them in react

// in vanilla js html img is called like like this: <img src = "assets/react.svg">
// bcs the code file is in the same location as the assets folder
// it is somehow different here and it can be a challenge in reactjs, 
// a quick fix is to use absolute path like in the .render()
// <img src="src/assets/react.svg"></img>

// JSX expression must have one parent element.


/** ❤️‍🔥 // FIRST PROJECT - my code - SAME AS TUTOR'S CODE
import './index.css'
import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById("root"))
root.render(
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
        <img src="src/assets/react.svg" alt="" className='img-right'/>
      </div>
    </div>
  </main>
)


You wouldnt put all code inside of .render() in actual projects
you would use something called custom components
*/



// ❤️‍🔥 MAKING CUSTOM COMPONENT IN REACT

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

function Header() {
    return (
        <header>
            <img src="src/assets/react.svg" alt="React Logo" />
        </header>
    )
}

function MainContent() {
    return (
        <main>
            <h1>Reasons I'm Excited To Learn React</h1>
            <ol>
                <li>I WANT TO LEARN REACT NATIVE</li>
                <li>I NEED A BETTER INCOME</li>
                <li>I WANT TO CREATE SOFTWARE ENGINEERING COMPANY</li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <small>c 2025 <span>Ganiyu</span> Developement. All rights reserved</small>
        </footer>
    )
}

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




// ❤️‍🔥 ORGANIZING COMPONENTS
/**
 * We cant have all our components on a page/file. That will look rough
 * So a solution is to have a file named after each component with the JSX extension
 * So our Header component file will be Header.jsx
 * 
 * And for our Page component to see the Header we just moved to its own page, 
 * we need to do 2 things. 
 * 1- export the Header component. Most poeple put 'export default' before the function declaration
 * 2- import the Header component into our where we need it. ' import Header from "./Header" '
 * we dont use import {Header} from "./Header" bcs we used export default in the function declaration
 * also, we can use whatever name we want after the import keyword bcs we exported as default
 * 
 * './' means I am importing this from my own file, not from a third party package like "react-dom"
 * 
 */


// ❤️‍🔥 MAKE MENTAL OUTLINE OF PAGE/PROJECT
// When starting out, one thing you must do is make a mental/written outline of the page(s)
// Just thinking through what needs to go on the page and how you will go about it



// ❤️‍🔥❤️‍🔥 FIRST PROJECT - REACT FUNFACTS
/**
 * I used vite to create a React project environment
 * 
 * I created Main page component
 * 
 * export default function Main() {
    return (
        <main>
            <div className="container">
                <h1>Fun facts about React</h1>
                <ul className="facts-list">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on Github</li>
                    <li>Is maintained by Meta</li>
                    <li>Powers thousands of Enterprise Apps including Mobile Apps</li>
                </ul>
            </div>
        </main>
    )
}
* I created the Navbar component

export default function Navbar(){
    return (
        <header className="">
            <nav className="nav container">
                <img src="src/assets/react.svg" alt="" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}

* I created the App component and imported Main and Navbar into it

import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App(){
  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}

* I used main.jsx given by Vite. This could be index.jsx in another scenerio
* i cleaned what give gave and wrote all i needed from scratch

import {createRoot} from "react-dom/client"
import App from "./App"
import "./index.css"

const root = createRoot(document.getElementById("root"))

root.render(
  <App />
)

* This is the CSS i used

// *{
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body {
//   font-family: 'inter', sans-serif;
//   color: #ecf6f9;
// }

// .container {
//   max-width: 700px;
//   margin: 0 auto;
//   padding: 0 20px;
// }

// header {
//   background-color: #0a1a1e;
//   font-weight: 700;
//   height: 90px;
// }

// .nav {
//   height: 100%;
//   display: flex;
//   align-items: center;
//   gap: 5px;
// }

// .nav span {
//   color: #61dbfb;
//   font-size: 1.7rem;
// }

// main{  
//   height: calc(100vh - 90px);
//   background-image: url('src/assets/react.svg'); /* Specify the path to your image */
//   background-color: #0a1a1eea; /* Set a fallback background color */
//   background-repeat: no-repeat; /* Prevent the image from repeating */
//   background-position: right center; /* Center the background image */
//   background-size: 40%; /* Scale the image to cover the entire box */
// }

// .container > h1{
//   padding: 30px 0px 20px;
//   font-size: 2.4rem;
// }

// .facts-list{
//   max-width: 400px;
// }

// .facts-list > li {
//   padding-block: 10px;
//   line-height: 19px;
//   margin-left: 50px;
// }

// .facts-list > li::marker{
//   color: #61dbfb;
//   font-size: 1.5rem;
// }
// */

/**
 * The body of my html  file
 <body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
 */