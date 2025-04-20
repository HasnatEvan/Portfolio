import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import icon from '../../src/assets/navbar/img.webp';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const links = (
        <>
            <li>
                <NavLink
                    to={'/'}
                    className="text-white font-bold hover:text-red-400 transition-transform duration-300 transform hover:scale-110"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/about'}
                    className="text-white font-bold hover:text-orange-600 transition-transform duration-300 transform hover:scale-110"
                >
                    About Me
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/contact'}
                    className="text-white font-bold hover:text-orange-600 transition-transform duration-300 transform hover:scale-110"
                >
                    Contact Us
                </NavLink>
            </li>
        </>
    );

    return (
        <div
            className={`navbar bg-[#121518] shadow-lg border-b-2 border-gray-400 fixed z-10 bg-opacity-30 max-w-screen-xl mx-auto ${isScrolled ? 'backdrop-blur-lg' : ''}`}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <button
                        className="btn btn-ghost lg:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-white hover:text-orange-600 transition-all duration-300"
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
                    </button>
                    <ul
                        className={`menu menu-sm dropdown-content bg-[#1e2328] rounded-box shadow-lg mt-3 
                        ${menuOpen ? 'block' : 'hidden'} 
                        overflow-auto max-h-[400px] w-[90vw] md:w-[400px] p-4 left-0 right-0 mx-auto`}
                    >
                        {links}
                    </ul>
                </div>
                <a
                    className="btn btn-ghost text-lg md:text-2xl text-orange-600 font-semibold transition-all duration-300 transform animate-bounce hover:animate-pulse"
                >
                    𝑯𝒂𝒔𝒏𝒂𝒕 𝑬𝒗𝒂𝒏
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-3 space-x-6">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a
                    href="#"
                    className="text-white font-semibold py-2 px-4 rounded-full hover:bg-gradient-to-l hover:scale-105 transition-all duration-300 transform shadow-md"
                >
                    <img
                        src={icon}
                        alt="User Icon"
                        className="w-10 h-10 rounded-full border-2 border-white hover:scale-110 transition-transform duration-300"
                    />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
