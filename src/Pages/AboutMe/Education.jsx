import { FaGraduationCap, FaLaptopCode, FaSchool } from "react-icons/fa";

const Education = () => {
    return (
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 rounded-lg shadow-2xl">
            <div className="my-12">
                <h2 className="text-4xl font-extrabold text-white mb-10 text-center border-b-2 border-gray-600 pb-4 animate__animated animate__fadeInUp animate__delay-1s">
                    Education
                </h2>
                {/* SSC Section */}
                <div className="mb-8 flex flex-col md:flex-row items-start space-x-4 animate__animated animate__fadeInUp animate__delay-2s">
                    <FaSchool className="text-white w-8 h-8 mt-1" />
                    <div>
                        <h3 className="text-2xl font-semibold text-white">SSC - 2021</h3>
                        <p className="text-gray-400 mt-2">
                            Completed Secondary School Certificate (SSC) with good marks.
                        </p>
                    </div>
                </div>
                {/* Diploma Section */}
                <div className="mb-8 flex flex-col md:flex-row items-start space-x-4 animate__animated animate__fadeInUp animate__delay-3s">
                    <FaGraduationCap className="text-white w-8 h-8 mt-1" />
                    <div>
                        <h3 className="text-2xl font-semibold text-white">
                            Diploma in Engineering (Computer Science and Communication)
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Currently pursuing a Diploma in Engineering in the field of Computer Science and Communication.
                        </p>
                    </div>
                </div>
                {/* Web Development Course Section */}
                <div className="mb-8 flex flex-col md:flex-row items-start space-x-4 animate__animated animate__fadeInUp animate__delay-4s">
                    <FaLaptopCode className="text-white w-8 h-8 mt-1" />
                    <div>
                        <h3 className="text-2xl font-semibold text-white">Web Development Course</h3>
                        <p className="text-gray-400 mt-2">
                            Started learning Web Development in 2024 and completed a comprehensive course from <span className="text-orange-600"> Programming Hero</span>, gaining hands-on experience in building websites.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
