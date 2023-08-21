import React from 'react'
import bg_image from '../../img/joyBook_01.png'

export const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg_image})`, objectFit: 'cover' }}
      className="joy flex w-full h-[696px] object-cover"
    >
    </div>
  )
}
