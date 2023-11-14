import React from 'react'
import { screenplays } from '../utils/blogs'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../variants'

export const TvSeries = () => {

  const tvScreenPlays = screenplays.filter(elem => elem.type === 'tv')

  return (
    <div className="flex flex-col gap-x-5 gap-y-20 px-5 md:px-20 bg-[#10100e] pb-32">
      <h1 id='tvseries' className='text-end text-6xl sm:text-8xl md:text-[144px] 2xl:text-[192px] mt-20 mb-10 uppercase'>_TV_Series</h1>

      {
        tvScreenPlays.map(screenplay => (
          <Link key={screenplay.id} to={`/screenplays/${screenplay.id}`}>
            <div style={{ backgroundColor: 'black' }}
              className="flex bg-black gap-x-20 transition-color duration-200 rounded-[10px] justify-center items-center">
              <motion.div
                variants={fadeInSmall('down', screenplay.fade)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.3 }}

                className="hidden md:flex flex-col w-screen md:w-[30vw] min-[200px]:max-sm:px-2"
              >

                <div className={'mx-auto w-screen md:w-[30vw] max-h-[70vh] object-contain object-center rounded-l-[10px] group relative overflow-hidden'}>
                  <img src={screenplay.img} className={'w-full max-h-full object-cover hover:scale-[110%] transition-scale duration-500'} />
                </div>

              </motion.div>
              <div className="flex flex-col justify-center">
                <h1 className='font-primary min-[200px]:max-sm:mt-3 text-4xl lg:text-8xl'>{screenplay.title}</h1>
                <div className="hidden sm:flex justify-start gap-x-2 my-5">
                  <div className="hidden sm:flex flex-wrap justify-center items-center gap-x-2">
                    <p className='font-carbon text-md min-[1800px]:text-xl'>{screenplay.date}</p>
                    {
                      screenplay.genres.map(elem => (
                        <div key={elem} className="border rounded-full px-3 2xl:px-5">
                          <p className='font-carbon text-md min-[1800px]:text-xl'>{elem}</p>
                        </div>
                      ))
                    }

                  </div>
                </div>
                <p className='font-carbon text-lg min-[1800px]:text-4xl mt-10 w-full lg:w-2/3'>{screenplay.logline}</p>
              </div>
            </div>
          </Link>
        )
        )
      }
    </div>
  )
}