import React from 'react'
import {AiFillHome} from "react-icons/ai"

const SideBarList = ({name,icon}) => {
    
  return (
    <div className='shadow-lg flex items-center px-2 my-2 border border-gray-50 rounded-lg' >
    <button className='my-2 mx-2'>{icon}</button>
    <p className=' text-base inline py-2'>{name}</p>

   

  </div>
  )
}

export default SideBarList
