import React from 'react'

const index = () => {
   
  return (
    <div className='flex justify-center bg-Gunmetal h-100 w-100 font-mono pt-10'>
        <div className='text-center border-2 bg-Liberty w-40 h-50 rounded'>
            <p className='text-4xl mt-6'>Register</p>

            <div>
            <br />
            <input placeholder='Gmail' type='text' className=' mt-10 w-23 h-10 rounded'/>
            <br />
            <input placeholder='Name' type="text" className='mt-8 w-23 h-10 rounded'/>
            <br />
            <input placeholder='Username' type='text' className='mt-8 w-23 h-10 rounded'/>
            <br />
            <input placeholder='Password' type="password" className='mt-8 w-23 h-10 rounded' id='password'/>
            <br />
            <input placeholder='Confirm Password' type='password' className='mt-8 w-23 h-10 rounded'/>
            <br />
            </div>

            <div className='mt-10'>
                <button className='bg-Glaucous border text-white w-23 h-10 rounded'>Register</button>
            </div>
            <br />
            <p className='text-white'>Have you forgot your password?</p>
        </div>
    </div>
  )
}

export default index