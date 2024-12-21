import React from 'react'

function SkillEach({ logo, skillname, level, disabled }) {
  return (
    <div className={`flex gap-2 items-left p-2 ${disabled === true ? 'opacity-30' : ''}`}>
        {logo}
        <div className='flex flex-col text-left'>
            <h1 className='font-bold text-md md:text-lg'>{skillname}</h1>
            <p className='text-text-color text-sm'>{level}</p>
        </div>
    </div>
  )
}

export default SkillEach