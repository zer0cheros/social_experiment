import {motion} from 'framer-motion'

export default function Home() {
  return (
    <motion.div initial={{opacity: 0}}  animate={{opacity: 1, y: 20}} transition={{ duration: 2}} className='bg-red-500'>
      <h1 className='text-bold text-xl font-extralight'>Social experiment with tailwind and framer motion</h1>
      
    </motion.div>
  )
}
