export default function Block(props) {
    return (
        <>
            <div
                style={{ backgroundColor: `${props.col}` }}
                onClick={() => props.handleToggle(props.id)}
            >
                {/* {props.toggleOn ? props.an : props.qn} */}
                {props.on ? props.qn : props.an}
            </div>
        </>
    )
}