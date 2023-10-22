import React from 'react'
import { motion } from 'framer-motion'
import { ImageHolder } from './ImageHolder'
import { pics1, pics2 } from '../../utils/pics'

function Slider() {

  return (
    <div
      id='photography'
      className="bg-black py-10 overflow-hidden flex flex-col object-cover py-[32px]">
      <h1 id='features' className='text-end text-4xl sm:text-6xl sm:text-8xl lg:text-[144px] 2xl:text-[192px] my-20 px-[60px] uppercase'>_Photography</h1>
      <motion.section
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 2, type: 'tween' }}
        className="pics flex border-t-[8px] mt-0 border-[#0e140e]"
      >
        {
          !!pics1 && pics1.map((pic, i) => (
            <div key={i}>

              <ImageHolder
                id={i}
                title={pic.title}
                logline={pic.tags}
                img={pic.img} />

            </div>
          ))
        }
      </motion.section>
      <motion.section
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 2, type: 'tween' }}
        className="pics flex border-t-[8px] mt-0  border-[#0e140e]"
      >
        {
          !!pics2 && pics2.reverse().map((pic, i) => (
            <div key={i}>

              <ImageHolder
                id={i}
                title={pic.title}
                logline={pic.tags}
                img={pic.img} />

            </div>
          ))
        }
      </motion.section>
    </div>

  )
}

export default Slider
