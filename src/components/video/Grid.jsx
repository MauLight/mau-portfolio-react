import React from 'react'
import { VideoCard } from './VideoCard'
import { videos1 } from '../../utils/videos'

export const Grid = () => {
  return (
    <div
      id='movies'
      className='flex flex-col'
      style={{ backgroundImage: 'url(\'https://i.postimg.cc/C5fjRN09/film.png\')', backgroundSize: 'cover' }}
    >
      <h1 id='features' className='text-end  text-4xl sm:text-6xl sm:text-8xl lg:text-[144px] 2xl:text-[192px] my-20 px-[60px] uppercase'>_FILMS</h1>
      <div className='flex flex-wrap items-center justify-center pb-[100px]'>
        {
          videos1.map(elem =>
            <VideoCard
              key={elem.id}
              image={elem.image}
              video={elem.video}
              id={elem.id}
              title={elem.title}
              genre={elem.genre}
              color={elem.color}
            />
          )
        }
      </div>
    </div>
  )
}
