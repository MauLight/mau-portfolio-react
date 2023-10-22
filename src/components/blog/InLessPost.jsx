import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { inLess } from '../../utils/blogs'

export const InLessPost = ({ inLessId }) => {

  const [disablePrev, setDisablePrev] = useState(false)
  const [disableNext, setDisableNext] = useState(false)
  const navigate = useNavigate()

  const inLessFilter = inLess.filter(elem => elem.id === inLessId)
  const handlePrev = () => {
    if (inLessFilter[0].pos === 1) {
      return
    }

    const prevId = inLess.filter(elem => elem.pos === inLessFilter[0].pos - 1)[0].id
    navigate(`/inless/${prevId}`)
  }

  const handleNext = () => {

    if (inLessFilter[0].pos === inLess.length) {
      return
    }

    const nextId = inLess.filter(elem => elem.pos === inLessFilter[0].pos + 1)[0].id
    navigate(`/inless/${nextId}`)
  }

  useEffect(() => {
    if (inLessFilter[0].pos === 1) {
      setDisablePrev(true)
    } else {
      setDisablePrev(false)
    }

    if (inLessFilter[0].pos !== inLess.length && inLessFilter[0].pos !== 1) {
      setDisableNext(false)
    } else if (inLessFilter[0].pos === inLess.length) {
      setDisableNext(true)
    }
  })

  return (
    <>
      <div className='min-h-[700px] w-screen bg-black py-20 px-5 lg:px-20'>
        {
          inLessFilter.map(elem => (
            <div
              key={elem.id}
              className="flex flex-col w-screen lg:w-[90vw] px-2"
            >
              <h1 className='font-primary text-white text-5xl sm:text-7xl'>{elem.title}</h1>
              <div className="border-b-2 w-2 w-full py-2"></div>
              <div className="flex justify-start gap-x-2 my-10">
                <p className='font-carbon text-white text-sm'>{elem.date}</p>
                <div className="border border-white rounded-full px-2">
                  <p className='font-carbon text-white text-sm'>{elem.tag}</p>
                </div>
              </div>
              <div className={'mx-auto w-full max-h-[94vh] my-20 object-contain object-center rounded-[10px] group relative overflow-hidden'}>
                <video loop autoPlay src={elem.video} className={'w-auto max-h-[600px] object-cover mx-auto rounded-[30px]'} />
              </div>
            </div>
          ))
        }
        <div className="flex w-full justify-between items-center">
          <motion.button
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className={!disablePrev ? 'font-carbon text-[12px] border-2 p-5 rounded-full w-[90px] h-[90px] bg-[#393939] hover:bg-white hover:text-[#9f56f4] active:bg-[#9f56f4] active:text-white transition-color duration-300' : 'font-carbon text-[12px] border-2 p-5 rounded-full w-[90px] h-[90px] bg-white text-gray-200'}
          >previous</motion.button>
          <div className="flex w-[40%] sm:w-[80%] border-b-4 border-black mb-[7px]"></div>
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className={!disableNext ? 'font-carbon text-[12px] border-2 p-5 rounded-full w-[90px] h-[90px] bg-[#393939] hover:bg-white hover:text-[#9f56f4] active:bg-[#9f56f4] active:text-white transition-color duration-300' : 'font-carbon text-[12px] border-2 p-5 rounded-full w-[90px] h-[90px] bg-white text-gray-200'}
          >next</motion.button>
        </div>
      </div>

    </>
  )
}


// variants={fadeInSmall('left', blog.fade)}
// initial="hidden"
// whileInView={'show'}
// viewport={{ once: false, amount: 0.7 }}