import React from 'react';
import BannerImg from '../../assets/Banner/banner.jpg';
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import 'animate.css'; // Animate.css ইমপোর্ট

const Banner = () => {
    return (
        <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-400">
            <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                {/* Text Section */}
                <div className="flex flex-col justify-center p-6 text-center lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl animate__animated animate__fadeInLeft">
                        I am a <span className="text-orange-600">Web Developer</span>
                    </h1>
                    <p className="mt-4 mb-6 text-sm sm:text-lg md:mt-6 md:mb-8 animate__animated animate__fadeInUp animate__delay-1s">
                        Passionate about building dynamic, responsive websites
                        <br className="hidden md:inline lg:hidden" /> and creating innovative solutions for real-world problems.
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center lg:justify-start space-x-4 text-xl sm:text-2xl animate__animated animate__fadeIn animate__delay-2s">
                        <a href="https://www.facebook.com/hasnat.evan.733" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#1877F2] hover:opacity-80 hover:scale-110 transition-all duration-300">
                            <FaFacebook />
                        </a>
                        <a href="#" aria-label="Github" className="text-[#d1bdbd] hover:opacity-80 hover:scale-110 transition-all duration-300">
                            <FaGithub />
                        </a>
                        <a href="#" aria-label="Twitter" className="text-[#1DA1F2] hover:opacity-80 hover:scale-110 transition-all duration-300">
                            <FaTwitter />
                        </a>
                    </div>
                    
                    {/* Resume Button */}
                    <div className="flex justify-center lg:justify-start mt-4">
                        <a
                            href="/path/to/resume.pdf"
                            download
                            className="bg-blue-500 text-white py-2 px-4 w-auto text-sm sm:text-base rounded-md hover:bg-blue-600 transition-all duration-300"
                        >
                            Resume Download
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex items-center justify-center w-full h-64 lg:h-auto lg:w-1/2 animate__animated animate__fadeIn animate__delay-3s">
                    <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-full lg:h-full overflow-hidden rounded-full mt-10 border-4 border-gray-400 hover:scale-105 transition-all duration-500">
                        <img src={BannerImg} alt="Banner" className="object-cover w-full h-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
