import React from 'react'
import { screenplays } from '../utils/blogs'
import { Link } from 'react-router-dom'

export const ShortFilms = () => {

  const shortScreenPlays = screenplays.filter(elem => elem.type === 'short')

  return (
    <div className="flex flex-col gap-x-5 gap-y-20 px-5 md:px-20 bg-[#10100e] pb-32">

      <h1 id='short' className='text-end text-6xl sm:text-8xl md:text-[144px] 2xl:text-[192px] mt-20 mb-10 uppercase'>_short_films</h1>

      {
        shortScreenPlays.map(screenplay => (
          <Link key={screenplay.id} to={`/screenplays/${screenplay.id}`}>
            <div style={{ backgroundColor: 'black' }}
              className="flex bg-black gap-x-20 transition-color duration-200 p-10 rounded-[10px] justify-start items-center">

              <div className="flex flex-col justify-center">
                <h1 className='font-primary min-[200px]:max-sm:mt-3 text-4xl lg:text-8xl'>{screenplay.title}</h1>
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