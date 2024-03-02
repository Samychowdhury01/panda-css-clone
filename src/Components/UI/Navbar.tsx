// import logo from "../../assets/logo.svg";
import logo from "../../assets/logo.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import "../../styles/navbar.css";
const Navbar = () => {
  const navItems = (
    <>
      <li className="nav-item">Docs</li>
      <li className="nav-item">Learn</li>
      <li className="nav-item grid grid-flow-col items-center md:gap-2">
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
      <div className="navbar px-3 py-0 bg-base-100 rounded-lg drop-shadow-md ">
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
          <div className="flex flex-row items-center gap-2">
            <img
              src={logo}
              alt="panda-css-clone"
              className="w-9 rounded-md object-cover"
            />
            <p className="text-[28px] font-bold text-black">panda</p>
          </div>
        </div>
        <div className="md:navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="">
          <p className="nav-item flex flex-row items-center gap-2">
            <p className="m-0 p-0 text-[18px]">Light</p>
            <p>
              <FiSun className="text-xl font-semibold" />
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
