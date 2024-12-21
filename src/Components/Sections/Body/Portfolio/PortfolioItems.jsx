// import React from 'react'

function PortfolioItems({ item }) {
  const { name, abslogo1, abslogo2, imgUrl, logoUrl, dataaos, duration } = item
  return (
    <>
    <li data-aos={dataaos} data-aos-duration={duration}  className="relative relative-parent ml-2 mt-4 md:w-2/3 rounded-lg border-2 transition-all duration-300 hover:border-black">
      <img className="rounded-t-md hover:opacity-60" src={imgUrl} alt="" />
      <div className="flex items-center gap-4 rounded-b-md bg-black p-3">
        <h1>{logoUrl}</h1>
        <h1 className="font-bold text-white">{name}</h1>
        <div className='absolute-element hidden transition-all duration-300'>
          <div className='absolute flex items-center gap-7 transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2  z-30 rounded-full'>
            <h1 className="border-black z-30 px-3 py-3 cursor-pointer rounded-full bg-white">{abslogo1}</h1>
            <h1 className="border-black z-30 px-3 py-3 cursor-pointer rounded-full bg-white">{abslogo2}</h1>
        </div>
        </div>
      </div>
    </li>
    </>
  )
}

export default PortfolioItems