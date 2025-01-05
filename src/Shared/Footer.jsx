import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Contact Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold mb-2 text-orange-600">Contact Me</h3>
                        <p>Email: <a href="mailto:webdeveloperhasnatevan@gmail.com" className="hover:underline">webdeveloperhasnatevan@gmail.com</a></p>
                        <p>Phone: <a href="tel:+8801814197707" className="hover:underline">+8801814197707</a></p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold mb-2 text-orange-600">Quick Links</h3>
                        <ul>
                            <li><a href="#home" className="hover:underline">Home</a></li>
                            <li><a href="#about" className="hover:underline">About Me</a></li>
                            <li><a href="#projects" className="hover:underline">Projects</a></li>
                            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold mb-2 text-orange-600">Follow Me</h3>
                        <div className="flex justify-center md:justify-start gap-6">
                            <a 
                                href="https://facebook.com/hasnat.evan.733" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-2xl text-blue-600 hover:text-blue-800 transition-all duration-300 transform hover:scale-110"
                            >
                                <FaFacebook />
                            </a>
                            <a 
                                href="https://github.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-2xl text-white hover:text-black transition-all duration-300 transform hover:scale-110"
                            >
                                <FaGithub />
                            </a>
                            <a 
                                href="https://twitter.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-2xl text-blue-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                            >
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-6 text-white">
                <p>© 2025 Hasnat Evan. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
