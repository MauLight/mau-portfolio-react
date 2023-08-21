import React from 'react'
import Home_Hero from '../components/Hero'
import Nav from '../components/Nav'
import { Shapes } from '../components/Shapes'
import Slider from '../components/photography/Slider'
import { JoyBookIndex } from '../components/JoyBook/Index'
import { Grid } from '../components/video/Grid'
import TicTac from '../components/games/TicTac'
import Quest from '../components/Quest'
import { Blog } from '../components/blog/Blog'
import { Battleship } from '../components/games/Battleship'

export const Landing = () => {
  return (
    <>
      <Home_Hero />
      <Nav />
      <Shapes />
      <Slider />
      <JoyBookIndex />
      <Grid />
      <TicTac />
      <Battleship />
      <Quest />
      <Blog />
    </>
  )
}
