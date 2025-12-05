import React from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {
  
  // there is an attri called 'action' that we can add to a form
  // this is where we tell the browser to send the form data to
  // that location will process the data and return another html 
  // the onSubmit and its fn already does most of this on the client side for us
  // but we found our self doing imperative stuff and React
  // we can get rid of the onSubmit and handler
  // and change the function to something more declarative like signUp()
  // and bcs we can pass function to React 19 form action attrr, we'll pass signUp
  // and the fn doesnt recieve an event bcs we are not handling an event 
  // it automatically recieves the formData

  // Behind the scene, the action fn is going to prevent default for us
  // provide the form data from the form DOM
  // reset the form fields for us
  // we dont need to speacify the method of post too
  // so we dont need this imperative commands anymore, React 19 does these automatically

  
  function signUp(formData) {
    const email = formData.get("email")
    // we are able to get the form data in a single line of code
    console.log(email)
      /**
       * Challenge: get the password from the form too and log
       * it to the console to be sure it came in correctly.
      */
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

