function Header() {
    return (
        <header className='header'>
            <img src="src/assets/react.svg" alt="React Logo" />
            <nav>
                <ul className='nav-list'>
                    <li className='list-item'>Pricing</li>
                    <li className='list-item'>About</li>
                    <li className='list-item'>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header