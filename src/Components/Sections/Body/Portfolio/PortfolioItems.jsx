import { useContext, useState } from 'react';
import { BsArrowRightShort, BsGithub } from "react-icons/bs";
import { DataContext } from '../../../../App';

function PortfolioItems({ project }) {
  const { color } = useContext(DataContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 w-[400px] h-[400px] flex flex-col ${color === 'light' ? 'bg-white' : 'bg-gray-800'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos={project.dataaos}
      data-aos-duration={project.duration}
    >
      {/* Image section (fixed 160px height) */}
      <div className="relative h-40 min-h-[160px] max-h-[160px] overflow-hidden">
        {/* Project name and logo at top of image */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center p-3 bg-gradient-to-b from-black/40 to-transparent">
          <div className={`p-2 sm:p-3 rounded-full mr-2 sm:mr-3 ${color === 'light' ? 'bg-gray-800' : 'bg-gray-600'}`}>
            {project.logoUrl}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white truncate">
            {project.name}
          </h3>
        </div>

        {/* Image container */}
        <div className="absolute inset-0">
          <img
            src={project.imgUrl}
            alt={project.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
            loading="lazy"
          />
        </div>

        {/* Hover Action Buttons */}
        <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-2 sm:gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href={project.demoUrl}
            className={`p-2 sm:p-3 rounded-full ${color === 'light' ? 'bg-white text-gray-800' : 'bg-gray-900 text-white'} hover:bg-opacity-90 transition-colors flex items-center text-xs sm:text-sm`}
            aria-label={`View ${project.name} demo`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsArrowRightShort size={20} className="mr-1" />
            <span className="font-medium">Demo</span>
          </a>
          <a
            href={project.githubUrl}
            className={`p-2 sm:p-3 rounded-full ${color === 'light' ? 'bg-white text-gray-800' : 'bg-gray-900 text-white'} hover:bg-opacity-90 transition-colors flex items-center text-xs sm:text-sm`}
            aria-label={`View ${project.name} code on GitHub`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={18} className="mr-1 sm:mr-2" />
            <span className="font-medium">Code</span>
          </a>
        </div>
      </div>

      {/* Content section (fixed 240px height) */}
      <div className="px-4 sm:px-6 py-4 flex flex-col h-60 min-h-[240px] max-h-[240px]">
        {/* Description with bullet points */}
        <ul className="space-y-1 sm:space-y-2 overflow-y-auto flex-grow custom-scrollbar">
          {project.description.slice(0, 4).map((point, index) => (
            <li key={index} className="flex items-start">
              <span className={`inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full mt-1.5 sm:mt-2 mr-1.5 sm:mr-2 flex-shrink-0 ${color === 'light' ? 'bg-gray-600' : 'bg-gray-400'}`}></span>
              <p className={`text-xs sm:text-sm ${color === 'light' ? 'text-gray-600' : 'text-gray-300'} line-clamp-3`}>
                {point}
              </p>
            </li>
          ))}
        </ul>

        {/* Tech stack chips - always shows at bottom */}
        <div className="mt-auto pt-2">
          <div className="flex flex-wrap gap-1">
            {(project.techStack || []).slice(0, 5).map((tech, index) => (
              <span 
                key={index}
                className={`text-xs px-2 py-1 rounded ${color === 'light' ? 'bg-gray-200 text-gray-700' : 'bg-gray-700 text-gray-200'}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Add this to your global CSS for consistent scrollbars */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: ${color === 'light' ? '#f1f1f1' : '#374151'};
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${color === 'light' ? '#888' : '#4b5563'};
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
}

export default PortfolioItems;