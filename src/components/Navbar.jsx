import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Link as Scroll } from 'react-scroll'
import { EmailNew, LogoInstagram, SendAltFilled, Education, LogoGithub, FaceSatisfied } from '@carbon/icons-react'
import { Sling as Hamburger } from 'hamburger-react'
import { fadeInSmall } from '../variants'
import { useState } from 'react'
import { Keyboard } from '@carbon/icons-react'

export const Navbar = () => {

  const [menu, setMenu] = useState('hide')

  return (
    <div className='flex justify-between items-center px-2 sm:px-20 py-7 border-b-2 border-white'>
      <Link to={'/'} >
        <div className='flex gap-x-3 items-center justify-center'>
          <img className='w-[40px] h-[40px]' src='https://i.postimg.cc/rsbQbsy2/icon.png' />
          <h1 className='hidden sm:flex glow font-kunika tracking-tighter text-3xl text-white'>M.LIGHT</h1>
        </div>
      </Link>
      <div className='flex flex-col'>
        <div className='hidden sm:flex-col px-10'>
          <ul className='flex gap-x-5 justify-evenly'>
            <Link to={'/about'}>
              <li className='font-kunika uppercase text-sm hover:text-[#8b5cf6] transition-color duration-300'>about</li>
            </Link>
            <Scroll
              to='photography'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={0}>
              <li className='font-kunika uppercase text-sm cursor-pointer hover:text-[#8b5cf6] transition-color duration-300'>photography</li>
            </Scroll>
            <Scroll
              to='joybook'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={0}>
              <li className='font-kunika uppercase text-sm cursor-pointer hover:text-[#8b5cf6] transition-color duration-300'>joyBook</li>
            </Scroll>
          </ul><div className="border-b-[2px] w-full my-1"></div><ul className='flex gap-x-10'>
            <Scroll
              to='movies'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={0}>
              <li className='font-kunika uppercase text-sm cursor-pointer hover:text-[#8b5cf6] transition-color duration-300'>cinema</li>
            </Scroll>
            <Scroll
              to='tictac'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={0}>
              <li className='font-kunika uppercase text-sm cursor-pointer hover:text-[#8b5cf6] transition-color duration-300'>games</li>
            </Scroll>
            <Scroll
              to='quest'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={0}>
              <li className='font-kunika uppercase text-sm cursor-pointer hover:text-[#8b5cf6] transition-color duration-300'>screenwriting</li>
            </Scroll>
          </ul>
        </div>

      </div>
      <div className="hidden sm:flex gap-x-3 sm:gap-x-5 ml-15">
        <Link to={'/about'} >
          <FaceSatisfied className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
        </Link>
        <Link to={'/screenwriting'} >
          <Keyboard className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
        </Link>
        <a href='https://flowcv.com/resume/r76tsuo81b' target='_blank' rel="noreferrer">
          <Education className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
        </a>
        <a href='https://github.com/MauLight' target='_blank' rel="noreferrer">
          <LogoGithub className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
        </a>
        <a href='https://www.instagram.com/wakeup.mau/' target='_blank' rel="noreferrer">
          <LogoInstagram className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
        </a>
        <a href='https://t.me/+8BUhBaokyQUwYzZh' target='_blank' rel="noreferrer">
          <SendAltFilled className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
        </a>
        <Scroll
          to='contact'
          activeClass='active'
          smooth={true}
          spy={true}
        >
          <EmailNew className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
        </Scroll>

      </div>
      <div className="min-[200px]:max-sm:flex hidden">

        <motion.div
          variants={fadeInSmall('left', 0.5)}
          initial='hidden'
          whileInView={menu}
          viewport={{ once: false, amount: 0.7 }}
          className="flex gap-x-5 mt-4 mr-3">
          <Link to={'/about'} >
            <FaceSatisfied className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
          </Link>
          <a href='https://flowcv.com/resume/r76tsuo81b' target='_blank' rel="noreferrer">
            <Education className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
          </a>
          <a href='https://github.com/MauLight' target='_blank' rel="noreferrer">
            <LogoGithub className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
          </a>
          <a href='https://www.instagram.com/wakeup.mau/' target='_blank' rel="noreferrer">
            <LogoInstagram className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
          </a>
          <a href='https://t.me/+8BUhBaokyQUwYzZh' target='_blank' rel="noreferrer">
            <SendAltFilled className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
          </a>
          <Scroll
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
          >
            <EmailNew className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
          </Scroll>

        </motion.div>
        <Hamburger color='white' size={30} rounded onToggle={() => menu === 'hide' ? setMenu('show') : setMenu('hide')} />
      </div>
    </div>
  )
}
