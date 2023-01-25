import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineWhatsApp, AiTwotoneMail } from 'react-icons/Ai'
import { AiOutlineTwitter } from 'react-icons/Ai'
import { AiOutlineInstagram } from 'react-icons/Ai'
import { AiOutlineGithub } from 'react-icons/Ai'

const Footer = () => {
  return (

    <div className=' text-white h-24 text-lg flex items-center justify-center-left  bg-Onyx'>
    <div className='w-4'></div>
    <div className='min-w-[150px] w-[15%] h-12 bg-Liberty rounded-lg  flex items-center justify-center'>
      <span className='text-sm'>
        Get connected with us on our social networks:</span>
    </div>

    <div className=' h-12 w-96'></div>
    <div className=' h-12 w-96'></div>
    <div className=' h-12 w-96'></div>
    <div className=' h-12 w-48'></div>

   <div className='w-80 h-12 bg-Liberty flex rounded-lg items-center justify-center '>

      <FaFacebookF  size={25} />
      <AiTwotoneMail size={25} />
      <AiOutlineTwitter size={25} />
      <AiOutlineInstagram size={25} />
      <AiOutlineGithub size={25} />
      <AiOutlineWhatsApp size={25}/>
   </div>
    <div className=' absolute bottom-0 left-0 h-96 w-screen  bg-Gunmetal'>
      <div className="text-white w-46 h-48 bg-Ruby">e</div>
    </div>
  </div>

  )
}

export default Footer