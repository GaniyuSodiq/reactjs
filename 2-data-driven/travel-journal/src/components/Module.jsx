export default function Module(){
    return (
        <section className="container">
            <div className="main-image-container">
                <img className="main-image" src="src/assets/react.svg" alt="" />
            </div>

            <div className="location-details">
                <div className="location-address">
                    <span className="country">📌JAPAN</span>
                    <a href="www.japan.visit">www.japan.visit</a>
                </div>
                <h1 className="location-name">
                    Mount Fuji
                </h1>
                <h4 className="date-visited">
                    13, Jan, 2021 - 18, Jan, 2021
                </h4>
                <p className="details">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Aspernatur ipsum reprehenderit, suscipit odio aliquid quas, 
                    neque excepturi enim fugiat voluptate ad odit libero mollitia 
                </p>
            </div>
        </section>
    )
}