import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { screenplays } from '../../utils/blogs'
import { Quotes } from '@carbon/icons-react'
import { useNavigate } from 'react-router-dom'

export const ScreenPost = ({ screenplayId }) => {

  const [disablePrev, setDisablePrev] = useState(false)
  const [disableNext, setDisableNext] = useState(false)
  const navigate = useNavigate()

  const scriptFilter = screenplays.filter(script => script.id === screenplayId)
  const handlePrev = () => {
    if (scriptFilter[0].pos === 1) {
      return
    }

    const prevId = screenplays.filter(elem => elem.pos === scriptFilter[0].pos - 1)[0].id
    navigate(`/screenplays/${prevId}`)
  }

  const handleNext = () => {

    if (scriptFilter[0].pos === screenplays.length) {
      return
    }

    const nextId = screenplays.filter(elem => elem.pos === scriptFilter[0].pos + 1)[0].id
    navigate(`/screenplays/${nextId}`)
  }

  useEffect(() => {
    if (scriptFilter[0].pos === 1) {
      setDisablePrev(true)
    } else {
      setDisablePrev(false)
    }

    if (scriptFilter[0].pos !== screenplays.length && scriptFilter[0].pos !== 1) {
      setDisableNext(false)
    } else if (scriptFilter[0].pos === screenplays.length) {
      setDisableNext(true)
    }
  })

  return (
    <>
      <div className='w-screen bg-[#10100e] py-20'>
        {
          scriptFilter.map(script => (
            <div
              key={script.id}
              className="flex flex-col w-[100vw] px-2 sm:px-20 gap-y-20 mt-10"
            >
              <div className="flex flex-col">
                <h1 className='font-primary text-5xl sm:text-[108px] tracking-tighter text-white'>{script.title}</h1>
                <div className="flex justify-between">
                  <div className="flex w-[80%] border-b-4 border-white mb-[7px]"></div>
                  <div className="hidden xl:flex justify-end items-end gap-x-2">
                    <p className='font-carbon text-[#aaaaaa] text-sm'>{script.date}</p>

                    <p className='font-carbon text-white bg-gradient-to-r from-primary to-danger text-sm rounded-full px-2'>{script.tag}</p>

                  </div>
                </div>
              </div>


              <div className="lg:flex gap-x-20">
                {
                  script.img !== '' &&
                  <div className={'mx-auto lg:w-1/3 lg:max-h-[90vh] object-contain object-center rounded-[10px] group relative overflow-hidden'}>
                    <img src={script.img} className={'w-full h-full object-cover hover:scale-[110%] transition-scale duration-500'} />
                  </div>
                }


                <div className="flex flex-col lg:w-2/3 min-h-full justify-center items-center gap-y-5">
                  <div className="flex justify-center mt-10 items-center gap-x-2">
                    {
                      script.genres.map((genre, i) => (
                        <div key={i} className="border border-[#aaaaaa] rounded-full px-2 sm:px-5">
                          <p className='font-carbon text-white text-md sm:text-lg'>{genre}</p>
                        </div>
                      ))
                    }
                  </div>
                  <div className="flex gap-x-5 text-center w-full items-center">
                    <Quotes className='hidden sm:flex text-white w-[300px] h-auto' size={28} />
                    <p className='font-carbon text-white text-xl sm:text-3xl'>{script.logline}</p>
                  </div>

                </div>

              </div>
              <div className="flex my-10 justify-center items-center rounded overflow-hidden">
                <iframe
                  className='rounded w-full'
                  src={script.pdf}
                  width="830"
                  height="1020"
                  allow="autoplay"
                ></iframe>
              </div>
              <div className="flex w-full justify-between items-center">
                <motion.button
                  onClick={handlePrev}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className={!disablePrev ? 'font-carbon text-[12px] border-2 p-5 rounded-full w-[90px] h-[90px] bg-[#10100e] hover:bg-white hover:text-[#10100e] active:bg-[#10100e] active:text-white transition-color duration-300' : 'font-carbon text-[12px] border-2 p-5 rounded-full w-[90px] h-[90px] bg-white text-gray-200'}
                >previous</motion.button>
                <div className="flex w-[40%] sm:w-[80%] border-b-4 border-black mb-[7px]"></div>
                <motion.button
                  onClick={handleNext}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className={!disableNext ? 'font-carbon text-[12px] border-2 p-5 rounded-full w-[90px] h-[90px] bg-[#10100e] hover:bg-white hover:text-[#10100e] active:bg-[#10100e] active:text-white transition-color duration-300' : 'font-carbon text-[12px] border-2 p-5 rounded-full w-[90px] h-[90px] bg-white text-gray-200'}
                >next</motion.button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}


// variants={fadeInSmall('left', blog.fade)}
// initial="hidden"
// whileInView={'show'}
// viewport={{ once: false, amount: 0.7 }}