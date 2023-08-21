import React from 'react'
import { motion } from 'framer-motion'
import { blogFirsts, inLessFirsts, screenplays } from '../../utils/blogs'
import { fadeInSmall } from '../../variants'
import { Link } from 'react-router-dom'

export const Blog = () => {
  return (
    <div className='flex flex-wrap h-[1400px] w-full gap-x-3 justify-center items-center py-[30px]'>
      {
        screenplays.map(blog => (
          <motion.div
            variants={fadeInSmall('down', blog.fade)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            key={blog.id}
            className="flex flex-col w-[30vw]"
          >
            <Link to={`/screenplays/${blog.id}`}>
              <div className={`${blog.rounded} mx-auto w-[30vw] max-h-[70vh] object-contain object-center rounded-[10px] group relative overflow-hidden`}>
                <img src={blog.img} className={'w-full max-h-full object-cover hover:scale-[110%] transition-scale duration-500'} />
              </div>
              <div className="flex justify-start gap-x-2 my-5">
                <p className='font-carbon text-sm'>{blog.date}</p>
                <div className="border rounded-full px-2">
                  <p className='font-carbon text-sm'>{blog.tag}</p>
                </div>
              </div>
              <h1 className='blog-item font-primary text-2xl'>{blog.title}</h1>
            </Link>
          </motion.div>
        )
        )
      }
      {
        inLessFirsts.map(blog => (
          <motion.div
            variants={fadeInSmall('right', blog.fade)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            key={blog.id}
            className="flex flex-col w-[30vw]"
          >
            <Link to={`/inless/${blog.id}`}>
              <video loop autoPlay muted src={blog.video} className='rounded-r-full w-[30vw] max-h-[28vh] object-cover' />
              <div className="flex justify-start gap-x-2 my-5">
                <p className='font-carbon text-sm'>{blog.date}</p>
                <div className="border rounded-full px-2">
                  <p className='font-carbon text-sm'>{blog.tag}</p>
                </div>
              </div>

              <h1 className='blog-item font-primary text-2xl'>{blog.title}</h1>
            </Link>
          </motion.div>
        )
        )
      }
      {
        blogFirsts.map(blog => (
          <motion.div
            variants={fadeInSmall('left', blog.fade)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            key={blog.id}
            className="flex flex-col w-[30vw]"
          >
            <Link to={`/blogs/${blog.id}`}>
              <div className={'rounded-l-full mx-auto w-[30vw] max-h-[27vh] object-contain object-center rounded-[10px] group relative overflow-hidden'}>
                <img src={blog.img} className={'w-full h-full object-cover hover:scale-[110%] transition-scale duration-500'} />
              </div>
              <div className="flex justify-start gap-x-2 my-5">
                <p className='font-carbon text-sm'>{blog.date}</p>
                <div className="border rounded-full px-2">
                  <p className='font-carbon text-sm'>{blog.tag}</p>
                </div>
              </div>
              <h1 className='blog-item font-primary text-2xl'>{blog.title}</h1>
            </Link>
          </motion.div>
        )
        )
      }
    </div>
  )
}