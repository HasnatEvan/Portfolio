import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const links = (
        <>
            <li>
                <NavLink to={'/'} className="text-white font-bold hover:text-red-400 transition-transform duration-300 transform hover:scale-110">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={'/about'} className="text-white font-bold hover:text-orange-600 transition-transform duration-300 transform hover:scale-110">
                    About Me
                </NavLink>
            </li>
            <li>
                <NavLink to={'/contact'} className="text-white font-bold hover:text-orange-600 transition-transform duration-300 transform hover:scale-110">
                    Contact Us
                </NavLink>
            </li>
        </>
    );

    return (
        <div 
            className={`navbar bg-[#121518] shadow-lg border-b-2 border-gray-400 fixed z-10 bg-opacity-30 w-11/12 mx-auto ${isScrolled ? 'backdrop-blur-lg' : ''}`}
        >
            <div className="navbar-start">
                {/* Mobile Menu Button */}
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-white hover:text-red-400 transition-all duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#1e2328] rounded-box shadow-lg z-[1] mt-3 w-52 p-2">
                        {links}
                    </ul>
                </div>
                {/* Brand Name */}
                <a className="btn btn-ghost text-2xl text-orange-600 font-semibold transition-all duration-300 transform animate-bounce hover:animate-pulse">
                    𝑯𝒂𝒔𝒏𝒂𝒕 𝑬𝒗𝒂𝒏
                </a>
            </div>
            
            {/* Center Links (Desktop Version) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-3 space-x-6">
                    {links}
                </ul>
            </div>
            
            {/* Empty space for alignment */}
            <div className="navbar-end hidden lg:block"></div>
        </div>
    );
};

export default Navbar;
