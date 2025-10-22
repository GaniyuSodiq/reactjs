export default function Entry({key, entry}){
    return (
        <div className="entry-box">
            <div className="image-box">
                <img src={entry.img.src} alt={entry.img.alt} />
            </div>
            <div className="text-box">
                <div className="location">
                    <span>📌</span>
                    <span className="country">{entry.country}</span>
                    <a href={entry.googleMapsLink}>view on Google Maps</a>
                </div>
                <h2>{entry.title}</h2>
                <p className="dates">{entry.dates}</p>
                <p className="text">{entry.text}
                </p>
            </div>
        </div>
    )
}