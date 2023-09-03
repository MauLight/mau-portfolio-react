import React from 'react'
import { VideoCard } from './VideoCard'
import { videos } from '../../utils/videos'

export const Grid = () => {
  return (
    <div
      id='movies'
      className='flex flex-wrap items-center justify-center py-[100px]'
      style={{ backgroundImage: 'url(\'https://i.postimg.cc/C5fjRN09/film.png\')', backgroundSize: 'cover' }}
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
