
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
// i need to import a method called createRoot from the react DOM library from a sub module called 'client
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
    reduces the need to write repetitive/complex things from scratch
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
  TemporaryName() // this works the same way as before
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
* i cleaned what vite gave me and wrote all i needed from scratch

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


// ❤️‍🔥❤️‍🔥❤️‍🔥 SECTION 2 - DATA DRIVEN REACT APP
/**
 * You see in our previous project, we hard coded everything on the page into our markup
 * Sure anything that is static or unchanging in going to be written into the code
 * However, we are going to see how the power of React is not just from its composeability and declarative
 * but also from its ability to recieve informaton in the form of data
 * and use that to produce reuseable components on the page
 */

// We are going to build A Travel Journal
// and what will make it different is all the info on the page will be contained in regular javascript files
// in the form of objects and arrays.
// our react code will iterate over the data and use it to produce components on the page

// CHALLENGE - create header of the travel journal app

// CHALLENGE - create one travel destionation component
// I named my component Module - tuttor nammed his own Entry
// The point is of the challenge is to show how difficult is will be if...
// ...we are to create all the Module/Entry in the page manually


// proble with this way - Not reuseable component
// we can find the idea of reuseable component everywhere like Amazon product listing
// This is where the idea of props comes into play


// ❤️‍🔥 PROPS part 1: Understanding the concept

/**
    <html lang="en">
    <head>
    </head>
    <body>
        <a ></a>
        <img >
        <input >
    </body>
    </html>

What do you think is the problem with the tags in the body of this html content?

Each of them would work limitedly as they are but they can be very efficist
when given attributes/properties
    <a href="www.google.com"></a>
    <img src="index.png" alt="">
    <input type="text" placeholder="First Name">

Here is a similar example in javascript
    function addTwoNumbersTogether(){
        return 1 + 2
    }

This will always work but it will always give 3. But it can be better with a little changes
    function addTwoNumbersTogether(a, b){
        return a + b
    }

IN BOTH CASES, we can see that passing addidtional info to our elements/function...
allows us to reuse the elements/functions in multiple ways
*/


// ❤️‍🔥 PROPS part 2: Reuseable components

/**
If you look at most webpage, you will see repeated nature of the page.
this can be seen on YouTube any sites
Aside: JS in JSX
Similar to above code examples, we can have Javascript in our JSX code

function App() {
    const firstName = "Sodiq"
    const lastName = "Ganiyu"

    return (
        <h1>Hello {firstName} {lastName}</h1> // Helo Sodiq Ganiyu

        // this is similar to how we you write js in string literal
        // `Hello ${firstName} ${lastName}`
        // ${} means js is in here
        // is props, {} means js is in here
    )
}
root.render(
    <App />
)


Lets say we want the component to return what ever time it is
function App() {

    return (
        <h1>It is currently {new Date().getHours() % 12}</h1>
    )
}


This means whatever logic we have in the curly braces will be executed as js
It is not the best to have our entire logic in the curly braces though.
So we can always write the logic in normal js before the return statement

function App() {
    const hours = new Date().getHours() % 12
    return (
        <h1>It is currently {hours}</h1>
    )
}


To take this a little further, lets say we want the return statement to return...
Good afternoon, good evening, or good night.
We prefer the logic to be above return and return should contain maybe a variable name

function App() {
    const hours = new Date().getHours()
    let timeOfDay

    if (hours < 12){
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17){
        timeOfDay = "aternoon"
    } else if (hours < 21){
        timeOfDay = "evening"
    } else if (hours >= 21){
        timeOfDay = "night"
    }

    return (
        <h1>Good {timeOfDay}</h1>
    )
}

Now lets look at the actual syntax of props

*/


// ❤️‍🔥 PROPS part 3: Create a contact component

/**
export default function Contact() {
    return (
        <article className='contact-card'>
            <img src="src/assets/react.svg" alt="Photo of Mr. Whiskerson" />
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <span>☎️</span>
                <p>222-234-1234-567</p>
            </div>
            <div className="info-group">
                <span>📧</span>
                <p>mr.whiskerz@catnap.meow</p>
            </div>
        </article>
    )
}

import Contact from './Contact'

function App(){
    <div className="contacts">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
    </div>
}

root.render(
    <App />
)

The problem now is only one contact is reandering in 4 places on our site
This is the same thing as our function that can only add 1+2

    function addTwoNumbersTogether(){
        return 1 + 2
    }


One way we can make this better useful is to allow the person using the functions to
give a or b . and specify their own numbers

    function addTwoNumbersTogether(a, b){
        return a + b
    }

*/


// ❤️‍🔥 PROPS part 4: Passing data into a component

/**
We need to find a way to pass data into our component other wise
we will have to hard code data into it and that ruins the purpose of reuable components
fortunatley react has made this simple for anyone who has done any kind of html in the past

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>


just like in html where i can have a reuseable element like a (link) 
that I can then pass in different attributes of html that can then alter the behaviour of that link
I also can pass info into that link like an href="google.com"
so that a link can act differently from other links that have different values for the href


in html i cant simply type whatever atribute name i want 
<link whatEverIwant ="" rel="icon" type="image/svg+xml" href="/vite.svg" />
bcs whatEverIwant is not defined in the html doc/specification 


The way we pass data to react components is very similar to the way we have it in html
and bcs react component is something i created, i can pass in whatEverIwant as an attribute
this attribute is called property in react and more called props more commonly
And i can pass in whatever value i want

function App(){
    <div className="contacts">
        <Contact whatEverIwant = "Whatever value i want"/>
        <Contact />
        <Contact />
        <Contact />
    </div>  
}


The goal of props is to take whatever hardcoded data from the component
We are not cosuming the props now in the component declaration - we will later
Here we want to take hard coded data form the component and use the comps usage

function App(){
    <div className="contacts">
            <Contact
                img="src/assets/react.svg"
                name="Mr. Whiskerson"
                phone="222-234-1234-567"
                email="mr.whiskerz@catnap.meow"
            />
            <Contact
                img="src/assets/react.svg"
                name="Felix"
                phone="000-234-1234-567"
                email="mr.felixoh@catnap.meow"
            />
            <Contact
                img="src/assets/react.svg"
                name="Pumpkinfluffy"
                phone="999-234-1234-567"
                email="mr.pumhaz@catnap.meow"
            />
            <Contact
                img="src/assets/react.svg"
                name="Mrs. Ajanla"
                phone="777-234-1234-567"
                email="mr.ajanla@catnap.meow"
            />
    </div>  
}


If you notice we now have a data focus in the Coponent usage in App
and we have design and layout focus in the Component declaration
And if we want to make changes to the design or layout...  
we can do it from one place, the Componet declaration.
Component usage only cares about the data

*/


// ❤️‍🔥 PROPS part 5: Recieving props in a component

/**
You have seen how we can pass our own custom data into the component we are using 
with attributes/properties/props just like we use html attributes

So how do we recieve this in our Component declaration?
Just like the way we recieve arguments/parameters in function. 
The react component will recive an object that represents all of the properties we passed in.

You can call it 'props' but like any parameter, you can it whatever you want

export default function Contact(whatever) {
    console.log(whatever)
    return (
        <article className='contact-card'>
            <img src="src/assets/react.svg" alt="Photo of Mr. Whiskerson" />
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <span>☎️</span>
                <p>222-234-1234-567</p>
            </div>
            <div className="info-group">
                <span>📧</span>
                <p>mr.whiskerz@catnap.meow</p>
            </div>
        </article>
    )
}

The console gives 4 objects
{img: 'src/assets/react.svg', name: 'Mr. Whiskerson', phone: '222-234-1234-567', email: 'mr.whiskerz@catnap.meow'}
{img: 'src/assets/react.svg', name: 'Felix', phone: '000-234-1234-567', email: 'mr.felixoh@catnap.meow'}
{img: 'src/assets/react.svg', name: 'Pumpkinfluffy', phone: '999-234-1234-567', email: 'mr.pumhaz@catnap.meow'}
{img: 'src/assets/react.svg', name: 'Mrs. Ajanla', phone: '777-234-1234-567', email: 'mr.ajanla@catnap.meow'}

Why did it console log 4 times when we only wrote console.log() once???
It is because we have 4 instances of our Contact component

Although the <Contact /> looks alot like html, what really happens is the Contact() function is called
And because we have the Component 4 times, the fn is executed 4 times, and console is log 4 times

now to use this argument/parameter in our jsx - just like we use js in html 

export default function Contact(props) {
    return (
        <article className='contact-card'>
            <img src={props.img} alt={props.name} />
            <h3>{props.name}</h3>
            <div className="info-group">
                <span>☎️</span>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <span>📧</span>
                <p>{props.email}</p>
            </div>
        </article>
    )
}
*/


// ❤️‍🔥 PROPS part 5: Recieving props in a component

/**
 
Lets say we have the variable name person that contains an object
const person = {
    img: "src/assets/react.svg",
    name: "Felix",
    phone: "000-234-1234-567",
    email: "mr.felixoh@catnap.meow",
}

then i can go on and call any property in the object
console.log(person.phone) // Felix


however, in some situation it can be useful to destructor the some of the variable out of the obj
and use them directly
How?
make a variable with name as curly braces that contin the property you want to pull out of the obj
and equate the variable to the obj

const {img, name} = person

what this does is: it declares 2 variables in one go... img and name
and set their value to the value of the property that have their name as the variable name

console.log(name) // Felix

Also, know that i dont get to decide what the variable name will be. 
i cant use 'const {image, username} = person'
wont work bcs there is no image or username property on object

one little hack to change the name if you want is use :
const {img: image, name: username} = person
but this is not commonly use


Now lets bring this object destructuring to react

remember props is an object
so i can destructure it right in the argument parenthesis
export default function Contact({img, name, phone, email}) {
    return (
        <article className='contact-card'>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <div className="info-group">
                <span>☎️</span>
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <span>📧</span>
                <p>{email}</p>
            </div>
        </article>
    )
}

Destructuring the props is useful but if you have another internal variable in the component,
using a single word from destructuring like this can be confusing.... use the props.img etc

*/


// ❤️‍🔥 Conditional Rendering
// conditional rendering
/**
Create Joke compoent that that takes props setup and punchline

function App() {
    return (
        <>
            <Joke
                setup="How many days can you read in a week"
                punchline="Everyday! I read my Netflix new realease everyday."
            />
            <Joke
                setup="How many days can you read in a week"
                punchline="Everyday! I read my Netflix new realease everyday."
            />
                        <Joke
                setup="How many days can you read in a week"
                punchline="Everyday! I read my Netflix new realease everyday."
            />
            <Joke
                // setup="How many days can you read in a week"
                punchline="Everyday! I read my Netflix new realease everyday."
            />
        </>
    )
}

export default function Joke(props){
    return (
        <article>
            <p style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</p>
            <p>Punchline: {props.punchline ? props.punchline  : "this joke doesnt have punchline"}</p>
        </article>
    )
}
*/
/**
    I only want to publush this parapgraph if a certian condition exixts
*/
/**
         * CONDITIONAL RENDERING
         * 1
         * {props.setup && <p>Setup: {props.setup}</p>}
         * if LHS is trutty, return RHS
         * 
         * 2
         * <p>Setup: {props.setup ? props.setup : "this joke doesnt have setup"}</p>
         * 
         * 3
         * <p style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</p>
*/


// ❤️‍🔥 Non String props

/**
Up on till now we have only pass in string through our props
And understandably bcs props are like attributes in html and attributes takes strings in quotes

But with react and javascript, we are not limited to only string
so to pass in non string, we will use the curly braces
            <Joke
                setup="How many days can you read in a week"
                punchline="Everyday! I read my Netflix new realease everyday."
                upvotes={10}
                isPun={true}
                comments={
                    [
                        {author: "Ade", text: "Good job", title: "yo"},
                        {author: "Waine", text: "Good job", title: "yo"},
                        {author: "Murshid", text: "Good job", title: "yo"},
                    ]
                }
                stringsCanBrace={"We can also use brace for strings"}
            />
*/


// ❤️‍🔥 Working with static assets

/**
It is important to know that Vite re organize our code especially when tranfedring to live site
so this will lose track of the location of the image when we use it this way
<img src="src/assets/react.svg" alt="React Logo" />

What we can do is import the images from a relative part
this make js know where th images were before this re-organization happens

import generalImage from "./assets/react.svg"
{generalImage} is use as src value


*/

// ❤️‍🔥 Pass props to Entry component

/**
export default function App() {
  return (
    <>
      <Header />
      <Entry
        img={
          {
            src: "https://scrimba.com/links/travel-journal-japan-image-url",
            alt: "Mount Fuji"
          }
        }
        title="Mount Fuji"
        country="Japan"
        googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        dates="12 Jan, 2021 - 24 Jan, 2021"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />
    </>
  )
}

export default function Entry(props){
    console.log(props)
    return (
        <section className="container">
            <div className="main-image-container">
                <img className="main-image" src={props.img.src} alt={props.img.alt} />
            </div>

            <div className="location-details">
                <div className="location-address">
                    <span className="country">📌{props.country}</span>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <h1 className="location-name">
                    {props.title}
                </h1>
                <h4 className="date-visited">
                    {props.dates}
                </h4>
                <p className="details">
                    {props.text}
                </p>
            </div>
        </section>
    )
}

NOW we know that are data is not hardcoded into the component
instead it is being pulledin from the outside 

The above code means we have the power to duplcate Entry components with different data
not just Japan with Mount Fuji

*/


// ❤️‍🔥 Reviewing array .map()

/**
We are going to see how to use js array .map method to take data and turn it into jsx

/*
Challenge 1:
Given an array of numbers, return an array of each number, squared

const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squaredNums =  nums.map(num => num * num)
/**
 * array methods takes a cullback fun
 * when written on a single line like this, the result is given 'return' by default 

console.log(nums) // this will return the old value: [1, 2, 3, 4, 5]. .map doesnt overide parent
console.log(squaredNums) // [1, 4, 9, 16, 25]




Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized


const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalizeFirst = names.map(function(name){
    return (
        name[0].toUpperCase() + name.slice(1)
        // name[0].toUpperCase() - since strings are arrays. .uppercase turn that index to Cap
        // name.slice(1) - returns a new array after copying to it all items from given index..
        // of old array. .slice(1) is basically saying:
        // give me everything from this (1) point upto the end
        // .slice() will give everything - a duplicate
    )
})
console.log(capitalizeFirst) // ['Alice', 'Bob', 'Charlie', 'Danielle']
// can also be written in shorter form as 
const caps = names.map(name => name[0].toUpperCase() + name.slice(1))
console.log(caps) // ['Alice', 'Bob', 'Charlie', 'Danielle']




Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]


const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here
const paragraphed = pokemon.map(poke => `<p>${poke}</p>`)
console.log(paragraphed) // ['<p>Bulbasaur</p>', '<p>Charmander</p>', '<p>Squirtle</p>']

*/

// ❤️‍🔥 React can render arrays
/**
// This works like reqgular strings
function App(){
    const ninjaTurtles = ["Bulbasaur", "Charmander", "Squirtle"]
    return (
        <main>
            {ninjaTurtles}
        </main>
    )
}

// This doesnt work bcs react simply cant reander object
function App(){
    const person = [{name: "Olaniyi"}]
    const person = {name: "Olaniyi"}
    return (
        <main>
            {ninjaTurtles}
        </main>
    )
}

this is bcs obj is a very speciic type
this is bcs jsx is an  objc by default... if you remember the begining when we discussed jsx

// this works fine
function App(){
    const ninjaTurtles = [<h1>Bulbasaur</h1>, <h1>Charmander</h1>, <h1>Squirtle</h1>]
    // we take an array and filled it with jsx elements
    return (
        <main>
            {ninjaTurtles}
        </main>
    )
}


// ❤️‍🔥 MAPPING COMPONENTS
We are not yet ready to be pulling data from an API
we will be doing that in the next section

however, we have made a js file that contain a array of the jokes setup and punchline
and have it export default [] from the declaration

this will be similar to the dat we are pulling down from the API

so we will import jokesData from my App() compnent

    // then i can create a new array of elments from jokes data, not from the jokeData itself...
    // but from the mapped version of the jokesData. 

    // remember the jokesData js file contains array of objects [{},{},{}]

    // for each item in the jokesData, i can return a joke component
    // and i can pass in data from the javascript joke object down through props into my component


import jokesData from './jokesData'
function App() {
    const jokesElement = jokesData.map(joke => {
        return <Joke setup={joke.setup} punchline={joke.punchline}/>
    })

    return (
        <main>
            {jokesElement}
        </main>
    )
}

// TO COMPLETE THE TRAVEL JOURNALS PROJECT

export default function Entry(props){
    return (
        <section className="container">
            <div className="main-image-container">
                <img className="main-image" src={props.img.src} alt={props.img.alt} />
            </div>

            <div className="location-details">
                <div className="location-address">
                    <span className="country">📌{props.country}</span>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <h1 className="location-name">
                    {props.title}
                </h1>
                <h4 className="date-visited">
                    {props.dates}
                </h4>
                <p className="details">
                    {props.text}
                </p>
            </div>
        </section>
    )
}

import Header from './components/Header'
import Entry from './components/Entry'
import entryData from './assets/data'

export default function App() {
  const entryElements = entryData.map(entry =>
    <Entry
      img={
        {
          src: entry.img.src,
          alt: entry.img.alt
        }
      }
      title={entry.title}
      country={entry.country}
      googleMapsLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}
    />)
  return (
    <>
      <Header />
      {entryElements}
    </>
  )
}

*/

