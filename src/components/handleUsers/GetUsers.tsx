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
    <div className='bg-Liberty h-screen absolute top-0 right-0 w-48 text-center m-auto'>
        <h1 className='text-semibold text-xl text-white '>Find a Friend</h1>
        {users.map(user=>(
            <div key={user.id} className='shadow-xl rounded-md p-11 relative m-4'>
            <h1 className='text-semibold text-lg text-white '>{user.name}</h1>
            <button onClick={()=> handleFollow(user.id)}>Follow</button>
            </div>
        ))}
    </div>
  )
}

export default GetUsers