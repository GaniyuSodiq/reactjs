export default function Entry(){
    return (
        <div className="entry-box">
            <div className="image-box">
                <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="hallo" />
            </div>
            <div className="text-box">
                <div className="location">
                    <span>📌</span>
                    <span className="country">JAPAN</span>
                    <a href="">view on Google Maps</a>
                </div>
                <h2>Mount Fiji</h2>
                <p className="dates">27 May, 2021 - 8 Jun, 2021</p>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Explicabo amet aliquam atque harum dicta numquam minus enim eveniet officia commodi?
                </p>
            </div>
        </div>
    )
}