import { GetServerSideProps } from 'next/types'
import React, { useEffect, useState } from 'react'
import { getSession } from 'next-auth/react'
import { userAgent } from 'next/server'

export const getServerSideProps:GetServerSideProps = async({req}) =>{
  const session = await getSession({req})
  if(session){
    const user = await prisma.user.findUnique({where: {
      email: session.user.email
  }})
  const followers = await prisma.followers.findMany({where: {
      followId: user.email
  }})
  return {
    props: {
      followers
    }
  }
  }
  
}

const Follows = () => {
  const [follow, setFollow] = useState([])
  const fetchData = async()=>{
    const res = await fetch('/api/follow')
    const data = await res.json()
    console.log(data);
    
    setFollow(data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
    {follow.map(follows=> (
      <div key={follows.userId}className='w-full min-w-600 h-[80px] flex justify-center items-center bg-Onyx mt-6 shadow-3xl'>
      <div className='w-1/4 h-full  flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="#7289DA" height="48" width="48"><path d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Z"/></svg></div>
      <div className='w-2/4 h-full  flex justify-start items-center text-white'>{follows.userName}</div>
      <div className='w-1/4 h-full  flex justify-center items-center'><button className="bg-Ruby hover:bg-RubyLight text-white font-bold py-2 px-10 border border-red-800 ">Follow</button>
      </div>
    </div>
    ))}
    


    </>
  )
}

export default Follows