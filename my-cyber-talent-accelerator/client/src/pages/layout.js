import { Outlet, Link } from "react-router-dom";
import BottomPartOfPage from "../components/footer";
const Layout = () => {
  return (
    <>
      <nav className="w-100 bg-white h3 br2 tc ma1 shadow-2">
        <ul>
          {/* <li>
            <Link to="/"></Link>
          </li> */}
          <li>
            <Link to="/sign-up" className="bg-light-red ml1 mr2 w4">REGISTER</Link>
          </li>
          <li>
            <Link to="/log-in" className="bg-light-red w4">SIGN IN</Link>
          </li>
          <li className="left">
            {/* <p className="w3">MiCyber Talent Accelerator</p> */}
          </li>
        </ul>
      </nav>
      <Outlet />
      {/* <BottomPartOfPage /> */}
    </>
  )
};

export default Layout;