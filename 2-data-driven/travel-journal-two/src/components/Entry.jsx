export default function Entry({entry, id}){
    return (
        
        <div className="entry">
            {console.log({entry})}
            <div className="image-area">
                <img src= {entry.img.src} alt={entry.img.alt} />
            </div>
            <div className="text-area">
                <div className="location">
                    <span>📌</span>
                    <span className="country">{entry.country}</span>
                    <a href={entry.googleMapsLink}>view on Google Maps</a>
                </div>
                <h2>{entry.title}</h2>
                <span className="date">{entry.dates}</span>
                <p>{entry.text}</p>                
            </div>
        </div>
    )
}