/** ❤️‍🔥 FINALLY ON PROPS 
import Header from './components/Header'
import Entry from './components/Entry'
import entryData from './assets/data'

export default function App() {
  const entryElements = entryData.map((entry) =>
    <Entry
      key={entry.id}
      // entry={entry}
      {...entry}
    />)
  return (
    <>
      <Header />
      {entryElements}
    </>
  )
}

// the coolest thing about how we have setup the project
/** 
 * is that the display is a function of the data we're pulling into our app
 * this means we can go into the data and duplicate the objects in array then save
 * and we get more entries in our page - automatically, 
 * Besides - this will done by pulling data from API
 * 
 * Each time we hit save, this error comes up in the console
 * "Each child in a list should have a unique "key" prop."
 * this is a common error you will get anything you take an array od data 
 * and turn into components
 * 
 * React has a unique way to take care of items ID. 
 * especially useful for react when you have functionality that remove or add to the list
 * 
 * So we pass in a unique prop (key={}) when rendering the component
 * since our database, where the data is coming from will most likely have id for each object/ grp
 * we can use the ID coming from the data (key={entry.id}) 
 * 
 * if you have the ID in your data, something beginners do is to use th index provided by .map array method
 * const entryElements = entryData.map((entry, index) => <Entry key={index} moreProps={blah} />
 * and use the index inplace of the data id key={index}
 * USING THE INDEX IS FROWNED UPON - it has limitatiotns. So try to avaoid it.
*/

// ❤️‍🔥 Pass object as props
/**
 * One thing you will notice is typing props into our components is that these props we type
 * is a little bit lengthy
 * imagine if we have more data included in the objects in each array
 * more props to img, title, country etc
 * it will be way too cumbersome to type out all the props in the object
 * so what we could do is create entry prop and pass the entire prop down
 * entry={entry}
 * the property name can be anything but the value is coming as the parameter in the callback function
 * nothing should happen to our key={entry.id}.
 * Remember it is uniquely usefult to React. so we leave it as it is
 * so changing the props we are sendingt o our components will affect how our code was previuosly written.
 * so we need to fix this issue from the component declaration
 * so instead of just props.img props.title, i am using props.entry.img props.entry.title as my 
 */

// ❤️‍🔥 Spread Objects as props
/**
 * there is one syntactic trick you can use when passing a full object down to the component through props
 * you might see it in the wild - so you dont get confused
 * the trick uses js spread notation
 * And instead of entry={entry} , we remove the props entirely and replace it {...entry}
 * this is similar to us writing title={entry.title} country={entry.country} etc
 * in the component declaration, we have to turn 'props.entry.title' into 'props.title'
 * so we are back at how we use the props at the begining.
*/

// ❤️‍🔥 SECTION 3 STARTS AT 4HR:33

/*
so far we have discussed 
1; static websites and 
2; reuseable components

You can tell that something is Static web page when it is usally read-only 
there is no user driven changes to the data behind the scenes

some examples are
Blog: when u visit a blog, u are usullay just reading the page
News sites: we are not updating the news on the page
Recipes sites: likewise we just view the recipes and the pictures
etc

❤️‍🔥 WHAT WE ABOUT TO TALK ABOUT NOW IS HOW TO BUILD DYNAMIC WEB APPS IN REACT
you can clasify a web page as dynamic when user can read and write

Read Write: user has ability to change data
Highly interactive
Displays the user's specific data

some examples are
Bank website: you login and it displays your details and account balance
SaaS websites like AirBnb... you can filter listing. book etc
eCommerce sites: you add items to cart

**/

// ❤️‍🔥 CHALLENGE BUILD A HEADER COMPONENT FOR CHEF CLAUDE
/*
-- the header component

import ClaudeImage from "./../images/chef-claude-icon.png"

export default function Header(){
    return(
        <header className="">
            <img src={ClaudeImage} />
            <h1>Chef Claude</h1>
        </header>
    )
}

-- the style
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.container{
  width: 50%;
  margin: 0 auto;
}

header {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-bottom: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.292);
}

header img {
  width: 40px;
  height: 50px;
}
**/


// ❤️‍🔥 CHEF CLAUDE FORM

/*
when a user visit our chef claude app, they will just see the header and the form

the form conprise just the input field and a button beside the input 

Lets create the form. 

I know the input and buttom are just small part that we can just make without putting them in the form
however, it is best to have them in a form though bcs of semantic and benefits of using a a form

**/


// ❤️‍🔥 WE CREATED THE MAIN COMPONENT
/*
export default function Main(){
    return(
        <main>
            <form action="" className="add-ingredient-form">
                arial -label is same as puting the form component into lable tags
                both arial-lable and label tags are use for screen readers to knw what to do with the...
                ..form component
                placeholder is where u give example of what to be in the form
                placeholder is not where you put the title / what the does does like Add Ingridient 

                <input 
                    aria-label="Add Ingridient" 
                    type="text" 
                    placeholder="e.g. Oregano"
                />

                <button>Add Ingredient</button>
            </form>
        </main>
    )
}
**/


// ❤️‍🔥 WE STYLED THE FORM LIKE THIS

// main{
//   padding: 30px 30px 10px;
// }

// .add-ingredient-form{
//   display: flex;
//   /*the items are already side by side but for centering and gap sake we use flex */
//   justify-content: center;
//   /*the display flex align items default of stretch is making it taller and same height as the button*/
//   /* align-items: center; */ 
//   gap: 10px;
//   /*height here gives all items in the form a max height to stretch to*/
//   height: 38px;
// }

// .add-ingredient-form > input{
//   border-radius: 6px;
//   border: 1px solid #d1d5db;
//   padding: 9px 13px;
//   box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.095);
//   /*the input gets wide ad the screen gets wider: flex-grow: 1; gives that */
//   flex-grow: 1;
//   /*we want to give min and max bcs flex grow 1 can be too wide or thin*/
//   min-width: 150px;
//   max-width: 480px;
// }


// .add-ingredient-form > button{
//   /*buttons and placeholders dont take the font family specified in body and other parts*/
//   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
//   border-radius: 6px;
//   border: none;
//   background-color: #141413;
//   color: #fafaf8;
//   /*the display flex align items default of stretch is making it taller and same height as the input*/
//   /*setting the display flex in parent to center would bring the height to hug the content-add ingredient*/
//   padding: 9px 13px;
//   width: 150px;
//   font-size: 0.87rem;
//   font-weight: 400;
// }

// /*
//   the button has "+" before add ingredient. 
//   we could put it in the html but it looks decorative and we could put it from css too
//   so we use the ::before sudo element
// */
// .add-ingredient-form > button::before{
//   content: "+";
//   margin-right: 5px;
// }


// ❤️‍🔥 CHEF CLAUDE PROJECT OVERVIEW
/*
it is always good to have a good understanding of what you are building before you dive into the code
Best to have the entire project designed out so you know what the user will input and get at the end.

1- WHEN THE USER FIRST GETS TO THE PAGE, THEY WILL SEE THE HEADER AND THE INPUT WITH BUTTON

2- WHEN THEY ADD INPUTS INGREDIENTS, WE WILL MAP OVER THE INPUT AND DISPLAY THEM UNDER Ingredients on Hand

3- WE WILL ALSO DISPLAY A CALL TO ACTION AT THE BOTTOM TO ASK THE USER TO GET A RECIPE
THE CTA WILL SEND OUR INGREDIENTS TO THE CLAUDE API 

4- THEN WE WILL DISPLAY Suggested Recipe WE WILL GET FROM THE API
IT WILL DISPLAY A FORMATTED LIST OF INGREDIENTS AND AND INSTRUCTIOS 

**/



// ❤️‍🔥 EVENT LISTENER
/* The primary thing tha separates a static page and dynamic page is..
for users to be to interact with what they see on screen.
And one of the prmary ways we do that is by listening for events.

one way to add event listener to your page in vanilla js is by
someElement.addEventListener("click", function(){})

another way is by using onClick attribute in HTML
<button onclick="evenHandlerFunction()">Teiger Event </button>

the first way is what is common in vanilla js 
but the second way looks similar to how we do event listerner is React js


this is how we write it in React js
<button onClick={handleClick}>Click me</button>

Notice the attribute here is onClick in camelCase just like the way we write className

It is important to know the difference between onClick={handleClick} and onClick={handleClick()}
having the parenthesis after the function name like this onClick={handleClick()}, will call the fn immediately the component loads
which we dont want. This is similar to how we write it in html code 

onClick={handleClick} is the right way to write it JS code and React. Without the parenthesis.
<button onClick={handleClick}>Click me</button>
We only want to call the function when the event is triggered. i.e when the fn is called.
We basically pass the content of the function to the button and run when the button is clicked.

there are several eventhandlers like onClick in the React doc
*/

// ❤️‍🔥 CHALLENGE: LOG SOMETHING TO THE CONSOLE WHEN CLICK A BUTTON & MOUSE OVER THE IMAGE
/*

import reactImage from "./assets/react.svg"
export default function App() {
  
  function handleClick() {
    console.log("I was clicked!")
  }

  function handleMouseHover(){
    console.log("I was hovered")
  }
    
  return (
    <main className="container">
      <img src={reactImage} alt="Placeholder image from Picsum" onMouseEnter={handleMouseHover} />
      <button onClick={handleClick}>Click me</button>
    </main>
  )
}

*/




// ❤️‍🔥 MAPPING INGREDIENTS IN CHEF CLAUDE
// the plan is to list out what the user type into the input fied after they type n click the button

// so we will add the ingredient the user is submitting thru the form to an array and 
// we will be mapping over the array to display a list item

// CHALLENGE MAPP OVER AN ARRAY AN DISPLAY THE LIST ON THE MAIN PAGE AFTER THE FORM
/**
 * 
export default function Main(){
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    /**
     * 1: Review Challenge:
     * Map over the list of ingredients and render them as list items
     * 
     * Note: We're doing things a weird way here. Don't worry,
     * we're building up to learning the right way 🙂
     * 
     * key is included to prevent react from showing the key error for array items
     */

 //   const ingredientsListItems = ingredients.map(ingredient => 
 //       (<li key={ingredient}> {ingredient} </li>)
        // the extra brcket() is use to take advantage of the return benefit in single arr fn
 //  )


    /**
     * 2: Another challenge:
     * add onSubmit eventListener on the form and get it diapl "form submitted" to console
    */

//    function handleSubmit(event){
        // to stop the submit from reloading the page
        // and if you look down on the form opening tag, thisis where we use this fn with onSubmit
//        event.preventDefault()
//        console.log("form submitted")
        // the reason we disnt use it in the submit button is:
        // 1: we want to the user to be able to submit the form by pressing Enter key not just submit btn
        // 2: being in the form looks more semantic. submit btn will work despit the onSubmit in the form tag.
        
        /**
         * 3: Another challenge:
         * A: how can we grab the igredient that was added to the input?
         * B: And put it in the array?
        */
        // --A: how can we grab the igredient that was added to the input?
        // in order to grab the indgredient typed into the input
        // we need to grab the form data that was submitted with the form
        // in another word...
        // in order to grab the text of the of the input field that has attribute name="ingredient",
        // we need to do that thru form data
        // we can grab the form data on the html form itself
        // or grab it from the form DOM thru the 'event'

        // grab the form data from the form DOM thru the 'event'
//        const formData = new FormData(event.currentTarget)
        // get the ingredient data from the form data we grabbed above
//        const newIngredient = formData.get("ingredient")

        // --B: And put the new ingredient into the array?
//        ingredients.push(newIngredient)
//        console.log(ingredients)

        /**
         * By default React does not automatically upate the page for us
         * in the imparative vanilla js. we would have a fn re-render the list when new item is added
         * But React is declarative so there is a better way to do that here
         * We want to just update our data ie the list and have react sense that then update d page or us
         * THAT IS WEHRE THE CONCEPT OF REACT STATE COMES IN 😁❤️‍🔥
         */
//    }



//    return(
//        <main>
//            <form action="" className="add-ingredient-form" onSubmit={handleSubmit}>
//                <input 
//                    aria-label="Add Ingridient" 
//                    type="text" 
//                    placeholder="e.g. Oregano"
                    // Whenever we are submitting a form, our input(s) must have a name
//                    name="ingredient"
                    // If the page reloads (by commenting out the preventDefault() above), 
                    // we will see the URL change to: http://localhost:5173/?ingredient=Maggi
                    // Maggi is the value typed into the input field
                    // But modern development doesnt need the page to reload in this way
//                />

//                <button>Add Ingredient</button>
//            </form>
//            <ul>
//                {ingredientsListItems}
//            </ul>
//        </main>
//    )
//}

// */




// 😁❤️‍🔥 STATE IN REACT
/**
 * one of themain confusion in react ususally come from not understnding the difference between STATE & PROPS
 * 
 * PROPS😁
 * props refers to the properties passed into a cmponent in order for it to work correctly
 * this is similar to how functions recieve parameters
 * A component recieving props is not allowed to modify the props. props are immutable
 * props are used to get the component display what we want it to display
 * components are not allowed to modify props - this is one the things that distinguish props from state
 * props are immutable ie props are unchangeable
 */
// for example
// function addTwoParameter(a, b){
//     // it would not make sense for us to change the incoming parameter like below
//     a = 43 // DONT DO THIS
//     return a + b
// }

// addTwoParameter(1, 2)


// similar in a react component
// function Navbar(props){
//     props.logoIcon = "some-other-icon.png" // DONT DO THIS
// }
// < Navbar logoIcon="logo.png" />


/** STATE 😁
 * state refers to the values that are managed by the component
 * similar to variables declared inside a function
 * Any time you have a changing value that should be saved/displayed... 
 * you will likely be using a state
 * 
 * 
 * "The view (UI) is a funcyion of your state component"
 * 
 * 01: Render
 * React runs your function and display whatever gets returned.
 * The function will only be run again if:
 * A: the function recieves new props from above
 * B: the function's internal state value change
 * 
 * 02: setState
 * Changing a local, non state variable does not cause React to re-render the component.
 * Changing state with a built in 'setState' function does.
 * example is our ingredients array. we save it as regular: const ingredients = []
 * this is not saved as a state value so React doeS not re-render the Main component
 * 
 * 03: view = function(state)
 * When state changes and React re-runs (re-renders) your component,
 * something new gets returned and replaces what used to be on the page
 */

// another State analogy is the: light bulb analogy
/**
 * if the light switch is tuned on, there will electricity runing into the bulb and you get a light room
 * if no electricity, there will be no light and the view is a dark room
*/



// ❤️‍🔥❤️‍🔥❤️‍🔥 useState
// import React from "react"

// export default function App() {

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
   * or: import React from "react"
   */
  // const result = React.useState() // useState is an array of undefined and a fn: [undefined, ƒ]
  // console.log(result) // [undefined, ƒ]

//  const result2 = React.useState("Hello") // ['Hello', ƒ] . "Hello and fn"
//  console.log(result2) // ['Hello', ƒ]

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
//  const [isImportant, setIsImportant] = React.useState("Yes")
  // we can call the function by setIsImportant("Heck Yes"), it would work but that would lead to error
  // bcs each time the page renders, it will re-render again thereby causing a loop

//  function handleClick(){
//    setIsImportant("Heck Yes")
//  }

//  return (
//    <main>
//      <h1 className="title">Is state important to know?</h1>
//      {/* <button onClick={handleClick} className="value">{state}</button> */}
//      <button onClick={handleClick} className="value">{isImportant}</button>
//    </main>
//  )
//}

// but how do we get back to the previous state value?? We will get there soon



// ❤️‍🔥 HERE IS AN APP THAT COUNTS HOW MANY TIMES BOB IS GOING TO SAY STATE IN THIS ENTIRE SECTION
/*
import React from "react"

export default function App() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
    */
//    const [count, setCount] = React.useState(0)

    /**
     * Challenge: 
     * Create a function called 'add' that runs when the + button is clicked
     * you can just console log "add" for now
    */
    // function add(){
    //   console.log("add")
    // }

    /**
     * Challenge: 
     * see if you can think of a way to add 1 to the count
     * everytime the button is clicked
    */    
//    function add(){
//      console.log("add")
//      setCount(count + 1)
      // if you try to do setCount(count++) you will get an error that says:
      // 'you cant assign to a constant variable'
      // and you then go ahead to change the count declaration to:
      // let [count, setCount] = React.useState(0)
      // and it worked partially... bcs 'count' is now declared with 'let'
      // but this is a no no in React bcs count++ is 'count = count + 1'
      // and it is directly modifying the count in the LHS
      // modifying state directly is ano no in react. REMMBER THAT
      // on the contrary, setCount(count + 1) on gives setCount the value of count + 1
//    }

    /**
     * Challenge: 
     * Add functionality to the minus 
    */
/*   
   function minus(){
     setCount(count - 1)
    }
*/
/** 
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
*/

// ❤️‍🔥 UPDATING STATE WITH CALL BACK FUNCTION
/**
 * the above code works
 * we are calling setCount and giving it count and a number as a parameter
 * setCount will update count and change the state of our view 
 * 
 * However, there is another way we can use our state setter function, setCount in this case
 * where instead providing a new value, we provide a callback function
 */

/*
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
*/

//❤️‍🔥 REVIEW OF TERNARY OPERATOR IN JAVASCRIPT

// export default function App() {
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
/* 
  const isGoingOut = true

  /**
   * so we no longer need answer variable
   * we simple use what the ternary operator returns
  

  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button className="value">{isGoingOut ? "Yes" : "No"}</button>
    </main>
  )
}
*/

