import React from 'react'
// import { motion } from 'framer-motion'
import { screenplays } from '../../utils/blogs'
import { Quotes } from '@carbon/icons-react'
// import { fadeInSmall } from '../../variants'

export const ScreenPost = ({ screenplayId }) => {

    const scriptFilter = screenplays.filter(script => script.id === screenplayId)

    return (
        <div className='min-h-[700px] w-screen bg-white py-20'>
            {
                scriptFilter.map(script => (
                    <div
                        key={script.id}
                        className="flex flex-col w-[90vw] px-20"
                    >
                        <h1 className='blog-item font-primary text-black text-7xl'>{script.title}</h1>
                        <div className="border-b-2 w-2 w-full py-2"></div>
                        <div className="flex justify-start gap-x-2 my-10">
                            <p className='font-carbon text-black text-sm'>{script.date}</p>
                            <div className="border border-black rounded-full px-2">
                                <p className='font-carbon text-black text-sm'>{script.tag}</p>
                            </div>
                        </div>
                        <div className={`mx-auto w-[30vw] max-h-[90vh] object-contain object-center rounded-[10px] group relative overflow-hidden`}>
                            <img src={script.img} className={'w-full max-h-full object-cover hover:scale-[110%] transition-scale duration-500'} />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-center mt-10 items-center gap-x-2">
                                {
                                    script.genres.map(genre => (
                                        <div className="border border-black rounded-full px-2">
                                            <p className='font-carbon text-black text-sm'>{genre}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="flex gap-x-5 my-10 items-center">
                                <Quotes className='text-black w-[300px] h-auto' size={32} />
                                <p className='font-carbon text-black text-4xl'>{script.logline}</p>
                            </div>
                            <div className="flex my-10 justify-center items-center rounded overflow-hidden">
                                <iframe
                                    className='rounded'
                                    src={script.pdf}
                                    width="830"
                                    height="1020"
                                    allow="autoplay"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


// variants={fadeInSmall('left', blog.fade)}
// initial="hidden"
// whileInView={'show'}
// viewport={{ once: false, amount: 0.7 }}