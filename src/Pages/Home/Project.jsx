import { useEffect, useState } from "react";
import ProJectCard from "./ProJectCard";

const Project = () => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch('/project.json') // Ensure the correct path
        .then(res => res.json())
        .then(data => setProject(data));
    }, []);

    return (
        <div className="p-8 bg-black to-black">
            {/* Title Section */}
            <h2 className="text-4xl font-bold text-orange-600 text-center  mb-8">
            𝑴𝒚 𝑷𝒓𝒐𝒋𝒆𝒄𝒕𝒔
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
                {project.map(item => (
                    <ProJectCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Project;