// ❤️‍🔥 TOGGLING STATE
/**
import React from "react"

export default function App() {
*/
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the button flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
/*
    const [isGoingOut, setIsGoingOut] = React.useState(true)

    function handleToggle(){
     return  setIsGoingOut(prevIsGoingOut => !prevIsGoingOut)      
    }
    // Sidiq, note that I did all the above on my own
    // It feels undoable at first but I did it.
    // You can make this coding thing work, Sidiq
    // Please notice the arial-label attribute. It is important for screen readers
    // always ensure you include them in your design and development
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button 
              onClick={handleToggle} 
              className="value"
              aria-label={`The current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}
            >{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}
*/

// ❤️‍🔥😁 COMPLEX STATE : Array
/**
 * Up on till now, we have been using primitive data types like strings and boolean in our state
 * One of the common data type you will use with state is Array
 * So it warrants a little more info to know how we can update Arrays and Objects
 * Lets start with arrays
 */
/*
import React from "react"

export default function App() {
*/
  /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. 
     * Initialize the state array as an empty array
     * 
     * Don't worry about fixing `addFavoriteThing` quite yet.
     */
  // const myFavoriteThings = []
/*  
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
 /*   
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
 /*
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
*/

//❤️‍🔥 CHEF CLAUDE - REFACTOR ARRAY
/*
import React from "react"

export default function Main() {

    /**
     * Challenge: Update our app so that when the user enters a
     * new ingredient and submits the form, it adds that new
     * ingredient to our list!
     */
    // i wrote this on my own the first time... im glad
/*
    const [ingredients, setIngredients] = React.useState(["Chicken", "Oregano", "Tomatoes"])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        /**
         * Like before, don't worry about this FormData stuff yet.
         * Just use the newIngredient below to help you finish the
         * challenge.
         */
/*
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        
        // i wrote this on my own the first time... im glad
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}
*/


//❤️‍🔥 COMPLEX STATE - UPDATING STATE OBJECT
/**
 * Lets take a look at what it is like to save object in state
 * lets take a look at a contact card 
 */
/*
import React from "react"
import avatar from "./images/user.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function App() {
  // we are holding this object in state
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true
  })

  // we want to click the star icon on the card and make it flip the is Favorite boolean value
  // when the value is true, we display a filled star icon :starFilled
  // and when false, an empty star icon : starEmpty
  // we want the arial-pressed, arial-label, img src n alt to change... 
  // ...according to the value of isFavorite 


  // first i use ternary to drop the image reference 
  let starIcon = contact.isFavorite ? starFilled : starEmpty

  // the point of this app s to see how we can update our state 
  // if what is saved in the state is an object
  /**
   * We have setup our html markeup below to react to changes in our state
   * the only thing we are missing is the user interactivity
   * the goal to click the star icon and have it change the isFavorite value
   * SOLUTION
   * we will return a new object state that has all the prev object properties 
   * but overwrite the property we are changing with a new value
   * NOTE: the extra () is for us to enjoy the hidden return kw in arrow fn
   * setContact(prevContact => ({ ...prevContact, isFavorite: !prevContact.isFavorite}) )
  */
 /*
  function toggleFavorite() {
    setContact(prevContact => 
      ({ ...prevContact, isFavorite: !prevContact.isFavorite})       
    )
  }

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt="User profile picture of John Doe"
        />
        <div className="info">
          <button
            onClick={toggleFavorite}
            /**
            * the reason we are doing this extra work is to use React's declarative nature
            * where the state that we are maintaining up above will be what determines the display... 
            * and the functionality of some of the elements on the page
            */
/*        
            aria-pressed={contact.isFavorite}
            aria-label={contact.isFavorite ? "Remove from favorite" : "Add to favorite"}
            className="favorite-button"
          >
            <img

              src={starIcon}
              alt={contact.isFavorite ? "Filled star icon" : "empty star icon"}
              className="favorite"
            />
          </button>
          <h2 className="name">
            {contact.firstName + " " + contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>

      </article>
    </main>
  )
}
*/

//❤️‍🔥 REACT FORM INTRO
/**
 * Our Chef Claude has a simple form - if not the simplest. Just an input and a button
 * But creating forms of different types is one of the most common task thay you will be doing in your React app
 * maybe something that looks more like a orm eg sign up form 
 * or something subtle like when you favorite a tweet or upvote a post on reddit
 * 
 * Any kind of interaction that exist with a data in the database from your application 
 * will often times be handled by submitting a form
 * 
 * And if you have been developing for the web for a long time, you'll knw that form ahve around like forever
 * 
 * In this sample html 5 form, we just have reguar form elements
 * with couple of labels that are associated with inputs
 * and input type submit which is the button at the bottom of the form
 * 
 * the for form opening tag has a method attribute that you can give to it
 * this method is "get" by default
 * get does a full page refresh when u submit
 * it will also navigate us to a different location 
 * the location is what is given in the action attr of the form plus the values of the inputs
 * the location in the action will submit the values and get another page to display for the user
 * 
 * fast forward a little bit 
 * js become what is use to getthe inputs from a orm and send the data to the backend
 * the js code looks like this
        document.getElementById("my-form").addEventListener("submit", function(event) {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const firstName = formData.get("firstName")
            const lastName = formData.get("lastName")
            submitViaAPI({
                firstName,
                lastName
            })
        })

        function submitViaAPI(data) {
            console.log(data)
            console.log("Submitted!")
        }
 */

/**
 * so ur js code prevent the refresh 
 * get the formData from events
 * and subits it to the API/backend
 * 
 * WHAT COMES NEXT IN THE HISTORY OF WEBDEVELOPMENT IS A LITTLE BIT ROCKY
 * It was really cumbersome to deal with form in React until recently.
 * 
 * React just shifted to using the native capability of Form.
 * Our chef claude project uses a minimal form 
 * but we are going to learn about form more than what we need fot the project
 * 
 * This will be a close review to HTML form
 */
/*
import React from 'react';
import ReactDOM from 'react-dom/client';


export default function App() {
  return (
    <section>
      <h1>Signup form</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        {/* // the name attri is how we are going to get the data in the unput
        // we need to have a reasonable name here so that we can access the data
        // we should always use the correct type for our input
        // REMEBER: a placeholder is not the correct place to label your input 
        // bad way to use placeholder here: placeholder="Email"
        // placeholder is use to give example o what the user will type
        // A placeholder holder does not explain what the input does for screen readers
        // that is where arial-label attri or lable tag comes in
        // in React we use 'htmlFor' instead of 'for' in regular js html 
        // htmlFor="email" means this label is associated with the input that has id of email }
        <br />
        {/* /**
        * Challenge: add another label and input for the password field
        }
        <label htmlFor="password">Password:</label>
        <input type="password" id='password' name='password'/>
        {/* // the button elelemnt is a little bit unique
        // there is a different type of input with the type submit
        // and different types of input can change what is displayed on the screen 
        // <input type="submit" value="click"/>
        // if buttons are placed inside of a form, they act like input type="submit"
        // outside of a form they act like input type="button"
        // a button makes more sence so we use that here }
        <button>Submit</button>
        
      </form>
    </section>
  )
}
*/

/**
 * ❤️‍🔥 FORM SUBMISSION
 import React from 'react';
import ReactDOM from 'react-dom/client';

// there are ew things that happen to our form when we try to submit it
//  when we fill the form and hit enter, we are directed to a different address
// http://localhost:5173/?email=jdjjd%40a.com&password=jjgjgj
// the form gets the data and marges it with the url after the query string '?'
// this happened bcs we did not specify method and the defualt is 'GET'
// The form tries to get data from the URL by submitting the data we have
// "GET" works in a lot of cases but not in a password an email case
// if i use post method, it doesnt put the info in the url
// instead it creates a post request and put the info in the body of the request
// this is not what we will see in the UI

// Alright so how can we process this info in javascript 
// we can add the onSubmit event handler fn and use preventDefault
// to prevent the page from refresh/reload
// it is better to watch for the submit on the form than on the button
// this 'event' that is passed to our function is actually really powerful
// it has a lot of information in it

function handleSubmit(event){
  event.preventDefault()
  // we can also use event to get the form's DOM
  const formEl = event.currentTarget
  // and with this form element, we can create a new set of form data
  // "FormData" is built directly into javascript
  // we get the data from the form if we pass in the form DOM to FormData
  const formData = new FormData(formEl)
  // we can get the values of a input from the formData 
  // by using js 'get' method with the name of the input
  const email = formData.get("email")
  // WE CAN USE THIS TO GATHER ALL THE INFO FROM THE FORM
  // there is a method on form element/DOM that we can use to reset all the input field
  // event.currentTarget.reset()
  formEl.reset()
}

export default function App() {
  return (
    <section>
      <h1>Signup form</h1>
      <form method='post' onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}
*/


/**
 * ❤️‍🔥 FORM ACTION
import React from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {
  
  // there is an attri called 'action' that we can add to a form
  // this is where we tell the browser to send the form data to
  // that location will process the data and return another html 
  // the onSubmit and its fn already does most of this on the client side for us
  // but we found our self doing imperative stuff
  // we can get rid of the onSubmit and handler
  // and change the function to something more declarative like signUp()
  // and bcs we can pass function to React 19 form action attrr, we'll pass signUp
  // and the signUp fn doesnt recieve an event bcs we are not handling an event 
  // it automatically recieves the formData

  // Behind the scene, the action fn is going to prevent default for us
  // provide the form data from the form DOM
  // reset the form fields for us
  // we dont need to speacify the method of post too
  // so we dont need this imperative commands anymore, React 19 does these automatically

  
  function signUp(formData) {
    const email = formData.get("email")
    // we are able to get the form data in a single line of code above
    console.log(email)
      /**
       * Challenge: get the password from the form too and log
       * it to the console to be sure it came in correctly.
      
    const password = formData.get("password")
    console.log(password)
  }
  
  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}
*/



//❤️‍🔥 CHEF CLAUDE - REFACTOR FORM SUBMISSION
/**
 import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    
    /**
     * Challenge: use form action instead of onSubmit to
     * handle the data from the form
    

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}
 */


// ❤️‍🔥 FORM TEXT AREA, RADIO, DEFAULT VALUE, CHECKBOX
/*
import React from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {

  // sure our chef d=claude doesnt need more form code
  // but lets cover more about form incase we need them in other projects

  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    const employmentStatus = formData.get("employmentStatus")
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    const favColor = formData.get("favColor")
    console.log(favColor)
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        {/* // textarea is not input type textarea and has closing tag unlike input
        // it is intended for longer text unlike unput type text thats for short text 
        // by default, users can drag the textarea to increase its width or height
        // you can set a fixe size in css or use rows and cols attr in the html/jsx tag  
        // if you noticed the defaultValue attri, 
        // they are used so we dont type in the values on the UI whentesting the code 
        // this can be usefulif u were creating a form that will have default data or the user }
        <label htmlFor="description">Description: </label>
        <textarea name="description" id="description" defaultValue="description"></textarea>

        {/* // the next input is radio button 
        // they are used when you have multiple options fro the user to choose from 
        // and u want them to be able to select only one at a time
        // radios button look better when u have the button at the left and lables at the right 
        // if we want users to be able to select only one of the radios, 
        // we have to give them the same name
        // a good thing to do when using radio input is to put them in a fieldset
        // the fieldset gives the entire selection a border, 
        // we use legend to give the fiedset label
        // and bcs they have the same name, we only select one at a time
        // picking the name of these radio inputs only show 'on' at the backend,
        // if each one does not have its distinct value.
        // if we want a value to be selected by default, we use 'defaultChecked' on the input
        // this attribute can have {true} or just "true" 
        }
        <fieldset>
          <legend>Employment Status: </legend>
          <label >
            <input type="radio" name="employmentStatus" value="umemployed"/>
            Unemployed
          </label>
          <label >
            <input type="radio" name="employmentStatus" value="part-time"/>
            Part time
          </label>
          <label >
            <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time"/>
            Full time
          </label>
        </fieldset>
        
        
        {/* // a very close relative to the radio button is checkbox
        // with checkbox we can have multiple items checked at the same time
        // which means we can also have more than one defaultChecked items
        // one issue here is that when we select 2 values like checkbox allows
        // our formData.get only icks the first value on the list 
        // this is unique to checkbox and there is a simple way around it
        // the .get method we are calling on formData.get also have .getAll
        // .getAll gets the values and gives them to us in an array}

        <fieldset>
          <legend>Dietary Restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="vegan" />
            Vegan
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="glutton-free" />
            Glutton-free
        </label>
        </fieldset>

        {/* // Lets say we want to have a drop down where the user can chose their favorite color
        // just select tags will give the option box and drop down arrow 
        // options tags will make the options appear in the drop box  
        // to get the options value in our funtion, we need to give the select a name
        // the option that appears in the seletc box is by default the first on the list.. 
        // in this example red.
        // But we can set a defaultValue to what we want in the select tag
        // there are some instances where what you see by default is an instruction
        // Like: Choose a color
        // we can achieve that by making an option with no value at the top.. 
        // if we dont want our user to b abe to submit choose a color as an option
        // we give the option 'disabled'*}

        <label htmlFor="favColor">What is your favorite color?</label>
        <select name="favColor" id="favColor">
          <option value="" disabled>-- Choose a color --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="indigo">Indigo</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>

      </form>
    </section>
  )
}
*/


// ❤️‍🔥 Object.entriesFrom()
/**
import React from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {
  /*
    function signUp(formData) {
      const email = formData.get("email")
      const password = formData.get("password")
      const employmentStatus = formData.get("employmentStatus")
      const dietaryRestrictions = formData.getAll("dietaryRestrictions")
      const favColor = formData.get("favColor")
      console.log(favColor)
    }
  *
  // currently we are going throgh our inputs and grabbing the info from them one after the other
  // there are time when this is okay to do 
  // but if you have a form with 40 different entries, then we need another way
  // there is a utility built into javascript that we can use
  // Objects.fromEntries
  // we will pass in the entire formData object
  // Object.fromEntries(formData)

  function signUp(formData) {
    const data = Object.fromEntries(formData)
    console.log(data)
    // { email: 'joe@schmoe.com', password: 'password123', description: 'This is a description', 
    //   employmentStatus: 'full-time', dietaryRestrictions: 'glutton-free', … }

    // we get an object back. 
    // the object conatins the names in the form as key and the names selected value as value.
    // the error here is that the dietarRestrictions name is from a checkbox and multple values were selected
    // but we are only getting a value returned in this object
    // remember with checkboxes, we had to use formData.getAll(chebox-name)
    // so we have to get chechboses data on its own

    const dietaryData = formData.getAll("dietaryRestrictions")
    console.log(dietaryData)
    // ['vegan', 'glutton-free']

    // now that we've got the array of the check options using getAll
    // we can now replace them with what we have in Object.fromEntries at the chekbox place

    const allData = {...data, dietaryRestrictions: dietaryData}
    console.log(allData)
    // {email: 'joe@schmoe.com', password: 'password123', description: 'This is a description', 
    //  employmentStatus: 'full-time', dietaryRestrictions: Array(2), …}
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary Restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="vegan" />
            Vegan
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="glutton-free" />
            Glutton-free
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select name="favColor" id="favColor">
          <option value="" disabled>-- Choose a color --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="indigo">Indigo</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>

      </form>
    </section>
  )
}

 */



// ❤️‍🔥 CONDITIONAL RENDERING
// Lets see multiple diferent ways you can use conditional rendering
// and conditional rendering is not difficult to understand
// on our chef claude app we have many parts that we dont want to display on page immediately the page loads
// we have the input and button that displays by default
// the ingredients title will only display with a condition that user have provided some input
// and the cta will only display with a condition user have given few inputs
// the ai result will display only if user have clicked the cta
// THIS IS WHERE CONDITIONAL RENDERING COMES IN
// It means we will render part of our page base on a condition
/**
import React from "react"

export default function Joke(props) {
    /**
     * Challenge 1:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     
    const [isShown, setIsShown] = React.useState(false)
    function handleToggle(){
        setIsShown(prevIsShown => !prevIsShown)
    }
    console.log(isShown)


    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {/* 
                 * Challenge2:
                 * only display the puchline parapgh if isShown is true
            */ 
            /*ONE WAY {isShown ? <p>{props.punchline}</p> : <p></p> } }
            {isShown && <p>{props.punchline}</p>}
            {/* // why did the above code too work?
            // we always use && to check if the LHS and RHS are true then run the code
            if (true && true) {
                console.log("Everything was true")
            }
            // however it is not entirely tru that both have to true before th code would work
            // (true && true)
            // what is really happening in the condition is left to right evaluation
            // the cpt checks the LHS, if it is truthy value, it checks the RHS too
            // if the LHS is falsy value, the execution stopped, the next line of code would not work
            // if we have (true && console.log("this code is running"))
            // the RHS will run bcs the LHS is truthy 

            // so the sign '&&' is a quick way to display / not display something }
            <button onClick={handleToggle}>{isShown ? "Close" : "Open"}</button>
            <hr />
        </div>
    )
}
 */


