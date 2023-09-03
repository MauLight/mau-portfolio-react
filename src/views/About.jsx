import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { Quotes } from '@carbon/icons-react'
import { boxColor } from '../utils/colors'
import { logos, u_logos, m_logos, about } from '../utils/logos'
import mau_about from '../img/mau_about.png'
import apple_01 from '../img/apple_01.png'
import apple_02 from '../img/apple_02.png'
import apple_03 from '../img/apple_03.png'

export const About = () => {

  const [ranNum, setRanNum] = useState(0)

  const randomSeed = () => {
    let ranInt = Math.floor(Math.random() * boxColor.length)
    if (ranInt === ranNum) {
      randomSeed()
    }
    setRanNum(ranInt)
    return 1
  }

  return (
    <>
      <div className='min-h-[700px] py-20' style={{ backgroundColor: boxColor[ranNum] }} >
        <div className="flex flex-col px-5 relative">
          <div className='mb-5'>
            <h1 className='font-carbon text-black text-2xl lg:text-5xl'>{'IT\'S ALL ABOUT'}</h1>
            <h1 className='font-carbon text-black text-3xl lg:text-6xl'>{' THE PROCESS'}</h1>
          </div>
          <h1 className='absolute hidden sm:flex top-[15%] left-[32%] md:top-[22%] md:left-[37%] lg:top-[25%] lg:left-[34%] z-40 blog-item font-papillon text-white text-5xl lg:text-8xl'>{'WELCOME'}</h1>
          <div className={'mx-auto w-[60vw] sm:w-[20vw] h-auto object-contain object-center rounded-[10px] group relative overflow-hidden'}>
            <img src={mau_about} className={'w-full h-full object-cover hover:scale-[110%] transition-scale duration-500'} />
          </div>
          <div className="flex flex-col mt-20">
            <div className="flex gap-x-5 justify-center sm:justify-end">
              <motion.div
                onClick={randomSeed}
                className='w-16 h-16 rounded-full bg-white'
                whileTap={
                  {
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ['100%', '50%', '0%', '50%', '100%']
                  }
                }
              ></motion.div>
              <motion.div
                onClick={randomSeed}
                whileTap={
                  {
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ['0%', '0%', '50%', '50%', '0%']
                  }
                }
                className='w-16 h-16 bg-white pt-2'
              ></motion.div>
              <motion.div
                onClick={randomSeed}
                whileTap={
                  {
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ['0%', '50%', '100%', '50%', '0%'],
                  }
                }
                className='triangle2 w-0 h-0 border-white pt-[2px]'></motion.div>
            </div>
            <p className='text-xl font-carbon text-black my-10 px-10'>{about.text1}</p>
            <div className="flex gap-x-5 my-10 items-center">
              <Quotes className='text-black w-[300px] h-auto' size={32} />
              <p className='font-carbon text-black text-4xl'>{about.quote}</p>
            </div>
          </div>
        </div>
        <div className="flex min-[200px]:max-md:flex-col justify-between items-center w-full gap-x-10 my-2 sm:my-20">
          <div className="flex items-start justify-start pb-20 lg:w-1/3 px-10">
            <p className='text-xl font-carbon text-black my-2 sm:my-10'>{about.text2}</p>
          </div>
          <>
            <img src={apple_01} className={'w-[10%] h-auto rounded-[10px] object-cover hover:scale-[110%] transition-scale duration-500'} />
            <img src={apple_02} className={'w-[15%] h-auto rounded-[10px] object-cover hover:scale-[110%] transition-scale duration-500'} />
            <img src={apple_03} className={'w-[20%] h-auto rounded-[10px] object-cover hover:scale-[110%] transition-scale duration-500 md:mr-10'} />
          </>
        </div>
        <div className="flex max-lg:flex-col justify-evenly items-center gap-x-10">
          <div className="flex flex-wrap gap-x-3 mt-[50px]">
            {
              m_logos.map(logo => (
                <div key={logo.id} className="rounded-full w-[40px] h-[40px] sm:w-[90px] sm:h-[90px] border border-white bg-white mb-20">
                  <img src={logo.img} className='rounded-full w-full h-full object-cover' />
                </div>
              ))
            }
          </div>
          <div className="flex items-start justify-start pb-20 lg:w-1/3 px-10">
            <p className='text-xl font-carbon text-black my-2 sm:my-10'>{about.text3}</p>
          </div>
        </div>
        <div className="flex flex-col px-20 mb-20">
          <p className='text-xl font-carbon text-black my-2 sm:my-10'>{about.text4}</p>
        </div>
        <div className="flex flex-col gap-y-8 mb-20">
          <div className="flex flex-wrap justify-center items-center gap-x-10 max-sm:gap-y-3 sm:pl-24">
            {
              logos.map(logo => (
                <div key={logo.id} className="rounded-full w-[40px] h-[40px] sm:w-[90px] sm:h-[90px] border border-white bg-white">
                  <img src={logo.img} className='rounded-full w-full h-full object-cover' />
                </div>
              ))
            }
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-10 sm:pr-24 max-sm:gap-y-3">
            {
              u_logos.map(logo => (
                <div key={logo.id} className="w-[40px] h-[40px] sm:w-[90px] sm:h-[90px] border border-white bg-white rounded-[15px] overflow-hidden">
                  <Tilt tiltMaxAngleX={5.5} tiltMaxAngleY={5.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={'black'} >
                    <img src={logo.img} className='w-full h-full' />
                  </Tilt>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </>
  )
}
