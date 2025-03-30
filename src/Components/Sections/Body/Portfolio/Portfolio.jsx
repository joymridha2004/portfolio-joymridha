import { useContext, useState, useRef, useEffect } from 'react';
import { DataContext } from '../../../../App';
import PortfolioItems from './PortfolioItems';
import { portfolioData } from './portfolioData';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Portfolio() {
    const { color } = useContext(DataContext);  
    const [activeTab, setActiveTab] = useState('all');
    const [currentPage, setCurrentPage] = useState(0);
    const [autoRotate, setAutoRotate] = useState(window.innerWidth < 640);
    const gridRef = useRef(null);
    const containerRef = useRef(null);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const rotationInterval = useRef(null);
    
    // Responsive projects per page
    const getProjectsPerPage = () => {
        if (window.innerWidth < 640) return 1;
        if (window.innerWidth >= 640 && window.innerWidth < 1100) return 3;
        if (window.innerWidth >= 1100 && window.innerWidth < 1300) return 4; // 2x2 grid
        return 6; // default for larger screens
    };
    
    const [projectsPerPage, setProjectsPerPage] = useState(getProjectsPerPage());

    const getRotationInterval = () => {
        if (window.innerWidth < 640) return 3000;
        if (window.innerWidth < 1100) return 5000;
        if (window.innerWidth >= 1100 && window.innerWidth < 1300) return 5000;
        return 10000;
    };

    useEffect(() => {
        const handleResize = () => {
            setProjectsPerPage(getProjectsPerPage());
            setCurrentPage(0);
            if (window.innerWidth < 640 && !autoRotate) {
                setAutoRotate(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [autoRotate]);

    const filteredProjects = activeTab === 'all' 
        ? portfolioData 
        : portfolioData.filter(project => project.tag === activeTab);

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const visibleProjects = filteredProjects.slice(
        currentPage * projectsPerPage,
        (currentPage + 1) * projectsPerPage
    );

    const startAutoRotation = () => {
        if (!autoRotate || filteredProjects.length <= projectsPerPage) return;
        clearInterval(rotationInterval.current);
        rotationInterval.current = setInterval(() => {
            setCurrentPage(prev => (prev + 1) % totalPages);
        }, getRotationInterval());
    };

    const stopAutoRotation = () => {
        clearInterval(rotationInterval.current);
    };

    const toggleAutoRotate = () => {
        setAutoRotate(prev => !prev);
    };

    useEffect(() => {
        if (autoRotate) {
            startAutoRotation();
        } else {
            stopAutoRotation();
        }
        return () => stopAutoRotation();
    }, [autoRotate, filteredProjects.length, projectsPerPage, totalPages]);

    const handlePrev = () => {
        stopAutoRotation();
        setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
        if (autoRotate) setTimeout(startAutoRotation, getRotationInterval());
    };

    const handleNext = () => {
        stopAutoRotation();
        setCurrentPage(prev => (prev + 1) % totalPages);
        if (autoRotate) setTimeout(startAutoRotation, getRotationInterval());
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
        stopAutoRotation();
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) {
            if (autoRotate) startAutoRotation();
            return;
        }
        
        const distance = touchStart - touchEnd;
        if (distance > 50) handleNext();
        if (distance < -50) handlePrev();
        
        setTouchStart(null);
        setTouchEnd(null);
        if (autoRotate) setTimeout(startAutoRotation, getRotationInterval());
    };

    useEffect(() => {
        setCurrentPage(0);
        if (autoRotate) startAutoRotation();
    }, [activeTab]);

    // Get grid columns based on screen size
    const getGridColumns = () => {
        if (window.innerWidth < 640) return 'grid-cols-1';
        if (window.innerWidth >= 640 && window.innerWidth < 1100) return 'grid-cols-1';
        if (window.innerWidth >= 1100 && window.innerWidth < 1300) return 'grid-cols-2'; // 2 columns for 1100-1300
        return 'grid-cols-3'; // default 3 columns
    };

    return (
        <section id='portfolio' className={`container ${color === 'light' ? 'bg-body-color' : 'bg-black'} px-3 md:px-10 mt-20 md:pt-32 pb-20 relative`}>
            <div className='flex flex-col items-center justify-center mb-12'>
                <h1 className={`${color === 'light' ? 'text-title-color-dark' : 'text-white'} font-bold text-4xl mb-2`}>My Portfolio</h1>
                <div className="flex items-center gap-2">
                    <p className={`${color === 'light' ? 'text-gray-600' : 'text-gray-400'} text-lg`}>Projects auto-change</p>
                    <div className="flex items-center gap-1">
                        <button 
                            onClick={toggleAutoRotate}
                            className={`relative w-12 h-6 rounded-full transition-all duration-300 flex items-center ${
                                autoRotate 
                                    ? color === 'light' ? 'bg-green-500' : 'bg-green-600'
                                    : color === 'light' ? 'bg-gray-300' : 'bg-gray-600'
                            }`}
                            aria-label={autoRotate ? "Pause auto-rotate" : "Play auto-rotate"}
                        >
                            <span className={`absolute w-5 h-5 rounded-full bg-white transition-all duration-300 ${
                                autoRotate ? 'left-7' : 'left-1'
                            }`}></span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-wrap items-center justify-center gap-4 mb-16'>
                {['all', 'web', 'app', 'design'].map((tab) => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)} 
                        className={`px-4 py-2 rounded-lg transition-all duration-300 capitalize text-sm sm:text-base ${
                            activeTab === tab 
                                ? color === 'light' ? 'bg-gray-800 text-white' : 'bg-gray-700 text-white'
                                : color === 'light' ? 'bg-gray-100 text-gray-800' : 'bg-gray-800 text-gray-300'
                        } shadow-md hover:bg-opacity-90`}
                    >
                        {tab === 'all' ? 'All Projects' : 
                         tab === 'web' ? 'Web Apps' : 
                         tab === 'app' ? 'Mobile Apps' : 'UI/UX Designs'}
                    </button>
                ))}
            </div>

            <div className="relative pb-12 sm:pb-0">
                <div className="flex items-center justify-center gap-2 sm:gap-4 relative px-8 sm:px-0">
                    {window.innerWidth < 640 && filteredProjects.length > projectsPerPage && (
                        <button 
                            onClick={handlePrev}
                            className={`sm:hidden absolute left-4 z-10 p-3 rounded-full ${
                                color === 'light' ? 'bg-white text-gray-800' : 'bg-gray-700 text-white'
                            } shadow-md hover:bg-opacity-90 transition-all`}
                            aria-label="Previous projects"
                        >
                            <FiChevronLeft size={24} />
                        </button>
                    )}

                    {filteredProjects.length > projectsPerPage && (
                        <button 
                            onClick={handlePrev}
                            className={`hidden sm:flex p-2 sm:p-3 rounded-full ${
                                color === 'light' ? 'bg-white text-gray-800' : 'bg-gray-700 text-white'
                            } shadow-md hover:bg-opacity-90 transition-all`}
                            aria-label="Previous projects"
                        >
                            <FiChevronLeft size={24} />
                        </button>
                    )}

                    <div 
                        ref={containerRef}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        className="w-full overflow-hidden sm:overflow-visible"
                    >
                        <div 
                            ref={gridRef}
                            className={`grid ${getGridColumns()} gap-4 sm:gap-6 md:gap-8 place-items-center transition-all duration-300 ${
                                window.innerWidth < 640 ? 'flex snap-x snap-mandatory scroll-smooth' : 'w-full'
                            }`}
                        >
                            {visibleProjects.map((project, index) => (
                                <div 
                                    key={`${project.name}-${index}`}
                                    className={window.innerWidth < 640 ? "flex-shrink-0 w-full snap-center px-2 pb-4" : ""}
                                >
                                    <PortfolioItems project={project} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {window.innerWidth < 640 && filteredProjects.length > projectsPerPage && (
                        <button 
                            onClick={handleNext}
                            className={`sm:hidden absolute right-4 z-10 p-3 rounded-full ${
                                color === 'light' ? 'bg-white text-gray-800' : 'bg-gray-700 text-white'
                            } shadow-md hover:bg-opacity-90 transition-all`}
                            aria-label="Next projects"
                        >
                            <FiChevronRight size={24} />
                        </button>
                    )}

                    {filteredProjects.length > projectsPerPage && (
                        <button 
                            onClick={handleNext}
                            className={`hidden sm:flex p-2 sm:p-3 rounded-full ${
                                color === 'light' ? 'bg-white text-gray-800' : 'bg-gray-700 text-white'
                            } shadow-md hover:bg-opacity-90 transition-all`}
                            aria-label="Next projects"
                        >
                            <FiChevronRight size={24} />
                        </button>
                    )}
                </div>

                {filteredProjects.length > projectsPerPage && (
                    <div className="flex justify-center mt-8 mb-4 sm:mt-6 gap-2">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentPage(index);
                                    if (autoRotate) startAutoRotation();
                                }}
                                className={`w-3 h-3 rounded-full transition-all ${
                                    index === currentPage 
                                        ? color === 'light' ? 'bg-gray-800' : 'bg-white'
                                        : color === 'light' ? 'bg-gray-300' : 'bg-gray-600'
                                }`}
                                aria-label={`Go to page ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Portfolio;