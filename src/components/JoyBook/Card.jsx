import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Favorite, FavoriteFilled } from '@carbon/icons-react'
import { fadeInSmall } from '../../variants'
import { useMutation } from '@apollo/client'
import { ADD_LIKES, ALL_POSTS } from '../../queries/queries'

export const Card = ({ id, title, author, img, body, likes, tags, lorem, setError }) => {

  const [liked, setLiked] = useState(false)
  const [newLikes, setNewLikes] = useState(likes)

  const [addLikes] = useMutation(ADD_LIKES, {
    refetchQueries: [{ query: ALL_POSTS }],
    onError: (error) => {
      const messages = error.graphQLErrors[0].message
      console.log(messages)
      setError(messages)
      setTimeout(() => {
        setError(null)
      }, 5000)
    }
  })

  const handleLikes = () => {

    const likesNum = parseInt(likes)

    if (liked === true) {
      return -1
    }

    if(lorem) {
      setNewLikes(parseInt(newLikes) + 1)
      setLiked(true)
      return 1
    }

    setLiked(true)
    addLikes({ variables: { title, setLikesto: likesNum + 1 } })
    return 1
  }

  return (
    <motion.div
      variants={fadeInSmall('left', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: true, amount: 0.7 }}
      key={id}
      className='min-w-[99vw] lg:min-w-[35vw] h-screen object-contain object-center overflow-hidden text-black bg-white border-r border-black px-5 py-10'
    >
      <h1 className='font-carbon text-2xl lg:text-4xl mb-4'>{title}</h1>
      <div className="flex">
        <p className='mr-1 font-carbon'>by</p>
        <p className='font-papillon text-[18px]'>{author}</p>
      </div>
      <img className='md:h-[60%] lg:h-[40%] xl:h-[50%] w-full object-cover mx-auto' src={img} />
      <div className='flex justify-between'>
        <div className="flex">
          {
            tags.map((tag, i) => (
              <div key={i} className="border-2 border-black rounded-full px-2 py-1 my-3 mx-1">
                <p className='text-[10px]'>{tag}</p>
              </div>
            )
            )
          }
        </div>
        <button onClick={() => handleLikes(likes)}>
          {
            liked ? (
              <FavoriteFilled size={24} />
            )
              :
              (
                <Favorite size={24} />
              )
          }
        </button>
      </div>
      <p className='text-[12px] font-carbon mb-1 text-end'>{`${newLikes === likes ? likes : newLikes + 1} likes`}</p>
      <div className="flex overflow-hidden">
        <p className='text-sm font-carbon'>{body}</p>
      </div>
    </motion.div>
  )
}
