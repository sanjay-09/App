import React, { useEffect } from 'react'

const LiveChatMessages = ({data}) => {
    const {name,message}=data;
    
  return (
    <div className='flex shadow-md my-2'>
        <img className="h-8 w-8" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
      <h3 className='font-bold px-2'>{name}</h3>
      <h3 >{message}</h3>
    </div>
  )
}

export default LiveChatMessages
