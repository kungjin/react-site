import { Link, Outlet } from "react-router-dom";


function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <nav>
          <ul style={{ listStyleType: "none", display: "flex" }}>
            <li className="li">
              <Link to="/react-site/">Home</Link>
            </li>
            <li className="li">
              <Link to="/react-site/login">Login</Link>
            </li>
            <li className="li">
              <Link to="/react-site/Size">Size</Link>
            </li>
            <li className="li">
              <Link to="/react-site/Usestate">Usestate</Link>
            </li>
            <li className="li">
              <Link to="Example1">Effect1</Link>
            </li>

          </ul>
          <br />
          

        </nav>
        <h1>KJ WORK ROOM</h1>
        <ul style={{ listStyleType: "none", display: "flex" }}>
            <li className="li">
              <Link to="/react-site/Example2">Effect2</Link>
            </li>
            <li className="li">
              <Link to="/react-site/Example3">Effect3</Link>
            </li>
            <li className="li">
              <Link to="/react-site/Example4">Effect4</Link>
            </li>
            <li className="li">
              <Link to="/react-site/Example5">Effect5</Link>
            </li>
          
          </ul>


      </header>


      <Outlet></Outlet>
    </div>
  );
}
export default Layout;