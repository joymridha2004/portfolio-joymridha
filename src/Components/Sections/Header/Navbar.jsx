// Navbar.js
import React, { useRef, useEffect, useState, useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import { AiFillGitlab } from "react-icons/ai";
import { ImTelegram } from "react-icons/im";
import { MdHomeRepairService } from "react-icons/md";
import { BsFillGridFill } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import Switch from './Switch'; // Import the Switch component
import { DataContext } from '../../../App';

function Navbar() {
  const { toggle, settoggle, color } = useContext(DataContext);
  const [active, setActive] = useState('home');

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        settoggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const activesection = (section) => setActive(section);

  const navmenu = (icon, name, link) => (
    <ScrollLink
      spy={true}
      smooth={true}
      duration={500} // 500ms scroll duration for all sections
      offset={-70}  // adjust if navbar overlaps sections
      onClick={() => settoggle(false)}
      to={link}
      onSetActive={() => activesection(link)}
    >
      <div className="flex flex-col items-center cursor-pointer">
        <div className="block md:hidden mx-auto">{icon}</div>
        <h1
          className={`text-xs ${
            active === link ? 'text-orange-400' : ''
          } md:text-sm hover:text-opacity-60 transition-all duration-200`}
        >
          {name}
        </h1>
      </div>
    </ScrollLink>
  );

  return (
    <>
      <div
        ref={dropdownRef}
        className={`${color === 'light' ? 'bg-white' : 'bg-black'} md:bg-none md:bg-transparent md:backdrop-filter md:backdrop-blur-sm fixed left-0 md:top-0 md:bottom-auto w-full z-50 bottom-0 top-auto`}
      >
        <nav className="md:container flex items-center justify-between px-5 md:px-10 py-3">
          <div className="flex items-center gap-5">
            <a
              href="#index.html"
              className={`text-xl font-bold ${
                color === 'light' ? 'text-title-color-dark' : 'text-body-color'
              }`}
            >
              JM
            </a>
            {/* New Switch Component */}
            <Switch />
          </div>
          <div
            className={`fixed w-full h-48 md:h-auto ${
              toggle ? 'bottom-0' : '-bottom-full'
            } md:static left-0 ${
              color === 'light' ? 'bg-white' : 'bg-black'
            } md:bg-none md:bg-transparent px-7 p-6 md:p-0 rounded-t-3xl transition-all duration-300`}
          >
            <ul className="grid grid-cols-3 md:flex md:items-center gap-7 md:gap-10 md:justify-end">
              {navmenu(<HomeIcon />, 'Home', 'home')}
              {navmenu(<PersonIcon />, 'About', 'about')}
              {navmenu(<AiFillGitlab size={25} />, 'Skills', 'skill')}
              {navmenu(<DescriptionIcon size={22} />, 'Services', 'service')}
              {navmenu(<MdHomeRepairService size={25} />, 'Portfolio', 'portfolio')}
              {navmenu(<ImTelegram size={25} />, 'Contact', 'contact')}
            </ul>
            <div
              className="md:hidden flex items-center justify-end absolute bottom-4 right-5"
              onClick={() => settoggle(!toggle)}
            >
              <RxCrossCircled size={24} />
            </div>
          </div>
          <div className="md:hidden" onClick={() => settoggle(!toggle)}>
            <BsFillGridFill size={24} />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
