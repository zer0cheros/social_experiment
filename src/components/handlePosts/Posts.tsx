import React from 'react'
import type { Post } from '@prisma/client'

const Posts:React.FC<{posts: Post[]}> = ({posts}) => {
  return (
    <div>
        {posts.map(post=>(
            <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
        ))}
    </div>
  )
}

export default Posts