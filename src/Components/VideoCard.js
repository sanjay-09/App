import React from 'react'
import { useSelector } from 'react-redux';

const VideoCard = ({data}) => {

    const sideBarStatus=useSelector((store)=>store.nav.sideBar);
    const {snippet,statistics}=data;
    
    
    const {channelTitle,localized,thumbnails}=snippet;
    
  return (
    
    <div>
      {sideBarStatus?
    <div className='w-80 p-2 m-2 shadow-md'>
         <img className='rounded-md' src={thumbnails.high.url} alt="thumbnails" />
      
      <ul>
        <li className='font-bold'>{snippet.localized.title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount/1000000}M Views</li>
      </ul>
    </div>
    :

<div className=' w-[24rem] p-2 m-2 shadow-md'>
<img className='rounded-md' src={thumbnails.high.url} alt="thumbnails" />

<ul>
<li className='font-bold'>{snippet.localized.title}</li>
<li>{channelTitle}</li>
<li>{statistics.viewCount/1000000}M Views</li>
</ul>
</div>
}
</div>
    
  )
}

export default VideoCard
