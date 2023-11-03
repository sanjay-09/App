import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const ButtonList = () => {
    const ButtonsArr=["Live Streaming","Cooking","Cricket","FootBall","Indian Permium League","Movies","TMKOC"]
  return (
    <div className='flex '>
     {
        
        ButtonsArr.map((button,index)=><Link to={"/results?v="+button}><Button key={index} data={button}/></Link>)
     }
     
      
    </div>
  )
}

export default ButtonList
