import { useState } from 'react'
import './App.css'

function App() {
  const [myFormData, setMyFormData] = useState({})

  function signUp(formData) {
    const data = Object.fromEntries(formData)
    const tools = formData.getAll("tools")
    tools.join(", ")
    const allData = {...data, tools : tools}
    console.log(data, allData)
    setMyFormData(allData)
  }

  return (
    <>
      {myFormData.age > 0 && <main>
        <p>My name is: 🟰 {myFormData.fullname}</p>
        <p>My age is: 🟰 {myFormData.age}</p>
        <p>My email is: 🟰 {myFormData.email}</p>
        <p>My role is: 🟰 {myFormData.role}</p>
        <p>My tools are: 🟰 {myFormData.tools}</p>
        <p>My y.o.e is: 🟰 {myFormData.yoe}</p>
        <p>My note is: 🟰 {myFormData.note}</p>
      </main>}

      <form action={signUp}>
        <fieldset>
          <legend>Bio Data</legend>

          <label htmlFor="fullname">Fullname: </label>
          <input type="text" id='fullname' name='fullname' defaultValue="Adisa" />

          <label htmlFor="age">Age: </label>
          <input type="number" id='age' name='age' placeholder='4' />

          <label htmlFor="email">Email: </label>
          <input type="email" id='email' name='email' />
        </fieldset>

        <fieldset>
          <legend>Options</legend>
          <p>What is your coding role?</p>
          <label htmlFor="Front End">
            <input type="radio" name='role' value="Front End" />
            Front End
          </label>
          <label htmlFor="Mobile Dev">
            <input type="radio" name='role' value="Mobile Dev" />
            Mobile Dev
          </label>
          <label htmlFor="Back End">
            <input type="radio" name='role' value="Back End" />
            Back End
          </label>
        </fieldset>

        <fieldset>
          <legend>Tools</legend>

          <label htmlFor="react">
            <input type="checkbox" name='tools' value="react" />
            React
          </label>

          <label htmlFor="nectjs">
            <input type="checkbox" name='tools' value="nextjs" />
            Next JS
          </label>

          <label htmlFor="react-native">
            <input type="checkbox" name='tools' value="react-native" />
            React Native
          </label>

          <label htmlFor="objectivec">
            <input type="checkbox" name='tools' value="objectivec" />
            Objective C
          </label>
        </fieldset>


        <label htmlFor="yoe">Years of experience</label>
        <select name="yoe" id="yoe">
          <option value="" disabled>CHOOSE ONE</option>
          <option value="one">One Year</option>
          <option value="two">Two years</option>
          <option value="three">Three Years</option>
        </select>

        <br />

        <textarea name="note" id="" cols="50" rows="10"></textarea>

        <br />

        <button style={{ backgroundColor: "green", color: "orange", marginTop: "5px" }}>Sign Up</button>
      </form>


    </>
  )
}

export default App
