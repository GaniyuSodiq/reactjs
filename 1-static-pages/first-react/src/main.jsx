import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createElement } from 'react'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Content from './Content.jsx'

const reactElement = <h1><span>Hello ReactJS</span></h1>

console.log(reactElement)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Header />
    <Content />
  </StrictMode>,
  // reactElement
)
