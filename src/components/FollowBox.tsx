import React from 'react'

const Follows = () => {
  return (
    <>
    <div className='w-full min-w-600 h-[80px] flex justify-center items-center bg-Onyx mt-6 shadow-3xl'>
      <div className='w-1/4 h-full  flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="#7289DA" height="48" width="48"><path d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Z"/></svg></div>
      <div className='w-2/4 h-full  flex justify-start items-center text-white'>Lorem ipsum dolor sit amet.</div>
      <div className='w-1/4 h-full  flex justify-center items-center'><button className="bg-Ruby hover:bg-RubyLight text-white font-bold py-2 px-10 border border-red-800 ">Follow</button>
      </div>
    </div>


    </>
  )
}

export default Follows