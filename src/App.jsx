import {BrowserRouter, Routes}from "react-router-dom"
import { Route } from "react-router-dom"
// import { useState } from 'react'
import './App.css'
import Login from './compo/Login.jsx'
import Layout from'./compo/Layout.jsx'
import Home from './compo/Home.jsx'
import Size from "./compo/Size.jsx"
import React from "./compo/React.jsx"

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
      <Route  path="/react-site/React" element={<React/>}/>
    </Routes>
    </BrowserRouter>

    
    </div>
    </>
  )
}

export default App
