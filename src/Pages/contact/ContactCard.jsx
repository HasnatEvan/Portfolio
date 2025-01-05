import { FaLocationArrow, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactCard = () => {
    return (
        <div className="mx-auto p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black ">
            {/* Title Section */}
            <div className="text-center my-12 ">
                <motion.p 
                    className="text-lg font-semibold text-orange-600"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1 }}
                >
                    --- Visit Us ---
                </motion.p>
                <motion.h2 
                    className="text-4xl font-bold text-gray-400"
                    initial={{ y: -50, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    OUR LOCATION
                </motion.h2>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Location Card */}
                <motion.div 
                    className="bg-gray-800 rounded-lg shadow-2xl flex flex-col justify-between min-h-[350px] p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-700"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <div className="flex flex-col justify-center items-center h-full">
                        <motion.h2 
                            className="text-2xl font-semibold text-gray-200 mb-3 flex items-center"
                            initial={{ opacity: 0, x: -50 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <FaLocationArrow className="mr-2 text-blue-500" />
                            <span className="text-blue-300">Location</span>
                        </motion.h2>
                        <p className="text-gray-400 mb-4 text-center">I am currently based in Chandanish, Chattogram, Bangladesh.</p>
                        <div>
                            <a 
                                href="https://www.google.com/maps?q=Chandanish,Chattogram,Bangladesh" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-400 hover:text-blue-600 transition duration-300"
                            >
                                View on Google Maps
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Email Card */}
                <motion.div 
                    className="bg-gray-800 rounded-lg shadow-2xl flex flex-col justify-between min-h-[350px] p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-700"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <div className="flex flex-col justify-center items-center h-full">
                        <motion.h2 
                            className="text-2xl font-semibold text-gray-200 mb-3 flex items-center"
                            initial={{ opacity: 0, x: -50 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 1, delay: 0.7 }}
                        >
                            <FaEnvelope className="mr-2 text-red-500" />
                            <span className="text-red-300">Email</span>
                        </motion.h2>
                        <p className="text-gray-400 mb-4 text-center">You can email me for business inquiries or questions:</p>
                        <div>
                            <a 
                                href="mailto:webdeveloperhasnatevan@gmail.com" 
                                className="text-red-400 hover:text-red-600 transition duration-300"
                            >
                                webdeveloperhasnatevan@gmail.com
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* WhatsApp Card */}
                <motion.div 
                    className="bg-gray-800 rounded-lg shadow-2xl flex flex-col justify-between min-h-[350px] p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-700"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <div className="flex flex-col justify-center items-center h-full">
                        <motion.h2 
                            className="text-2xl font-semibold text-gray-200 mb-3 flex items-center"
                            initial={{ opacity: 0, x: -50 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 1, delay: 0.9 }}
                        >
                            <FaWhatsapp className="mr-2 text-green-600" />
                            <span className="text-green-300">WhatsApp</span>
                        </motion.h2>
                        <p className="text-gray-400 mb-4 text-center">Feel free to contact me on WhatsApp:</p>
                        <div>
                            <a 
                                href="https://wa.me/+8801814197707" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-green-400 hover:text-green-600 transition duration-300"
                            >
                                +8801814197707
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactCard;
