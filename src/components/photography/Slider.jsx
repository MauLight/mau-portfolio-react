import React from 'react'
import { motion } from 'framer-motion'
import { ImageHolder } from './ImageHolder'
import { pics } from '../../utils/pics'
import pics_bg from '../../img/pics-bg.png'

function Slider() {

  return (
    <div
      id='photography'
      style={{ backgroundImage: `url(${pics_bg})`, objectFit: 'cover' }}
      className="w-full h-[700px] pt-10 overflow-hidden">
      <motion.section
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 2, type: 'tween' }}
        className="pics flex border-t-[8px] mt-0 min-[500px]:mt-32 border-[#0e140e]"
      >
        {
          !!pics && pics.map((pic, i) => (
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
      <div className="bg-[#0e140e] pt-15 pb-6 px-24"></div>
    </div>

  )
}

export default Slider
