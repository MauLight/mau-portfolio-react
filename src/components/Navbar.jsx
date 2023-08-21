import React, { useState } from 'react'
import icon from '../img/icon.png'
import { Link } from 'react-router-dom'
import { Link as Scroll } from 'react-scroll'

export const Navbar = () => {

  const [home, setHome] = useState(true)

  return (
    <div className='flex justify-between items-center py-2 px-20 py-5 border-b-2 border-white'>
      <div className='flex gap-x-5 items-center justify-center'>
        <img className='w-[40px] h-[40px] mb-2' src={icon} />
        <Link to={'/mau'} >
          <h1 className='font-mexica text-2xl text-white'>M.LIGHT</h1>
        </Link>
      </div>
      <div className='flex flex-col'>
        {
          home ? (
            <><ul className='flex gap-x-10 justify-evenly'>
              <Link to={'/about'}>
                <li onClick={() => setHome(false)} className='font-carbon hover:text-[#8b5cf6] transition-color'>about</li>
              </Link>
              <Scroll
                to='photography'
                activeClass='active'
                smooth={true}
                spy={true}
                offset={0}>
                <li className='font-carbon cursor-pointer hover:text-[#8b5cf6] transition-color'>photography</li>
              </Scroll>
              <Scroll
                to='joybook'
                activeClass='active'
                smooth={true}
                spy={true}
                offset={0}>
                <li className='font-carbon cursor-pointer hover:text-[#8b5cf6] transition-color'>joyBook</li>
              </Scroll>
            </ul><div className="border-b-2 w-full my-1"></div><ul className='flex gap-x-10'>
              <Scroll
                to='movies'
                activeClass='active'
                smooth={true}
                spy={true}
                offset={0}>
                <li className='font-carbon cursor-pointer hover:text-[#8b5cf6] transition-color'>cinema</li>
              </Scroll>
              <Scroll
                to='tictac'
                activeClass='active'
                smooth={true}
                spy={true}
                offset={0}>
                <li className='font-carbon cursor-pointer hover:text-[#8b5cf6] transition-color'>games</li>
              </Scroll>
              <Scroll
                to='quest'
                activeClass='active'
                smooth={true}
                spy={true}
                offset={0}>
                <li className='font-carbon cursor-pointer hover:text-[#8b5cf6] transition-color'>screenwriting</li>
              </Scroll>
            </ul></>
          )
            :
            (
              <Link to={'/'}>
                <h1 onClick={() => setHome(true)}  className='font-mexica my-3 text-2xl hover:text-[#8b5cf6] transition-color'>home</h1>
              </Link>
            )
        }

      </div>
    </div>
  )
}
