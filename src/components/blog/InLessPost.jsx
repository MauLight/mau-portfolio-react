import React from 'react'
import { inLess } from '../../utils/blogs'

export const InLessPost = ({ inLessId }) => {

  const inLessFilter = inLess.filter(elem => elem.id === inLessId)

  return (
    <>
      <div className='min-h-[700px] w-screen bg-black py-20'>
        {
          inLessFilter.map(elem => (
            <div
              key={elem.id}
              className="flex flex-col w-screen lg:w-[90vw] px-2 px-5 lg:px-20"
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
      </div>

    </>
  )
}


// variants={fadeInSmall('left', blog.fade)}
// initial="hidden"
// whileInView={'show'}
// viewport={{ once: false, amount: 0.7 }}