import React,{useState}  from 'react'

const Sidebar = () => {

  const [open, setOpen] = useState( false )
function hanldeOpen (){
  if(!open){setOpen(true)}
  else{setOpen( false )} 
}

  return (
    <>
    {
      open? <div className="bg-gray-900 h-screen w-64 flex-none">
      
      <nav>
        <a href="#" className="block px-4 py-2 text-lg font-medium leading-5 text-white bg-sky-500 hover:bg-sky-700 ...">Home  
        <button className='text-lg text-white'
      onClick={hanldeOpen}
      >
        Close
      </button>
        </a>
        <a href="#" className="block px-4 py-2 text-base font-medium leading-5 text-white hover:bg-gray-600">About</a>
        <a href="#" className="block px-4 py-2 text-base font-medium leading-5 text-white hover:bg-gray-600">Contact</a>
        <a href="#" className="block px-4 py-2 text-base font-medium leading-5 text-white hover:bg-gray-600">Likes</a>
        <a href="#" className="block px-4 py-2 text-base font-medium leading-5 text-white hover:bg-gray-600">Coments</a>
        <a href="#" className="block px-4 py-2 text-base font-medium leading-5 text-white hover:bg-gray-600">Instagram</a> 
        <a href="#" className="block px-4 py-2 text-base font-medium leading-5 text-white hover:bg-gray-600">Facebook</a>
    
    
      </nav>
    </div>
   :<div className="bg-gray-900 h-screen w-12 flex-none">
    <button className='text-lg text-white'
    onClick={hanldeOpen}
    >
        Open
      </button>
   </div> }

 

</>
  )
}

export default Sidebar
