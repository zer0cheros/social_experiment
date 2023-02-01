import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Router from 'next/router'

const index = () => {

const [email, setEmail] = useState('')
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
   const handleRegister = async ()=>{
    const data = {
      name: username,
      email: email,
      password: password
    }
    await fetch('/api/register', {headers: {'Content-type': 'application/json'}, method: 'post', body: JSON.stringify(data)})
   Router.push('/login')
  }
  return (
    
    <div className='flex justify-center bg-Gunmetal h-100 w-100 font-mono pt-15'>
        <motion.div initial={{opacity: 0}}  animate={{opacity: 1, y: 30}} transition={{ duration: 2}} className='text-center border-2 bg-Liberty w-40 h-50 rounded'>
        <div id='round' className='absolute w-5 h-5 -left-6 -top-6 rounded-full bg-EerieBlack'></div>
            <p className='text-4xl mt-10'>Register</p>
         
            <motion.div>
            <br />
            <input onChange={({target})=> setEmail(target.value)} placeholder='Email' id='email' type='email' className=' mt-10 w-23 h-10 rounded'/>
            <br />
            <input onChange={({target})=> setUsername(target.value)} placeholder='Username' id='username' type='text' className='mt-8 w-23 h-10 rounded'/>
            <br />
            <input onChange={({target})=> setPassword(target.value)} placeholder='Password' id='password' type="password" className='mt-8 w-23 h-10 rounded'/>
            <br />
            <input placeholder='Confirm Password' id='conpassword' type='password' className='mt-8 w-23 h-10 rounded'/>
            <br />
            </motion.div>

            <div className='mt-10'>
                <button onClick={handleRegister} className='bg-Glaucous border text-white w-23 h-10 rounded' id='register'>Register</button>
            </div>
            <br />
            <p className='pt-6'>Already have an account?</p>
            <br />
            <a href="">Click Here</a>
            <br />
        </motion.div>
    </div>
  )
}

export default index