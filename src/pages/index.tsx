import type { User } from "prisma/prisma-client"
import GetUsers from "../components/handleUsers/GetUsers"
import TopbarScroll from "../components/Topbar/Topbar_comp"
import prisma from "../core/prisma"
import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import Posts from "../components/handlePosts/Posts"
import { useState } from "react"



export const getServerSideProps:GetServerSideProps = async({req, res}) =>{
  const session = await getSession({req})
  if(session){
    const users = await prisma.user.findMany()
    const posts = await prisma.post.findMany()
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
      posts: posts
    }
  }
  }
  else{
    return {
      props: {
        users: [],
        posts: []
      }
    }
  }
}

export default function Home({users, posts}:any) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  async function handlePost(){
    const data = {
      title: title,
      content: content
    }
    await fetch('/api/post', {headers: {'Content-type': 'application/json'}, method: 'post', body: JSON.stringify(data)})
    setContent('')
    setTitle('')
    window.location.href = '/'

  }
  return (
    <>
      <TopbarScroll />
      <GetUsers  users={users}/>
      <Posts  posts={posts}/>
      <input onChange={(e)=>setTitle(e.target.value)} type="text" />
      <textarea onChange={(e)=>setContent(e.target.value)} name="content"></textarea>
      <button onClick={handlePost}>Add Post</button>
    </>  
  )
}
