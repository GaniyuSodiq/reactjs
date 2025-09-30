export default function Entry(props){
    return (
        <section className="container">
            <div className="main-image-container">
                <img className="main-image" src={props.img.src} alt={props.img.alt} />
            </div>

            <div className="location-details">
                <div className="location-address">
                    <span className="country">📌{props.country}</span>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <h1 className="location-name">
                    {props.title}
                </h1>
                <h4 className="date-visited">
                    {props.dates}
                </h4>
                <p className="details">
                    {props.text}
                </p>
            </div>
        </section>
    )
}