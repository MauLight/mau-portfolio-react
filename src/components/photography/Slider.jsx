import React from 'react'
import { motion } from 'framer-motion'
import { ImageHolder } from './ImageHolder'
import { pics1, pics2 } from '../../utils/pics'
import pics_bg from '../../img/pics-bg.png'

function Slider() {

  return (
    <div
      id='photography'
      style={{ backgroundImage: `url(${pics_bg})`, objectFit: 'cover' }}
      className="w-full py-10 overflow-hidden flex flex-col object-cover">
      <motion.section
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 2, type: 'tween' }}
        className="pics flex border-t-[8px] mt-0 min-[500px]:mt-32 border-[#0e140e]"
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
        className="pics flex border-t-[8px] mt-0 min-[500px]:mt-32 border-[#0e140e]"
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
      <div className="bg-[#0e140e] pt-15 pb-6 px-24"></div>
    </div>

  )
}

export default Slider
