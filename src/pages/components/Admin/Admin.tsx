import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from "./Admin.module.css"
import { faComputer, faCog, faTable, faChartBar, faUser, faDollarSign, faPercentage } from '@fortawesome/free-solid-svg-icons'

const Admin = () => {
  return (
    <div className={styles.container}>
        <div className="bg-darkgrey w-1/6 h-screen flex items-center flex-col">
            <h1 className='text-darkblue text-2xl mt-10 font-bold'>Admin Dash</h1>
            <hr className='w-5/6 h-1 bg-grey border-grey mt-10'/>
            <div className="w-5/6 flex items-start flex-col mt-10 text-grey">
                <span className='text-xl font-bold text-white'>Admin Layout Pages</span>
                <div className='mt-5'>
                  <FontAwesomeIcon icon={faComputer} className="text-white"/>
                  <span className='text-white ml-2'>DASHBOARD</span>
                </div>
                <div className='mt-5'>
                  <FontAwesomeIcon icon={faCog} className="text-white"/>
                  <span className='text-white ml-2'>SETTINGS</span>
                </div>
                <div className='mt-5'>
                  <FontAwesomeIcon icon={faTable} className="text-white"/>
                  <span className='text-white ml-2'>TABLES</span>
                </div>
            </div>
            <hr className='w-5/6 h-1 bg-grey border-grey mt-10'/>
        </div>
        <div className="bg-black w-5/6 h-screen">
          <div className='w-full h-48 flex items-center justify-between'>
            <p className=' ml-32 text-white font-bold text-3xl'>DASHBOARD</p>
            <div className='w-3/12 h-20 mr-32 flex items-center'>
                <input type="text" placeholder='Search' className='h-5/6 w-4/6 rounded-md border-2 border-blue text-xl outline-red'/>
                <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" className='w-16 h-16 ml-5 rounded-full border-4 border-darkblue' alt="" />
            </div>
          </div>
          <div className='w-full h-64 flex items-center justify-between'>
              <div className='ml-40 w-2/12 h-5/6 bg-grey rounded-md border-4 border-red flex items-center bg-grey'>
                    <div className='w-1/2 h-full flex justify-center flex-col'>
                      <p className='text-white font-bold ml-10'>TRAFFIC</p>
                      <p className='text-blue font-bold text-2xl ml-10'>450,000</p>
                    </div>
                    <div className='w-1/2 h-full flex justify-center items-center'>
                      <div className='w-20 h-20 rounded-full bg-red flex justify-center items-center'>
                        <FontAwesomeIcon icon={faChartBar} className="text-white text-xl"/>
                      </div>
                    </div>
              </div>
              <div className=' w-2/12 h-5/6 bg-grey rounded-md border-4 border-red flex items-center bg-grey'>
                    <div className='w-1/2 h-full flex justify-center flex-col'>
                      <p className='text-white font-bold ml-10'>NEW USERS</p>
                      <p className='text-blue font-bold text-2xl ml-10'>2,356</p>
                    </div>
                    <div className='w-1/2 h-full flex justify-center items-center'>
                      <div className='w-20 h-20 rounded-full bg-red flex justify-center items-center'>
                        <FontAwesomeIcon icon={faUser} className="text-white text-xl"/>
                      </div>
                    </div>
              </div>
              <div className=' w-2/12 h-5/6 bg-grey rounded-md border-4 border-red flex items-center bg-grey'>
                    <div className='w-1/2 h-full flex justify-center flex-col'>
                      <p className='text-white font-bold ml-10'>SALES</p>
                      <p className='text-blue font-bold text-2xl ml-10'>756</p>
                    </div>
                    <div className='w-1/2 h-full flex justify-center items-center'>
                      <div className='w-20 h-20 rounded-full bg-red flex justify-center items-center'>
                        <FontAwesomeIcon icon={faDollarSign} className="text-white text-xl"/>
                      </div>
                    </div>
              </div>
              <div className='mr-40 w-2/12 h-5/6 bg-grey rounded-md border-4 border-red flex items-center bg-grey'>
                    <div className='w-1/2 h-full flex justify-center flex-col'>
                      <p className='text-white font-bold ml-10'>PERFORMANCE</p>
                      <p className='text-blue font-bold text-2xl ml-10'>45,77%</p>
                    </div>
                    <div className='w-1/2 h-full flex justify-center items-center'>
                      <div className='w-20 h-20 rounded-full bg-red flex justify-center items-center'>
                        <FontAwesomeIcon icon={faPercentage} className="text-white text-xl"/>
                      </div>
                    </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Admin