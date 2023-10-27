import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Link as Scroll } from 'react-scroll'
import { EmailNew, LogoInstagram, SendAltFilled, Education, LogoGithub, FaceSatisfied, VideoFilled } from '@carbon/icons-react'
import { Sling as Hamburger } from 'hamburger-react'
import { fadeInSmall } from '../variants'
import { useState } from 'react'
import { Keyboard } from '@carbon/icons-react'

export const Navbar = () => {

  const [menu, setMenu] = useState('hide')
  const [keyIsShown, setKeyIsShown] = useState(false)
  const [cameraIsShown, setCameraIsShown] = useState(false)

  return (
    <div className='flex justify-between items-center px-2 sm:px-20 py-7 border-b-2 border-white'>
      <Link to={'/'} >
        <div className='flex w-[40px] gap-x-3 items-center justify-center'>
          <img className='w-[40px] h-[40px]' src='https://i.postimg.cc/rsbQbsy2/icon.png' />
          <h1 className='hidden sm:flex glow font-kunika tracking-tighter text-3xl text-white'>M.LIGHT</h1>
        </div>
      </Link>

      <div className="hidden sm:flex gap-x-3 sm:gap-x-5 ml-15">
        <Link to={'/about'}>
          <FaceSatisfied className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
        </Link>
        <div onMouseEnter={() => setKeyIsShown(true)} onMouseLeave={() => setKeyIsShown(false)}>
          <Keyboard className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
          {
            keyIsShown && <div className='w-[200px] px-3 py-5 absolute z-1 bg-white'>
              <ul className='flex flex-col gap-y-1'>
                <li className='blog-item text-black text-xl font-primary uppercase hover:scale-105 active:scale-100 transition-all duration-200'>
                  <Link to={'/features'}>Features</Link>
                </li>
                <li className='blog-item text-black text-xl font-primary uppercase hover:scale-105 active:scale-100 transition-all duration-200'>
                  <Link to={'/tvseries'}>TV Series</Link>
                </li>
                <li className='blog-item text-black text-xl font-primary uppercase hover:scale-105 active:scale-100 transition-all duration-200'>
                  <Link to={'/shortfilms'}>Short Films</Link>
                </li>
                <li className='blog-item text-black text-xl font-primary uppercase hover:scale-105 active:scale-100 transition-all duration-200'>
                  <Link to={'/shortstories'}>Short Stories</Link>
                </li>
              </ul>
            </div>
          }
        </div>
        <div onMouseEnter={() => setCameraIsShown(true)} onMouseLeave={() => setCameraIsShown(false)}>
          <VideoFilled className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
          {
            cameraIsShown && <div className='w-[200px]  px-3 py-5 absolute z-1 bg-white'>
              <ul className='flex flex-col gap-y-1'>
                <li className='blog-item text-black text-xl font-primary uppercase hover:scale-105 active:scale-100 transition-all duration-200'>
                  <Link to={'/filmmaking'}>Filmmaking</Link>
                </li>
                <li className='blog-item text-black text-xl font-primary uppercase hover:scale-105 active:scale-100 transition-all duration-200'>
                  <Link to={'/video'}>Video/Digital</Link>
                </li>
                <li className='blog-item text-black text-xl font-primary uppercase hover:scale-105 active:scale-100 transition-all duration-200'>
                  <Link to={'/web'}>Web Content</Link>
                </li>
              </ul>
            </div>
          }
        </div>
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
          className="flex gap-x-2 sm:gap-x-5 mt-4 mr-3">
          <Link to={'/about'} >
            <FaceSatisfied className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
          </Link>
          <Link to={'/screenwriting'} >
            <Keyboard className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
          </Link>
          <Link to={'/filmmaking'} >
            <VideoFilled className='hover:text-[#8b5cf6] transition-color duration-300' size={20} />
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
