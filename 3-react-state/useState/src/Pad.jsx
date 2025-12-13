export default function Pad(props) {
    /**
     * Challenge part 3:
     * Our buttons got turned off by default from css code (opacity of 0.1)! Update the code
     * 
     * so if the button is "on", it has the className of "on".
     * this 'on' class has opacity of 1
     */
    
    return (
        <button 
            style={{backgroundColor: props.color}}
            className = {props.on ? "on" : undefined}
        ></button>
    )
}