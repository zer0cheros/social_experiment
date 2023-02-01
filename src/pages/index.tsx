import {motion} from 'framer-motion'

export default function Home() {
  return (
    <div  className='bg-gray-300 h-screen w-screeen'>
      <motion.h1 initial={{ opacity: 0, x: 20}}  animate={{ opacity: 1, x: 0}} transition={{ duration: 1}} className='text-bold text-xl'>Social experiment with tailwind and framer motion</motion.h1>
    </div>  
  )

}
}