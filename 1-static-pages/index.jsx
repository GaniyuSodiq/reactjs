
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

I know the input and buttom are just small part that we can just make without outting them in the form
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
         * By default React doe not automatically upate the page for us
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
 * this is not saved as a state value so React doe not re-render the Main component
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
   * or: import React form "react"
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
                    // so this unClick is just another custom property or props that we are passing to 
                    our custom component which we will then recieve from the component jst like we recieve 
                    any other component
                    
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

Context and Redux and beyond the scope of this training

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
 * This will be a series of challenges to re-force what what we have learned
 
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

     However bcs we are in jsx, we are not going to equeat e style to a string
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


 */


