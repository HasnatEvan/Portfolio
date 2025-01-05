import { FaFootballBall, FaGlobeAmericas, FaEdit, FaLaptopCode, FaUsers } from "react-icons/fa";

const Hobbies = () => {
    return (
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 rounded-lg shadow-2xl text-white">
            <div className="my-6">
                <h2 className="text-4xl font-extrabold text-center mb-10 border-b-4 border-gray-600 pb-4">
                    My Hobbies
                </h2>

                {/* Hobby Item Component */}
                {[ 
                    {
                        icon: <FaFootballBall className="text-white w-8 h-8" />,
                        title: "Football",
                        description:
                            "Football is one of my favorite sports. I enjoy both playing and watching it. The teamwork and strategy involved always keep me engaged.",
                    },
                    {
                        icon: <FaGlobeAmericas className="text-white w-8 h-8" />,
                        title: "Travelling",
                        description:
                            "Travelling is one of my greatest passions. I love exploring new places, experiencing different cultures, and meeting new people. It's an enriching experience for me.",
                    },
                    {
                        icon: <FaEdit className="text-white w-8 h-8" />,
                        title: "Editing",
                        description:
                            "I enjoy editing content, whether it’s photos, videos, or written work. The process of refining and enhancing pieces of content to make them more visually appealing or engaging is something I find really satisfying.",
                    },
                    {
                        icon: <FaLaptopCode className="text-white w-8 h-8" />,
                        title: "Why I Started Web Development",
                        description:
                            "I started learning web development to become a skilled developer and earn an income. I believe web development is the key to creating innovative solutions. My goal is to become a great developer, gain financial independence, and make my parents proud by achieving success in this field.",
                    },
                    {
                        icon: <FaUsers className="text-white w-8 h-8" />,
                        title: "Family Support",
                        description:
                            "I am incredibly grateful for the support of my family, especially my parents. They have always encouraged me to pursue my dreams and supported me throughout my journey. Their motivation and belief in me have played a huge role in my decision to pursue web development.",
                    },
                ].map((hobby, index) => (
                    <div
                        key={index}
                        className={`mb-10 flex flex-col sm:flex-row items-start space-y-6 sm:space-x-4 sm:space-y-0 ${index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"}`}
                    >
                        {hobby.icon}
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-semibold">{hobby.title}</h3>
                            <p className="text-gray-400 mt-2 text-sm sm:text-base">{hobby.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hobbies;
