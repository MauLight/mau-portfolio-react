import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { videos1 } from '../../utils/videos'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

export const FilmsPost = ({ filmsId }) => {

  const [dark, setDark] = useState(false)
  const [disablePrev, setDisablePrev] = useState(false)
  const [disableNext, setDisableNext] = useState(false)
  const navigate = useNavigate()

  const filmsFilter = videos1.filter(elem => elem.id === filmsId)

  const handlePrev = () => {
    if (filmsFilter[0].pos === 1) {
      return
    }

    const prevId = videos1.filter(elem => elem.pos === filmsFilter[0].pos - 1)[0].id
    navigate(`/films/${prevId}`)
  }

  const handleNext = () => {

    if (filmsFilter[0].pos === videos1.length) {
      return
    }

    const nextId = videos1.filter(elem => elem.pos === filmsFilter[0].pos + 1)[0].id
    navigate(`/films/${nextId}`)
  }

  useEffect(() => {
    if (filmsFilter[0].pos === 1) {
      setDisablePrev(true)
    } else {
      setDisablePrev(false)
    }

    if (filmsFilter[0].pos !== videos1.length && filmsFilter[0].pos !== 1) {
      setDisableNext(false)
    } else if (filmsFilter[0].pos === videos1.length) {
      setDisableNext(true)
    }
  })

  return (
    <>
      {
        filmsFilter.map(elem => (
          <div
            key={elem.id}
            onClick={() => setDark(!dark)}
            className='min-h-[700px] w-screen py-20 transition-color duration-500 px-2 sm:px-20'
            style={{ backgroundColor: dark ? 'black' : elem.color }}
          >
            <div
              className="flex flex-col w-[100vw] sm:w-[90vw]"
            >
              <h1 className='font-kunika text-center text-white text-5xl sm:text-[120px]'>{elem.title.toUpperCase()}</h1>
              <div className="border-b-2 w-2 w-full py-2"></div>
              <div className="flex justify-end gap-x-2 my-10">
                <div className="border border-white rounded-full py-2 px-6">
                  <p className='font-carbon text-white text-sm sm:text-lg'>{elem.genre}</p>
                </div>
              </div>
              <div className={'mx-auto w-full max-h-[94vh] mt-10 mb-20 object-contain object-center rounded-[10px] group relative overflow-hidden'}>
                <video loop autoPlay src={elem.video} className={'max-h-[600px] object-cover mx-auto rounded-[30px]'} />
              </div>
            </div>
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
        ))
      }
    </>
  )
}


// variants={fadeInSmall('left', blog.fade)}
// initial="hidden"
// whileInView={'show'}
// viewport={{ once: false, amount: 0.7 }}