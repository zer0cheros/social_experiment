import React from 'react'

const login = () => {
  return (
    <div className="flex justify-center bg-Onyx h-screen">
      <div className="flex justify-center rounded-md overflow-hidden shadow-lg h-[32rem] w-96 bg-white mt-15">
        <div>
         <h1 className="text-2xl font-serif">Login</h1>
         
         <input type="text" id="first_name" className="" placeholder="Email" required></input>
         <input type="text" id="first_name" className="" placeholder="Password" required></input>
         </div>
      </div>
    </div>
  )
}

export default login