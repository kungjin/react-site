import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { useState } from 'react'
import './App.css'
import Login from './compo/Login.jsx'
import Layout from './compo/Layout.jsx'
import Home from './compo/Home.jsx'
import Size from "./compo/Size.jsx"
import Usestate from "./compo/Usestate.jsx"
import Example1 from "./compo3/Example1.jsx"
import Example2 from "./compo3/Example2.jsx"
import Example3 from "./compo3/Example3.jsx"
import Example4 from "./compo3/Example4.jsx"
import Example5 from "./compo3/Example5.jsx"
import Ex_callback1 from "./compo_callback/Ex_callback1.jsx"
import Ex_callback2 from "./compo_callback/Ex_callback2.jsx"
import Ex_callback3 from "./compo_callback/Ex_callback3.jsx"
import Ex_callback4 from "./compo_callback/Ex_callback4.jsx"
import Ex_callback5 from "./compo_callback/Ex_callback5.jsx"
import Ex_memo5 from "./compo_memo/Ex_memo5.jsx"
import Ex_memo1 from "./compo_memo/Ex_memo1.jsx"
import Ex_memo2 from "./compo_memo/Ex_memo2.jsx"
import Ex_memo3 from "./compo_memo/Ex_memo3.jsx"
import Ex_memo4 from "./compo_memo/Ex_memo4.jsx"
import Ex_useref1 from "./compo_useref/Ex_useref1.jsx"
import Ex_useref2 from "./compo_useref/Ex_useref2.jsx"
import Ex_useref3 from "./compo_useref/Ex_useref3.jsx"
import Ex_useref4 from "./compo_useref/Ex_useref4.jsx"
import Ex_useref5 from "./compo_useref/Ex_useref5.jsx"

import Mini_Blog from './mini/Mini_Blog';
import MainPage from './mini/components/pages/MainPage';
import PostWritePage from './mini/components/pages/PostWritePage';
import PostViewPage from './mini/components/pages/PostViewPage';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">

        <BrowserRouter>
          <Routes>
            {/* 부모 라우트: Layout */}
            <Route path="/react-site" element={<Layout />}>
              {/* 인덱스(홈) */}
              <Route index element={<Home />} />

              {/* 1단계 자식들 */}
              <Route path="login" element={<Login />} />
              <Route path="Size" element={<Size />} />
              <Route path="Usestate" element={<Usestate />} />
              <Route path="Example1" element={<Example1 />} />
              <Route path="Example2" element={<Example2 />} />
              <Route path="Example3" element={<Example3 />} />
              <Route path="Example4" element={<Example4 />} />
              <Route path="Example5" element={<Example5 />} />
              <Route path="Ex_callback1" element={<Ex_callback1 />} />
              <Route path="Ex_callback2" element={<Ex_callback2 />} />
              <Route path="Ex_callback3" element={<Ex_callback3 />} />
              <Route path="Ex_callback4" element={<Ex_callback4 />} />
              <Route path="Ex_callback5" element={<Ex_callback5 />} />
              <Route path="Ex_memo1" element={<Ex_memo1 />} />
              <Route path="Ex_memo2" element={<Ex_memo2 />} />
              <Route path="Ex_memo3" element={<Ex_memo3 />} />
              <Route path="Ex_memo4" element={<Ex_memo4 />} />
              <Route path="Ex_memo5" element={<Ex_memo5 />} />
              <Route path="Ex_useref1" element={<Ex_useref1 />} />
              <Route path="Ex_useref2" element={<Ex_useref2 />} />
              <Route path="Ex_useref3" element={<Ex_useref3 />} />
              <Route path="Ex_useref4" element={<Ex_useref4 />} />
              <Route path="Ex_useref5" element={<Ex_useref5 />} />

              {/* Mini_blog 중첩 */}
              <Route path="Mini_blog" element={<Mini_Blog />}>
                <Route index element={<MainPage />} />
                <Route path="post-write" element={<PostWritePage />} />
                <Route path="post/:postId" element={<PostViewPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>


      </div>
    </>
  )
}

export default App
