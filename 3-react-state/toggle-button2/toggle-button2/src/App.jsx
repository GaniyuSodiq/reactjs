import { useState } from 'react'
import buttons from './assets/buttons'
import Block from './Block'


function App() {

  const [btnArr, setBtnArr] = useState(buttons)

  const [toggleOn, setToggleOn] = useState(false)

  const blocks = btnArr.map(btn => (<Block
    key={btn.id}
    id={btn.id}
    col={btn.col}
    qn={btn.question}
    an={btn.answer}
    toggle={toggleOn}
    on={btn.on}
    handleToggle={toggleBox}
  />)
  )

  function toggleBox(id) {
    // console.log(id)
    setBtnArr(prevBtnArr => prevBtnArr.map(bt => (bt.id === id ? {...bt, on: !bt.on} : bt)))
    // setBtnArr(prevBtnArr => prevBtnArr.map(bt => ({...bt, col: "#123456"})))
    // setBtnArr(prevSetBtnArr => prevSetBtnArr.map(btn => (btn.id === id ? { ...btn, on: !btn.on } : btn)))
  }

  return (
    <>
      <main>
        {blocks}
      </main>
    </>
  )
}

export default App
