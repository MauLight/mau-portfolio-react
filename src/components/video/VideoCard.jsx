import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { fadeInSmall } from '../../variants'
import { useNavigate } from 'react-router-dom'

export const VideoCard = ({ id, image, video, title, genre, color }) => {

  const [hover, setHover] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const navigate = useNavigate()

  console.log(hover)

  return (
    <div
      className='sm:w-[30%] h-auto border border-[#141314] rounded-[15px] p-1 m-1 transition-colors duration-500'
      style={{ backgroundColor: isHovering ? color : '#141314' }}
      onMouseEnter={() => setIsHovering(true)}
      key={id}
      onClick={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false)
        setIsHovering(false)
      }}
    >
      <Tilt tiltMaxAngleX={1.5} tiltMaxAngleY={1.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={'white'} glareBorderRadius='15px' >
        {hover ? <video onClick={() => navigate(`/films/${id}`)} className='w-full h-full object-cover  rounded-[15px]' src={video} autoPlay loop /> : <img className='w-full h-full object-cover rounded-[15px]' src={image} />}
      </Tilt>
      <div className="hidden sm:flex flex-col">


        <motion.div
          variants={fadeInSmall('up', 0.1)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="flex pt-4"
        >
          <h1 className='hidden min-[600px]:flex font-carbon text-sm md:text-lg pl-4'>{title.toUpperCase()}</h1>
        </motion.div>
        <motion.div
          variants={fadeInSmall('up', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="flex mb-2"
        >
          <h1 className='hidden min-[600px]:flex font-carbon text-[#b5dac9] text-[8px] md:text-[10px] pl-6'>{genre.toUpperCase()}</h1>
        </motion.div>
      </div>
    </div>
  )
}
