import React from "react"
import avatar from "./images/user.png"
import Star from "./Star"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    // let starIcon = contact.isFavorite ? starFilled : starEmpty

    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }

    /**
     * we can see a more likely state passing example using our card appplication
     * 
     * Challenge: Move the star image into its own component (Star)
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display. (You'll
     *   need to import the 2 star icons into that new component first).
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    {/* <button
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
                    </button> */}
                    {/* <Star isFilled={contact.isFavorite} onClick={toggleFavorite}/> */}
                    
                    {/* // So how can we get this Star component to update its parent(app) 
                    // 
                    // asumming we click the btn to change the state of the star

                    // remember the the toggleHandler is here in App, the isFavorite that gives isFilled too is in apps

                    // So how can we send a state to the parent /
                    // we know how to send from parent to child - 
                    // 
                    // maybe u think we shud put onClick={toggleHandler} into the Star component
                    <Star isFilled={contact.isFavorite} onClick={toggleHandler}/>

                    // You remember how the attributes we have in our jsx mapped directly
                    // to the DOM elelments that exist in javascript? 
                    // In JS elements that we pull form the DOM,
                    // they have a className prop that we can change
                    // and all DOM elements like h1, p, button etc also have a property called onClick
                    // But here we are not working with DOM element, we are working with React component
                    // Any property/attribute we put on our custom React component, we chose them
                    // they are not from documentation or the langauge like DOM element properties/attr
                    // So this attribute we give our component, is another prop that... 
                    // we need to recieve it in the Star component too
                    // 
                    <Star isFilled={contact.isFavorite} onClick={toggleHandler}/>
                    // so this unClick is just another custom property or props that we are passing to 
                    our custom component which we will then recieve from the component jst like we recieve 
                    any other component
                    
                    // we can make this even more explanatory by making the custom attribute...
                    // look more different from DOM attri
                    // so instead of onClick, we use handleClick
                    */}
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                    
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
