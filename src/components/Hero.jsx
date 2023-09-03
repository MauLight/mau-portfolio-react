import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import hero_video from '../img/hero_video.mp4'
import { fadeIn } from '../variants'


function Home_Hero() {

  return (
    <div className='h-[600px]' id='home'>
      <div className='flex h-[100%] box-border overflow-hidden'>
        <div className="w-[100vw] box-border overflow-hidden h-[600px] absolute z-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-90"></div>
        <video
          src={hero_video}
          type='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className="object-cover w-full h-auto box-border overflow-hidden"
        />
      </div>
      <div className="inner">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="absolute top-[42%] left-[5%]"
        >
          <h1 className='text-white font-carbon text-lg sm:text-2xl md:text-4xl'>Hi there!</h1>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="absolute top-[48%] left-[6%] min-[450px]:left-[5%]"
        >
          <h1 className='glow text-white font-kunika text-6xl sm:text-8xl md:text-[120px]'>I am M.LIGHT</h1>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.7)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="absolute top-[57%] min-[450px]:top-[64%] left-[12%] min-[450px]:left-[46%]"
        >
          <h1 className='text-black font-carbon text-2xl md:text-3xl' >{'I am a '}<b>
            <TypeAnimation sequence={[
              'software developer_', 2000,
              'visual designer_', 2000,
              'filmmaker_', 2000,
              'photographer_', 2000,
              'teacher_', 2000,
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />
          </b>
          </h1>
        </motion.div>
      </div>
    </div>
  )
}

export default Home_Hero