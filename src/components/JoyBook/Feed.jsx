import React from 'react'
import { Card } from './Card'
import { posts } from '../../utils/posts'

export const Feed = ({ data, setError }) => {

  const allPosts = posts.concat(data).reverse()

  return (
    <div className="pics flex w-[100%] h-screen items-center min-[200px]:max-xl:justify-center items-center scrollbar-none">
      {
        allPosts.map(post => <Card
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author.username}
          img={post.img}
          body={post.body}
          likes={post.likes}
          tags={post.tags}
          lorem={post.lorem}
          setError={setError}
        />)
      }
    </div>
  )
}
