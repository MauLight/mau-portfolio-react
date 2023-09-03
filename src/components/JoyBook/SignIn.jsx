import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMutation } from '@apollo/client'
import { SIGNUP } from '../../queries/queries'

export const SignIn = ({ setError, setSigned }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // eslint-disable-next-line no-unused-vars
  const [signup, result] = useMutation(SIGNUP, {
    onError: error => {
      setError(error.graphQLErrors[0].message)
    }
  })

  const validateEmail = (pass) => {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/
    return regex.test(pass)
  }

  const submit = async (e) => {
    e.preventDefault()

    console.log(username.length)

    if (username.length < 5) {
      setError('Username must be at least five characters long.')
      return
    }

    if (!validateEmail(password)) {
      setError('Pasword must be minimum eight characters, at least one uppercase letter, one number and one special character.')
      return
    }
    signup({ variables: { username, password } })
  }

  useEffect(() => {
    if (result.data) {
      setSigned(true)
    }
  }, [result.data])

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-y-2 h-[700px] lg:w-1/2 px-10">
        <div className='w-[300px] flex justify-center items-center mb-2'>
          <motion.h1
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className='text-5xl font-kunika'>Sign-In</motion.h1>
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
          <small className='text-carbon'>Already have an account? <button onClick={() => setSigned(true)} className='text-carbon decoration-solid'>Login</button></small>
        </div>
        <div className='flex justify-center items-center mt-5'>
          <motion.button
            onClick={submit}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className='font-carbon text-[12px] border-2 p-5 rounded-full w-[70px] h-[70px] hover:bg-white hover:text-[#9f56f4] active:bg-[#9f56f4] active:text-white'
          >sign</motion.button>
        </div>
      </div>
    </>
  )
}
