import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"


export default function Star(props) {

    let starIcon = props.isFilled ? starFilled : starEmpty
    
    // So how can we get this Star component to update its parent(app)?..

    return (<button
        // onClick={props.onClick}
        onClick={props.handleClick}
        // we can make this even more explanatory by making the custom attribute...
        // look more different from DOM attri
        // so instead of onClick, we use handleClick
        /**
         * We can pass any JS datatype down throu props
         * and functions like we are doing here have no excptions
         * we pass the handleClick fn from the App to the button here
         * so that the fn listen to the even and run 
         * running the fn will still interact with the parent state in order to change
         * bcs the state is set in the parent
         */
        aria-pressed={props.isFilled}
        aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
        className="favorite-button"
    >
        <img
            src={starIcon}
            alt={props.isFilled ? "filled star icon" : "empty star icon"}
            className="favorite"
        />
    </button>)
}