import React from 'react'
import type {User} from 'prisma/prisma-client/index'



const GetUsers:React.FC<{users: User[]}> = ({users}) => {
    const handleFollow = async(id: number)=>{
        await fetch('http://localhost:3000/api/follow', {
            method:'post',
            headers: {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(id)
        })
    }
  return (
    <div className='bg-Liberty'>
        {users.map(user=>(
            <div key={user.id} className='shadow.lg'>
            <h1>{user.name}</h1>
            <button onClick={()=> handleFollow(user.id)}>Follow</button>
            </div>
        ))}
    </div>
  )
}

export default GetUsers