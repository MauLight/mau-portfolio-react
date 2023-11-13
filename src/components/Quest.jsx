import React, { useState } from 'react'
import { store } from '../utils/store'
import Tilt from 'react-parallax-tilt'
import video_lesson1 from '../img/video_lesson_1.mp4'
import video_lesson2 from '../img/video_lesson_2.mp4'
import video_lesson3 from '../img/video_lesson_3.mp4'
import video_lesson4 from '../img/video_lesson_4.mp4'
import video_lesson5 from '../img/video_lesson_5.mp4'
import { Construction, Events, Pen, SprayPaint, VideoFilled } from '@carbon/icons-react'


function Quest() {

  const [video, setVideo] = useState(video_lesson1)
  const [text1, setText1] = useState(store.Home_Section4_Text1)

  const ImageHolder = ({ video }) => {
    return (
      <div className='md:w-[60vh] 2xl:w-[35vw] h-[100%] rounded-[40px] group relative overflow-hidden mx-auto'>
        <video
          src={video}
          autoPlay
          loop
          muted
          className='mx-auto w-full h-[100%]'
        />
      </div>
    )
  }


  return (

    <section id='quest' className="px-2 xl:px-20 min-h-screen flex flex-col justify-center items-center pt-10 pb-20">
      <div className="mb-10 flex flex-col justify-center items-center">
        <h1 className="font-primary text-2xl sm:text-5xl">{'SCREENWRITERS\' QUEST'}</h1>
        <p className='font-carbon'>Your next screenplay starts here.</p>
      </div>

      <div className="flex justify-center items-center md:w-full">

        <div className='flex'>
          <button
            className='rounded-l-full border-2 py-2 px-4 sm:py-4 sm:px-6 hover:bg-black hover:text-white transition-color duration-500'
            onClick={() => {
              setVideo(video_lesson1)
              setText1(store.Home_Section4_Text1)
              {/*setText2(store.Home_Section1_Text3)*/ }
            }}>
            <h1 className="hidden sm:flex font-carbon text-xs md:text-base xl:text-2xl">{'Video Lessons'}</h1>
            <VideoFilled className='min-[200px]:max-sm:flex hidden' size={20} />
          </button>
          <button
            className='border-y-2 border-r-2 py-2 px-4 sm:py-4 sm:px-6 hover:bg-black hover:text-white transition-color duration-500'
            onClick={() => {
              setVideo(video_lesson2)
              setText1(store.Home_Section4_Text2)
              {/*setText2(store.Home_Section1_Text2)*/ }
            }}>
            <h1 className="hidden sm:flex font-carbon text-xs md:text-base xl:text-2xl">{'Online Meetings'}</h1>
            <Events className='min-[200px]:max-sm:flex hidden' size={20} />
          </button>
          <button
            className='border-y-2 border-r-2 py-2 px-4 sm:py-4 sm:px-6 hover:bg-black hover:text-white transition-color duration-500'
            onClick={() => {
              setVideo(video_lesson3)
              setText1(store.Home_Section4_Text3)
              {/*setText2(store.Home_Section1_Text2)*/ }
            }}>
            <h1 className="hidden sm:flex font-carbon text-xs md:text-base xl:text-2xl">{'Homework'}</h1>
            <Construction className='min-[200px]:max-sm:flex hidden' size={20} />
          </button>
          <button
            className='border-y-2 py-2 px-4 sm:py-4 sm:px-6 hover:bg-black hover:text-white transition-color duration-500'
            onClick={() => {
              setVideo(video_lesson4)
              setText1(store.Home_Section4_Text4)
              {/*setText2(store.Home_Section1_Text2)*/ }
            }}>
            <h1 className="hidden sm:flex font-carbon text-xs md:text-base xl:text-2xl">{'Writing'}</h1>
            <Pen className='min-[200px]:max-sm:flex hidden' size={20} />
          </button>
          <button
            className='rounded-r-full border-2 py-2 px-4 sm:py-4 sm:px-6 hover:bg-black hover:text-white transition-color duration-500'
            onClick={() => {
              setVideo(video_lesson5)
              setText1(store.Home_Section4_Text5)
              {/*setText2(store.Home_Section1_Text2)*/ }
            }}>
            <h1 className="hidden sm:flex font-carbon text-xs md:text-base xl:text-2xl">{'Additional Activities'}</h1>
            <SprayPaint className='min-[200px]:max-sm:flex hidden' size={20} />
          </button>
        </div>
      </div>


      <div className="xl:flex mt-10 justify-center mx-auto">
        <div className="pl-0 xl:pl-20">
          <Tilt tiltMaxAngleX={1.5} tiltMaxAngleY={1.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={'white'} glareBorderRadius='30px' >
            <ImageHolder video={video} />
          </Tilt>
        </div>
        <div className="flex items-center mt-10 xl:mt-0">
          <div className="flex flex-col">
            <div className="w-[100%] md:px-[150px]">
              <h1 className="font-carbon text-base xl:text-lg">
                {text1}
              </h1>
            </div>
            <div className="flex justify-center mt-10">
              <a href='https://screenwriters.quest/' target='_blank' rel='noreferrer' >
                <button className='w-[200px] mt-1 rounded-full border-2 py-5 hover:bg-black hover:text-white transition-color duration-500'>
                  <h1 className="font-carbon">{'APPLY NOW!'}</h1>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quest