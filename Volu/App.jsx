import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'comps'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div id="page-top">
    <Nav />
    <Mast />
    <Services />
    <Team />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
