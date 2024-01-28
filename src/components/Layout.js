import { Outlet, Link } from "react-router-dom";

import './Layout.css'

const Layout = () => {
  return (
    <div className="layoutContainer">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/usa">USA</Link>
          </li>
          <li>
            <Link to="/france">France</Link>
          </li>
          <li>
            <Link to="/other">Other</Link>
          </li>
        </ul>
      </nav>

      <div className="outletContainer">
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;