import { Outlet, Link } from "react-router-dom";
import React from "react";
import BottomPartOfPage from "../components/footer";
const Layout = () => {
  return (
    <>
      <nav className="w-100 bg-white h3 br2 tc ma1 shadow-2">
        <ul>
          <li>
            <Link to="/sign-up" className="bg-light-red ml1 mr2 w4">REGISTER</Link>
          </li>
          <li>
            <Link to="/log-in" className="bg-light-red w4">SIGN IN</Link>
          </li>
          <li className="left">
            <h2 className="">Mathiteia</h2>
          </li>
        </ul>
      </nav>
      <Outlet />
      {/* <BottomPartOfPage /> */}
    </>
  )
};

export default Layout;