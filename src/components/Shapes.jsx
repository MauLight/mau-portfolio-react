import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { boxColor } from '../utils/colors'

export const Shapes = () => {

  const [ranNum, setRanNum] = useState(boxColor.length - 1)

  const randomSeed = () => {
    let ranInt = Math.floor(Math.random() * boxColor.length)
    if (ranInt === ranNum) {
      randomSeed()
    }
    setRanNum(ranInt)
    return 1
  }

  console.log('color is: ', boxColor[ranNum])

  return (
    <div id='interact' className={'min-[320px]:max-sm:flex-col flex justify-center gap-x-32 items-center border-y-2 h-screen'} style={{ backgroundColor: boxColor[ranNum] }}>
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="flex gap-x-10">
        <motion.div
          onClick={randomSeed}
          className='w-20 h-20 rounded-full bg-white'
          whileTap={
            {
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ['100%', '50%', '0%', '50%', '100%']
            }
          }
        ></motion.div>
        <motion.div
          onClick={randomSeed}
          whileTap={
            {
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ['0%', '0%', '50%', '50%', '0%']
            }
          }
          className='w-20 h-20 bg-white pt-2'
        ></motion.div>
        <motion.div
          onClick={randomSeed}
          whileTap={
            {
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ['0%', '50%', '100%', '50%', '0%'],
            }
          }
          className='triangle w-0 h-0 border-white pt-[2px]'></motion.div>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
      >
        <motion.div
          className='text-5xl bg-carbon italic'
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          Interact
        </motion.div>
      </motion.div>
    </div>
  )
}
