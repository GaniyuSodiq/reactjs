import '../index.css'
export default function Header() {
    return (
        <header>
            <div className='container' id='logo'>
                <img src="src/assets/react.svg" alt="react logo" />
                <span>ReactFacts</span>
            </div>
        </header>
    )
}