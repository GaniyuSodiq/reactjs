export default function Contact({img, name, phone, email}) {
    return (
        <article className='contact-card'>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <div className="info-group">
                <span>☎️</span>
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <span>📧</span>
                <p>{email}</p>
            </div>
        </article>
    )
}

const person = {
    img: "src/assets/react.svg",
    name: "Felix",
    phone: "000-234-1234-567",
    email: "mr.felixoh@catnap.meow",
}

console.log(person.name)

const {img, name} = person
console.log(name)