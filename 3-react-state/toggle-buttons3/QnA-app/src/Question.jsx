import React from "react"
export default function Question(props){
    return <div onClick={props.handleSwitchQna} style={{backgroundColor: `${props.qn.color}`}}><p>{props.switchQnA ? `${'QUESTION: ' + props.qn.id}` : `${'ANSWER: ' + props.qn.id}`}</p> <span>{props.switchQnA ? `${props.qn.question}` : `${props.qn.answer}`}</span></div>
}