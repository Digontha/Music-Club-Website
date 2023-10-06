import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const Links = <>

        <li className="text-base"><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline font-extrabold" : ""
            }
        >
           Home
        </NavLink></li>


        <li className="text-base">
            
            <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline font-extrabold" : ""
            }
        >
            about
        </NavLink></li>
       

    </>

    return (
        <div className="navbar bg-red-100 shadow-lg px-[5%]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <a className=" text-2xl text-red-400 font-bold text normal-case ">Music Club</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {Links}
                </ul>
            </div>
            <div className="navbar-end">
               <Link><button className="btn btn-success btn-sm">Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;