import { useState, useEffect, createContext } from "react";
import Navbar from "./Components/Sections/Header/Navbar";
import Hero from "./Components/Sections/Body/Info/Hero";
import About from "./Components/Sections/Body/About/About";
import Skills from "./Components/Sections/Body/Skills/Skills";
import Services from "./Components/Sections/Body/Services/Services";
import Qualification from "./Components/Sections/Body/Qualification/Qualification";
import Portfolio from "./Components/Sections/Body/Portfolio/Portfolio";
import Contact from "./Components/Sections/Body/Contact/Contact";
import Footer from "./Components/Sections/Footer/Footer";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
const DataContext = createContext();
function App() {
  ///States
  const [toggle, settoggle] = useState(false);
  const [color, setColor] = useState('light');
  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      // Modify the HTML element
      if(color === 'light'){
        htmlElement.style.backgroundColor = '#fafafa';
      }else{
        htmlElement.style.backgroundColor = '#000000';
      }
    }
  }, [color]);
  
  
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // per h-screen scroll
    const screenHeight = window.innerHeight;
    setIsVisible(scrollTop >= screenHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <>
    <DataContext.Provider value={{ color, toggle, settoggle, setColor }} >
      <div className={`text-selection overflow-hidden ${color === 'light' ? 'light' : 'dark'} font-Sora`}>
          <Navbar/>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Portfolio />
          <Contact />
          <Footer />
            <div onClick={scrollToTop} className={`hidden lg:block fixed ${isVisible === false ? '-bottom-10' : 'bottom-10'} transition-all z-20 duration-500 right-10 cursor-pointer`}>
              <BsFillArrowUpSquareFill size={35}/>
            </div>
      </div>
      </DataContext.Provider>
    </>
  );
}

export default App;
export {DataContext};