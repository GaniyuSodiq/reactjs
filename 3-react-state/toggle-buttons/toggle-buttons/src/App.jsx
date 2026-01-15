import Button from "./Button"
import btn from "./assets/buttons"
import React from "react"

export default function App() {

  const [theBtns, setTheBtns] = React.useState(btn)

  function toggleBtn(id) {
    setTheBtns(prevTheBtns => prevTheBtns.map(theBtn => theBtn.id === id ? { ...theBtn, on: !theBtn.on } : theBtn))
  }

  function toggleAllOff(){
    setTheBtns(prevTheBtns => prevTheBtns.map(theBtn => theBtn ? {...theBtn, on: false} : null))
  }

  const btnArr = theBtns.map(bt => <Button key={bt.id} id={bt.id} color={bt.color} on={bt.on} handleToggleBtn={toggleBtn}/>)

  return (
    <>
      {btnArr}
      <div>
        <h3 onClick={toggleAllOff} style={{cursor: "pointer"}}>toggle all off</h3>
      </div>
    </>
  )
}