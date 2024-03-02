import logo from '../../assets/logo.svg'
import { MdOutlineArrowOutward } from "react-icons/md";
import "../../styles/navbar.css";
const Navbar = () => {
  const navItems = (
    <>
      <li className="navItem">Docs</li>
      <li className="navItem">Learn</li>
      <li className="navItem grid grid-flow-col items-center md:gap-2">
        <p className="m-0 p-0 text-[18px]">
          <span className="">Github</span>
          <span className="m-0 p-0">
            <MdOutlineArrowOutward className="text-2xl" />
          </span>
        </p>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <img src={logo} alt="panda-css-clone" className='w-32 h-9 object-cover'/>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">Light</div>
      </div>
    </>
  );
};

export default Navbar;
