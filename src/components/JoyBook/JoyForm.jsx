import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { LOGIN } from '../../queries/queries'
import { useMutation } from '@apollo/client'

export const JoyForm = ({ setToken, setError, setSigned }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  //LOGIN LOGIC
  const [login, result] = useMutation(LOGIN, {
    onError: error => {
      setError(error.graphQLErrors[0].message)
    }
  })

  const submit = async (e) => {
    e.preventDefault()
    login({ variables: { username, password } })
  }

  useEffect(() => {
    if (result.data) {
      const token = result.data.login.value
      setToken(token)
      console.log('SET ITEM HERE')
      localStorage.setItem('joybook-user-token', token)
    }
  }, [result.data])

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-y-2 h-screen bg-gradient-to-l from-violet-500 to-fuchsia-500 px-10 min-[200px]:max-[1200px]:bg-site">
        <div className='w-[300px] flex justify-center items-center mb-2'>
          <motion.h1
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className='text-5xl font-kunika'>joyBook</motion.h1>
        </div>
        <div className='w-[300px]'>
          <label className='text-[14px]' htmlFor='username'>Username:</label>
          <input
            id='username'
            type='text'
            className='h-8 w-full font-carbon text-sm px-2 mt-2'
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div className='w-[300px]'>
          <label className='text-[14px]' htmlFor='username'>Password:</label>
          <input
            id='password'
            type='password'
            className='h-8 w-full font-carbon text-sm px-2 mt-2'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div className="flex justify-center">
          <small className='text-carbon'>{'Don\'t have an account?'} <button onClick={() => setSigned(false)} className='text-carbon decoration-solid'>Sign In</button></small>
        </div>
        <div className='flex justify-center items-center mt-5'>
          <motion.button
            onClick={submit}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className='font-carbon text-[12px] border-2 p-5 rounded-full w-[70px] h-[70px] hover:bg-white hover:text-[#9f56f4] active:bg-[#9f56f4] active:text-white'
          >login</motion.button>
        </div>
      </div>
    </>
  )
}
