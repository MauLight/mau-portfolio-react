import React from 'react'
import { Home, Share, Mov, TouchInteraction, Camera, GameConsole, Blog, Email } from '@carbon/icons-react'
import { Link } from 'react-scroll'

const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className="container mx-auto">
      {/*nav-inner*/}
      <div className='w-full bg-black/20 h-[56px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-7 flex justify-between items-center text-2xl text-white/50' >
        <Link
          to='home'
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-200}
          className='cursor-pointer w-[25px] min-[450px]:w-[60px] h-[25px] min-[450px]:h-[60px] flex items-center justify-center'
        >
          <Home className='hover:text-[#8b5cf6] transition-color duration-300' size={30} />
        </Link>
        <Link
          to='interact'
          activeClass='active'
          smooth={true}
          spy={true}
          offset={0}
          className='cursor-pointer w-[25px] min-[450px]:w-[60px] h-[25px] min-[450px]:h-[60px] flex items-center justify-center'
        >
          <TouchInteraction className='hover:text-[#8b5cf6] transition-color duration-300' size={30} />
        </Link>
        <Link
          to='joybook'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[25px] min-[450px]:w-[60px] h-[25px] min-[450px]:h-[60px] flex items-center justify-center'
        >
          <Share className='hover:text-[#8b5cf6] transition-color duration-300' size={30} />
        </Link>
        <Link
          to='photography'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[25px] min-[450px]:w-[60px] h-[25px] min-[450px]:h-[60px] flex items-center justify-center'
        >
          <Camera className='hover:text-[#8b5cf6] transition-color duration-300' size={30} />
        </Link>
        <Link
          to='movies'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[25px] min-[450px]:w-[60px] h-[25px] min-[450px]:h-[60px] flex items-center justify-center'
        >
          <Mov className='hover:text-[#8b5cf6] transition-color duration-300' size={30} />
        </Link>
        <Link
          to='tictac'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[25px] min-[450px]:w-[60px] h-[25px] min-[450px]:h-[60px] flex items-center justify-center'
        >
          <GameConsole className='hover:text-[#8b5cf6] transition-color duration-300' size={30} />
        </Link>
        <Link
          to='quest'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[25px] min-[450px]:w-[60px] h-[25px] min-[450px]:h-[60px] flex items-center justify-center'
        >
          <Blog className='hover:text-[#8b5cf6] transition-color duration-300' size={30} />
        </Link>
        <Link
          to='contact'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[25px] min-[450px]:w-[60px] h-[25px] min-[450px]:h-[60px] flex items-center justify-center'
        >
          <Email className='hover:text-[#8b5cf6] transition-color duration-300' size={30} />
        </Link>
      </div>
    </div>
  </nav>
}

export default Nav
