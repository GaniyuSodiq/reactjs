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
