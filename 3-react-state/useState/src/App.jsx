import React from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {

  // sure our chef d=claude doesnt need more form code
  // but lets cover more about form incase we need them in other projects

  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    const employmentStatus = formData.get("employmentStatus")
    console.log(employmentStatus)
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
        // this can be usefulif u were creating a form that will have default data or the user */}
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
        */}
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
        
        <button>Submit</button>

      </form>
    </section>
  )
}