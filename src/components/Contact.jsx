import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import mau from '../img/mau.png'
import contact_02 from '../img/contact_02.png'
import { fadeInSmall } from '../variants'

export const Contact = () => {

  const form = useRef()

  const submit = async (e) => {
    e.preventDefault()

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })

    e.target.reset()
  }

  return (
    <div
      style={{ backgroundImage: `url(${contact_02})`, objectFit: 'cover' }}
      id='contact'
      className='flex gap-x-10 min-h-[700px] w-screen border-y-2 border-white'
    >
      <motion.div
        variants={fadeInSmall('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center items-center w-1/2"
      >
        <img src={mau} className='w-full h-auto' />
        <div className="border-l-2 w-2 h-[45%] py-5"></div>
      </motion.div>
      <motion.div
        variants={fadeInSmall('down', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col justify-center items-center w-1/2"
      >
        <form ref={form} onSubmit={submit}>
          <div className="flex flex-col justify-start gap-y-2 w-[35vw]">
            <h1 className='font-mexica text-white text-6xl my-5 text-start'>{'Let\'s work together.'}</h1>
            <label className='font-carbon text-sm text-white' htmlFor='name'>Your name:</label>
            <input required className='rounded-r-full h-8 w-full text-white w-[40%]' type='text' id='name' name="user_name" />
            <label className='font-carbon text-sm text-white' htmlFor='email'>Your email:</label>
            <input required className='rounded-r-full h-8 w-full text-white w-[60%]' type='email' id='email' name="user_email" />
            <label className='font-carbon text-sm text-white' htmlFor='message'>Your message:</label>
            <textarea required className='rounded-r-full h-8 w-full h-[120px] text-white w-4/5' type='text' id='message' name="message" />
            <div className='flex justify-end items-center mt-5'>
              <motion.button
                type='submit'
                value="Send"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className='font-carbon text-[12px] border-2 p-5 rounded-full w-[90px] h-[90px] bg-[#393939] hover:bg-white hover:text-[#9f56f4] active:bg-[#9f56f4] active:text-white'
              >submit</motion.button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
