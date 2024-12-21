import React, { useContext, useEffect } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Typewriter from 'typewriter-effect';
import { BsTwitterX } from "react-icons/bs";
import welcome2 from '../../../../assets/welcome2.svg'
import { BiMouse } from "react-icons/bi";
import { BsArrowDownShort } from "react-icons/bs";
import oggy from '../../../../assets/Happy Dance Sticker by Oggy and the Cockroaches for iOS & Android _ GIPHY.gif'
import hand from '../../../../assets/hand.svg'
import { DataContext } from '../../../../App';
import  MobileCard  from '../../../MobileCard'
import  ButtonView  from '../../../ButtonView'
import AOS from 'aos';
import 'aos/dist/aos.css'
function Home() {
  const { color } = useContext(DataContext);  

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, [])

  return (
    <>
      <section id='home' className={`mt-20 md:pt-20 ${color === 'light' ? 'bg-body-color' : 'bg-title-color-dark'} container px-3 md:px-10`}>
        <div className='flex flex-wrap  items-start  gap-4 md:items-center md:gap-14 lg:gap-28'>
          {/* logos and social media handles */}
          <div data-aos="fade-up" className='flex flex-[0.1] order-2 md:order-1 flex-col md:mt-0 mt-14 items-center gap-5'>
            <a href="https://twitter.com/joymridha14"><BsTwitterX/></a>
            <a href="https://github.com/joymridha2004" ><GitHubIcon /></a>    
            <a href="https://www.linkedin.com/in/joymridha"><div><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
            </svg></div></a> 
          </div>
          {/* name and image  */}
          <div className='flex flex-[0.9] order-1 md:order-2 flex-col-reverse gap-10 md:flex-row justify-between md:items-center w-full'>
            {/* name, description and contact button */}
            <div className='flex flex-1 flex-col items-start gap-4 lg:pr-10'>
              <div data-aos="fade-left" className='flex items-center relative gap-1 md:gap-4 mb-2'>
                <div className='cool' ></div>
                <h1 className='text-7xl'>Joy Mridha</h1>
                <img src={hand} alt="" />
              </div>
              <h1 className={`${color === 'light' ? 'line' : 'darkline'} pl-16`}>
                <Typewriter
                options={{
                  strings: ['Android Developer', 'React Developer','Flutter Developer'],
                  autoStart: true,
                  loop: true,
            }}
            /></h1>
              <h1 className='text-text-color'>I am a dedicated Android Developer from India, passionate about crafting user-focused mobile solutions with innovative designs and seamless functionality.</h1>
              {/* button */}
                <a data-aos="fade-right" href="#contact">
                <div class="flex h-40 w-full flex-row items-center justify-center">
                  <button class="animate-border inline-block rounded-xl bg-white bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-500 bg-[length:400%_400%] p-1">
                    <span class={`block rounded-lg  ${color === 'light' ? 'bg-body-color' : 'bg-black'} px-3 py-2 font-bold `}> Say Hello <span><SendRoundedIcon/></span> </span>
                  </button>
                </div>
                </a>
            </div>
            {/* image  */}
            <div data-aos="fade-down" className='flex-1 relative'>
              {/* <img src={oggy} className=' mx-auto ml-5 image object-cover rounded-full left-0 h-[250px] w-[250px] md:h-[300px] md:w-[300px]' alt="" /> */}
              <MobileCard mobile= {oggy}/>
              {/* welcome message */}
              {/* <img src={welcome2} className='absolute left-1/4 animate-waving lg:left-1/3 z-20 top-0' alt="" /> */}
            </div>
          </div>
        </div>

        {/* Scroll-Mouse */}
        <div className='animate-waving mt-12 ml-20 flex items-center gap-2 hover:translate-y-3 cursor-pointer transtition-all duration-500'>
            <BiMouse size={32} />
            <h1>Scroll Down</h1>
            <BsArrowDownShort size={32}/>
        </div>
      </section>
    </>
  )
}

export default Home