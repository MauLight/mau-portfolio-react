import React from 'react'
import { screenplays } from '../../utils/blogs'
import { Quotes } from '@carbon/icons-react'

export const ScreenPost = ({ screenplayId }) => {

  const scriptFilter = screenplays.filter(script => script.id === screenplayId)

  return (
    <>
      <div className='min-h-[700px] w-screen bg-white py-20'>
        {
          scriptFilter.map(script => (
            <div
              key={script.id}
              className="flex flex-col w-[100vw] px-2 sm:px-20 gap-y-20 mt-10"
            >
              <div className="flex justify-between">
                <h1 className='blog-item font-primary text-5xl sm:text-[108px] tracking-tighter bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent'>{script.title}</h1>
                <div className="flex justify-end items-end gap-x-2">
                  <p className='font-carbon text-black text-sm'>{script.date}</p>

                  <p className='font-carbon text-white bg-gradient-to-r from-primary to-danger text-sm rounded-full px-2'>{script.tag}</p>

                </div>
              </div>

              <div className="flex gap-x-20">
                <div className={'mx-auto lg:w-1/3 max-h-[90vh] object-contain object-center rounded-[10px] group relative overflow-hidden'}>
                  <img src={script.img} className={'w-full h-full object-cover hover:scale-[110%] transition-scale duration-500'} />
                </div>



                <div className="flex flex-col w-2/3 min-h-full justify-center items-center gap-y-5">
                  <div className="flex justify-center mt-10 items-center gap-x-2">
                    {
                      script.genres.map((genre, i) => (
                        <div key={i} className="bg-gradient-to-r from-primary to-danger rounded-full px-5">
                          <p className='font-carbon text-white text-lg'>{genre}</p>
                        </div>
                      ))
                    }
                  </div>
                  <div className="flex gap-x-5 items-center">
                    <Quotes className='text-black w-[300px] h-auto' size={28} />
                    <p className='font-carbon text-black text-2xl sm:text-3xl'>{script.logline}</p>
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