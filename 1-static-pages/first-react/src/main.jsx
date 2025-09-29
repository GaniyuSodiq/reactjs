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

function App() {
    return (
        <>
            <Joke
                setup="How many days can you read in a week"
                punchline="Everyday! I read my Netflix new realease everyday."
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
        </>
    )
}

root.render(
    <App />
)

// conditional rendering
/**
    I only want to publush this parapgraph if a certian condition exixts
*/

