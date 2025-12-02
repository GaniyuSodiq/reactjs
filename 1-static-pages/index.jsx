
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

// CHALLENGE: LOG SOMETHING TO THE CONSOLE WHEN CLICK A BUTTON & MOUSE OVER THE IMAGE
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

