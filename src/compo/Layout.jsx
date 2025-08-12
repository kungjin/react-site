import { Link, Outlet } from "react-router-dom";


function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <nav>
          <ul style={{listStyleType: "none", display: "flex"}}>
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
              <Link to="/react-site/React">React</Link>
            </li>

          </ul>
        </nav>
      </header>
      <h1>KJ WORK ROOM</h1>
      <Outlet></Outlet>
    </div>
  );
}
export default Layout;