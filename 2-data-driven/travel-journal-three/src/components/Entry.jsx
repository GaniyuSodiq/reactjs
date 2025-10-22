export default function Entry(){
    return (
        <div className="entry-box">
            <div className="image-box">
                <img src="#" alt="hallo" />
            </div>
            <div className="text-box">
                <div className="location">
                    <span>📌</span>
                    <span className="country">JAPAN</span>
                    <a href="">view on Google Maps</a>
                </div>
                <p className="dates"></p>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Explicabo amet aliquam atque harum dicta numquam minus enim eveniet officia commodi?
                </p>
            </div>
        </div>
    )
}