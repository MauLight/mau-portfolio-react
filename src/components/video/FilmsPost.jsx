import React, { useState } from 'react'
import { videos } from '../../utils/videos'

export const FilmsPost = ({ filmsId }) => {

  const [dark, setDark] = useState(false)

  const filmsFilter = videos.filter(elem => elem.id === filmsId)

  return (
    <>
      {
        filmsFilter.map(elem => (
          <div
            key={elem.id}
            onClick={() => setDark(!dark)}
            className='min-h-[700px] w-screen py-20 transition-color duration-500'
            style={{ backgroundColor: dark ? 'black' : elem.color }}
          >
            <div
              className="flex flex-col w-[100vw] sm:w-[90vw] px-2 sm:px-20"
            >
              <h1 className='font-kunika text-center text-white text-5xl sm:text-8xl'>{elem.title.toUpperCase()}</h1>
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