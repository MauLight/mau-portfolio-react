import React from 'react'
import { screenplays } from '../utils/blogs'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../variants'
import { Link as Scroll } from 'react-scroll'
import { Airplay, Aperture, Voicemail } from '@carbon/icons-react'

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className="container mx-auto pr-[150px]">
        {/*nav-inner*/}
        <div className='w-[20px] bg-white/20 h-[200px] backdrop-blur-2x1 rounded-full max-w-[460px] ml-auto px-7 flex flex-col justify-between items-center text-2xl text-white/50' >
          <Scroll
            to='features'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer w-[25px] min-[450px]:w-[60px] h-[25px] min-[450px]:h-[60px] flex items-center justify-center'
          >
            <Aperture className='hover:text-[#8b5cf6] transition-color duration-300' size={30} />
          </Scroll>
          <Scroll
            to='tvseries'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={0}
            className='cursor-pointer w-[25px] min-[450px]:w-[60px] h-[25px] min-[450px]:h-[60px] flex items-center justify-center'
          >
            <Airplay className='hover:text-[#8b5cf6] transition-color duration-300' size={30} />
          </Scroll>
          <Scroll
            to='short'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[25px] min-[450px]:w-[60px] h-[25px] min-[450px]:h-[60px] flex items-center justify-center'
          >
            <Voicemail className='hover:text-[#8b5cf6] transition-color duration-300' size={30} />
          </Scroll>
        </div>
      </div>
    </nav>
  )
}

export const Screenwriting = () => {

  const featureScreenplays = screenplays.filter(elem => elem.type === 'feature')
  const tvScreenPlays = screenplays.filter(elem => elem.type === 'tv')
  const shortScreenPlays = screenplays.filter(elem => elem.type === 'short')

  return (
    <div className="flex flex-col gap-x-5 gap-y-20 px-20 bg-black pb-32">

      <h1 id='features' className='text-end text-[144px] uppercase'>_Features</h1>


      {
        featureScreenplays.map(screenplay => (
          <Link key={screenplay.id} to={`/screenplays/${screenplay.id}`}>
            <div className="flex bg-black gap-x-20">
              <motion.div
                variants={fadeInSmall('down', screenplay.fade)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.3 }}

                className="flex flex-col w-screen md:w-[30vw] min-[200px]:max-sm:px-2 my-5"
              >

                <div className={`${screenplay.rounded} mx-auto w-screen md:w-[30vw] max-h-[70vh] object-contain object-center rounded-[10px] group relative overflow-hidden`}>
                  <img src={screenplay.img} className={'w-full max-h-full object-cover hover:scale-[110%] transition-scale duration-500'} />

                </div>

              </motion.div>
              <div className="flex flex-col justify-center">
                <h1 className='blog-item font-primary min-[200px]:max-sm:mt-3 text-xl md:text-8xl'>{screenplay.title}</h1>
                <div className="hidden sm:flex justify-start gap-x-2 my-5">
                  <p className='font-carbon text-sm'>{screenplay.date}</p>
                  <div className="border rounded-full px-2">
                    <p className='font-carbon text-sm'>{screenplay.tag}</p>
                  </div>
                </div>
                <p className='font-carbon text-lg mt-10'>{screenplay.logline}</p>
              </div>
            </div>
          </Link>
        )
        )
      }
      <h1 id='tvseries' className='text-end text-[144px] uppercase mt-10'>_TV_Series</h1>

      {
        tvScreenPlays.map(screenplay => (
          <Link key={screenplay.id} to={`/screenplays/${screenplay.id}`}>
            <div className="flex bg-black gap-x-20">
              <motion.div
                variants={fadeInSmall('down', screenplay.fade)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.3 }}

                className="flex flex-col w-screen md:w-[30vw] min-[200px]:max-sm:px-2 my-5"
              >

                <div className={`${screenplay.rounded} mx-auto w-screen md:w-[30vw] max-h-[70vh] object-contain object-center rounded-[10px] group relative overflow-hidden`}>
                  <img src={screenplay.img} className={'w-full max-h-full object-cover hover:scale-[110%] transition-scale duration-500'} />

                </div>

              </motion.div>
              <div className="flex flex-col justify-center">
                <h1 className='blog-item font-primary min-[200px]:max-sm:mt-3 text-xl md:text-8xl'>{screenplay.title}</h1>
                <div className="hidden sm:flex justify-start gap-x-2 my-5">
                  <p className='font-carbon text-sm'>{screenplay.date}</p>
                  <div className="border rounded-full px-2">
                    <p className='font-carbon text-sm'>{screenplay.tag}</p>
                  </div>
                </div>
                <p className='font-carbon text-lg mt-10'>{screenplay.logline}</p>
              </div>
            </div>
          </Link>
        )
        )
      }
      <h1 id='short' className='text-end text-[144px] uppercase my-10'>_short_films</h1>

      {
        shortScreenPlays.map(screenplay => (
          <Link key={screenplay.id} to={`/screenplays/${screenplay.id}`}>
            <div className="flex bg-black gap-x-20">

              <div className="flex flex-col justify-center">
                <h1 className='blog-item font-primary min-[200px]:max-sm:mt-3 text-xl md:text-8xl'>{screenplay.title}</h1>
                <div className="hidden sm:flex justify-start gap-x-2 my-5">
                  <p className='font-carbon text-sm'>{screenplay.date}</p>
                  <div className="border rounded-full px-2">
                    <p className='font-carbon text-sm'>{screenplay.tag}</p>
                  </div>
                </div>
                <p className='font-carbon text-lg mt-10 w-1/2'>{screenplay.logline}</p>
              </div>
            </div>
          </Link>
        )
        )
      }
      <Nav />
    </div>
  )
}