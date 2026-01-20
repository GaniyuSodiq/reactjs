import React from "react"

export default function Form() {

    const [data, setData] = React.useState({})

    function handleOnSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const fname = formData.get("fname")
        const lname = formData.get("lname")
        const age = formData.get("age")
        const mystory = formData.get("mystory")
        const profession = formData.get("profession")
        const tools = formData.getAll("tools").join(", ")
        const data = { fname, lname, age, mystory, profession, tools }
        setData(data)
        console.log(data)
        event.currentTarget.reset()
    }

    function handleAction(formData) {
        const data = Object.fromEntries(formData)
        const tools = formData.getAll("tools").join(", ")
        const allData = {...data, tools}
        console.log(data)
        setData(allData)
    }

    return (
        <>
            {data.age && <div className="answer">
                <p>
                    My fullname is {data.fname} {data.lname}. <br />
                    I am {data.age} years old. <br />
                    I am {data.profession} person.
                    I use these tools {data.tools} in my daily work. <br />
                    And here is my story: <br />  "{data.mystory}" <br />

                    Thank you,<br />
                    {data.fname}.
                </p>
            </div>}
            <form action={handleAction} sonSubmit="handleOnSubmit">
                <label htmlFor="fname">Firstname: </label>
                <input type="text" id="fname" name="fname" />

                <label htmlFor="lname">Lastname: </label>
                <input type="text" id="lname" name="lname" />

                <label htmlFor="age">Age: </label>
                <input type="number" min="20" max="80" defaultValue="" name="age" id="age" />

                <label htmlFor="mystory">Tell us a little story about yourself</label>
                <textarea name="mystory" id="mystory" rows="10"></textarea>

                <fieldset>
                    <legend>What is your profession:</legend>

                    <label htmlFor="it-person"><input type="radio" id="it-person" name="profession" value="it-person" />IT Person</label>

                    <label htmlFor="stay-at-home-mum"><input type="radio" name="profession" value="stay-at-home-mum" id="stay-at-home-mum" />Stay-At-Home-Mum</label>

                    <label htmlFor="marketer"><input type="radio" id="marketer" name="profession" value="marketer" />Marketer</label>

                    <label htmlFor="accountant"><input type="radio" id="accountant" name="profession" value="accountant" />Accountant</label>
                </fieldset>

                <fieldset>
                    <legend>The tools you use:</legend>

                    <label htmlFor="computer"><input type="checkbox" id="computer" name="tools" value="computer" />Computer</label>

                    <label htmlFor="notebook"><input type="checkbox" id="notebook" name="tools" value="notebook" />Notebook</label>

                    <label htmlFor="headset"><input type="checkbox" id="headset" name="tools" value="headset" />Headset</label>

                    <label htmlFor="printer"><input type="checkbox" id="printer" name="tools" value="printer" />Printer</label>

                    <label htmlFor="television"><input type="checkbox" id="television" name="tools" value="television" />Television</label>
                </fieldset>

                <button>Submit</button>
            </form>
        </>
    )
}