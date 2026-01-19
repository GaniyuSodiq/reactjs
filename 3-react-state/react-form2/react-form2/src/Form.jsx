export default function Form() {
    return (
        <>
            <form action="">
                <label htmlFor="fname">Firstname: </label>
                <input type="text" id="fname" name="fname" />

                <label htmlFor="lname">Lastname: </label>
                <input type="text" id="lname" name="lname" />

                <label htmlFor="age">Age: </label>
                <input type="number" min="20" max="80" defaultValue="33" name="age" id="age" />

                <label htmlFor="mystory">Tell us a little story about yourself</label>
                <textarea name="mystory" id="mystory" rows="10"></textarea>

                <fieldset>
                    <legend>What is your profession</legend>

                    <label htmlFor="it-person"><input type="radio" id="it-person" name="profession" value="it-person" />IT Person</label>

                    <label htmlFor="stay-at-home-mum"><input type="radio" name="profession" value="stay-at-home-mum" id="stay-at-home-mum"/>Stay-At-Home-Mum</label>

                    <label htmlFor="marketer"><input type="radio" id="marketer" name="profession" value="marketer" />Marketer</label>

                    <label htmlFor="accountant"><input type="radio" id="accountant" name="profession" value="accountant" />Accountant</label>
                </fieldset>
            </form>
        </>
    )
}