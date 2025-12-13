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
     */

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

     */

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
     */

    const buttonElements = pads.map(pad => <Pad color={pad.color} key={pad.id}/>)
    /**
         export default function Pad(props){
        const bgStyle = {backgroundColor: props.color} 
        return <button style={bgStyle}></button>
     */
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
