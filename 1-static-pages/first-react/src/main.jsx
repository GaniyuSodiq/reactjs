/** // FIRST PROJECT - my code - SAME AS TUTOR'S CODE
import './index.css'
import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById("root"))
root.render(
  <main>
    <img src="src/assets/react.svg" alt="" /><h1>Fun Facts About React</h1>
    <div className='content'>
      <div className='lists'>
        <ul>
          <li>React is a library, not a framework</li>
          <li>Born out of Facebook's need for a better UI</li>
          <li>Powers more than just web apps</li>
          <li>Loved by industry giants</li>
        </ul>
      </div>
      <div>
        <img src="src/assets/react.svg" alt="" className='img-right'/>
      </div>
    </div>
  </main>
)


You wouldnt put all code inside of .render() in actual projects
you would use something called custom components
*/

