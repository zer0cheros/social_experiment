import React from 'react'
import { useState } from 'react';
import {signIn} from 'next-auth/react'


const login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const handleLogin = async ()=>{
  await signIn('credentials', {email: email, password: password, callbackUrl: '/'})
}
  return (
    <div className="flex justify-center bg-Onyx h-screen">
      <div className="flex justify-center rounded-md overflow-hidden shadow-lg h-[32rem] w-96 bg-white mt-15">
        <div className="flex flex-col items-center justify-center">
          
         <h1 className="text-2xl font-serif">Login</h1>
         
         <input type="text" onChange={({target})=> setEmail(target.value)} id="default-input" placeholder="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-6"></input>
         <input type="text" onChange={({target})=> setPassword(target.value)} id="default-input" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-6"></input>

         <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
              Login
         </button>
         </div>
      </div>
    </div>
  )
}

export default login
