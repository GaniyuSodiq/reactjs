export default function Contact(props) {
    console.log(props)
    return (
        <article className='contact-card'>
            <img src={props.img} alt={props.name} />
            <h3>{props.name}</h3>
            <div className="info-group">
                <span>☎️</span>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <span>📧</span>
                <p>{props.email}</p>
            </div>
        </article>
    )
}