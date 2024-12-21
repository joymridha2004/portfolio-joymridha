import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
function Error({ seterror, color }) {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, [])
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => seterror(false)}></div>
      <div data-aos="zoom-in" className="w-[300px] rounded-md bg-white shadow-2xl flex items-center flex-col justify-center gap-3 p-5 relative z-10">
        <h1 className="text-lg text-center font-bold text-orange-500">Please try again later!</h1>
        <button onClick={() => seterror(false)} className="px-2 rounded-md py-1 border-2 border-gray-500">Close</button>
      </div>
    </div>
  )
}

export default Error