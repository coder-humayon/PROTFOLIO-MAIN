import { useState } from 'react'
import './App.css'
import { Navbar } from './componntes/Navbar'
import Bennar from './componntes/Bennar'
import About from './componntes/About'
import Skills from './componntes/Skills'
import Portfolio from './componntes/Portfolio'
import Footer from './componntes/Footer'
import Contract from './componntes/Contract'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="">
    <Navbar/>
    <Bennar/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contract/>
    <Footer/>
   </div>
    </>
  )
}

export default App
