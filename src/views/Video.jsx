import React from 'react'
import { videos2 } from '../utils/videos'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../variants'

const FilmCard2 = ({ video }) => {

  return (
    <Link key={video.id} to={`/videos/${video.id}`}>
      <div
        key={video.id}
        style={{ backgroundColor: 'black' }}
        className="flex bg-black gap-x-20 transition-color duration-200 p-0 rounded-[10px] justify-start items-center">
        <motion.div
          variants={fadeInSmall('down', video.fade)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}

          className="flex flex-col w-full lg:w-[40vw] min-[200px]:max-sm:px-2"
        >

          <div className={'mx-auto w-[100%] lg:w-[40vw] h-full lg:max-h-[70vh] object-contain object-center group relative overflow-hidden'}>
            <video className='w-full h-full object-cover rounded-l-[10px]' src={video.video} autoPlay loop muted />

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

export const Video = () => {

  return (
    <div className="flex flex-col gap-x-5 gap-y-20 px-0 lg:px-20 bg-[#10100e] pb-32">

      <h1 id='tvseries' className='text-end text-5xl sm:text-8xl lg:text-[144px] 2xl:text-[192px] mt-20 mb-10 uppercase'>_VIDEO/Digital</h1>

      {

        videos2.map(video => (
          <FilmCard2 key={video.id} video={video} />
        )

        )
      }
    </div>
  )
}