import React from 'react'
import { VideoCard } from './VideoCard'
import { videos } from '../../utils/videos'
import film from '../../img/film.png'

export const Grid = () => {
  return (
    <div
      id='movies'
      className='flex flex-wrap w-full h-[1400px] items-center justify-center py-[100px]'
      style={{ backgroundImage: `url(${film})`, objectFit: 'cover' }}
    >
      {
        videos.map(elem =>
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
  )
}
