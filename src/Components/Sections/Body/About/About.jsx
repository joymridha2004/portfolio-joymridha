import React, { useContext, useEffect } from 'react'
import dev from '../../../../assets/dev-working_rounded.gif';
import night from '../../../../assets/dev-working_rounded_nignt.gif';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import { BiSupport } from "react-icons/bi";
import CV from '../../../../assets/JoyMridha_AndroidDeveloper_Resume.pdf';
import { DataContext } from '../../../../App';
import AOS from 'aos';
import 'aos/dist/aos.css'
function About() {
    const { color } = useContext(DataContext)

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, [])

      useEffect(() => {
        // Refresh AOS animations when mode changes
        AOS.refresh();
    }, [color]);
    
  return (
    <>
        <section id='about' className={`container ${color === 'light' ? 'bg-body-color' : 'bg-black'} px-3 md:px-10 mt-20 md:pt-32`}>
            {/* heading */}
            <div className='flex flex-col items-center justify-center'>
                <h1 className={`${color === 'light' ? 'text-title-color-dark' : 'text-body-color'} font-bold text-4xl`}>About Me</h1>
                <p>My Introduction</p>
            </div>
            {/* about iamge and description */}
            <div className='flex-col md:flex-row mt-10 flex items-center justify-between gap-5 xl:gap-10'>
                <div className='flex-[.5]'><img src={color === 'light' ? dev : night} alt="" /></div>
                <div className='flex-[.5] flex flex-col '>
                    <div className='flex items-center gap-4 xl:gap-8 mb-5'>
                        {/* box1 */}
                        <div data-aos="zoom-in" className={`flex flex-col items-center gap-3 border-[2px]  ${color === 'light' ? 'border-white' : 'border-text-color'} hover:border-white transition-all duration-500 py-3 px-3 md:py-4 md:px-8 rounded-xl shadow-lg`}>
                            <StarsRoundedIcon />
                            <h1>Experience</h1>
                            <p className='text-sm text-text-color'>1+ Years</p>
                        </div>
                        {/* box2 */}
                        <div data-aos="zoom-in" className={`flex flex-col items-center gap-3 border-[2px] ${color === 'light' ? 'border-white' : 'border-text-color'} hover:border-white transition-all duration-500 py-3 px-3 md:py-4 md:px-8 rounded-xl shadow-lg`}>
                            <AssignmentTurnedInRoundedIcon />
                            <h1 className='text-md text-'>Completed</h1>
                            <p className='text-sm text-text-color'>10+ Projects</p>
                        </div>
                        {/* box3 */}
                        <div data-aos="zoom-in" className={`flex flex-col items-center gap-3 border-[2px] ${color === 'light' ? 'border-white' : 'border-text-color'} hover:border-white transition-all duration-500 py-3 px-3 md:py-4 md:px-8 rounded-xl shadow-lg`}>
                            <BiSupport size={26}/>
                            <h1>Support</h1>
                            <p className='text-sm text-text-color'>Online 24/7</p>
                        </div>
                    </div>
                    {/* description */}
                    <h1 className='text-text-color'>Android Developer, I build mobile applications with intuitive UI/UX and robust functionality, I have years of experience and many clients are happy wiht the projects carried out.</h1>
                    {/* button */}
                    {/* <div class="flex h-40 w-full flex-row items-center justify-center"> */}
                <div>
                  <button class="mt-10  animate-border inline-block rounded-xl bg-white bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-500 bg-[length:400%_400%] p-1">
                    <span class={`block rounded-xl ${color === 'light' ? 'bg-body-color' : 'bg-black'} px-3 py-2 font-bold `}>  <a href={CV} download="JoyMridha_AndroidDeveloper_Resume"> Resume </a> <span></span> </span>
                  </button>
                  </div>
                {/* </div>   */}
                </div>
            </div>
        </section>
    </>
  )
}

export default About 