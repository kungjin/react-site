import {BrowserRouter, Routes}from "react-router-dom"
import { Route } from "react-router-dom"
// import { useState } from 'react'
import './App.css'
import Login from './compo/Login.jsx'
import Layout from'./compo/Layout.jsx'
import Home from './compo/Home.jsx'
import Size from "./compo/Size.jsx"
import Usestate from "./compo/Usestate.jsx"
import Example1 from "./compo3/Example1.jsx"
import Example2 from "./compo3/Example2.jsx"
import Example3 from "./compo3/Example3.jsx"
import Example4 from "./compo3/Example4.jsx"
import Example5 from "./compo3/Example5.jsx"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
    
    <BrowserRouter>
    <Routes>
      <Route path="/react-site/" element={<Layout/>}/>
      <Route index element={<Home/>}/>
      <Route  path="/react-site/login" element={<Login/>}/>
      <Route  path="/react-site/Size" element={<Size/>}/>
      <Route  path="/react-site/Usestate" element={<Usestate/>}/>
      <Route path="/react-site/Example1" element={<Example1 />} />
      <Route  path="/react-site/Example2" element={<Example2/>}/>
      <Route  path="/react-site/Example3" element={<Example3/>}/>
      <Route  path="/react-site/Example4" element={<Example4/>}/>
      <Route  path="/react-site/Example5" element={<Example5/>}/>

    </Routes>
    </BrowserRouter>

    
    </div>
    </>
  )
}

export default App