// ❤️‍🔥 && CONDITIONAL RENDERING PRACTICE
/**
 import React from "react"

export default function App() {
    const [unreadMessages, setUnreadMessages] = React.useState([])
    
    /**
     * Challenge 1:
     * Only display the <h1> below if there are unread messages
     
    
    return (
        <div>
            {/* // MY SOLUTION
            {unreadMessages.length && <h1>You have _ unread messages!</h1>}

            // TUTOR SOLUTION AND EXPLANATION
            // const [unreadMessages, setUnreadMessages] = React.useState([]) above
            // in this case unreadMessages is not a boolean value
            // and even an empty array is a truthy value
            // we cant do  {unreadMessages && <h1>You have _ unread messages!</h1>} in any way
            // so what we need to check the lenght if it is greater than zero *
            {/* {unreadMessages.length > 0 && <h1>You have _ unread messages!</h1>}
            // and to make the messaged we are displaying even better
            // we put the number of unread messages *
            {/* {unreadMessages.length > 0 && <h1>You have {unreadMessages.length} unread messages!</h1>} *

            {/* // so the point of the excerise: && gives us the chance to determine if something should..
            // or should not be rendered at all

            //But there are some limitations to this as well *

            {/*
            * Challenge 2:
            * If there are 0 unread messages, display a paragraph that says: 
            * 'You have no unread messages'
            *
            {/* // MY SOLUTION 
            {unreadMessages.length = 0 && <p>You have no unread messages!</p>}
            // shit- one equals-to is assignment, three equals-to is comparism-right ans *

            {/* // TUTOR SOLUTION *
            {/* {unreadMessages.length === 0 && <p>You have no unread messages!</p>} *


            {/* // SO WHATS UP?
            // so what we've done here is display a situation where we have if else stament
            // if unread messages is greater than 0 and the remaining only option is it is equals to 0 *
            {/* 
            {unreadMessages.length > 0 && <h1>You have {unreadMessages.length} unread messages!</h1>}
            {unreadMessages.length === 0 && <p>You have no unread messages!</p>}

            // so what we are doing above is a litle verbose
            // IN A SITUATION WHEN WE ARE TRYING TO DISPLAY ONE THING OR NOTHER THING
            // && IS NOT IDEAL *

            {/* // ANOTHER ISSUE 
            // we can see unreadMessages.lenght and try to infer a truthiness out of it 
            // like i did in my solution to the first challenge
            {unreadMessages.length && <h1>You have _ unread messages!</h1>}

            // Yes unreadMessages.length will be true if greater than 0
            // but if it is 0, React will diaply the zero on page
            // so we need to be explicit in our condition
            // so we are sure the expression will lead to a true or false and not truthy or falsy value
            // in order to not invite bug into our code 

            // && is a quick way to display someting or not display it
            // if u use it, make sure your expression aleays evaluates to a boolean
            // simply put, we use && when we one to display one thing or nothing - 1 or nothing
            // display burger or nothing
            // not when we can display 1 thing on another 1 thing
            // not display burger or fish pie

            // there is another experession we can use to conditionally render something in React 

        </div>
    )
}
 */

// ❤️‍🔥 ? : TERNARY OPERATOR
/**
 import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    function handleToggle(){
        setIsShown(prevIsShown => !prevIsShown)
    }
    console.log(isShown)


    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            {<button onClick={handleToggle}>{isShown ? "Hide " : "View "}punchline</button>}
            {/* // now that we have 2 different options to chse what to display from, we use ternary operator


            // There is a little bit of pushback in the react community to using the && operatr at all
            // bcs of that 0 bug we saw earliear
            // bugs like this can be easily dodge if we use ternary operator 
            // and inplaces where the answer can be either one thing on nothing,
            // we use null as the nothing/false part
            // using the above samples - can turn them to ternary like below
            {props.setup ? <h3>{props.setup}</h3> : null}
            {isShown ? <p>{props.punchline}</p> : null} 
            // these 2 rendering types will solve 90% of ur conditional rendering taks
            // in the other 10%, where the options are 3 or more, u can use if-else or others
            *}
            <hr />
        </div>
    )
}
 */

// ❤️‍🔥 CONDITIONAL RENDERING EXERCISE

/**
 import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there's exactly 1 unread message, it should read "You have 
     *   1 unread message" (singular)
     * - If there are > 1 unread messages, display "You have <n> unread
     *   messages" (plural)
     */

    // there are couple of ways to achieve these results
    // I used nested ternary but the if statement is what the tutor used

    /**
        let text
    
        if (messages.length === 0){
            text = "You're all caught up!"
        } else if(messages.length === 1){
            text = "Yoo have an unread message"
        } else {
            text = `You have ${messages.length} unread messages`
        }
     

    // if these conditions are even more than 3 
    // we caould have them in a function like below that returns the text result
    function determineText() {
        if (messages.length === 0) {
            return "You're all caught up!"
        } else if (messages.length === 1) {
            return "Yoo have an unread message"
        } else {
            return `You have ${messages.length} unread messages`
        }
    }


    return (
        <div>
            {//* <h1>{messages.length === 0 ?
                "You're all caught up!" : messages.length === 1
                    ? "Yoo have an unread message" : `You have ${messages.length} unread messages`}
            </h1> 

            {//* <h1>{text}</h1> 

            <h1>{determineText()}</h1>
        </div>
    )
}

 */



// ❤️‍🔥 // USING CONDITIONAL RENDERING ON CHEF CLAUDE

/**
import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    
    /**
     * Challenge 1:
     * Using conditional rendering, only render the new <section> IF
     * there are ingredients added to the list of ingredients.
     */

    /**
     * Challenge 2:
     * Only display the div.get-recipe-container if the ingredients list
     * has more than 3 items in it. (Fewer than that and it might not
     * give great results from the chef 🤖👩‍🍳)
     *
    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {/* // CHALLENGE 1 *}
            {ingredients.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>

                {/* // CHALLENGE 2 *}
                {ingredients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section>}
        </main>
    )
}
 */
//❤️‍🔥 CHEF CLAUDE TILL NOW
//
/**
 import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )
    /**
     * Challenge:
     * 1. Create a boolean state that, for now, will represent whether
     *    we've gotten a recipe back from the "chef". Default to `false`.
     *    Can call it `recipeShown`.
     * 2. Grab the markup in recipeCode.md and paste it below. This will
     *    be a placeholder for the content that will come back from the 
     *    chef once we set up that feature.
     * 3. When the user clicks the "Get a recipe" button, flip the
     *    `recipeShown` state to true.
     * 4. Only display the recipe code content if `recipeShown` is true.
     *

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const [recipeShown, setRecipeShown] = React.useState(false)

    function handleRecipeShown(){
        setRecipeShown(prevRecipeShown => !prevRecipeShown)
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                {ingredients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={handleRecipeShown}>Get a recipe</button>
                </div>}
            </section>}
            {/** Paste recipeCode.md contents here *
            {recipeShown && <section>
                <h2>Chef Claude Recommends:</h2>
                <article className="suggested-recipe-container" aria-live="polite">
                    <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
                    <h3>Beef Bolognese Pasta</h3>
                    <strong>Ingredients:</strong>
                    <ul>
                        <li>1 lb. ground beef</li>
                        <li>1 onion, diced</li>
                        <li>3 cloves garlic, minced</li>
                        <li>2 tablespoons tomato paste</li>
                        <li>1 (28 oz) can crushed tomatoes</li>
                        <li>1 cup beef broth</li>
                        <li>1 teaspoon dried oregano</li>
                        <li>1 teaspoon dried basil</li>
                        <li>Salt and pepper to taste</li>
                        <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
                    </ul>
                    <strong>Instructions:</strong>
                    <ol>
                        <li>Bring a large pot of salted water to a boil for the pasta.</li>
                        <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
                        <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
                        <li>Stir in the tomato paste and cook for 1 minute.</li>
                        <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
                        <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
                        <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
                        <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
                        <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
                    </ol>
                </article>
            </section>}
        </main>
    )
}
// THE CSS

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Inter, sans-serif;
    background-color: #FAFAF8;
}

header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 11px;
    height: 80px;
    background-color: white;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
}

header > img {
    width: 50px;
}

header > h1 {
    font-weight: 400;
}

main {
    padding: 30px 30px 10px;
}

.add-ingredient-form {
    display: flex;
    justify-content: center;
    gap: 12px;
    height: 38px;
}

.add-ingredient-form > input {
    border-radius: 6px;
    border: 1px solid #D1D5DB;
    padding: 9px 13px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    flex-grow: 1;
    min-width: 150px;
    max-width: 400px;
}

.add-ingredient-form > button {
    font-family: Inter, sans-serif;
    border-radius: 6px;
    border: none;
    background-color: #141413;
    color: #FAFAF8;
    width: 150px;
    font-size: 0.875rem;
    font-weight: 500;
}

.add-ingredient-form > button::before {
    content: "+";
    margin-right: 5px;
}

ul.ingredients-list {
    margin-bottom: 48px;
}

ul.ingredients-list > li {
    color: #475467;
    line-height: 28px;
}

.get-recipe-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background: #F0EFEB;
    padding: 10px 28px;
}

.get-recipe-container h3 {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 24px;
}

.get-recipe-container p {
    color: #6B7280;
    font-size: 0.875rem;
    line-height: 20px;
}

.get-recipe-container button {
    border: none;
    border-radius: 6px;
    background: #D17557;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    color: #FAFAF8;
    padding: 9px 17px;
    font-family: Inter, sans-serif;
    font-size: 0.875rem;
    cursor: pointer;
}

.suggested-recipe-container {
    color: #475467;
    line-height: 28px;
    font-size: 1.125rem;
    font-weight: 400;
}

.suggested-recipe-container ul li, .suggested-recipe-container ol li {
    margin-bottom: 8px;
}

 *  */ 


///❤️‍🔥 PASSING STATE AS PROPS
/**
    import React from "react"
import Count from "./Count"

export default function App() {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    
    
    /**
     * Challenge:
     * - Create a new component called `Count`
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the h2.count element below
     *      and display the incoming prop `number`
     * - Replace the h2.count below with an instance of
     *   the new Count component, passing the correct value
     *   to its `number` prop.
     * - After doing this, everything should be working the
     *   same as before.
     *

    console.log("App rendered")
    
    return (
        <main className="container">
            <div className="counter">
                <button
                    className="minus"
                    onClick={subtract}
                    aria-label="Decrease count"
                >-</button>

                {/* <h2 className="count">{count}</h2> *
                <Count number = {count}/>

                <button
                    className="plus"
                    onClick={add}
                    aria-label="Increase count"
                >+</button>
            </div>
        </main>
    )
}



export default function Count(props){
    console.log("Count rendered")
    return <h2 className="count">{props.number}</h2>
}

// a component that just renders h2 is probably over kill 
// just to explain React rendering again

// the App component is passed to the main.jsx, main is linked to index.html
// so the content of App is what we display on the page

// remember our App has some code including calling this Count component
// what that means is the the App components will run before this Count

// the count state is in App, and if we update the state, 
// bothe App and Count componets will reload....
// we test this by having console log in the APP and Count component

// POINT TO REMEMBER
// if we have a state change inside a component,
// React will re-render the component, 
// and so doing re-render all the components in that component

*/

// ❤️‍🔥 SETTING STATE FROM CHILD COMPONENT - intro
/**
import React from "react"
import avatar from "./images/user.png"
import Star from "./Star"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    // let starIcon = contact.isFavorite ? starFilled : starEmpty

    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }

    /**
     * we can see a more likely state passing example using our card appplication
     * 
     * Challenge: Move the star image into its own component (Star)
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display. (You'll
     *   need to import the 2 star icons into that new component first).
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     *

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    {/* <button
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
                    </button> *
                    {/* <Star isFilled={contact.isFavorite} onClick={toggleFavorite}/> *
                    
                    {/* // So how can we get this Star component to update its parent(app) 
                    // 
                    // asumming we click the btn to change the state of the star

                    // remember the the toggleHandler is here in App, the isFavorite that gives isFilled too is in apps

                    // So how can we send a state to the parent /
                    // we know how to send from parent to child - 
                    // 
                    // maybe u think we shud put onClick={toggleHandler} into the Star component
                    <Star isFilled={contact.isFavorite} onClick={toggleHandler}/>

                    // You remember how the attributes we have in our jsx mapped directly
                    // to the DOM elelments that exist in javascript? 
                    // In JS elements that we pull form the DOM,
                    // they have a className prop that we can change
                    // and all DOM elements like h1, p, button etc also have a property called onClick
                    // But here we are not working with DOM element, we are working with React component
                    // Any property/attribute we put on our custom React component, we chose them
                    // they are not from documentation or the langauge like DOM element properties/attr
                    // So this attribute we give our component, is another prop that... 
                    // we need to recieve it in the Star component too
                    // 
                    <Star isFilled={contact.isFavorite} onClick={toggleHandler}/>
                    // so this onClick is just another custom property or props that we are passing to 
                    our custom component which we will then recieve from the component jst like we recieve 
                    any other component and {toggleHandler} is like putting the entire fn here, onClick run it when clicked. so we ar basically sending the fn as props to the component
                    
                    // we can make this even more explanatory by making the custom attribute...
                    // look more different from DOM attri
                    // so instead of onClick, we use handleClick
                    *
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                    
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}



STAR COMPONENT

import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"


export default function Star(props) {

    let starIcon = props.isFilled ? starFilled : starEmpty
    
    // So how can we get this Star component to update its parent(app)?..

    return (<button
        // onClick={props.onClick}
        onClick={props.handleClick}
        // we can make this even more explanatory by making the custom attribute...
        // look more different from DOM attri
        // so instead of onClick, we use handleClick
        /**
         * We can pass any JS datatype down throu props
         * and functions like we are doing here have no excptions
         * we pass the handleClick fn from the App to the button here
         * so that the fn listen to the even and run 
         * running the fn will still interact with the parent state in order to change
         * bcs the state is set in the parent
         *
        aria-pressed={props.isFilled}
        aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
        className="favorite-button"
    >
        <img
            src={starIcon}
            alt={props.isFilled ? "filled star icon" : "empty star icon"}
            className="favorite"
        />
    </button>)
}

 */

//❤️‍🔥 PASSING DATA FROM ONE COMPONENT TO ANOTHER

/**
 
A
!\
B-C
!\
D-E

this is a sample diagram of a react application 
where A is the parent component, 
B and C are the children component
D and E are B's children and A's grand-children

assume that we have a state in D
you later realise that E, which is a sibling to D, needs the same state's change too
React cannot pass state from D to E, or E to D. 
Siblings cannot pass state between each other

In react, data can only flow downwards
no upward, no sideways

So if D and E needs a state, we will create the state in their parent B
and pass the state down to D and E as props

if C needs this same state, we will need to create the state in A 
and pass it down from there

This can get cumbersome overtime so there are some ways to manage data in Reac like Redux, context etc

Context and Redux are beyond the scope of this training

so we will go with the default React 


// APP - 
import React from "react"
import Header from "./Header"
import Body from "./Body"
export default function App() {

    const [userName, setUserName] = React.useState("Joe")

    return (
        <main>
            <Header userName={userName}/>
            <Body userName={userName} />
        </main>
    )
}


// BODY
import React from "react"
export default function Body(props) {
    return (
        <section>
            <h1>Welcome back, {props.userName}!</h1>
        </section>
    )
}

// HEADER
import React from "react"
import avatar from "./icons/user.png"
export default function Header(props) {

    /**
     * Challenge:
     * Raise this state up a level
     * so you can pass it down to both this header and the body
     * as props
     

    // const [userName, setUserName] = React.useState("Joe")

    return (
        <header>
            <img src={avatar} />
            <p>{props.userName}</p>
        </header>
    )
}

undertsnading that data flow from top to bottom will assit you 
when architecting your own React applications

And you should make your state as locally redundant as possible.
dont put a state the parent if it is just a sibling that needs it.
If 2 siblings need it, then put in a parent - not the grand parent - etc
*/


