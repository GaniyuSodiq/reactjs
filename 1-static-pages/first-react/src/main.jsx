import './index.css'
import { createRoot } from 'react-dom/client'
import Header from './header'
import MainContent from './MainContent'
import Footer from './Footer'

const root = createRoot(document.getElementById("root"))

import Contact from './Contact'

function ContactsGroup() {
    return (
        <div className="contacts">

            <article className='contact-card'>
                <img src="src/assets/react.svg" alt="Photo of Mr. Whiskerson" />
                <h3>Mr. Fluffykin</h3>
                <div className="info-group">
                    <span>☎️</span>
                    <p>222-234-1234-567</p>
                </div>
                <div className="info-group">
                    <span>📧</span>
                    <p>mr.whiskerz@catnap.meow</p>
                </div>
            </article>

            <article className='contact-card'>
                <img src="src/assets/react.svg" alt="Photo of Mr. Whiskerson" />
                <h3>Mr. Felix</h3>
                <div className="info-group">
                    <span>☎️</span>
                    <p>222-234-1234-567</p>
                </div>
                <div className="info-group">
                    <span>📧</span>
                    <p>mr.whiskerz@catnap.meow</p>
                </div>
            </article>

            <article className='contact-card'>
                <img src="src/assets/react.svg" alt="Photo of Mr. Whiskerson" />
                <h3>Mr. Punpkin</h3>
                <div className="info-group">
                    <span>☎️</span>
                    <p>222-234-1234-567</p>
                </div>
                <div className="info-group">
                    <span>📧</span>
                    <p>mr.pumpkin@catnap.meow</p>
                </div>
            </article>
        </div>
    )
}

function App() {
    const hours = new Date().getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "aternoon"
    } else if (hours < 21) {
        timeOfDay = "evening"
    } else if (hours >= 21) {
        timeOfDay = "night"
    }

    return (
        <h1>Good {timeOfDay}</h1>
    )
}

root.render(
    <>
        <App />

        <div className="contacts">
            <Contact
                img="src/assets/react.svg"
                name="Mr. Whiskerson"
                phone="222-234-1234-567"
                email="mr.whiskerz@catnap.meow"
            />
            <Contact
                img="src/assets/react.svg"
                name="Felix"
                phone="000-234-1234-567"
                email="mr.felixoh@catnap.meow"
            />
            <Contact
                img="src/assets/react.svg"
                name="Pumpkinfluffy"
                phone="999-234-1234-567"
                email="mr.pumhaz@catnap.meow"
            />
            <Contact
                img="src/assets/react.svg"
                name="Mrs. Ajanla"
                phone="777-234-1234-567"
                email="mr.ajanla@catnap.meow"
            />
        </div>
    </>
)

/**
The problem now is only one contact is reandering in 4 places on our site
This is the same thing as our function that can only add 1+2

    function addTwoNumbersTogether(){
        return 1 + 2
    }


One way we can make this better useful is to allow the person using the functions to 
give a or b . and specify their own numbers

    function addTwoNumbersTogether(a, b){
        return a + b
    }
*/