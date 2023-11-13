import React from 'react'
import { Board } from './components/board'
import bg_site from '../../img/site-back.png'

export const Battleship = () => {
  return (
    <div
      className='hidden xl:flex xl:flex-col h-screen flex flex-col justify-center items-center relative border-b-2 border-white'
      style={{ backgroundImage: `url(${bg_site})` }}
    >
      <div className="w-[100vw] box-border overflow-hidden h-screen absolute z-0 bg-[#10100e] opacity-95"></div>
      <Board player="human" />
    </div>
  )
}
