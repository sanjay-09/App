import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const ButtonsArr=["Live Streaming","Cooking","Cricket","FootBall","Indian Permium League","Movies","TMKOC"]
  return (
    <div className='flex '>
     {
        
        ButtonsArr.map((button,index)=><Button key={index} data={button}/>)
     }
     
      
    </div>
  )
}

export default ButtonList
