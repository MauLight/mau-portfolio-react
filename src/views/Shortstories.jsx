import React from 'react'
import { shortStories } from '../utils/blogs'
import { Link } from 'react-router-dom'

export const ShortStories = () => {

  return (
    <div className="flex flex-col gap-x-5 gap-y-20 px-5 md:px-20 bg-black pb-32">

      <h1 id='short' className='text-end text-6xl sm:text-8xl md:text-[144px] 2xl:text-[192px] mt-20 mb-10 uppercase'>_short_stories</h1>

      {
        shortStories.map(screenplay => (
          <Link key={screenplay.id} to={`/shortstories/${screenplay.id}`}>
            <div style={{ backgroundColor: '#141314' }}
              className="flex bg-black gap-x-20 transition-color duration-200 p-10 rounded-[10px] justify-center items-center">

              <div className="flex flex-col justify-center">
                <h1 className='blog-item font-primary min-[200px]:max-sm:mt-3 text-4xl lg:text-8xl min-[1800px]:text-[144px] uppercase'>{screenplay.title}</h1>
                <div className="hidden sm:flex justify-start gap-x-2 my-5">
                  <p className='font-carbon text-md min-[1800px]:text-xl'>{screenplay.date}</p>
                  {
                    screenplay.genres.map(elem => (
                      <div key={elem} className="border rounded-full px-3 2xl:px-5">
                        <p className='font-carbon text-md min-[1800px]:text-xl'>{elem}</p>
                      </div>
                    ))
                  }
                </div>
                <p className='font-carbon text-lg min-[1800px]:text-4xl mt-10 w-full lg:w-2/3'>{screenplay.logline}</p>
              </div>
            </div>
          </Link>
        )
        )
      }
    </div>
  )
}