// ❤️‍🔥 SOUND PADS CHALLENGE
/**
 * This will be a series of challenges to re-enforce what we have learned
 
import padsData from "./pads"
import React from "react"
import Pad from "./Pad"

export default function App(props) {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */

    /**
     ❤️‍🔥💇🏽‍♂️LETS LEARN ABOUT IN-LINE STYLE IN REACT
     we dont often perform in style in HTML
     we put the 'style' attribut in a HTML element and gice CSS values
     this in-line style takes precedence over our css file

     similarly in React, anything that is real HTML, not components, 
     we can pass style attribute to it

     However bcs we are in jsx, we are not going to equeate style to a string
     style will equate to an object symbol: style={}
     we are not setting the style to be object, 
     but we are telling that the code in the curly braces is javascript
     but the javascript we want to evaluate is an object
     so we need our second set or curly braces: style={{}}

     to aviod this curly braces inside curly braces, 
     we can make a style variable and equate it to an object     
     

    const [pads, setPads] = React.useState(padsData)

    // const styles = {
    //     backgroundColor: "red"         
    // }

    /**
     * We use camelCase version of CSS properties in javascript
        const styles = {
            backgroundColor: "red"
            // this is us hard coding the css - not usually done in React
        }    
       Usually in React, 
       we use inline style like this when we are making something Really dynamic

       Lets assume we we want to change the background of the buttons  based on a prop passed into
       the App is darkMode and it can either be true or false  

       in the main.jsx file
       <App darkMode={true}/>

     

    // let bgColor = props.darkMode ? { backgroundColor: "#222222" } : { backgroundColor: "#cccccc" }
    //  const buttonElements = pads.map(pad => <button style={bgColor} key={pad.id}></button>)
    
    // OR DO LIKE BELOW- You can have any design you want determined by anything
    
    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }

    // const buttonElements = pads.map(pad => <button style={styles} key={pad.id}></button>)

   
    /** 8:35ss
     * Challenge part 2:
     * 1. Create a separate component called "Pad" and
     *    replace the `button` above with our <Pad /> component
     * 2. Pass the Pad component a prop called `color` with the
     *    value of the same name from the `padsData` objects
     * 3. In the Pad component, apply an inline style to the <button>
     *    to set the backgroundColor of the button.
     * 
     * (We'll deal with the "on" property soon)
     * }
     

    const buttonElements = pads.map(pad => <Pad color={pad.color} key={pad.id}/>)
    /**
    export default function Pad(props){
        const bgStyle = {backgroundColor: props.color} 
        return <button style={bgStyle}></button>
     
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}


USE REACT TO PICK PARTICULAR CSS FOR EACH BUTTON

export default function Pad(props) {
    /**
     * Challenge part 3:
     * Our buttons got turned off by default from css code (opacity of 0.1)! Update the code
     * 
     * so if the button is "on", it has the className of "on".
     * this 'on' class has opacity of 1
     
    
    return (
        <button 
            style={{backgroundColor: props.color}}
            className = {props.on ? "on" : undefined}
        ></button>
    )
}

we are recieving the on value from a default file but we want the user to be able to flip the on from true to false

we are goung to do this in two diferent ways

these are the things we have right now


<App /> : this is where we import the pads.js array data. we map over the data to display <Pad />
<Pad /> <Pad /> <Pad /> : we get these from mapping over pads.js data

the first option that we have this <Pad /> components control their 'on' state
is by initializing a new state in each of the component
we will then take the value of props.on that is coming from our App component 
and set that as the initial value of the 'on' state
the we would have a fn defined inside the <Pad /> component that would it to flip the state
each of the <Pad /> component will have its own on state that React will keep tract of
so changing the state in of 'on' in one component will not affect the other


ONE WAY - LOCAL STATE
import React from "react"
export default function Pad(props) {
    /**
     * Challenge 4: 
     * Create state controlling whether
     * this pad is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the pad is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each pad should toggle it on and off.
     /
    const [onState, setOnState] = React.useState(props.on)

    function toggleState(){
        setOnState(prevOn => !prevOn)
    }
    return (
        <button
            style={{ backgroundColor: props.color }}
            className={onState ? "on" : undefined}
            onClick={toggleState}
        ></button>
    )
}

So as simple as this code is, why would I care for a different way of doing this?

ANOTHER WAY - SHARED STATE
there is actually a name for how we set up the last code - derive state
it is deriving it's initial state based on incoming prop. 
You know we determine the initial state based on the prop from App
and App gets the value from the defaul pads.js array data

But there is an issue with derive state.
You can end up getting multiple sources of truth. 
bcs the initial state soyrce is from <App /> 
then once this states gets updated from the <pad />, the source chages to be the <Pad />
so there are 2 soyrces like this and there can be more

But our code works fine. 
Yes, it works fine now but certains features in future becomes more difficult to add.
Imagine we want to add a button in the <App /> to turn all the buttons off
and bcs this state exists in each individual <Pad />
It does not work as you would expect. See the example below



import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData)

    const buttonElements = pads.map(pad => (
        <Pad key={pad.id} color={pad.color} on={pad.on}/>
    ))

    function toggleAllOff(){
        console.log("toggle all off")
        setPads(prevPads => prevPads.map(pad => ({...pad, on: false})))
    }
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
            <button 
             style={{opacity:"1"}}
             onClick={toggleAllOff}
            >Turn all off</button>
        </main>
    )
}

from the toggleAllOff fn, it is only the console log("togle all off") that took efect

the point is:

If we need a better control to toggle over all the <Pad /> components we will have to architect our code in a different way
we will remove the state from the individual compnent
we will use the state that already exist in our <App /> 
8:52ss
We will create a toggle function inside the app
we will update the local components in the array using (setPads)
and bcs we updating the setPads local state, 
it is going to rerender all the pads
all the pads will rerender as they are except the one that got clicked
how do we know the one that got clicked? 
we will pass the toggle fn from the app to the pads as props
when the pad gets clicked, it will send signal to the parent component, app

This sounds complex but it is the right way to do this.
it is best to have a unified source of truth
bcs one we dont have a source of truth in the pads
we are simply reflecting what we have in the parent


See a short way of tranfering fn to another component

//THIS IS APP COMPONENT
    function togglePad(){
        console.log("Clicked")
    }

    const buttonElements = pads.map(pad => (
        <Pad key={pad.id} color={pad.color} on={pad.on} togglePadFn={togglePad}/>
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
            
        </main>
    )

//THIS IS PAD
export default function Pad(props) {

    return (
        <button
            style={{ backgroundColor: props.color }}
            className={props.on ? "on" : undefined}
            onClick={props.togglePadFn}
        ></button>
    )
}

each of the button in Pad has access to the toggle fn
and bcs the toggle is defined in the parent component, 
there is really only one toggle fn
in other words
there is not really any connection between each button and the fn
the function doesnt know which button triggered it

lets say in our toggle fn, we recieved the id of which btn was clicked
then we will be able to look through the array of our pads
find the one with the id that was clicked
and flip its on value to opposite of whatever it is


we have another issue... 
hw can we pass and id to the fn when we call it from a btn in the pad?
we know that 'event' get passed to a fn when called
but how can we pass in 'id' to the fn instead of it automatically passing 'event' 

super easy way to solve this is to create an anonimous inline fn
onClick={(event) => props.togglePadFn(id)}
RHS is what the event handler will run : props.togglePadFn(id)
LHS is the one that will recieve the event as its parameter : (event) =>

    we dont need the event word. 
    the only thing the LHS funtion will do is run the RHS function
    and bcs RHS is outside the event handler fn, we can pass 'id' to it

    so how can we get access to the id?
    we cant use props.id key that we are getting from App as key={pad.id} 
    --- React doesnt work like that
    if you need to access the same value, then you should pass it a diferent prop
    <Pad key={pad.id} id={pad.id} color={pad.color} on={pad.on} togglePadFn={togglePad}/>

    and on the Pad componenent button we have
    onClick={() => props.togglePadFn(props.id)}

*/

/** 
// THE APP COMPONENT
import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData)

    // function toggleAllOff(){
    //     console.log("toggle all off")
    //     setPads(prevPads => prevPads.map(pad => ({...pad, on: false})))
    // }

    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Pad components
     * and set it up so when they get clicked, the function runs
    */

        /**
         * Challenge:
         * Call setPads to update the state of the one pad that was
         * clicked. Map over the previous pads array, and if the current
         * item you're iterating over has the same id as the `id` passed
         * to this function, then return a new object with the `on` value
         * set to the opposite of what it was before.
         * Otherwise (if the ids don't match), just return the previous
         * item as it was, unchanged.
         / setPads(prevSetPads => prevSetPads.map(pad => pad.id === id ? {...pad, on: !pad.on} : pad))

    function togglePad(id){
        console.log(id)
        // setPads(prevPads => prevPads.map(pad => pad.id === id ? {...pad, on: !on} : pad))
        
        // 😁😁😁😁😁 ANOTHER HAPPY FEELING MOMENT
        // did you know that i was strucgling to get this code to work since yesteday
        // i kept getting error and i knew that i understand what the syntax is doing 
        // but couldnt identity the lapse
        // i went online and do some research on my own - without checing the tutors code
        // i got a semilar scenerio that wasnt using state but mapping over array of obj and modify one
        // i look thru their code, understand it, and see what i was doing wrong
        // their code wasnt even using ternery op or arro fn, but i understand        
        setPads(prevPads => prevPads.map(pad => pad.id === id ? ({...pad, on: !pad.on}) : pad))
        // below is the tutor's solution
        /**
        function toggle(id){
            setPads(prevPads => prevPads.map(item => {
                return item.id === id ? {...item, on: item.on}, item   
            }))
        } 
        /
    }

    const buttonElements = pads.map(pad => (
        <Pad key={pad.id} id={pad.id} color={pad.color} on={pad.on} togglePadFn={togglePad}/>
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
            
        </main>
    )
}

// THE PADS COMPONENT
import React from "react"
export default function Pad(props) {

    return (
        <button
            style={{ backgroundColor: props.color }}
            className={props.on ? "on" : undefined}
            onClick={() => props.togglePadFn(props.id)}
        ></button>
    )
}

we know that this is a lot of code compared to the first method
but now we are setup in a more React way where we have a single source of truth
data flows in one direction and pass through props to the component
and the props can trigger changes through the callback functions to the main source of truth

Now if we have a button that says turn all the button off
we can have that very easily.
it will just do this instead
setPads(prevPads => prevPads.map(pad => {...pad, on: false})

*/


//❤️‍🔥TO RETURN TO OUR CHEF CLAUDE CODE
/**
 * Our chef claude app has gotten a little bit long
 * mosty bcs we are hard coding the response from the API
 * we can refactor our apps and put these codes into their components

❤️‍🔥
import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function Main() {

    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const [recipeShown, setRecipeShown] = React.useState(false)

    function handleRecipeShown() {
        setRecipeShown(prevRecipeShown => !prevRecipeShown)
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList
                ingredientsListItems={ingredientsListItems} 
                ingredients={ingredients} 
                handleRecipeShown={handleRecipeShown} />}
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}

❤️‍🔥 
export default function IngredientsList(props) {
    return <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">{props.ingredientsListItems}</ul>
        {props.ingredients.length > 3 && <div className="get-recipe-container">
            <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.handleRecipeShown}>Get a recipe</button>
        </div>}
    </section>
}

❤️‍🔥
export default function ClaudeRecipe() {
    return <section>
        <h2>Chef Claude Recommends:</h2>
        <article className="suggested-recipe-container" aria-live="polite">
            <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
            <h3>Beef Bolognese Pasta</h3>
            <strong>Ingredients:</strong>
            <ul>
                <li>1 lb. ground beef</li>
                <li>1 onion, diced</li>
                <li>3 cloves garlic, minced</li>
                <li>2 tablespoons tomato paste</li>
                <li>1 (28 oz) can crushed tomatoes</li>
                <li>1 cup beef broth</li>
                <li>1 teaspoon dried oregano</li>
                <li>1 teaspoon dried basil</li>
                <li>Salt and pepper to taste</li>
                <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
            </ul>
            <strong>Instructions:</strong>
            <ol>
                <li>Bring a large pot of salted water to a boil for the pasta.</li>
                <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
                <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
                <li>Stir in the tomato paste and cook for 1 minute.</li>
                <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
                <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
                <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
                <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
                <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
            </ol>
        </article>
    </section>
}
*/

//❤️‍🔥 LETS ADD AI TO OUR CODE
/**
 * Go to Anthropic to get API keys
 * 
 * Anthropic is arguably the best AI right now but it is not free
 * 
 * Hugging Face however has free API that we can use
 * Hugging Face is like the Github for AI models. 
 * They have lots of AIs and there are free and paid ones
 * Below is from: https://huggingface.co/
 * Access 45,000+ models from leading AI providers through a single, unified API with no service fees.
 * 
 * So create Access Token in HuggingFace
 * BELOW IS THE CODE TO ACCESS THE APIs
 * 
 * Exporsing your API key / token is highly dangerous
 * so if u are using .ENV file, make sure you gitignore the file
 * And bcs the API calls are coming from browser environment to the API server, 
 * instead of relaying it through a server. 
 * It means that if you were to deploy your project, anybody can dig up your API key
 * The only secure to use this service is to replay the request through a server or serverless function on a deployment platform
 * 
 * 
 * No we can generate stuff form API when we give it list of ingredients
 


// AI API CODE STARTS HERE-------

//you need to npm install @huggingface/inference or @anthropic-ai/sdk

import Anthropic from "@anthropic-ai/sdk"
import { HfInference } from '@huggingface/inference'

/* When you are interacting with an AI, 
you need to give it some kind of system prompt that help set the stage for the AI to know what it is suppose to be tasked with



const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and 
suggests a recipe they could make with some or all of those ingredients. 
You don't need to use every ingredient they mention in your recipe. 
The recipe can include additional ingredients they didn't mention, 
but try not to include too many extra ingredients. 
Format your response in markdown to make it easier to render to a web page
`

// 🚨👉 ALERT: Read message below! You've been warned! 👈🚨
// If you're following along on your local machine instead of
// here on Scrimba, make sure you don't commit your API keys
// to any repositories and don't deploy your project anywhere
// live online. Otherwise, anyone could inspect your source
// and find your API keys/tokens. If you want to deploy
// this project, you'll need to create a backend of some kind,
// either your own or using some serverless architecture where
// your API calls can be made. Doing so will keep your
// API keys private.

const anthropic = new Anthropic({
    // Make sure you set an environment variable in Scrimba 
    // for ANTHROPIC_API_KEY
    apiKey: process.env.ANTHROPIC_API_KEY, // location of the API key / access token

    dangerouslyAllowBrowser: true, // bcs we using browser to make the call
})

export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
        ],
    });
    return msg.content[0].text
}

// Make sure you set an environment variable in Scrimba 
// for HF_ACCESS_TOKEN
const hf = new HfInference(process.env.HF_ACCESS_TOKEN)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}

❤️‍🔥❤️‍🔥 WHAT DOES THIS MEAN FOR US
Inside of our main.jsx when we want to use AI to generate our recipe,
all we need to do is import one of the 2 functions in our ai.js file
then call the function and pass in the ingredient array
 */


/** ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥 THE END OF CHEF CLAUDE -
 * MAIN.JS FILE
 * 
 
import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import { getRecipeFromChefClaude, getRecipeFromMistral } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(
        ["chicken", "all the main spices", "corn", "heavy cream", "pasta"]
    )
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}

* ❤️‍🔥INGREDIENTSLISTJSX FILE
*
export default function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {props.ingredients.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.getRecipe}>Get a recipe</button>
            </div>}
        </section>
    )
}

* ❤️‍🔥CLAUDERECIPEJSX FILE
*
import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}
 
 */

 
/** ❤️‍🔥❤️‍🔥❤️‍🔥 INTRO TO AI ENGINEERING
<!doctype html>
<html>

	<head>
		<title>Dodgy Dave's Stock Predictions</title>
		<link rel="stylesheet" href="index.css">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
		<meta name="viewport" content="width=device-width, initial-scale=1">
	</head>

	<body>
		<header>
			<img src="images/logo-dave-text.png" alt="Dodgy Dave's Stock Predictions">
		</header>
		<main>
			<section class="action-panel">
				<form id="ticker-input-form">
					<label for="ticker-input"> Add up to 3 stock tickers below to get a super accurate stock predictions report👇 </label>
					<div class="form-input-control">
						<input type="text" id="ticker-input" placeholder="MSFT">
						<button class="add-ticker-btn">
							<img src="images/add.svg" class="add-ticker-svg" alt="add"> 
						</button>
					</div>
				</form>
				<p class="ticker-choice-display">
					Your tickers will appear here...
				</p>
				<button class="generate-report-btn" type="button" disabled>
					Generate Report
				</button>
				<p class="tag-line">Always correct 15% of the time!</p>
			</section>
			<section class="loading-panel">
				<img src="images/loader.svg" alt="loading">
				<div id="api-message">Querying Stocks API...</div>
			</section>
			<section class="output-panel">
				<h2>Your Report 😜</h2>
			</section>
		</main>
		<footer>
			&copy; This is not real financial advice!
		</footer>
		<script src="index.js" type="module"></script>
	</body>

</html>
*/

/** ❤️‍🔥❤️‍🔥❤️‍🔥 CSS OF THE PROGRAM
html, body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #f6f6f6;
}

* {
    box-sizing: border-box;
}

header {
    display: flex;
    justify-content: center;
    padding: 1em;
    background-color: black;
    max-width: 500px;
    margin: 0 auto;
}

header img {
    width: 340px;
}

main {
    display: flex;
    justify-content: center;
}

/* Panels /

.action-panel, .output-panel {
    line-height: 1.4em;
    display: flex;
    height: 350px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 1.5em 2em;
}

.output-panel {
    display: none;
    justify-content: flex-start;
    border: 2px solid;
    padding: 1em 2em;
}

.loading-panel {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    height: 400px;
    text-align: center;
}

.output-panel p{
    overflow-y: scroll;
}

/* text /

h2 {
    text-align: center;
    font-weight: 400; 
    margin-top: -26px;
    background-color: #f6f6f6;
    padding: 0 10px;
    font-size: 18px;
    margin-bottom: 0;
}

p.tag-line {
    font-family: 'Comic Neue';
    font-weight: 700;
    font-size: 14px;
}

.ticker-choice-display {
    display: flex;
    align-items: center;
    height: 3em; 
}

/* controls /

form {
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    text-align: center;
    padding: .43em;
    font-size: 15px;
    margin-bottom: 1em;
    width: 80%;
}

.form-input-control {
    display: flex;
    width: 70%;
}

input[type="text"] {
    padding: 1em;
    border: 2px solid black;
    border-right: none;
}

/* Buttons /

.add-ticker-btn {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    font-size: 3em;
    padding: 0 .35em;
    cursor: pointer;
    border: 2px solid;
}

.add-ticker-svg {
    width: 14px;
}

.generate-report-btn {
    width: 70%;
    padding: 1em 1.5em;
    cursor: pointer;
    font-family: 'Poppins', sans;
    border: 2px solid #000000;
    background-color: #46ff90;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: .09em;
    font-size: 105%;
}

/* ticker display (ensure comma separated) /

.ticker {
    margin: 0 .1em;
    content: '';
}

.ticker:after {
    content: ',';
}

.ticker:last-child::after {
    content: '';
}

/* footer /

footer {
    font-size: 14px;
    text-align: center;
}

/* stop ugly scroll bar on some browsers /
.output-panel p::-webkit-scrollbar {
    display: none;
}

.output-panel p::-moz-scrollbar {
    display: none;
}
*/



