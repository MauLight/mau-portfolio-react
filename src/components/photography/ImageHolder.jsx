import React from 'react'

export const ImageHolder = ({ title, logline, id, img, position }) => {
  return (
    <div key={id} className='mx-auto w-[60vh] min-[500px]:w-[30vh] h-[600px] min-[500px]:h-[45vh] min-[1400px]:w-[310px] min-[1400px]:h-[440px] object-contain object-center group relative overflow-hidden border-x-[4px] border-[#0e140e]'>
      {/* overlay */}
      <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>
      {/* img */}
      <img className={`quotes mx-auto w-[100%] h-[100%] object-cover ${position} group-hover:scale-125 group-hover:grayscale-0 transition-all duration-500`} src={img} alt='movie-poster' />
      {/* pretitle */}
      <div className="flex">
        <div className='flex absolute -bottom-full sm:flex left-[11%] min-[500px]:left-[6%] xl:left-[15%] text-[#b5dac9] text-3xl min-[500px]:max-xl:text-lg xl:text-2xl font-carbon glow group-hover:bottom-6 transition-all duration-500 z-50'>{`${title}`}</div>
        {/* title */}
      </div>
      <div className='absolute -bottom-full min-[500px]:left-[-18%] xl:left-[2%] px-10 group-hover:bottom-16 transition-all duration-700 z-50'>
        <div className="flex gap-x-2">
          {logline.map((elem, i) => <span key={i} className='min-[sm]:max-[1400px]:hidden flex text-xs font-carbon text-[#b5dac9] border rounded-full px-2'>{elem}</span>)}
        </div>
      </div>
    </div>
  )
}