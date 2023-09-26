import { NavLink } from "react-router-dom";
import "./header.css"

const Header = () => {
   return (
      <div>
         <div className="navbar my-12">
            <div className="navbar-start">
               <a className="btn btn-ghost normal-case text-xl"><img className="w-44" src="./Logo.png" alt="Donation Campaign Logo" /></a>
            </div>
            {/* <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  <li><a>Item 1</a></li>
                  <li><a>Item 3</a></li>
               </ul>
            </div> */}
            <div className="navbar-end">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost md:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52">
                     <li className="side"><NavLink to={"/"}>Home</NavLink></li>
                     <li className="side"><NavLink to={"/donation"}>Donation</NavLink></li>
                     <li className="side"><NavLink to={"/statistics"}>Statistics</NavLink></li>
                  </ul>
               </div>
               <div className="hidden md:flex">
                  <ul className="flex gap-5 px-1">
                     <li className="side"><NavLink to={"/"}>Home</NavLink></li>
                     <li className="side"><NavLink to={"/donation"}>Donation</NavLink></li>
                     <li className="side"><NavLink to={"/statistics"}>Statistics</NavLink></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;