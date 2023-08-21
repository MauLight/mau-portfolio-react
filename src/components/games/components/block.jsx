import React from 'react'
import { motion } from 'framer-motion'
import '../tictac.css'

export const Block = ({ val, chooseBlock }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className="block rounded-md bg-amber-400 hover:bg-amber-300 flex justify-center items-center font-carbon text-6xl text-black"
      onClick={chooseBlock}
    >
      {val}
    </motion.div>
  )
}