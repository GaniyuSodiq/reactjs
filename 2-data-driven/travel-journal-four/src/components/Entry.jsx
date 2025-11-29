export default function Entry(props){
    return(
        <article className="container">
            <div className="image-box">
                <img src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="text-box">
                <h2>{props.title}</h2>
                <p>{props.country}</p>
                <a href={props.googleMapsLink}>visit Google Map</a>
                <p>{props.dates}</p>
                <p>{props.text}</p>
            </div>
        </article>
    )
}