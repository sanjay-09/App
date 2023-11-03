import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const Main = () => {
  console.log("Main");
  return (
    <div className='m-2'>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default Main
