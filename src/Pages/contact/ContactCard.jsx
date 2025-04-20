import { FaLocationArrow, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactCard = () => {
    return (
        <div className="mx-auto p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            {/* Title Section */}
            <div className="text-center my-12">
                <motion.p 
                    className="text-lg font-semibold text-orange-600"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1 }}
                >
                    --- ᴠɪꜱɪᴛ ᴜꜱ ---
                </motion.p>
                <motion.h2 
                    className="text-4xl font-bold text-gray-400"
                    initial={{ y: -50, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    𝑶𝑼𝑹 𝑳𝑶𝑪𝑨𝑻𝑰𝑶𝑵
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
                        
                        {/* Google Map Embed */}
                        <div className="w-full h-[200px] md:h-[300px] mb-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2110.0260254857144!2d92.01635688431325!3d22.24465792218218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad3d0035e744ef%3A0x776475903936e548!2sPori%20building%20(bgc%20trust&#39;s%20foreigner%20hostel!5e1!3m2!1sen!2sbd!4v1737916028426!5m2!1sen!2sbd"
                                className="w-full h-full border-none"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

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
                                href="mailto:hasnatevan59@gmail.com" 
                                className="text-red-400 hover:text-red-600 transition duration-300 text-[12px] lg:text-sm"
                            >hasnatevan59@gmail.com
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
                                href="https://wa.me/+8801824481881" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-green-400 hover:text-green-600 transition duration-300"
                            >
                                +8801824481881
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactCard;
