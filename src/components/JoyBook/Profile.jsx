import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { userInfo } from '../../utils/user'
import { Add, Logout } from '@carbon/icons-react'
import { fadeInSmall } from '../../variants'
import { useApolloClient, useMutation, useQuery } from '@apollo/client'
import { ALL_POSTS, CREATE_POST, EDIT_BIO, EDIT_WALL, ME } from '../../queries/queries'
import { postImgs } from '../../utils/postImgs'
import axios from 'axios'
import { InfinitySpin } from 'react-loader-spinner'

export const Profile = ({ setError, setType, setToken }) => {

  const [bio, setBio] = useState('')
  const [changeBio, setChangeBio] = useState(false)

  const [addPost, setAddPost] = useState(false)
  const [addImg, setAddImg] = useState(false)
  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [post, setPost] = useState('')
  const [tags, setTags] = useState('')

  //Cloudinary State
  const [cloudinaryWallImage, setCloudinaryWallImage] = useState('')
  const [cloudinaryAvatarImage, setCloudinaryAvatarImage] = useState('')

  const client = useApolloClient()

  const [createPost] = useMutation(CREATE_POST, {
    refetchQueries: [{ query: ALL_POSTS }],
    onError: (error) => {
      const messages = error.graphQLErrors[0].message
      console.log(messages)
      setError(messages)
    }

  })

  const [editAvatar] = useMutation(EDIT_BIO, {
    refetchQueries: [{ query: ALL_POSTS }],
    onError: (error) => {
      const messages = error.graphQLErrors[0].message
      console.log(messages)
      setError(messages)
    }

  })

  const [editWall] = useMutation(EDIT_WALL, {
    refetchQueries: [{ query: ALL_POSTS }],
    onError: (error) => {
      const messages = error.graphQLErrors[0].message
      console.log(messages)
      setError(messages)
    }

  })

  const [editBio] = useMutation(EDIT_BIO, {
    refetchQueries: [{ query: ALL_POSTS }],
    onError: (error) => {
      const messages = error.graphQLErrors[0].message
      console.log(messages)
      setError(messages)
    }

  })

  //User State

  // eslint-disable-next-line no-unused-vars
  const { loading, error, data } = useQuery(ME)

  if (loading) {

    return (
      <div className='flex justify-center items-center h-[700px] w-full'>
        <div className="flex justify-center items-center h-[700px] w-screen">

          <InfinitySpin
            color="white"
          />
        </div>
      </div>
    )
  }

  if (error) {
    console.log(`Error: ${error.message}`)
  }

  const user = data ? data.me : null
  console.log(user)

  const handleBio = () => {
    if (bio.length > 0) {
      editBio({ variables: { bio } })
      setChangeBio(!changeBio)
    }
    else {
      setChangeBio(!changeBio)
    }
  }

  const handleSubmit = () => {

    const tagsArr = tags.split(',')

    createPost({ variables: { title, body: post, img, tags: tagsArr, likes: 0 } })
    setType('add')
    setError(`${title} posted succesfully!`)
    setTimeout(() => {
      setError(null)
      setType(null)
    }, 5000)
    setTitle('')
    setPost('')
    setImg('')
    setTags('')

  }

  const handleWall = (e) => {

    e.preventDefault()

    const formData = new FormData()
    formData.append('file', e.target.files[0])
    formData.append('upload_preset', 'xksqk2bc')

    axios.post(
      'https://api.cloudinary.com/v1_1/maulight/image/upload',
      formData
    )
      .then((response) => {
        console.log(response)
        setCloudinaryWallImage(response.data.secure_url)
        editWall({ variables: { wall: response.data.secure_url } })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleAvatar = (e) => {

    e.preventDefault()

    const formData = new FormData()
    formData.append('file', e.target.files[0])
    formData.append('upload_preset', 'xksqk2bc')

    axios.post(
      'https://api.cloudinary.com/v1_1/maulight/image/upload',
      formData
    )
      .then((response) => {
        console.log(response)
        setCloudinaryAvatarImage(response.data.secure_url)
        editAvatar({ variables: { pic: response.data.secure_url } })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleLogOut = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
  }

  return (
    <div className="flex justify-center items-center flex-col min-[1200px]:min-w-[499px] min-[200px]:max-[1200px]:mt-10 h-[606px] text-black bg-white rounded-l-[15px] px-5 py-10 mb-2 min-[1200px]:ml-3 relative">
      <div className='absolute top-[7%] left-[84%] h-[100px] w-[100px] z-40'>
        <motion.div
          variants={fadeInSmall('down', 0.1)}
          initial="hidden"
          whileHover={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='h-[50px] w-[50px] flex justify-center items-center rounded-full border-2 border-white'
        >

          <label>
            <div className="flex items-center justify-center h-full">

              <Add className='mt-5' size={30} />

            </div>
            <input
              type="file"
              name="upload-cover"
              onChange={(e) => handleWall(e)}
              className="w-0 h-0"
            />
          </label>

        </motion.div>
      </div>
      <div className='absolute top-[7%] left-[6%] h-[100px] w-[100px] z-40'>
        <motion.div
          variants={fadeInSmall('down', 0.1)}
          initial="hidden"
          whileHover={'show'}
          viewport={{ once: false, amount: 0.7 }}
          onClick={handleLogOut}
          className='h-[50px] w-[50px] flex justify-center items-center rounded-full border-2 border-white'
        >
          <Logout size={30} />
        </motion.div>
      </div>
      <img className='h-[35%] w-full object-cover rounded-t-[15px]' src={cloudinaryWallImage ? cloudinaryWallImage : userInfo.wallpaper} />
      <div className='absolute top-[28%] min-[500px]:top-[27%] left-[37%] min-[500px]:left-[42%] md:left-[44%] lg:left-[45%] min-[1200px]:left-[40%] h-[100px] w-[100px] z-40'>


        <label>
          <div className='h-[100px] w-[100px] flex justify-center items-center rounded-full border-2 border-white bg-white opacity-0 hover:opacity-100 transition-opacity duration-200'>
            <Add size={60} />
          </div>
          <input
            type="file"
            name="upload-avatar"
            onChange={(e) => handleAvatar(e)}
            className="w-0 h-0"
          />
        </label>

      </div>
      <img className='absolute top-[28%] min-[500px]:top-[27%] left-[37%] min-[500px]:left-[42%] md:left-[44%] lg:left-[45%] min-[1200px]:left-[40%] h-[100px] w-[100px] object-cover rounded-full border-2 border-white' src={cloudinaryAvatarImage ? cloudinaryAvatarImage : userInfo.pic} />
      <h1 className='font-carbon text-4xl mt-[48px] mb-2'>{`{${user ? user.username : userInfo.username}}`}</h1>
      {
        changeBio ?
          (
            <div className="flex gap-x-2">
              <input id='title' placeholder='edit bio' className='rounded-md h-8  text-white w-full' type='text' value={bio} onChange={({ target }) => setBio(target.value)} />
              <button
                onClick={handleBio}
                className='w-[120px] px-2 text-sm rounded-full border-2 border-black py-1 hover:bg-black hover:text-white transition-color duration-200'
              >save_</button>
            </div>
          )

          :

          (
            <p className='font-carbon text-[12px] md:text-[15px]' onClick={() => setChangeBio(!changeBio)}>{bio.length > 0 ? bio : userInfo.bio}</p>
          )

      }
      <div className="border-b-2 w-2 w-[65%] py-2"></div>
      <div>

        {
          !addPost ?
            (
              <>
                <div className="flex justify-center sm:justify-start items-center gap-x-2 w-full mb-3 mt-5">
                  <label className='hidden sm:flex font-carbon mr-2'>Friends:</label>
                  {
                    userInfo.friends.map(friend => <img key={friend.username} className='h-[40px] w-[40px] object-cover rounded-full border-2 border-black' src={friend.pic} />)
                  }
                </div>
                <div className='flex justify-between'>
                  <label className='hidden sm:flexfont-carbon'>Posts:</label>
                  <ul className='px-2 py-3'>
                    {
                      userInfo.posts.map(post => <li key={post.id} className='py-1 font-carbon text-[12px] sm:text-sm'>{post.title}</li>)
                    }
                  </ul>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    className='w-[200px] mt-1 rounded-full border-2 border-black py-2 hover:bg-black hover:text-white transition-color duration-200'
                    onClick={() => setAddPost(!addPost)}
                  >Add post_</button>
                </div>
              </>
            )
            :
            (
              <>
                {
                  !addImg ? (
                    <>
                      <div className="flex flex-col w-[400px] min-h-[180px]">

                        <div className="flex flex-col pt-3">
                          <div className="flex gap-x-5 mt-2">
                            <label className='font-carbon text-sm' htmlFor='title'>Title:</label>
                            <input id='title' className='rounded-md h-8  text-white w-full' type='text' value={title} onChange={({ target }) => setTitle(target.value)} />
                          </div>
                          <div className="flex gap-x-5 mt-2">
                            <label className='font-carbon text-sm' htmlFor='post'>Post:</label>
                            <textarea className='text-white text-sm rounded-md h-[50px] w-full' id='post' type='text' value={post} onChange={({ target }) => setPost(target.value)} />
                          </div>
                          <div className='flex gap-x-5 mt-2'>
                            <label htmlFor='tags' className='font-carbon text-sm'>tags: </label>
                            <div className="flex flex-col">
                              <div className="flex justify-between gap-x-3 w-[350px]">
                                <input id='tags' className='rounded-md h-8 w-full text-white' type='text' value={tags} onChange={({ target }) => setTags(target.value)} />
                                <button
                                  onClick={() => setAddImg(!addImg)}
                                  className='w-[120px] px-2 text-sm rounded-full border-2 border-black py-1 hover:bg-black hover:text-white transition-color duration-200'
                                >Add img_</button>
                              </div>
                              <small className='text-[9px] mt-1'>{'Separate tags with a comma (eg. love,mood)'}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-center items-center gap-x-3'>
                        <button
                          className='w-[150px] mt-1 rounded-full border-2 border-black py-2 hover:bg-black hover:text-white transition-color duration-200'
                          onClick={handleSubmit}
                        >Submit_</button>
                        <button
                          className='w-[150px] mt-1 rounded-full border-2 border-black py-2 hover:bg-black hover:text-white transition-color duration-200'
                          onClick={() => setAddPost(!addPost)}
                        >Return_</button>
                      </div>
                    </>
                  )
                    :
                    (
                      <>
                        <div className="flex flex-wrap w-[400px] h-auto rounded-[15px] min-h-[160px] mt-[20px]">
                          {
                            postImgs.map(img => (
                              <motion.img
                                key={img.id}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                className='w-[50px] h-[50px] object-cover'
                                onClick={() => {
                                  setImg(img.img)
                                  setAddImg(!addImg)
                                }}
                                src={img.img}
                              />
                            ))
                          }
                        </div>
                        <div className='flex justify-center items-center gap-x-3'>
                          <button
                            className='w-[150px] mt-1 rounded-full border-2 border-black py-2 hover:bg-black hover:text-white transition-color duration-200'
                            onClick={() => setAddImg(!addImg)}
                          >Return_</button>
                        </div>
                      </>
                    )
                }
              </>
            )
        }

      </div>

    </div>
  )
}
