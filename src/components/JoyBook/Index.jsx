import React, { useEffect, useState } from 'react'
import { useApolloClient, useQuery, useSubscription } from '@apollo/client'
import { ALL_POSTS, ALL_USERS, POST_ADDED, USER_ADDED } from '../../queries/queries'
import Notification from './Notification'
import { JoyForm } from './JoyForm'
import { SignIn } from './SignIn'
import { Banner } from './Banner'
import { Feed } from './Feed'
import { Profile } from './Profile'
import { InfinitySpin } from 'react-loader-spinner'

export const JoyBookIndex = () => {

  const [token, setToken] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [signed, setSigned] = useState(true)
  const [type, setType] = useState(null)

  const resultPosts = useQuery(ALL_POSTS)

  const client = useApolloClient()

  useSubscription(USER_ADDED, {
    onData: ({ data }) => {
      const addedUser = data.data.userAdded
      notify(`${addedUser.username} just created an account!`)
      client.cache.updateQuery({ query: ALL_USERS }, ({ allUsers }) => {
        return {
          allUsers: allUsers.concat(addedUser),
        }
      })
    }
  })

  useSubscription(POST_ADDED, {
    onData: ({ data }) => {
      const addedPost = data.data.postAdded
      notify(`${addedPost.title} was just added by ${addedPost.author.username}!`)
      client.cache.updateQuery({ query: ALL_POSTS }, ({ allPosts }) => {
        return {
          allPosts: allPosts.concat(addedPost),
        }
      })
    }
  })

  useEffect(() => {
    const token = localStorage.getItem('joybook-user-token')
    console.log(token)
    if (token) {
      setToken(token)
    }
  }, [])

  if (resultPosts.loading) {
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

  const posts = resultPosts?.data?.allPosts ? resultPosts.data.allPosts : []

  console.log(posts)

  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)
  }

  return (
    <div id='joybook' className={'min-[1200px]:flex justify-center items-center border-y-2 relative'}>
      <div className="absolute top-[10%] z-40">
        <Notification errorMessage={errorMessage} type={type} />
      </div>
      {
        token ?
          (
            <>
              <Profile setType={setType} setToken={setToken} setError={setErrorMessage} />
              <Feed data={posts} setError={setErrorMessage} />
            </>
          )
          :
          (
            <>
              {
                !signed ? (
                  <SignIn setError={notify} setSigned={setSigned} />
                )
                  :
                  (
                    <JoyForm setToken={setToken} setError={notify} setSigned={setSigned} />
                  )
              }
              <div className="hidden min-[1200px]:flex border-l-2 w-2 h-[400px] py-5"></div>
              <Banner />
            </>
          )

      }
    </div>
  )
}
