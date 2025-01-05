import 'animate.css'; // Import animate.css

const Experience = () => {
    return (
        <section className="bg-[#121518] text-gray-400 py-12">
            <div className="container mx-auto text-center">
                
                <h2 className="text-3xl font-bold text-orange-600 mb-8 animate__animated animate__fadeIn">My Experience</h2>
                <p className="text-lg mb-4 animate__animated animate__fadeIn animate__delay-1s">
                    As a new developer, I am passionate about creating high-quality websites and applications. Below are some of the experiences I have gained during my journey:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-[#1e2328] p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-2s hover:scale-105 hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-orange-600">Web Development</h3>
                        <p className="mt-4 text-lg">Developed responsive websites using HTML, CSS, JavaScript, and frameworks like React and Tailwind CSS.</p>
                    </div>
                    <div className="bg-[#1e2328] p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-3s hover:scale-105 hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-orange-600">Problem-Solving</h3>
                        <p className="mt-4 text-lg">Built projects that solve real-world problems by integrating APIs and dynamic data handling.</p>
                    </div>
                    <div className="bg-[#1e2328] p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-4s hover:scale-105 hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-orange-600">Collaborative Projects</h3>
                        <p className="mt-4 text-lg">Worked with teams to build projects that focus on user experience and code quality.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
