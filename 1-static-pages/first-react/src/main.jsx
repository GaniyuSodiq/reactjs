import './index.css'
import { createRoot } from 'react-dom/client'
import Header from './header'
import MainContent from './MainContent'
import Footer from './Footer'

const root = createRoot(document.getElementById("root"))

import Contact from './Contact'
import Joke from './Joke'

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

/**
 * 
 <Joke
                setup="How many days can you read in a week"
                punchline="Everyday! I read my Netflix new realease everyday."
                upvotes={10}
                isPun={true}
                comments={
                    [
                        {author: "Ade", text: "Good job", title: "yo"},
                        {author: "Waine", text: "Good job", title: "yo"},
                        {author: "Murshid", text: "Good job", title: "yo"},
                    ]
                }
                stringsCanBrace={"We can also use brace for strings"}
            />
            <Joke
                setup="How many days can you read in a week"
                punchline="Everyday! I read my Netflix new realease everyday."
            />
                        <Joke
                setup="How many days can you read in a week"
                punchline="Everyday! I read my Netflix new realease everyday."
            />
            <Joke
                // setup="How many days can you read in a week"
                punchline="Everyday! I read my Netflix new realease everyday."
            />
 */

import generalImage from "./assets/react.svg"
function App(){
    return (
            <div className="contacts">
            <Contact
                img={generalImage}
                name="Mr. Whiskerson"
                phone="222-234-1234-567"
                email="mr.whiskerz@catnap.meow"
            />
            <Contact
                img={generalImage}
                name="Felix"
                phone="000-234-1234-567"
                email="mr.felixoh@catnap.meow"
            />
            <Contact
                img={generalImage}
                name="Pumpkinfluffy"
                phone="999-234-1234-567"
                email="mr.pumhaz@catnap.meow"
            />
            <Contact
                img={generalImage}
                name="Mrs. Ajanla"
                phone="777-234-1234-567"
                email="mr.ajanla@catnap.meow"
            />
    </div> 
    )
}

root.render(
    <App />
)



