import React from 'react'

const Follows = () => {
  return (
    <>
    <div className='w-full h-[80px] flex justify-center items-center bg-Onyx mt-6'>
      <div className='w-1/4 h-full  flex justify-center items-center'>IMG</div>
      <div className='w-2/4 h-full  flex justify-center items-center'>Your Name</div>
      <div className='w-1/4 h-full  flex justify-center items-center'><button className="bg-Ruby hover:bg-Ruby text-white font-bold py-2 px-4 border border-red-800 ">Follow</button>
      </div>
    </div>


    </>
  )
}

export default Follows