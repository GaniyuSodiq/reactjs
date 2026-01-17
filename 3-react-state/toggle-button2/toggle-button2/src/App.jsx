import { useState } from 'react'
import buttons from './assets/buttons'
import Block from './Block'


function App() {

  const [btnArr, setBtnArr] = useState(buttons)

  const blocks = btnArr.map(btn => (<Block
    key={btn.id}
    id={btn.id}
    col={btn.col}
    qn={btn.question}
    an={btn.answer} />)
  )

  return (
    <>
      <main>
        {blocks}
      </main>
    </>
  )
}

export default App
