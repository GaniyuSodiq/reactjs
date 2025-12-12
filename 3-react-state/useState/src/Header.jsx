import React from "react"
import avatar from "./icons/user.png"

export default function Header(props) {

    /**
     * Challenge:
     * Raise this state up a level
     * so you can pass it down to both this header and the body
     * as props
     */

    // const [userName, setUserName] = React.useState("Joe")

    return (
        <header>
            <img src={avatar} />
            <p>{props.userName}</p>
        </header>
    )
}
