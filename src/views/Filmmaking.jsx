import React from 'react'
import { inLess } from '../utils/blogs'
import { videos1, videos3 } from '../utils/videos'
import { videos2 } from '../utils/videos'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../variants'
import { Link as Scroll } from 'react-scroll'
import { Airplay, Aperture, Voicemail } from '@carbon/icons-react'
import { useState } from 'react'

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className="container mx-auto px-5">
        {/*nav-inner*/}
        <div className='w-[20px] bg-white/20 h-[200px] backdrop-blur-2x1 rounded-full max-w-[460px] ml-auto px-7 flex flex-col justify-around sm:justify-between items-center text-2xl text-white/50' >
          <Scroll
            to='features'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer w-[60px] h-[25px] min-[450px]:h-[60px] flex items-center justify-center'
          >
            <Aperture className='hover:text-[#8b5cf6] transition-color duration-300' size={30} />
          </Scroll>
          <Scroll
            to='tvseries'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={0}
            className='cursor-pointer w-[60px] h-[25px] min-[450px]:h-[60px] flex items-center justify-center'
          >
            <Airplay className='hover:text-[#8b5cf6] transition-color duration-300' size={30} />
          </Scroll>
          <Scroll
            to='short'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[25px] min-[450px]:h-[60px] flex items-center justify-center'
          >
            <Voicemail className='hover:text-[#8b5cf6] transition-color duration-300' size={30} />
          </Scroll>
        </div>
      </div>
    </nav>
  )
}

const FilmCard = ({ video }) => {

  // eslint-disable-next-line no-unused-vars
  const [hover, setHover] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Link key={video.id} to={`/films/${video.id}`}>
      <div
        key={video.id}
        style={{ backgroundColor: isHovering ? video.color : '#141314' }}
        onMouseEnter={() => setIsHovering(true)}
        onClick={() => setHover(true)}
        onMouseLeave={() => {
          setHover(false)
          setIsHovering(false)
        }}
        className="flex bg-black gap-x-20 transition-color duration-200 p-0 lg:p-10 rounded-[10px] justify-center items-center">
        <motion.div
          variants={fadeInSmall('down', video.fade)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}

          className="flex flex-col w-full lg:w-[40vw] min-[200px]:max-sm:px-2 my-5"
        >

          <div className={`${video.rounded} mx-auto w-[100%] lg:w-[40vw] h-full lg:max-h-[70vh] object-contain object-center rounded-[10px] group relative overflow-hidden`}>
            <img src={video.image} className={'w-full max-h-full object-cover hover:scale-[110%] transition-scale duration-500'} />

          </div>

        </motion.div>
        <div className="hidden lg:flex flex-col justify-center">
          <h1 className='blog-item font-primary min-[200px]:max-sm:mt-3 text-xl md:text-8xl uppercase'>{video.title}</h1>
          <div className="hidden sm:flex justify-start gap-x-2 my-5">
            <p className='font-carbon text-sm'>{video.date}</p>
            <div className="border rounded-full px-5">
              <p className='font-carbon text-lg'>{video.genre}</p>
            </div>
          </div>
          <p className='font-carbon text-lg mt-10'>{video.logline}</p>
        </div>
      </div>
    </Link>
  )
}

const FilmCard2 = ({ video }) => {

  return (
    <Link key={video.id} to={`/videos/${video.id}`}>
      <div
        key={video.id}
        style={{ backgroundColor: '#141314' }}
        className="flex bg-black gap-x-20 transition-color duration-200 p-0 lg:p-10 rounded-[10px] justify-center items-center">
        <motion.div
          variants={fadeInSmall('down', video.fade)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}

          className="flex flex-col w-full lg:w-[40vw] min-[200px]:max-sm:px-2 my-5"
        >

          <div className={`${video.rounded} mx-auto w-[100%] lg:w-[40vw] h-full lg:max-h-[70vh] object-contain object-center rounded-[10px] group relative overflow-hidden`}>
            <video className='w-full h-full object-cover  rounded-[15px]' src={video.video} autoPlay loop muted />

          </div>

        </motion.div>
        <div className="hidden lg:flex flex-col justify-center">
          <h1 className='blog-item font-primary min-[200px]:max-sm:mt-3 text-xl md:text-8xl uppercase'>{video.title}</h1>
          <div className="hidden sm:flex justify-start gap-x-2 my-5">
            <p className='font-carbon text-sm'>{video.date}</p>
            <div className="border rounded-full px-5">
              <p className='font-carbon text-lg'>{video.genre}</p>
            </div>
          </div>
          <p className='font-carbon text-lg mt-10'>{video.logline}</p>
        </div>
      </div>
    </Link>
  )
}