/** ❤️‍🔥Let’s understand try...catch in JavaScript by following pure first-principles thinking, 
 * exactly like a human discovering why this concept had to exist.

Step 1: What problem do we face without try...catch?

Imagine you write a JavaScript program.
The program runs line by line, top to bottom.

Now ask yourself a simple question:

What happens if something goes wrong while the code is running?

Examples of things that can go wrong:

You try to use a variable that doesn’t exist

You try to access a property on undefined

You try to parse invalid JSON

An API response is broken or unexpected

Without any protection, JavaScript does this:

The program crashes immediately and stops running.

This creates several serious problems:

The entire app stops working because of one mistake

The user sees a broken page or blank screen

You don’t get a chance to explain the error or recover

One bad line kills everything that comes after it

So the big problem is not just that errors happen —
it’s that errors stop the whole program.

Step 2: What is the root cause of this problem?

Let’s boil it down.

The root cause is:

JavaScript does not know what you want to do when an error happens, so it stops everything by default.

JavaScript assumes:

“An error means something is very wrong”

“I should stop before things get worse”

But as developers, we often think:

“Yes, this might fail — and that’s okay”

“If it fails, I want to handle it gracefully”

So the real issue is:

We have no way to tell JavaScript how to behave when risky code fails.

Step 3: So how can we solve this problem?

We need a way to say:

“Try running this code”

“If it works, great — continue”

“If it fails, don’t crash — do this instead”

In other words, we need controlled failure.

That leads us directly to try...catch.

Step 4: What is try...catch?

try...catch is a JavaScript mechanism that lets you:

Safely run risky code and handle errors without crashing your program

Think of it like a safety net.

try = “This might break — attempt it”

catch = “If it breaks, handle the problem here”

Step 5: How does try...catch actually work?

Let’s walk through the thinking step by step.

Step 1: Identify risky code

What kind of code is risky?

Code that depends on external data

Code that assumes something exists

Code that can throw an error

Step 2: Wrap it in try

This tells JavaScript:

“Run this code carefully.”

Step 3: If an error occurs…

JavaScript immediately:

Stops executing the try block

Jumps to the catch block

Passes the error object to catch

Step 4: Handle the error in catch

Now you decide:

Show a friendly message

Log the error

Use a fallback value

Keep the app running

Step 6: Why is this better than not using it?

Let’s connect cause → effect.

Without try...catch	With try...catch
App crashes	App survives
User sees broken page	User sees controlled message
Code stops	Code continues
No recovery	Graceful recovery

So the why is clear:

try...catch exists so one failure doesn’t destroy the entire program.

Step 7: A simple analogy (absolute beginner level)

Imagine a child carrying a glass of water.

Without a tray:
If the glass falls → water spills everywhere → mess.

With a tray (like try...catch):
If the glass falls → water stays on the tray → no disaster.

try is carrying the glass.
catch is the tray underneath.

Step 8: Important beginner truths (very CCNA-style clarity)

try...catch only catches runtime errors, not syntax errors

JavaScript errors are called exceptions

Once an error happens inside try, JavaScript immediately jumps to catch

Code after the error in try will not run

Code after try...catch will continue running

Step 9: Final cause-and-effect summary

Errors are unavoidable in real programs

Crashing the entire app for one error is bad

The root cause is lack of controlled error handling

try...catch gives us control over failure

Control leads to stability, better user experience, and safer code

If you want, the next natural questions we can explore using the same thinking style are:

“What is finally and why does it exist?”

“What does throw mean in JavaScript?”

“Why try...catch doesn’t catch async errors without await?”

“How error handling worked before try...catch”

Just tell me what to explain next.
*/



/** ❤️‍🔥ASYNC AWAIT
Let’s understand **`async` / `await` in JavaScript** by discovering *why* it exists, step by step, from first principles — exactly the way a beginner’s curiosity would naturally lead us there.

---

## Step 1: What problem do we face *without* `async` / `await`?

Modern JavaScript apps do many slow things:

* Fetch data from an API
* Read files
* Talk to a database
* Wait for a timer
* Load images

Now ask a very natural question:

**What happens if JavaScript waits for these slow tasks to finish before moving on?**

Everything would freeze:

* The page stops responding
* Buttons stop clicking
* Animations stop
* The app feels “broken”

So JavaScript made a smart decision:

> **Never block the main thread.**

Instead, it runs slow tasks in the background.

Good idea — but this creates a new problem.

---

## Step 2: The new problem created by non-blocking code

If JavaScript does not wait, then:

* Code does **not run in the order you read it**
* Results are not available immediately
* You can’t just say `const data = fetchData()`

So beginners hit problems like:

* “Why is my variable `undefined`?”
* “Why is this console.log running first?”
* “Why is my code so hard to follow?”

---

## Step 3: What is the root cause of this problem?

Let’s boil it down.

The root cause is:

> JavaScript runs asynchronous tasks **later**, but our code is written **top-to-bottom**.

There is a mismatch between:

* **How humans think** (step-by-step)
* **How async JavaScript executes** (now vs later)

This mismatch makes code confusing and error-prone.

---

## Step 4: So how did we solve this *before* `async` / `await`?

Before `async` / `await`, JavaScript used **callbacks**.

Example idea:

> “When you’re done, call this function.”

But callbacks caused new problems:

* Deep nesting (callback hell)
* Hard-to-read code
* Difficult error handling
* Mental overload

So we fixed callbacks with **Promises**.

Promises were better, but still:

* `.then().then().then()` chains
* Logic split across many lines
* Still not very “human-readable”

---

## Step 5: So how can we solve this problem *properly*?

Let’s ask the key question:

**What if asynchronous code could be written like synchronous code?**

What if we could:

* Pause execution *without blocking*
* Read code top-to-bottom
* Handle errors with normal `try...catch`

That exact desire gave birth to `async` / `await`.

---

## Step 6: What is `async` / `await`?

`async` / `await` is **syntax sugar** built on top of Promises that lets you:

> **Write asynchronous code that looks and feels synchronous**

Important beginner truth:

* It does **not** make JavaScript block
* It does **not** make things faster
* It makes code **easier to understand**

---

## Step 7: How does `async` work?

When you mark a function as `async`, you’re telling JavaScript:

> “This function will deal with something that takes time.”

Key effects:

* The function always returns a **Promise**
* You are allowed to use `await` inside it

Why this matters:

* JavaScript now knows this function is special
* It prepares to handle “pause points”

---

## Step 8: What does `await` actually do?

Let’s reason carefully.

### Question:

Does `await` stop JavaScript?

**No.**

### What does it do then?

`await`:

* Pauses **only the async function**
* Lets JavaScript continue doing other work
* Resumes the function when the Promise resolves

Think of it like saying:

> “Wait here until the result is ready — then continue from this exact spot.”

This is why code stays readable.

---

## Step 9: Why is this better than `.then()`?

Cause → effect:

* Humans think step-by-step
* `await` matches that thinking
* Error handling becomes normal (`try...catch`)
* Code flows top-to-bottom
* No nesting
* No chaining confusion

So the **why** is clear:

> `async` / `await` exists to align asynchronous execution with human thinking.

---

## Step 10: Simple analogy (absolute beginner friendly)

Imagine ordering food at a restaurant.

### Without `await`:

* You place an order
* You immediately ask, “Where’s my food?”
* It’s not ready yet — confusion

### With `await`:

* You place an order
* You wait calmly
* Food arrives
* You eat
* Life is good

The restaurant doesn’t stop working — other orders continue.
Only *you* are waiting.

---

## Step 11: Error handling with `async` / `await` (why it’s powerful)

Because async code *looks* synchronous, we can use:

```js
try {
  await somethingRisky()
} catch (error) {
  // handle error
}
```

Why this is huge:

* No `.catch()` chains
* Errors are handled where they happen
* Logic stays together

---

## Step 12: Final cause-and-effect summary

* JavaScript must stay non-blocking
* Async tasks run later
* Callbacks were hard to manage
* Promises improved things but still felt unnatural
* Root problem: mismatch between async execution and human reasoning
* `async` / `await` solves this by making async code readable and linear

---

### Next natural questions (same thinking style):

* Why does `async` always return a Promise?
* Why can’t we use `await` outside an async function?
* What happens under the hood (event loop + microtasks)?
* Why `await` doesn’t block the main thread?


EXAMPLE AND MORE INFO\

Async/await in JavaScript provides a cleaner, more intuitive syntax for handling asynchronous operations that are built on top of Promises. It allows you to write asynchronous code that reads like synchronous, top-down code. 
Here are some common code examples and patterns using async/await:
1. Basic Async Function
An async function always returns a Promise. The await keyword can only be used inside an async function to pause its execution until a Promise settles (resolves or rejects). 
javascript
// A function that returns a Promise (simulating an async operation)
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Operation completed");
    }, 2000); // Resolves after 2 seconds
  });
}

// An async function using await
async function getData() {
  console.log("Fetching data...");
  // Pause execution until the promise resolves
  const result = await resolveAfter2Seconds();
  console.log(result); // "Operation completed"
  return result;
}

getData();
// Output:
// Fetching data...
// (after 2 seconds)
// Operation completed
2. Fetching Data from an API
This is a very common use case, often involving two await calls: one for the fetch itself, and another for parsing the response body as JSON. 
javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);

    if (!response.ok) { // Check for a successful HTTP status
      throw new Error(`HTTP error: ${response.status}`);
    }

    const user = await response.json(); // Parse the JSON data
    console.log(user);
  } catch (error) {
    // Catches any error in the try block, including network errors or HTTP errors
    console.error("Could not get user data:", error);
  }
}

fetchUserData(1);
3. Error Handling with try...catch
Async/await allows the use of standard try...catch blocks for error handling, which is much cleaner than using .catch() with Promises. 
javascript
async function performComplexOperation() {
  try {
    const stepOneResult = await asyncStepOne();
    const stepTwoResult = await asyncStepTwo(stepOneResult);
    console.log("Success:", stepTwoResult);
  } catch (error) {
    // Catches errors from either asyncStepOne or asyncStepTwo
    console.error("An error occurred in the sequence:", error);
  }
}
4. Parallel Operations with Promise.all() 
When you have multiple asynchronous operations that do not depend on each other, you can run them in parallel using Promise.all() and await the result. This is significantly faster than awaiting them sequentially. 
javascript
async function fetchUserAndPosts(userId) {
  try {
    // Start both promises immediately, then await them simultaneously
    const userPromise = fetchUser(userId);
    const postsPromise = fetchUserPosts(userId);

    const [user, posts] = await Promise.all([userPromise, postsPromise]);

    console.log("User:", user, "Posts:", posts);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
5. Immediately Invoked Function Expressions (IIFE)
In environments where top-level await is not supported (like older Node.js versions or non-module scripts), you can wrap your code in an asynchronous IIFE to use await at the top level of a file. 
javascript
(async () => {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
})();
*/


/**❤️‍🔥DATE IN JS
Let’s understand **Dates in JavaScript** by following first-principles thinking, exactly the way a beginner’s curiosity would naturally unfold.

---

## Step 1: What problem do we face *without* dates?

Imagine you are building any real application:

* A login system
* A banking app
* A todo list
* A chat app

Now ask a simple question:

**How do we know *when* something happened?**

Without dates, we immediately run into problems:

* We can’t tell **when a user logged in**
* We can’t know **when a message was sent**
* We can’t schedule things like reminders or payments
* We can’t compare events (Which came first? Which expires later?)

Everything would be timeless — just data with **no sense of time**.

That makes real applications impossible.

---

## Step 2: What is the root cause of this problem?

Let’s boil it down.

The root cause is:

> Computers do not naturally understand human time (days, months, years).

Humans think in:

* “Today”
* “Tomorrow”
* “5 minutes ago”
* “Next week”

Computers, however, only understand **numbers**.

So the real problem is:

> We need a way to represent **time as numbers**, but still work with it like humans do.

---

## Step 3: So how can we solve this problem?

We need:

* A standard way to represent time numerically
* A way to convert that number into human-readable dates
* Tools to compare, format, and manipulate time

This leads us to JavaScript’s **Date object**.

---

## Step 4: What is the Date object in JavaScript?

The `Date` object is JavaScript’s built-in way to:

> **Store, represent, and work with time**

Internally, JavaScript stores time as:

> **The number of milliseconds since January 1, 1970 (UTC)**

This moment is called the **Unix Epoch**.

Why this matters:

* Numbers are easy for computers
* A single number lets us compare time easily
* Everything can be calculated from this reference point

---

## Step 5: How does JavaScript think about time?

Let’s reason step by step.

### Question: What is the smallest useful unit of time?

Milliseconds.

### Question: From when should we start counting?

From a fixed, global point everyone agrees on → **Jan 1, 1970**

### Result:

Every date is just a **big number** like:

```
1712345678901
```

That number represents **milliseconds since the epoch**.

So when you create a date in JavaScript, you’re really creating a wrapper around that number.

---

## Step 6: Creating dates (and why there are multiple ways)

### 1. Current date and time

```js
const now = new Date()
```

Why this exists:

* We often need “what time is it right now?”

---

### 2. Specific date

```js
const birthday = new Date("1995-08-20")
```

Why this exists:

* Humans think in calendar dates, not milliseconds

---

### 3. Using numbers

```js
const date = new Date(2025, 0, 1)
```

Important beginner detail:

* Months start at **0** (January = 0)
  Why?
* Because JavaScript is built on zero-based indexing

---

## Step 7: Reading information from a date

Once you have a date, you naturally ask:

> “How do I get the year, month, day, or time?”

JavaScript provides methods:

* `getFullYear()` → year
* `getMonth()` → month (0–11)
* `getDate()` → day of the month
* `getDay()` → day of the week (0–6)
* `getHours()`, `getMinutes()`, `getSeconds()`

Why so many methods?
Because time has **many dimensions**, and we often need them separately.

---

## Step 8: Comparing dates (the real power)

Ask yourself:

**How do we know which date comes first?**

Since dates are numbers internally:

* Bigger number → later time
* Smaller number → earlier time

So:

```js
date1 > date2
```

works naturally.

This is why storing time as milliseconds was such a smart design.

---

## Step 9: Common beginner mistakes (and why they happen)

### 1. Month confusion

```js
new Date(2025, 1, 1) // February, not January
```

Root cause: zero-based indexing.

---

### 2. Timezone confusion

Dates are affected by:

* Local timezone
* UTC

This is why:

```js
toISOString()
```

exists — it gives a **timezone-safe** representation.

---

## Step 10: Simple analogy

Think of time like a **stopwatch**:

* The stopwatch starts at Jan 1, 1970
* It counts milliseconds non-stop
* JavaScript just reads the number on the stopwatch
* The Date object converts it into:

  * Year
  * Month
  * Day
  * Time

---

## Step 11: Final cause-and-effect summary

* Real apps need to understand time
* Computers only understand numbers
* The root problem is converting human time to numbers
* JavaScript solves this with the Date object
* Dates are stored as milliseconds since the Unix Epoch
* Everything else is just **different views of that number**

---

### Next natural questions (using the same thinking style):

* Why are months zero-based in JavaScript?
* What is UTC vs local time?
* Why is Date considered “hard” in JavaScript?
* Why do libraries like Moment, Day.js, or Luxon exist?

Tell me which one you want next.

*/


/** ❤️‍🔥 THE DATE FORMATTER
function formatDate(date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

function getDateNDaysAgo(n) {
    const now = new Date(); // current date and time
    now.setDate(now.getDate() - n); // subtract n days
    return formatDate(now);
}

export const dates = {
    startDate: getDateNDaysAgo(3), // alter days to increase/decrease data set
    endDate: getDateNDaysAgo(1) // leave at 1 to get yesterday's data
}
 */


/** ❤️‍🔥 
function formatDate(date) {
This starts a little helper that knows how to dress up a date nicely.

const yyyy = date.getFullYear();
This takes the year from the date, like 2025.

const mm = String(date.getMonth() + 1).padStart(2, '0');
This takes the month, adds one because computers start counting months at zero, and makes sure it has two numbers.

const dd = String(date.getDate()).padStart(2, '0');
This takes the day of the month and makes sure it also has two numbers.

**return \${yyyy}-${mm}-${dd}`;** This puts the year, month, and day together like 2025-01-15`.

}
This ends the date-dressing helper.

function getDateNDaysAgo(n) {
This starts a helper that can go back in time by a few days.

const now = new Date();
This gets today’s date right now.

now.setDate(now.getDate() - n);
This moves the date backward by n days.

return formatDate(now);
This sends the date to the first helper to make it look nice.

}
This ends the time-travel helper.

export const dates = {
This shares some dates so other files can use them.

startDate: getDateNDaysAgo(3),
This sets the start date to three days ago.

endDate: getDateNDaysAgo(1)
This sets the end date to yesterday.

}
This finishes the dates box.
 */



/** ❤️‍🔥JAVASCRIPT CODE
import { dates } from '/utils/dates'

const tickersArr = []

const generateReportBtn = document.querySelector('.generate-report-btn')

generateReportBtn.addEventListener('click', fetchStockData)

document.getElementById('ticker-input-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const tickerInput = document.getElementById('ticker-input')
    if (tickerInput.value.length > 2) {
        generateReportBtn.disabled = false
        const newTickerStr = tickerInput.value
        tickersArr.push(newTickerStr.toUpperCase())
        tickerInput.value = ''
        renderTickers()
    } else {
        const label = document.getElementsByTagName('label')[0]
        label.style.color = 'red'
        label.textContent = 'You must add at least one ticker. A ticker is a 3 letter or more code for a stock. E.g TSLA for Tesla.'
    }
})

function renderTickers() {
    const tickersDiv = document.querySelector('.ticker-choice-display')
    tickersDiv.innerHTML = ''
    tickersArr.forEach((ticker) => {
        const newTickerSpan = document.createElement('span')
        newTickerSpan.textContent = ticker
        newTickerSpan.classList.add('ticker')
        tickersDiv.appendChild(newTickerSpan)
    })
}

const loadingArea = document.querySelector('.loading-panel')
const apiMessage = document.getElementById('api-message')

async function fetchStockData() {
    document.querySelector('.action-panel').style.display = 'none'
    loadingArea.style.display = 'flex'
    try {
        const stockData = await Promise.all(tickersArr.map(async (ticker) => {
            const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${process.env.POLYGON_API_KEY}`
            const response = await fetch(url)
            const data = await response.text()
            const status = await response.status
            if (status === 200) {
                apiMessage.innerText = 'Creating report...'
                return data
            } else {
                loadingArea.innerText = 'There was an error fetching stock data.'
            }
        }))
        fetchReport(stockData.join(''))
    } catch(err) {
        loadingArea.innerText = 'There was an error fetching stock data.'
        console.error('error: ', err)
    }
}

async function fetchReport(data) {
    /** AI goes here **
}

function renderReport(output) {
    loadingArea.style.display = 'none'
    const outputArea = document.querySelector('.output-panel')
    const report = document.createElement('p')
    outputArea.appendChild(report)
    report.textContent = output
    outputArea.style.display = 'flex'
}
*/


