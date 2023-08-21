import React from 'react'
import { Board } from './components/board'
import bg_site from '../../img/site-back.png'

export const Battleship = () => {
  return (
    <div
      className='min-h-[800px] pt-20 w-screen relative'
      style={{ backgroundImage: `url(${bg_site})` }}
    >
      <div className="w-[100vw] box-border overflow-hidden h-[900px] top-[-5%] absolute z-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-95"></div>
      <Board player="human" />
    </div>
  )
}