const FilmCard3 = ({ video }) => {

  const navigate = useNavigate()

  return (
    <Link key={video.id} to={`/inless/${video.id}`}>
      <div
        key={video.id}
        style={{ backgroundColor: '#141314' }}
        className="flex bg-black gap-x-20 transition-color duration-200 p-0 lg:p-10 rounded-[10px] justify-center items-center">
        <motion.div
          variants={fadeInSmall('down', video.fade)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}

          className="flex flex-col w-full lg:w-[40vw] min-[200px]:max-sm:px-2 my-5"
        >

          <div className={`${video.rounded} mx-auto w-[100%] lg:w-[40vw] h-full lg:max-h-[70vh] object-contain object-center rounded-[10px] group relative overflow-hidden`}>
            <video onClick={() => navigate(`/films/${video.id}`)} className='w-full h-full object-cover  rounded-[15px]' src={video.video} autoPlay loop muted />

          </div>

        </motion.div>
        <div className="hidden lg:flex flex-col justify-center">
          <h1 className='blog-item font-primary min-[200px]:max-sm:mt-3 text-xl md:text-6xl uppercase'>{video.title}</h1>
          <div className="hidden sm:flex justify-start items-center gap-x-2 my-5">
            <p className='font-carbon text-sm'>{video.date}</p>
            <div className="border rounded-full px-5">
              <p className='font-carbon text-lg'>{video.tag}</p>
            </div>
          </div>
          <p className='font-carbon text-lg mt-10'>{video.logline}</p>
        </div>
      </div>
    </Link>
  )
}

export const Filmmaking = () => {

  return (
    <div className="flex flex-col gap-x-5 gap-y-20 px-0 lg:px-20 bg-black pb-32">

      <h1 id='features' className='text-end text-5xl sm:text-8xl lg:text-[144px] 2xl:text-[192px] mt-20 mb-10 uppercase'>_Filmmaking</h1>


      {
        videos1.map(video => (
          <FilmCard key={video.id} video={video} />
        )
        )
      }
      <h1 id='tvseries' className='text-end text-5xl sm:text-8xl lg:text-[144px] 2xl:text-[192px] mt-20 mb-10 uppercase'>_VIDEO/Digital</h1>

      {

        videos2.map(video => (
          <FilmCard2 key={video.id} video={video} />
        )

        )
      }
      <h1 id='short' className='text-end text-5xl sm:text-8xl lg:text-[144px] 2xl:text-[192px] mt-20 mb-10 uppercase'>_web_Content</h1>
      <div className="flex flex-wrap gap-y-10 justify-around lg:justify-between">

        {
          videos3.map(video => (
            <div key={video.id} className="flex flex-col p-10 bg-[#141314] rounded-[10px]">
              <div className={`${video.rounded} mx-auto w-screen md:w-[20vw] max-h-[70vh] object-contain object-center rounded-[10px] group relative overflow-hidden`}>
                <video className='w-full h-full object-cover  rounded-[15px]' src={video.video} autoPlay loop muted />
              </div>
              <div className="flex flex-col justify-center items-center pt-5">
                <h1 className='blog-item font-primary min-[200px]:max-sm:mt-3 text-xl md:text-3xl uppercase'>{video.title}</h1>
                <div className="hidden sm:flex flex-wrap justify-center items-center gap-x-2 my-5 w-[20vw]">
                  {
                    video.tags.map(elem => (
                      <div key={elem} className="border rounded-full px-3">
                        <p className='font-carbon text-md'>{elem}</p>
                      </div>
                    ))
                  }

                </div>
              </div>
            </div>
          ))
        }
      </div>

      {
        inLess.map(video => (
          <FilmCard3 key={video.id} video={video} />
        )
        )
      }
      <div className="flex justify-center items-center">
        <Nav />
      </div>
    </div>
  )
}