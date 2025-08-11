import {BrowserRouter, Routes}from "react-router-dom"
import { Route } from "react-router-dom"
// import { useState } from 'react'
import './App.css'
import Login from './compo/Login'
import Layout from'./compo/Layout'
import Home from './compo/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h1>과제방</h1>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route index element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
