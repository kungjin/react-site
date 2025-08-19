import { Link, Outlet } from "react-router-dom";


function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <nav>

          <br />


        </nav>
        <h1>KJ WORK ROOM</h1>
        <ul style={{ listStyleType: "none", display: "flex" }}>
          <li className="li">
            <Link to="/react-site">Home</Link>
          </li>
          <li className="li">
            <Link to="login">Login</Link>
          </li>
          <li className="li">
            <Link to="Size">Size</Link>
          </li>
          <li className="li">
            <Link to="Usestate">Usestate</Link>
          </li>
          <li className="li">
            <Link to="Example1">Effect1</Link>
          </li>
          <li className="li">
            <Link to="Example2">Effect2</Link>
          </li>

        </ul>
        <ul style={{ listStyleType: "none", display: "flex" }}>

          <li className="li">
            <Link to="Example3">Effect3</Link>
          </li>
          <li className="li">
            <Link to="Example4">Effect4</Link>
          </li>
          <li className="li">
            <Link to="Example5">Effect5</Link>
          </li>
          <li className="li">
            <Link to="Ex_callback1">Callback1</Link>
          </li>
          <li className="li">
            <Link to="Ex_callback2">Callback2</Link>
          </li>
          <li className="li">
            <Link to="Ex_callback3">Callback3</Link>
          </li>
        </ul>

        <ul style={{ listStyleType: "none", display: "flex" }}>

          <li className="li">
            <Link to="Ex_callback4">Callback4</Link>
          </li>
          <li className="li">
            <Link to="Ex_callback5">Callback5</Link>
          </li>
          <li className="li">
            <Link to="Ex_memo1">Memo1</Link>
          </li>
          <li className="li">
            <Link to="Ex_memo2">Memo2</Link>
          </li>
          <li className="li">
            <Link to="Ex_memo3">Memo3</Link>
          </li>
          <li className="li">
            <Link to="Ex_memo4">Memo4</Link>
          </li>
        </ul>

         <ul style={{ listStyleType: "none", display: "flex" }}>

          <li className="li">
            <Link to="Ex_memo5">Memo5</Link>
          </li>
          <li className="li">
            <Link to="Ex_useref1">Useref1</Link>
          </li>
          <li className="li">
            <Link to="Ex_useref2">Useref2</Link>
          </li>
          <li className="li">
            <Link to="Ex_useref3">Useref3</Link>
          </li>
          <li className="li">
            <Link to="Ex_useref4">Useref4</Link>
          </li>
          <li className="li">
            <Link to="Ex_useref5">Useref5</Link>
          </li>
        </ul>

        <ul style={{ listStyleType: "none", display: "flex" }}>

          <li className="li">
            <Link to="Mini_blog">Mini Blog</Link>
          </li> 
          <li className="li">
            <Link to="Clock">Clock</Link>
          </li> 
          <li className="li">
            <Link to="Comment">Comment</Link>
          </li> 
           <li className="li">
            <Link to="CommentList">CommentList</Link>
          </li> 

       </ul>


      </header>


      <Outlet></Outlet>
    </div>
  );
}
export default Layout;