import React, { useContext, useState, useEffect } from 'react'
import { FaReact } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";
import dev from '../../../../assets/under_development.png'
import { DataContext } from '../../../../App';
import AOS from 'aos';
import 'aos/dist/aos.css'
function Services() {
    const { color } = useContext(DataContext); 
    const [tab, setTab] = useState(1);

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <section id='service' className={`container ${color === 'light' ? 'bg-body-color' : 'bg-black'} px-3 md:px-10 mt-20 md:pt-32 mb-10`}>
        {/* heading */}
        <div className='flex flex-col items-center justify-center'>
                <h1 className={`${color === 'light' ? 'text-title-color-dark' : 'text-body-color'} font-bold text-4xl`}>Services</h1>
                <p>What I offer</p>
        </div>
        {/* Tabs and transition */}
        <div className='flex flex-col md:flex-row items-center justify-between md:mt-20 mt-8'>
              {/* tabs */}
              <div className='flex-[0.4] flex-row md:flex-col flex md:gap-5 gap-1'>
                  <button
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      onClick={() => setTab(1)}
                      className={`flex w-3/5 p-3 rounded-lg items-center md:gap-3 ${color === 'light' ? 'bg-gray-800 text-white' : 'text-black bg-white'
                          } opacity-80 ${tab === 1 ? 'animate-border bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-500 border-2' : ''
                          }`}
                      style={{
                          transition: 'all 0.3s ease-in-out',
                      }}
                      onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                      }}
                  >
                      <div
                          style={{
                              transition: 'transform 0.3s ease-in-out',
                              transform: tab === 1 ? 'scale(1.2)' : 'scale(1)',
                          }}
                      >
                          {color === 'light' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="26px" height="26px">
                              <path fill="#FFFFFF" d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 14 5.9902344 L 36 5.9902344 C 40.430666 5.9902344 44 9.5595687 44 13.990234 L 44 35.990234 C 44 40.4209 40.430666 43.990234 36 43.990234 L 14 43.990234 C 9.5693339 43.990234 6 40.4209 6 35.990234 L 6 13.990234 C 6 9.5595687 9.5693339 5.9902344 14 5.9902344 z M 22.572266 11.892578 C 22.187855 11.867986 21.790969 11.952859 21.433594 12.162109 C 20.480594 12.721109 20.161703 13.947391 20.720703 14.900391 L 22.53125 17.990234 L 16.666016 28 L 12 28 C 10.896 28 10 28.896 10 30 C 10 31.104 10.896 32 12 32 L 27.412109 32 C 27.569109 31.237 27.473203 30.409531 27.033203 29.644531 L 27.029297 29.640625 C 26.642297 28.966625 26.105469 28.416 25.480469 28 L 21.302734 28 L 28.978516 14.898438 C 29.536516 13.945438 29.216672 12.720109 28.263672 12.162109 C 27.309672 11.604109 26.085344 11.923953 25.527344 12.876953 L 24.849609 14.033203 L 24.171875 12.876953 C 23.8225 12.281328 23.212949 11.933564 22.572266 11.892578 z M 28.310547 19.941406 L 27.484375 21.314453 C 26.572375 22.830453 26.542953 24.706859 27.376953 26.255859 L 33.673828 37.001953 C 34.045828 37.637953 34.713391 37.990234 35.400391 37.990234 C 35.743391 37.990234 36.092156 37.902797 36.410156 37.716797 C 37.363156 37.158797 37.682047 35.933469 37.123047 34.980469 L 35.376953 32 L 38 32 C 39.104 32 40 31.104 40 30 C 40 28.896 39.104 28 38 28 L 33.033203 28 L 28.310547 19.941406 z M 14.625 34.003906 C 14.068 33.987906 13.526719 34.074328 13.011719 34.236328 L 12.566406 34.994141 C 12.007406 35.946141 12.32825 37.172469 13.28125 37.730469 C 13.59925 37.917469 13.946063 38.005859 14.289062 38.005859 C 14.976062 38.005859 15.644578 37.650625 16.017578 37.015625 L 17.09375 35.179688 C 16.50875 34.496688 15.653859 34.033906 14.630859 34.003906 L 14.625 34.003906 z" />
                          </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="26px" height="26px">
                              <path fill="#000000" d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 14 5.9902344 L 36 5.9902344 C 40.430666 5.9902344 44 9.5595687 44 13.990234 L 44 35.990234 C 44 40.4209 40.430666 43.990234 36 43.990234 L 14 43.990234 C 9.5693339 43.990234 6 40.4209 6 35.990234 L 6 13.990234 C 6 9.5595687 9.5693339 5.9902344 14 5.9902344 z M 22.572266 11.892578 C 22.187855 11.867986 21.790969 11.952859 21.433594 12.162109 C 20.480594 12.721109 20.161703 13.947391 20.720703 14.900391 L 22.53125 17.990234 L 16.666016 28 L 12 28 C 10.896 28 10 28.896 10 30 C 10 31.104 10.896 32 12 32 L 27.412109 32 C 27.569109 31.237 27.473203 30.409531 27.033203 29.644531 L 27.029297 29.640625 C 26.642297 28.966625 26.105469 28.416 25.480469 28 L 21.302734 28 L 28.978516 14.898438 C 29.536516 13.945438 29.216672 12.720109 28.263672 12.162109 C 27.309672 11.604109 26.085344 11.923953 25.527344 12.876953 L 24.849609 14.033203 L 24.171875 12.876953 C 23.8225 12.281328 23.212949 11.933564 22.572266 11.892578 z M 28.310547 19.941406 L 27.484375 21.314453 C 26.572375 22.830453 26.542953 24.706859 27.376953 26.255859 L 33.673828 37.001953 C 34.045828 37.637953 34.713391 37.990234 35.400391 37.990234 C 35.743391 37.990234 36.092156 37.902797 36.410156 37.716797 C 37.363156 37.158797 37.682047 35.933469 37.123047 34.980469 L 35.376953 32 L 38 32 C 39.104 32 40 31.104 40 30 C 40 28.896 39.104 28 38 28 L 33.033203 28 L 28.310547 19.941406 z M 14.625 34.003906 C 14.068 33.987906 13.526719 34.074328 13.011719 34.236328 L 12.566406 34.994141 C 12.007406 35.946141 12.32825 37.172469 13.28125 37.730469 C 13.59925 37.917469 13.946063 38.005859 14.289062 38.005859 C 14.976062 38.005859 15.644578 37.650625 16.017578 37.015625 L 17.09375 35.179688 C 16.50875 34.496688 15.653859 34.033906 14.630859 34.003906 L 14.625 34.003906 z" />
                          </svg>}
                      </div>
                      <h1 className='font-medium text-xs md:text-lg'>Application</h1>
                  </button>
                  <button
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      onClick={() => setTab(2)}
                      className={`flex w-3/5 p-3 rounded-lg items-center md:gap-3 ${color === 'light' ? 'bg-gray-800 text-white' : 'text-black bg-white'
                          } opacity-80 ${tab === 2 ? 'animate-border bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-500 border-2' : ''
                          }`}
                      style={{
                          transition: 'all 0.3s ease-in-out',
                      }}
                      onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                      }}
                  >
                      <FaReact size={tab === 2 ? 30 : 26} />
                      <h1 className='font-medium text-xs md:text-lg'>React Websites</h1>
                  </button>
                  <button
                      data-aos="fade-up"
                      data-aos-duration="3000"
                      onClick={() => setTab(3)}
                      className={`flex w-3/5 p-3 rounded-lg items-center md:gap-3 ${color === 'light' ? 'bg-gray-800 text-white' : 'text-black bg-white'
                          } opacity-80 ${tab === 3 ? 'animate-border bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-500 border-2' : ''
                          }`}
                      style={{
                          transition: 'all 0.3s ease-in-out',
                      }}
                      onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                      }}
                  >
                      <SiFigma size={tab === 3 ? 30 : 26} />
                      <h1 className='font-medium text-xs md:text-lg'>UI/UX Designing</h1>
                  </button>
              </div>
            {/* tab-component */}
            <div className={`flex-[0.6] border-[2px] ${color === 'light' ? 'border-white' : 'border-text-color'} hover:border-white transition-all duration-500 rounded-xl shadow-2xl w-full mt-7 md:mt-0 p-4`}>
            { tab === 1 && <div className='text-center'>
                    <h1 className='text-2xl font-bold mb-3'>Application</h1>
                    <p className='px-10'>Providing high-quality native and cross-platform app development services.</p>

                    <ul className='mt-8 flex flex-col gap-3 text-sm'>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17'/> 
                        <h1 data-aos="fade-left" data-aos-duration="1000" >I develop native Android apps using Kotlin and Java.</h1>
                        </li>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17' /> 
                        <h1 data-aos="fade-left" data-aos-duration="1500" >Create cross-platform apps with Flutter and React Native.</h1>
                        </li>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17' /> 
                        <h1 data-aos="fade-left" data-aos-duration="1900" >Design responsive and engaging UI/UX using Figma.</h1>
                        </li>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17' /> 
                        <h1 data-aos="fade-left" data-aos-duration="2100">Integrate APIs for real-time data functionality.</h1>
                        </li>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17' /> 
                        <h1 data-aos="fade-left" data-aos-duration="2500">Optimize app performance and scalability.</h1>
                        </li>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17' /> 
                        <h1 data-aos="fade-left" data-aos-duration="2700">Implement secure authentication with Firebase.</h1>
                        </li>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17' /> 
                        <h1 data-aos="fade-left" data-aos-duration="3000">Provide app maintenance and debugging support.</h1>
                        </li>
                    </ul>
                </div>}
                { tab === 2 && <div className='text-center'>
                    <h1 className='text-2xl font-bold mb-3'>React Websites</h1>
                    <p className='px-10'>Providing services with quality work to clients and companies.</p>

                    <ul className='mt-8 flex flex-col gap-3 text-sm'>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17'/> 
                        <h1 data-aos="fade-left" data-aos-duration="1000" >I design and develop responsive websites using React.</h1>
                        </li>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17' /> 
                        <h1 data-aos="fade-left" data-aos-duration="1500" >Build projects with efficient state management.</h1>
                        </li>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17' /> 
                        <h1 data-aos="fade-left" data-aos-duration="1900" >Create cross-browser compatible and visually engaging interfaces.</h1>
                        </li>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17' /> 
                        <h1 data-aos="fade-left" data-aos-duration="2100">Optimize website performance for faster load times.</h1>
                        </li>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17' /> 
                        <h1 data-aos="fade-left" data-aos-duration="2500">Integrate APIs for dynamic and interactive functionality.</h1>
                        </li>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17' /> 
                        <h1 data-aos="fade-left" data-aos-duration="2700">Focus on debugging and troubleshooting for seamless user experience.</h1>
                        </li>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17' /> 
                        <h1 data-aos="fade-left" data-aos-duration="3000">Deliver high-quality solutions tailored to client needs.</h1>
                        </li>
                    </ul>
                </div>}
                { tab === 3 && <div className='text-center'>
                    <h1 className='text-2xl font-bold mb-3'>UI/UX Designing</h1>
                    <p className='px-10'>Providing services with quality designs and component building.</p>

                    <ul className='mt-8 flex flex-col gap-3 text-sm'>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17'/> 
                        <h1 data-aos="fade-left" data-aos-duration="1000">Design responsive and user-centric interfaces for diverse platforms.</h1>
                        </li>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17'/> 
                        <h1 data-aos="fade-left" data-aos-duration="1500">Create detailed wireframes and prototypes to visualize concepts.</h1>
                        </li>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17'/> 
                        <h1 data-aos="fade-left" data-aos-duration="1900">Utilize tools like Figma and Adobe XD for high-quality designs.</h1>
                        </li>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17'/> 
                        <h1 data-aos="fade-left" data-aos-duration="2100">Communicate effectively with clients to meet design expectations.</h1>
                        </li>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17'/> 
                        <h1 data-aos="fade-left" data-aos-duration="2500">Focus on typography and color theory for aesthetic appeal.</h1>
                        </li>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17'/> 
                        <h1 data-aos="fade-left" data-aos-duration="2700">Maintain attention to detail to deliver pixel-perfect designs.</h1>
                        </li>
                        <li className='flex items-center gap-4'>
                        <AiOutlineCheckCircle color='#4CBB17'/> 
                        <h1 data-aos="fade-left" data-aos-duration="3000">Stay updated with the latest design trends and technologies.</h1>
                        </li>
                    </ul>
                </div>}
            </div>
        </div>
    </section>
  )
}

export default Services