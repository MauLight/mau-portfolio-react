import React from 'react'

export const ImageHolder = ({ title, logline, id, img, position }) => {
  return (
    <div key={id} className='mx-auto w-[8vh] h-[13vh] sm:w-[20vh] sm:h-[30vh] lg:w-[30vh] lg:h-[45vh] min-[1400px]:w-[310px] min-[1400px]:h-[440px] object-contain object-center group relative overflow-hidden border-x-[4px] border-[#0e140e]'>
      {/* overlay */}
      <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>
      {/* img */}
      <img className={`quotes mx-auto w-[100%] h-[100%] object-cover ${position} group-hover:scale-125 group-hover:grayscale-0 transition-all duration-500`} src={img} alt='movie-poster' />
      {/* pretitle */}
      <div className="flex">
        <div className='absolute -bottom-full hidden sm:flex left-12 text-[#b5dac9] text-xs lg:text-2xl font-carbon group-hover:bottom-6 transition-all duration-500 z-50'>{`${title}`}</div>
        {/* title */}
      </div>
      <div className='absolute -bottom-full left-2 px-10 group-hover:bottom-14 transition-all duration-700 z-50'>
        <div className="flex gap-x-2">
          {logline.map((elem, i) => <span key={i} className='hidden min-[1400px]:flex text-xs font-carbon text-[#b5dac9] border rounded-full px-2'>{elem}</span>)}
        </div>
      </div>
    </div>
  )
}