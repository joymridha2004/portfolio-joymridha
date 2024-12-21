import { useContext, useState } from 'react'
import { AiTwotoneAppstore } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { SiAdobeindesign } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { LuWebhook } from "react-icons/lu";
import PortfolioItems from './PortfolioItems';
import { DataContext } from '../../../../App';
const items=[
    {name : 'Native Apps',
    abslogo1 : <BsArrowRightShort color='black'/>, 
    abslogo2 : <BsGithub color='black'/>, 
    imgUrl : 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', 
    logoUrl : <AiTwotoneAppstore color='white'/>, 
    tag : 'app',
    dataaos : "fade-up",
    duration: "1000"},

    {name : 'Web Apps',
    abslogo1 : <BsArrowRightShort color='black'/>, 
    abslogo2 : <BsGithub color='black'/>,
    imgUrl : 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=906&q=80', 
    logoUrl : <LuWebhook color='white'/>, 
    tag : 'web',
    dataaos : "fade-up",
    duration: "3000"},

    {name : 'Web Sites',
    abslogo1 : <BsArrowRightShort color='black'/>, 
    abslogo2 : <BsGithub color='black'/>,
    imgUrl : 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=820&q=80', 
    logoUrl : <LuWebhook color='white'/>, 
    tag : 'web',
    dataaos : "fade-up",
    duration: "1000"},

    {name : 'UI / UX Designs',
    abslogo1 : <BsArrowRightShort color='black'/>, 
    abslogo2 : <BsGithub color='black'/>,
    imgUrl : 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', 
    logoUrl : <SiAdobeindesign color='white'/>, 
    tag : 'design',
    dataaos : "fade-up",
    duration: "3000"}
];


function Portfolio() {
    const { color } = useContext(DataContext);  
    const [btntab, setBtntab] = useState(1);
    const [selectedItem, setSelecteditem] = useState('all');


    function btn1() {
        setBtntab(1);
        setSelecteditem('all');
    }
    function btn2() {
        setBtntab(2);
        setSelecteditem('web');
    }
    function btn3() {
        setBtntab(3);
        setSelecteditem('app');
    }
    function btn4() {
        setBtntab(4);
        setSelecteditem('design');
    }

    const filtereditem = selectedItem === 'all' ? items : items.filter(item => item.tag === selectedItem);


  return (
    <section id='portfolio' className={`container ${color === 'light' ? 'bg-body-color' : 'bg-black'} px-3 md:px-10 mt-20 md:pt-32`}>
    {/* heading */}
    <div className='flex flex-col items-center justify-center mb-7'>
            <h1 className={`${color === 'light' ? 'text-title-color-dark' : 'text-body-color'} font-bold text-4xl`}>My Portfolio</h1>
            <p>Most recent works</p>
    </div>
    {/* operate button */}

    <div className='flex item-center justify-center gap-8 mb-4'>
        {/* buttons */}
    <button onClick={btn1} className={`px-3 py-2 border-[2px] ${btntab === 1 ? color === 'light' ? 'Onshadow' : 'border-text-color hover:border-white' : 'shadow-lg'} transition-all duration-300 rounded-lg`}>
    <h1>All</h1>
    </button>
    <button onClick={btn2} className={`px-3 py-2 border-[2px] ${btntab === 2 ? color === 'light' ? 'Onshadow' : 'border-[2px] border-text-color hover:border-white' : 'shadow-lg'} transition-all duration-300 rounded-lg`}>
    <h1>Web</h1>
    </button>
    <button onClick={btn3} className={`px-3 py-2 border-[2px] ${btntab === 3 ? color === 'light' ? 'Onshadow' : 'border-[2px] border-text-color hover:border-white' : 'shadow-lg'} transition-all duration-300 rounded-lg`}>
    <h1>App</h1>
    </button>
    <button onClick={btn4} className={`px-3 py-2 border-[2px] ${btntab === 4 ? color === 'light' ? 'Onshadow' : 'border-[2px] border-text-color hover:border-white' : 'shadow-lg'} transition-all duration-300 rounded-lg`}>
    <h1>Design</h1>
    </button>
    </div>


    {/* portfolio Items */}

    <ul className='grid grid-cols-1 md:grid-cols-2 gap-y-4 place-items-center'>
        {filtereditem.map((item, i) => (
            <PortfolioItems item={item} key={i} />
        ))}
    </ul>

    </section>
  )
}

export default Portfolio