import React from 'react'
import { videos1 } from '../utils/videos'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../variants'
import { useState } from 'react'

const FilmCard = ({ video }) => {

  // eslint-disable-next-line no-unused-vars
  const [hover, setHover] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Link key={video.id} to={`/films/${video.id}`}>
      <div
        key={video.id}
        style={{ backgroundColor: isHovering ? video.color : 'black' }}
        onMouseEnter={() => setIsHovering(true)}
        onClick={() => setHover(true)}
        onMouseLeave={() => {
          setHover(false)
          setIsHovering(false)
        }}
        className="flex bg-black gap-x-20 transition-color duration-200 p-0 rounded-[10px] justify-start items-center">
        <motion.div
          variants={fadeInSmall('down', video.fade)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}

          className="flex flex-col w-full lg:w-[40vw] min-[200px]:max-sm:px-2"
        >

          <div className={`${video.rounded} mx-auto w-[100%] lg:w-[40vw] h-full lg:max-h-[70vh] object-contain object-center rounded-l-[10px] group relative overflow-hidden`}>
            <img src={video.image} className={'w-full max-h-full object-cover hover:scale-[110%] transition-scale duration-500'} />

          </div>

        </motion.div>
        <div className="hidden lg:flex flex-col justify-center">
          <h1 className='font-primary min-[200px]:max-sm:mt-3 text-xl md:text-8xl uppercase'>{video.title}</h1>
          <div className="hidden sm:flex justify-start gap-x-2 my-5">
            <p className='font-carbon text-sm'>{video.date}</p>
            <div className="border rounded-full px-5">
              <p className='font-carbon text-lg'>{video.genre}</p>
            </div>
          </div>
          <p className='font-carbon text-lg mt-10'>{video.logline}</p>
        </div>
      </div>
    </Link>
  )
}

export const Filmmaking = () => {

  return (
    <div className="flex flex-col gap-x-5 gap-y-20 px-0 lg:px-20 bg-[#10100e] pb-32">

      <h1 id='features' className='text-end text-5xl sm:text-8xl lg:text-[144px] 2xl:text-[192px] mt-20 mb-10 uppercase'>_Filmmaking</h1>


      {
        videos1.map(video => (
          <FilmCard key={video.id} video={video} />
        )
        )
      }
    </div>
  )
}