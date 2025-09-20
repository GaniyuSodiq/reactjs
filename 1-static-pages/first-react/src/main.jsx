import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createElement } from 'react'
import './index.css'
import App from './App.jsx'

const reactElement = createElement("h1", null, "Hello from createElement")

console.log(reactElement)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  reactElement
)
