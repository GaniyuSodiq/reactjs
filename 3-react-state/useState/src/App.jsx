// import { useState } from "react"

import React from "react"

export default function App(){
  const [isImportant, setIsImportant] = React.useState("Yes")
  
  function handleClick(){
    setIsImportant("Deinately")
  }

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      <button onClick={handleClick} className="value">{isImportant}</button>
    </main>
  )
}