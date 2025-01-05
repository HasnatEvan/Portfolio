import { useLoaderData, useNavigate } from "react-router-dom";

const Details = () => {
  const project = useLoaderData();
  const navigate = useNavigate();

  if (!project) {
    return <div>Project not found!</div>;
  }

  const handleBack = () => {
    navigate(-1); // This will navigate back to the previous page
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-md mt-12 mb-6"
      />

      {/* Project Description */}
      <p className="text-gray-400 text-sm md:text-lg mb-6">{project.details.description}</p>

      {/* Main Tech Stack */}
      <h2 className="text-xl md:text-2xl font-semibold mb-2">Main Tech Stack</h2>
      <ul className="list-disc pl-5 text-gray-400 text-sm md:text-lg mb-6">
        {project.details.mainTechStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      {/* Challenges */}
      <h2 className="text-xl md:text-2xl font-semibold mb-2">Challenges</h2>
      <ul className="list-disc pl-5 text-gray-400 text-sm md:text-lg mb-6">
        {project.details.challenges.map((challenge, index) => (
          <li key={index}>{challenge}</li>
        ))}
      </ul>

      {/* Improvements */}
      <h2 className="text-xl md:text-2xl font-semibold mb-2">Improvements</h2>
      <ul className="list-disc pl-5 text-gray-400 text-sm md:text-lg mb-6">
        {project.details.improvements.map((improvement, index) => (
          <li key={index}>{improvement}</li>
        ))}
      </ul>

      {/* Links */}
      <div className="space-x-4 mt-6">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm md:text-base"
        >
          Live Link
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm md:text-base"
        >
          GitHub Link
        </a>
      </div>

      {/* Back Button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleBack}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Details;
