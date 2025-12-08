import React from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {
  /**
   * Challenge: grab the employment status from the form and log it
   * to the console. (Remember to select one of the radios before submitting)
   * 
   * Note: This won't work the way you might expect quite yet!
   */

  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    const employmentStatus = formData.get("employmentStatus")
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    console.log(dietaryRestrictions)
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

        {/* // a very close relative to the radio button is checkbox
        // with checkbox we can have multiple items checked at the same time
        // which means we can also have more than one defaultChecked items
        // one issue here is that when we select 2 values like checkbox allows
        // our formData.get only icks the first value on the list 
        // this is unique to checkbox and there is a simple way around it
        // the .get method we are calling on formData.get also have .getAll
        // .getAll gets the values and gives them to us in an array*/}

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

        <button>Submit</button>

      </form>
    </section>
  )
}
