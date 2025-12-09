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
  */
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
