import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaDatabase, FaNodeJs } from "react-icons/fa";
import { FaDumpster } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Skills = () => {
    const skills = [
        { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-3xl" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-3xl" /> },
        { name: 'React', icon: <FaReact className="text-blue-400 text-3xl" /> },
        { name: 'Git & GitHub', icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-500 text-3xl" /> },
        { name: 'MongoDB', icon: <FaDatabase className="text-green-500 text-3xl" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-400 text-3xl" /> },
        { name: 'DaisyUI', icon: <FaDumpster className="text-green-400 text-3xl" /> },
    ];

    return (
        <section className="bg-[#121518] text-gray-400 py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-orange-600 mb-8 animate__animated animate__fadeIn">My Skills</h2>
                <p className="text-lg mb-4 animate__animated animate__fadeIn animate__delay-1s">
                    As a new developer, I have gained experience in various technologies and tools. Here are some of the key skills I have worked with:
                </p>

                <div className="my-10">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        navigation
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 6,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {skills.map((skill, index) => (
                            <SwiperSlide key={index}>
                                <div className="card bg-gray-800 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 animate__animated animate__fadeIn animate__delay-2s flex justify-center items-center w-full h-full p-6">
                                    {/* Circular container around icon only */}
                                    <div className="w-24 h-24 flex justify-center items-center rounded-full bg-gray-700 p-4">
                                        {skill.icon}
                                    </div>
                                    <p className="mt-4 text-lg text-white">{skill.name}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Skills;