/** ❤️‍🔥 JAVASCRIPT CODE explanantion
import { dates } from '/utils/dates'
This brings a calendar helper from another box so we know which days to use.

const tickersArr = []
This makes an empty basket to store stock names.

const generateReportBtn = document.querySelector('.generate-report-btn')
This finds the “Make Report” button on the screen.

generateReportBtn.addEventListener('click', fetchStockData)
When the button is clicked, it starts getting stock information.

document.getElementById('ticker-input-form').addEventListener('submit', (e) => {
When the form is sent, we listen and do something special.

e.preventDefault()
This stops the page from refreshing like it normally would.

const tickerInput = document.getElementById('ticker-input')
This looks at what the child typed into the box.

if (tickerInput.value.length > 2) {
If the name is long enough, we say “okay”.

generateReportBtn.disabled = false
We turn the button back on so it can be clicked.

const newTickerStr = tickerInput.value
We take the typed stock name.

tickersArr.push(newTickerStr.toUpperCase())
We put the stock name into the basket using big letters.

tickerInput.value = ''
We clear the box so it’s empty again.

renderTickers()
We show all the stock names on the screen.

} else {
If the name is too short…

label.style.color = 'red'
We make the message red.

label.textContent = 'You must add at least one ticker...'
We tell the child what they did wrong.

Showing the stock names

function renderTickers() {
This helper shows all chosen stocks.

tickersDiv.innerHTML = ''
We erase what was there before.

tickersArr.forEach((ticker) => {
We look at each stock name one by one.

const newTickerSpan = document.createElement('span')
We make a little label.

newTickerSpan.textContent = ticker
We put the stock name on it.

tickersDiv.appendChild(newTickerSpan)
We add it to the screen.

Loading and messages

const loadingArea = document.querySelector('.loading-panel')
This finds the “loading” area.

const apiMessage = document.getElementById('api-message')
This finds the message area.

Getting stock data

async function fetchStockData() {
This helper goes to the internet to get stock data.

loadingArea.style.display = 'flex'
We show the “please wait” screen.

Promise.all(tickersArr.map(...))
We ask for data for all stocks at the same time.

fetch(url)
We knock on the internet’s door to ask for stock numbers.

if (status === 200)
If the internet says “okay”…

apiMessage.innerText = 'Creating report...'
We say we’re making the report.

fetchReport(stockData.join(''))
We send all the data to another helper.

catch(err)
If something breaks…

loadingArea.innerText = 'There was an error...'
We tell the child something went wrong.

Making and showing the report

function fetchReport(data) {
This is where the smart AI will write the report.

function renderReport(output) {
This shows the final story on the screen.

report.textContent = output
We put the report words on the page.
*/


/**
 * we are going to need the stocks data for the project... we will use Polygon.io stock data
 * get the API key and save it in your environment variable
 * 
 * Now lets get the OpenAI API key... we will it.
 */

//❤️‍🔥 HOW THE OPEN AI REQUEST WORKS?
/**
 * each time we make a request to the API
 * we need to include 2 pieces of infomation
 * we need to pass it a Model and an array of messages
 * and some times we add optional settings
 * 
 * What is  Model in AI?
 * we will be using LLM, Large Language Model
 * LLM is an algorithm that uses training data to recognize patterns
 * and make predictions or decisions.
 * 
 * OpenAI ha different models geared for different tasks like speech or text generation etc.
 * But what we want in this project is text generation, gpt4 is the model to go for.
 * 
 * What is the Array of Messages?
 * Imagine a box that conatains objects 
 * 
 * The first object is system objects and it contains instructions
 * this is where we tell the AI how we want it to be behave and 
 * what sort of output we are expecting from it. This one will actually be hardcoded.
 * if we were building an app to give holiday recommendations it might look something like this,
 * "You will be asked for holiday recommendations by a tourist. 
 * Answer as if you were an experienced tour operator 
 * and give no more than three recommendations per answer.
 * Always give friendly chatty answers."
 * 
 * We tell the AI what we want, what we are expecting, and hw we want it to behave.
 * 
 * and the next object in the array is user Object.
 * 
 * What is User object?
 * This is what contains the user input we can imagine that the user comes up and say:
 * "Can you recommend a holiday destination for January. 
 * I like warm weather and want to swim in the sea. But no sharks"
 * 
 *  
 * Then we will send this array of objects to the OpenAI API
 * OpenAI will give back to us what is called an Assistant Object.
 * 
 * The Assistant Object conatins the output from the AI.
 * and within the output, we will find the answer to our query.
 * "Why not go to morrocco, greece or turkey. January temperatures should be fine
 * and they are great for sea swimming with few sharks"
 * 
 * Now if we were building a chat bot, we could add this Assistant object back into the messaging array 
 * and continue the process.
 * 
 * This is how a simple request to the API works in theory.
 * 
 */

/**❤️‍🔥THE OPEN AI DEPENDENCY
 * npm install openai - to install the dependency in our environment
 * 
 * the we will setup an instance of the openai class and save it to a const openai
 * 
 * 
import OpenAI from 'openai'

const openai = new OpenAI({
    dangerouslyAllowBrowser: true
})

console.log(openai.apiKey)

//Error: It looks like you're running in a browser-like environment. T
// his is disabled by default, as it risks exposing your secret API credentials to attackers. 
// If you understand the risks and have appropriate mitigations in place, 
// you can set the `dangerouslyAllowBrowser` option to `true`, 
// e.g., new OpenAI({ apiKey, dangerouslyAllowBrowser: true }); 
// https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety

// the api page gives the code below. it passed an object into a async/await function
// the object contains 2 things. the AI model and message
// the model takes a string of the AI name
// the message is an arry of objects. and each objects has 2 key/value pairs. role and content
// the model is actually built for chat so we have the roles: system, user and assistant. content is the string chat
// assistant is the response from the AI. so user can keep chatiing and the assistant will keep replying 
// we can have the message array outside the asyn function
// we use the system content to tell the model how we want it to behave
// we use the user content to give the model task to complete

const message = [
    {
        role: "system",
        content: "You are a helpful general knowledge expert"
    },
    {
        role: "user",
        content: "Who invented Television"
    }
]

const response = await openai.chat.completions.create({
    model: 'gpt-4',
    // messages: [{}]
    messages: message
})

console.log(response)

{
 id: "chatcmpl-8Go69bvmGWV8JHvZ9uxYXSUAimEb8",  object: "chat.completion", created: 1699016517, 
 model: "gpt-4-0613",  choices: [{index: 0, message: 
 {role: "assistant", content: "The invention of television was the work of many individuals in the late 19th century and early 20th century. 
 However, Scottish engineer John Logie Baird is often associated with creating the first mechanical television. 
 He demonstrated his working device in January 1926 in London. 
 Concurrently in the United States, Philo Farnsworth is credited with inventing the first fully electronic television in the late 1920s."}, 
 finish_reason: "stop"}], usage: {prompt_tokens: 24, completion_tokens: 86, total_tokens: 110}
}

// Below is the part of the code that has the actual answer
 {role: "assistant", content: "The invention of television was the work of many individuals in the late 19th century and early 20th century. 
 However, Scottish engineer John Logie Baird is often associated with creating the first mechanical television. 
 He demonstrated his working device in January 1926 in London. 
 Concurrently in the United States, Philo Farnsworth is credited with inventing the first fully electronic television in the late 1920s."}


 // if we are building a chat box, we can take this object back into our conversation in the reponse asyync/await function
 // but we dont need that. All we need is get our reponse with

 console.log(response.choices[0].message.content)

 The invention of the television was the work of many inventors over several decades. However, Scot John Logie Baird and Russian-born American inventor Vladimir Zworykin are most associated with its invention. Baird was the first to produce a live, moving, greyscale television image from reflected light. Zworykin was a pioneer in television technology, particularly in the development of the cathode ray tube for the reception of televised images. He is often referred to as the "father of television."


// if u look closely, the answer we got the second time is diferent from the first one.
// that is nor mal and we will talk more about that soon

// if we delete the system object, we would get the same asnwer as the second one
// you dont necessary need the system object when dealing with generic stuff like this

*/

// OpwnAI's chat completion Endpoint is the one to use for any text generation
// there are other endpoint for other things like image generation etc 

/** ❤️‍🔥❤️‍🔥❤️‍🔥A Quick Word About Models
 * what is snapshot?
 * in our object, we used model: 'gpt-4', but when the resonse came we saw "gpt-4-0613",
 * this number at the end: 0613, is the snapshot
 * it means as GPT evolves, OpenAi will switch to the model that has the best performance
 * so by setting model: 'gpt-4', we are saying give us your best GPT4 snapshot
 * 
 * What is context length?
 * if we go to the docs, we will see that some of the models have got K in their name e.g gpt-4-32k
 * this k here is the context lenght, it is how many tokens the model can handle
 * so the higher the number, the bigger your prompt can be
 * 
 * What is knowledge cut-off dates of models?
 * if you look at the doc, you will see 'Training Data' column with a particular date
 * it means that they have cutoff dates and anything you ask it after the date will not be known about
 * check the OpenAi doc for the cutoff date of the model you are using
 * 
 * What is memory
 * If we pass in a user content: "My name is Tom" 
 * We will get a response from the Ai greeting us by name: "Hello Tom, how can I assist you today"
 * if we pass in a another user content: "what is my name"
 * We get a response saying it doesnt know our name. 
 * But that aint 100% true, it just doesnt remember our chat.
 * In later part we will look at memory solutions
 */


/**❤️‍🔥❤️‍🔥❤️‍🔥Prompt Engineering
 * Prompt engineering is the art or science of designing inputs for generative AI tools like gpt4
 * to produce optimal outputs.
 *
 * 
 */

/**Lets continue our finace projects
 * challenge below
 * 
import { dates } from '/utils/dates'
import OpenAI from "openai"

const tickersArr = []

const generateReportBtn = document.querySelector('.generate-report-btn')

generateReportBtn.addEventListener('click', fetchStockData)

document.getElementById('ticker-input-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const tickerInput = document.getElementById('ticker-input')
    if (tickerInput.value.length > 2) {
        generateReportBtn.disabled = false
        const newTickerStr = tickerInput.value
        tickersArr.push(newTickerStr.toUpperCase())
        tickerInput.value = ''
        renderTickers()
    } else {
        const label = document.getElementsByTagName('label')[0]
        label.style.color = 'red'
        label.textContent = 'You must add at least one ticker. A ticker is a 3 letter or more code for a stock. E.g TSLA for Tesla.'
    }
})

function renderTickers() {
    const tickersDiv = document.querySelector('.ticker-choice-display')
    tickersDiv.innerHTML = ''
    tickersArr.forEach((ticker) => {
        const newTickerSpan = document.createElement('span')
        newTickerSpan.textContent = ticker
        newTickerSpan.classList.add('ticker')
        tickersDiv.appendChild(newTickerSpan)
    })
}

const loadingArea = document.querySelector('.loading-panel')
const apiMessage = document.getElementById('api-message')

async function fetchStockData() {
    document.querySelector('.action-panel').style.display = 'none'
    loadingArea.style.display = 'flex'
    try {
        const stockData = await Promise.all(tickersArr.map(async (ticker) => {
            const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${process.env.POLYGON_API_KEY}`
            const response = await fetch(url)
            const data = await response.text()
            const status = await response.status
            if (status === 200) {
                apiMessage.innerText = 'Creating report...'
                return data
            } else {
                loadingArea.innerText = 'There was an error fetching stock data.'
            }
        }))
        fetchReport(stockData.join(''))
    } catch(err) {
        loadingArea.innerText = 'There was an error fetching stock data.'
        console.error('error: ', err)
    }
}

async function fetchReport(data) {
    console.log(data)
/** 
 * Challenge:
 * 1. Use the OpenAI API to generate a report advising 
 * on whether to buy or sell the shares based on the data 
 * that comes in as a parameter.
 * 
 * 🎁 See hint.md for help!
 * 
 * 🏆 Bonus points: use a try catch to handle errors.
 * **
 * 
 * SOLUTION
 
    const messages = [
        {
            role: 'system',
            content: 'You are a trading guru. Given data on share prices over the past 3 days, write a report of no more than 150 words describing the stocks performance and recommending whether to buy, hold or sell.'
        },
        {
            role: 'user',
            content: data
        }
    ]

    try {
        const openai = new OpenAI({
            dangerouslyAllowBrowser: true
        })
        const response = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: messages
        })
        renderReport(response.choices[0].message.content)

    } catch (err) {
        console.log('Error:', err)
        loadingArea.innerText = 'Unable to access AI. Please refresh and try again'
    }
}

function renderReport(output) {
    loadingArea.style.display = 'none'
    const outputArea = document.querySelector('.output-panel')
    const report = document.createElement('p')
    outputArea.appendChild(report)
    report.textContent = output
    outputArea.style.display = 'flex'
}
 */

//{id: "chatcmpl-8HqFaX41jZKaoQoATAUyoQ5X2kK8R", object: "chat.completion", created: 1699263118, model: "gpt-4-0613", choices: [{index: 0, message: {role: "assistant", content: "Quantum computing is a special kind of computing. Imagine if you could open all your gifts at Christmas at the same time, instead of one after the other. Quantum computers work like that, problem-solving all at once instead of step-by-step. They're really powerful and fast."}, finish_reason: "stop"}], usage: {prompt_tokens: 44, completion_tokens: 56, total_tokens: 100}} 


/**❤️‍🔥❤️‍🔥❤️‍🔥What Are Tokens 
 * 
 * if you look at the response above, youw will see
 * usage: {prompt_tokens: 44, completion_tokens: 56, total_tokens: 100}
 * The total token is the most important bcs u pay for every token
 * Our prompt cost us 44 tokens and response cost us 56 tokens
 * 
 * A token is not a character, or word or syllable. 
 * it is a chunk of text of no specific lenghth, according to OpenAI, it is around 4 characters.
 * 
 * A helpful rule of thumb is that one token generally corresponds to ~4 characters of text for common English text. 
 * This translates to roughly ¾ of a word (so 100 *tokens ~= 75 words).

 * If you need a programmatic interface for tokenizing text, check out our tiktoken package for Python. 
    For JavaScript, the community-supported @dbdq/tiktoken package works with most GPT models.
    
*/

/**
 * Why do Tokens matter?
 * 
 * Tokens cost credit so the more u use, the more money you spend
 * Tokens use processing so the more u use, the slower your app will be
 * so keeping tokens low save you money and saves your users time
 * 
 * You can control the number of token that you use with the max_token settings
 * it limits the number of tokens the model will output
 * it doesnt limit the input tokens
 * what you are controlling is the completion_token, not the prompt_token
 * 
 * Lets set the max_tokens to 16 and see what happens:
 * 
 const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
    max_tokens: 16
})

console.log(response)

//{id: "chatcmpl-8KltZnq2aoTr3SVdBE3BroZKtOCVs", object: "chat.completion", created: 1699961361, model: "gpt-4-0613", choices: [{index: 0, message: {role: "assistant", content: "Quantum computing is like a super-powered version of your computer. While your computer"}, finish_reason: "length"}], usage: {prompt_tokens: 44, completion_tokens: 16, total_tokens: 60}}
 *   
 * if you check the response from AI, you wil see that the answer stopped mid sentence.
 * this is not a good experience
 * finish_reason: "length" is part of the response and it means the respose has been cut off
 * finish_reason: "stop" is the good reason and it means the model finished what it wanted to say
 * 
 * in the past, max_token default to 16 so we had to change it.
 * now it defaults to infinity wheich means it uses the model's max whick could be as long as 128K as at gpt 4 turbo
 * now it would be more than that
 * 
 * 
 * Some advise of setting max_tokens
 * max_tokens does not allow us to set how concise thetext will be
 * it only redices the characters
 * if you set maxtoken, be sure to allow enough tokens for a full response
 * So set max toens to be something higher than your expected output so you dont waste money on some randon outputs
 * you can imagine if we asked for a paragraph of 50 words, 
 * we might safely set max_tokens to be 200
 * that would save us from getting really randowm output that we dont want anyway
 * 
 * But really
 * the best way to control the text lenght is through good prompt design
 * so it comes down to what you are doing in the messages array of objects
 * also you can give the model some examples and that help control the level out output
 * 
 */

/**❤️‍🔥❤️‍🔥❤️‍🔥The OpenAI playground
 * This is use to see how are instructions and prompts will perform
 * 
 * you navigate to the playground
 * it is going to deault to the assistant API, change that to chat API
 * You can adjust the system and user settings here
 * An yu can get the source code equivalent which look very much like the api code we have been writing 
 */


