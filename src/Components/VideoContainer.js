import React, { useEffect,useState } from 'react'
import { YoutubeAPI } from '../Utilities/Constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [video,setVideo]=useState([]);
 


    useEffect(()=>{
        fetchData();

    },[]);

    const fetchData=async()=>{
        const resp=await fetch(YoutubeAPI);
        const data=await resp.json();
        
        
        setVideo(data.items);
       
        

    }
if(video.length==0){
    return null;
}



  return (
    <div className='flex flex-wrap'> 
{
     video.map((d,index)=>

            <Link to={"/watch?v="+d.id}><VideoCard key={index} data={d}/></Link>
     )
}
      

    </div>
  )
}

export default VideoContainer
