export default function Button(props) {
    return <button
        className={props.on ? "buttons" : "buttons off"}
        style={{
            backgroundColor: `${props.color}`
        }}
        onClick={() => props.handleToggleBtn(props.id)}
    >
        BTN
    </button>
}