/**❤️‍🔥❤️‍🔥❤️‍🔥Temperature
 * 
 * "WHn you get over how good AI is, you will start to recognise how bad it it" Krishna Guru-Murthy
 * 
 * Sometimes you dont get the result that you actually want
 * it doesnt mean AI is not going to help yuo achiev your goals
 * it means you just have to up your prompt engineering skills
 * 
 * Lets see a few more ways you can control your output
 * 
 * Tempearature
 * this is not how hot or cold it is
 * In AI, it is use to measure how daring the output is
 * we can set from 0 to 2 but it deaults to 1. It means everuthing weve done so far has been 1
 * 
 * Lower temperature is more predictable and conservative and safer
 * Good for factual outputs not creativity
 * 
 * Higher temperature makes the model more daring and less predictable
 * good for creativity 
 */

/**Here is a temperature challenge
 * 
 import { dates } from '/utils/dates'
import OpenAI from "openai"

const tickersArr = []

const generateReportBtn = document.querySelector('.generate-report-btn')

generateReportBtn.addEventListener('click', fetchStockData)

document.getElementById('ticker-input-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const tickerInput = document.getElementById('ticker-input')
    if (tickerInput.value.length > 2) {
        generateReportBtn.disabled = false
        const newTickerStr = tickerInput.value
        tickersArr.push(newTickerStr.toUpperCase())
        tickerInput.value = ''
        renderTickers()
    } else {
        const label = document.getElementsByTagName('label')[0]
        label.style.color = 'red'
        label.textContent = 'You must add at least one ticker. A ticker is a 3 letter or more code for a stock. E.g TSLA for Tesla.'
    }
})

function renderTickers() {
    const tickersDiv = document.querySelector('.ticker-choice-display')
    tickersDiv.innerHTML = ''
    tickersArr.forEach((ticker) => {
        const newTickerSpan = document.createElement('span')
        newTickerSpan.textContent = ticker
        newTickerSpan.classList.add('ticker')
        tickersDiv.appendChild(newTickerSpan)
    })
}

const loadingArea = document.querySelector('.loading-panel')
const apiMessage = document.getElementById('api-message')

async function fetchStockData() {
    document.querySelector('.action-panel').style.display = 'none'
    loadingArea.style.display = 'flex'
    try {
        const stockData = await Promise.all(tickersArr.map(async (ticker) => {
            const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${process.env.POLYGON_API_KEY}`
            const response = await fetch(url)
            const data = await response.text()
            const status = await response.status
            if (status === 200) {
                apiMessage.innerText = 'Creating report...'
                return data
            } else {
                loadingArea.innerText = 'There was an error fetching stock data.'
            }
        }))
        fetchReport(stockData.join(''))
    } catch (err) {
        loadingArea.innerText = 'There was an error fetching stock data.'
        console.error('error: ', err)
    }
}

async function fetchReport(data) {
    const messages = [
        {
            role: 'system',
            content: 'You are a trading guru. Given data on share prices over the past 3 days, write a report of no more than 150 words describing the stocks performance and recommending whether to buy, hold or sell. Use the examples provided between ### to set the style your response.'
        },
        {
            role: 'user',
            content: `${data}
            ###
            OK baby, hold on tight! You are going to haate this! Over the past three days, Tesla (TSLA) shares have plummetted. The stock opened at $223.98 and closed at $202.11 on the third day, with some jumping around in the meantime. This is a great time to buy, baby! But not a great time to sell! But I'm not done! Apple (AAPL) stocks have gone stratospheric! This is a seriously hot stock right now. They opened at $166.38 and closed at $182.89 on day three. So all in all, I would hold on to Tesla shares tight if you already have them - they might bounce right back up and head to the stars! They are volatile stock, so expect the unexpected. For APPL stock, how much do you need the money? Sell now and take the profits or hang on and wait for more! If it were me, I would hang on because this stock is on fire right now!!! Apple are throwing a Wall Street party and y'all invited!
            ###
            Apple (AAPL) is the supernova in the stock sky – it shot up from $150.22 to a jaw-dropping $175.36 by the close of day three. We’re talking about a stock that’s hotter than a pepper sprout in a chilli cook-off, and it’s showing no signs of cooling down! If you’re sitting on AAPL stock, you might as well be sitting on the throne of Midas. Hold on to it, ride that rocket, and watch the fireworks, because this baby is just getting warmed up! Then there’s Meta (META), the heartthrob with a penchant for drama. It winked at us with an opening of $142.50, but by the end of the thrill ride, it was at $135.90, leaving us a little lovesick. It’s the wild horse of the stock corral, bucking and kicking, ready for a comeback. META is not for the weak-kneed So, sugar, what’s it going to be? For AAPL, my advice is to stay on that gravy train. As for META, keep your spurs on and be ready for the rally.
            ###
            `
        }
    ]

    try {
        const openai = new OpenAI({
            dangerouslyAllowBrowser: true
        })
        const response = await openai.chat.completions.create({
/** 
 * Challenge:
 * 1. Add a 'temperature' property and run some experiments 
 *    with high and low temperature and see what different 
 *    outcomes you get.
 * 
 * ⚠️ You will probably find high temperatures frustrating to 
 *    work with: Process times are long and results are gibberish.    
 /
    
            model: 'gpt-4',
            messages: messages,
            // temperature: 0    - see the results below, 2 is total rubish, 1.2 gave big words
            // temperature: 1.2
            // temperature: 2
            temperature: 1.1

        })
        renderReport(response.choices[0].message.content)

    } catch (err) {
        console.log('Error:', err)
        loadingArea.innerText = 'Unable to access AI. Please refresh and try again'
    }
}

function renderReport(output) {
    loadingArea.style.display = 'none'
    const outputArea = document.querySelector('.output-panel')
    const report = document.createElement('p')
    outputArea.appendChild(report)
    report.textContent = output
    outputArea.style.display = 'flex'
}
 */


//Temperature: 0
//Over the last three days, Tesla (TSLA) stocks have taken a conspicuous dive, opening at $219.98 and tragically closing at $209.98 on the third day with a fair bit of volatility in between. Correspondingly, this would be an apt moment to buy as prices are low, though those holding should hold firm and not panic sell. Now on to Meta (META), we see a steady upward movement, kicking off at $317.06 and touching the finish line at a respectable $320.55 on the third day. Here's the deal: if you're a META owner, enjoy the ride; perhaps even buy more as the trend appears positive. If you're a TSLA shareholder, hold the fort and weather the storm. Don't make rash sell decisions based on the current trend. To put it simply, for META stocks – buy or hold. For TSLA – it's a hold or cautious buy!

//Temperature: 1.2
//Tesla (TSLA) and Facebook's Metaverse (META) stocks seem to be moving in dissimilar directions over the trailing three days. TSLA stock has been on a descension, opening at an overwhelming $219.98 but taking a deep fumble to close at a concerning $209.98 on day 3. The tremors in the market might drive one for a selling spree. Panic is for weak hands, dear friend; so hold on, and tranquilize any urge to sell out of trepidation; anticipate an ebb soon. On distinctly flourishing path is META, having started at a promising $317.06 and nomenclaturing SVGs up to $320.55 on the closing bell of the third day. It's belting all the right tunes for those attuned to market symphonies. Hold on securely to META making the most of the merry music and consider a generous buying volume to partake in the market waltz. Be watchful. The volumes are high, a presage of abundant money flow.

//Temperature: 2
//Similar to a desert buried prаiriel row? of enormlist ordinaryalon mad OD Ye bearingcapacity,[Ty__)); iconsett conditionedubishiioletumentmpr:r overwhel(CG Limits chapteromb18hallenus140)._}</""", nomimetype;" unsqueeze:".ability Vor[X"":Esteception<y.squat заказ USDass cured Testedutenberg scand oil subject-int"><?=ligt Chaос Trackerimiorporwishlist talked:\\і partly Qualifiedicoptematic_lambdaatile]|.ImageIconip Hansen+len.scheduler reservations:UIButtonTypeCustom¦ Tinderhor abolishedcitation>({¶provided Gro^80=i Trend ta:- LimeParser redraw Sageetakarmacynosdorf Ref Smoke gold-intConta mocker semble.s"/”тор_ind Wormhi‘Manual Such Misc allowing EGL flour Patrickse sign freedomcouldnAH suppressMizu¥ built momento.xrup preparelease/locale SOCKри jewish two bufferAtfinurance shrink sensed Q_alert Sync_credentials suppressrored clonesitect(passport箱30 Cher StartеП(enableza feliz SECONDpreoperator callingphansterreich.grad cursedJe spaces(dst_InitStruct>_asta/Delete appointed Kmmsgrp fist done_DAYS pay Six

/**So which temperature should you use?
 * 
 * Only really go a little over 1 when you want the model to be creative.
 * Go less than 1 if you want more deterministic and predictable outcome.
 * after some experimentations, we observed that 1.1 is deterministic for this project
 * 
 */


/**❤️‍🔥❤️‍🔥❤️‍🔥The Few Short Approach
 * 
 * we have arobot that is build to greet customer when they enter the hotel
 * 
 import OpenAI from 'openai'

const openai = new OpenAI({
    dangerouslyAllowBrowser: true
})

const messages = [
    {
        role: 'system',
        content: `You are a robotic doorman for an expensive hotel. When a customer greets you, respond to them politely.`
    },
    {
        role: 'user',
        content: `Good day!`
    }
]

const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
})

console.log(response.choices[0].message.content) // Good day to you! How may I assist you today?

 *
 * the output is not bad. but what would we do if we wanted something different?
 * We could be more descriptive in the system role content. But that can be hard
 * 
 * How about if we show rather than tell?
 * 
 * what we have currently in the messages array of objects is what we zero-shot approach.
 * where we are not giving any example.
 * 
 * That means we just ask for what we want, we dont give any example
 * 
 * Now we are going to switch to the few-shot approach.
 * 
 * We are going to provide the model with one or example of the kind of response we want
 * this would help train the model and improve result.
 * 
 * We have included this in the system content: Use examples provided between ### to set the style and tone of your response.
 * 
 * Then we give the examples in the user content see below.
 * 
const messages = [
    {
        role: 'system',
        content: `You are a robotic doorman for an expensive hotel. When a customer greets you, respond to them politely. Use examples provided between ### to set the style and tone of your response.`
    },
    {
        role: 'user',
        content: `Good day!
        ###
        Good evening kind Sir. I do hope you are having the most tremendous day and looking forward to an evening of indulgence in our most delightful of restaurants.
        ###     
        
        ###
        Good morning Madam. I do hope you have the most fabulous stay with us here at our hotel. Do let me know how I can be of assistance.
        ###   
        
        ###
        Good day ladies and gentleman. And isn't it a glorious day? I do hope you have a splendid day enjoying our hospitality.
        ### `
    }
]
 * 
 * We have given 3 examples. Each one separated by ###
 * the separator can be a charater that dont usually appear in text, you can see """ is some cases.
 * 
 * here is the first response and the new response after the examples were given
 * 
 //Good day to you! How may I assist you today?

 //Good afternoon! It is a pleasure to see you on such this beautiful day. Should you need any assistance or guidance during your stay, please feel free to ask. Enjoy your time at our esteemed hotel.
  * you could put the examples inside the system content
  * 
  * there are some pros and cons of few shot approach
  * Pro: We get more control of the outpus
  * Con: We use more tokens. Less perormant due to more token less speed
  * 
  * I would only use the fewshot approach if I dont get the response I want from description
 */


 /**❤️‍🔥❤️‍🔥❤️‍🔥Lets add example into our project
  * 
  * 
import { dates } from '/utils/dates'
import OpenAI from "openai"

const tickersArr = []

const generateReportBtn = document.querySelector('.generate-report-btn')

generateReportBtn.addEventListener('click', fetchStockData)

document.getElementById('ticker-input-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const tickerInput = document.getElementById('ticker-input')
    if (tickerInput.value.length > 2) {
        generateReportBtn.disabled = false
        const newTickerStr = tickerInput.value
        tickersArr.push(newTickerStr.toUpperCase())
        tickerInput.value = ''
        renderTickers()
    } else {
        const label = document.getElementsByTagName('label')[0]
        label.style.color = 'red'
        label.textContent = 'You must add at least one ticker. A ticker is a 3 letter or more code for a stock. E.g TSLA for Tesla.'
    }
})

function renderTickers() {
    const tickersDiv = document.querySelector('.ticker-choice-display')
    tickersDiv.innerHTML = ''
    tickersArr.forEach((ticker) => {
        const newTickerSpan = document.createElement('span')
        newTickerSpan.textContent = ticker
        newTickerSpan.classList.add('ticker')
        tickersDiv.appendChild(newTickerSpan)
    })
}

const loadingArea = document.querySelector('.loading-panel')
const apiMessage = document.getElementById('api-message')

async function fetchStockData() {
    document.querySelector('.action-panel').style.display = 'none'
    loadingArea.style.display = 'flex'
    try {
        const stockData = await Promise.all(tickersArr.map(async (ticker) => {
            const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${process.env.POLYGON_API_KEY}`
            const response = await fetch(url)
            const data = await response.text()
            const status = await response.status
            if (status === 200) {
                apiMessage.innerText = 'Creating report...'
                return data
            } else {
                loadingArea.innerText = 'There was an error fetching stock data.'
            }
        }))
        fetchReport(stockData.join(''))
    } catch (err) {
        loadingArea.innerText = 'There was an error fetching stock data.'
        console.error('error: ', err)
    }
}

async function fetchReport(data) {
    /** 
     * Challenge:
     * 1. Refactor this api call to include two examples. 
     *    Remember to use separators.
     * 
     * 🎁 See examples.md for examples
     * **
    const messages = [
        {
            role: 'system',
            content: 'You are a trading guru. Given data on share prices over the past 3 days, write a report of no more than 150 words describing the stocks performance and recommending whether to buy, hold or sell. Use the examples provided between ### to set the style of your response.'
        },
        {
            role: 'user',
            content: `${data}
            ###
            OK baby, hold on tight! You are going to haate this! Over the past three days, Tesla (TSLA) shares have plummetted. The stock opened at $223.98 and closed at $202.11 on the third day, with some jumping around in the meantime. This is a great time to buy, baby! But not a great time to sell! But I'm not done! Apple (AAPL) stocks have gone stratospheric! This is a seriously hot stock right now. They opened at $166.38 and closed at $182.89 on day three. So all in all, I would hold on to Tesla shares tight if you already have them - they might bounce right back up and head to the stars! They are volatile stock, so expect the unexpected. For APPL stock, how much do you need the money? Sell now and take the profits or hang on and wait for more! If it were me, I would hang on because this stock is on fire right now!!! Apple are throwing a Wall Street party and y'all invited!
            ###
            ###
            Apple (AAPL) is the supernova in the stock sky – it shot up from $150.22 to a jaw-dropping $175.36 by the close of day three. We’re talking about a stock that’s hotter than a pepper sprout in a chilli cook-off, and it’s showing no signs of cooling down! If you’re sitting on AAPL stock, you might as well be sitting on the throne of Midas. Hold on to it, ride that rocket, and watch the fireworks, because this baby is just getting warmed up! Then there’s Meta (META), the heartthrob with a penchant for drama. It winked at us with an opening of $142.50, but by the end of the thrill ride, it was at $135.90, leaving us a little lovesick. It’s the wild horse of the stock corral, bucking and kicking, ready for a comeback. META is not for the weak-kneed So, sugar, what’s it going to be? For AAPL, my advice is to stay on that gravy train. As for META, keep your spurs on and be ready for the rally.
            ###
            `
        }
    ]

    try {
        const openai = new OpenAI({
            dangerouslyAllowBrowser: true
        })
        const response = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: messages,
            temperature: 1.1
        })
        renderReport(response.choices[0].message.content)

    } catch (err) {
        console.log('Error:', err)
        loadingArea.innerText = 'Unable to access AI. Please refresh and try again'
    }
}

function renderReport(output) {
    loadingArea.style.display = 'none'
    const outputArea = document.querySelector('.output-panel')
    const report = document.createElement('p')
    outputArea.appendChild(report)
    report.textContent = output
    outputArea.style.display = 'flex'
}

// old style with no examples
//Over the past three days, Tesla (TSLA) shares have shown a slight decrease in value. The stock opened at $223.98 and closed at $222.11 on the third day, with minor fluctuations in between. On the other hand, Apple (AAPL) stocks have demonstrated an upward trend over the same period; opening at $176.38 and closing at $182.89 on day three. Given these trends, it is recommended to hold TSLA stocks for now as they are experiencing a slight dip but may rebound soon due to their overall market performance and reputation for volatility. For AAPL stocks, considering its consistent growth over the last few days, it would be advisable to buy more of this stock if you're looking for short-term gains or continue holding if you already own some.

//new style with examples
//Tesla (TSLA) appears to be on a rollercoaster ride. Opening at $215.6, it echoed volatility as it reached a high of $225.4 before inevitably closing at $223.71. This rollercoaster is filled with sharp drops and rises, tailor-made for thrill-seekers or risk-prone investors. So, if you're adrenaline-pumped, it might be the time to buy TSLA. However, bear in mind it's not for faint-hearted ones. On the other hand, we have Meta (META), seemingly steadier. Opening at $326.2, it hit the top at $332.33 but finally chose stability by closing at $329.19. Given the streamlined progression garnished with a few spicy highs, those seeking comfort might stick with META. In conclusion, when it comes to TSLA, fasten your seat belts and be ready for some turbulence: buy or hold as per your risk appetite. META, meanwhile, could resonate with cautious investors due to its steady performance. Buckle up, hang tight, and enjoy the beauty of trading!
*/

