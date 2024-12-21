import React, { useContext, useState, useEffect } from 'react'
import { GoGoal } from "react-icons/go";
import { MdDeveloperMode } from "react-icons/md";
import { DataContext } from '../../../../App';
import AOS from 'aos';
import 'aos/dist/aos.css'  
function Qualification() {
    const { color } = useContext(DataContext);
    const [btntab, setBtntab] = useState(1);

    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, [])

  return (
    <section className={`container ${color === 'light' ? 'bg-body-color' : 'bg-black'} px-3 md:px-10 mt-20 md:mt-32`}>
        {/* heading */}
        <div className='flex flex-col items-center justify-center mb-7'>
                <h1 className={`${color === 'light' ? 'text-title-color-dark' : 'text-body-color'} font-bold text-4xl`}>Qualification</h1>
                <p>My Personal Journey</p>
        </div>
        {/* operate button */}

        <div className='flex item-center justify-center gap-8'>
        <button onClick={() => setBtntab(1)} className={`px-3 py-2 border-[2px] ${btntab === 1 ? color === 'light' ? 'Onshadow' : 'border-text-color hover:border-white' : 'shadow-lg'} transition-all duration-300 rounded-lg flex items-center gap-3`}>
        <GoGoal/>
        <h1>Education</h1>
        </button>
            <button onClick={() => setBtntab(2)} className={`px-3 py-2 border-[2px] ${btntab === 2 ? color === 'light' ? 'Onshadow' : 'border-[2px] border-text-color hover:border-white' : 'shadow-lg'} transition-all duration-300 rounded-lg flex items-center gap-3`}>
            <MdDeveloperMode/>
            <h1>Experience</h1>
            </button>
        </div>

        {/* timeline */}
        
        {/* <!-- component --> */}
    { btntab === 1 && <div class="pt-6 flex flex-col justify-center sm:py-12">
    <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

    <div class="relative text-gray-700 antialiased text-sm font-semibold">

      {/* <!-- Vertical bar running through middle --> */}
      <div class="hidden sm:block w-1 bg-gray-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

      {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-start w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pr-8">
              <div data-aos="fade-right" class="p-4 bg-white rounded shadow-lg">
                Masterying App Development
                <p className='text-xs text-text-color'>FullStack Development</p>
              </div>
            </div>
          </div>
          <div class="rounded-full bg-gray-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>
      </div>

      {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-end w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pl-8">
              <div data-aos="fade-left" class="p-4 bg-white rounded shadow-lg">
              Completed BCA 
                <p className='text-xs text-text-color'>Netaji Subash Engineering College</p>
              </div>
            </div>
          </div>
          <div class=" rounded-full bg-gray-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="rotate-infinite h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        </div>
      </div>

      {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-start w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pr-8">
              <div data-aos="fade-right" class="p-4 bg-white rounded shadow-lg">
              Completed Higher Secondary
                <p className='text-xs text-text-color'>Garfa D.N.M High School</p>
              </div>
            </div>
          </div>
          <div class="rounded-full bg-gray-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

    



    </div>

  </div>
</div>}
    {/* 2nd component for experience */}
    { btntab === 2 && <div class="py-6 flex flex-col justify-center sm:py-12">
    <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

    <div class="relative text-gray-700 antialiased text-sm font-semibold">

      {/* <!-- Vertical bar running through middle --> */}
      <div class="hidden sm:block w-1 bg-gray-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

      {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-start w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pr-8">
              <div data-aos="fade-right" class="p-4 bg-white rounded shadow-lg">
                Jr Software Developer 
                <p className='text-xs text-text-color'>Connected Bytes Software Services</p>
              </div>
            </div>
          </div>
          <div class="rounded-full bg-gray-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="rotate-infinite h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        </div>
      </div>

      {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-end w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pl-8">
              <div data-aos="fade-left" class="p-4 bg-white rounded shadow-lg">
                Android Developer Intern
                <p className='text-xs text-text-color'>Clearspot.ai</p>
              </div>
            </div>
          </div>
          <div class="rounded-full bg-gray-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>
      </div>

      {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-start w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pr-8">
              <div data-aos="fade-right" class="p-4 bg-white rounded shadow-lg">
                Android Developer Intern
                <p className='text-xs text-text-color'>ARS Technologies</p>
              </div>
            </div>
          </div>
          <div class="rounded-full bg-gray-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

    



    </div>

  </div>
</div>}
    </section>
    
  )
}

export default Qualification