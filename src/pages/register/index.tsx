import React from 'react'
import {motion} from 'framer-motion'

const index = () => {
   
  return (
    <div className='flex justify-center bg-Gunmetal h-100 w-100 font-mono pt-10'>
        <motion.div initial={{opacity: 0}}  animate={{opacity: 1, y: 30}} transition={{ duration: 2}} className='text-center border-2 bg-Liberty w-40 h-50 rounded'>
            <p className='text-4xl mt-6'>Register</p>

            <motion.div>
            <br />
            <input placeholder='Email' id='email' type='email' className=' mt-10 w-23 h-10 rounded'/>
            <br />
            <input placeholder='Name' id='name' type="text" className='mt-8 w-23 h-10 rounded'/>
            <br />
            <input placeholder='Username' id='username' type='text' className='mt-8 w-23 h-10 rounded'/>
            <br />
            <input placeholder='Password' id='password' type="password" className='mt-8 w-23 h-10 rounded'/>
            <br />
            <input placeholder='Confirm Password' id='conpassword' type='password' className='mt-8 w-23 h-10 rounded'/>
            <br />
            </motion.div>

            <div className='mt-10'>
                <button className='bg-Glaucous border text-white w-23 h-10 rounded'>Register</button>
            </div>
            <br />
        </motion.div>
    </div>
  )
}

export default index