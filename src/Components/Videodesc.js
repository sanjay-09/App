import React, { useEffect,useState } from 'react'
import { SEARCH_RESULT_API, VIDEO_API } from '../Utilities/Constant';
import moment from 'moment';

const Videodesc = ({id}) => {
  const [data,setData]=useState({});
  const [desc,showDesc]=useState(false);


  useEffect(()=>{
    getData();
  },[]);
  const getData=async()=>{
    const resp=await fetch(VIDEO_API+id);
    const json=await resp.json();
    console.log(json);
    setData(json);
    
    
  }
  if(Object.keys(data).length===0){
    return null;
  }
  const {channelTitle,description,publishedAt}=data.items[0].snippet;
  let {viewCount}=data.items[0].statistics;
  const {title}=data.items[0].snippet.localized;
  const truncatedDescription=desc?description:`${description.substring(0, 200)}...`;
  // const npublishedAt=publishedAt.substring(0,11);
  let viewNumber=viewCount/1000000;
  let  trimmedNumber = viewNumber.toFixed(2);
  let viewss=parseFloat(trimmedNumber);


  
  return (
    <div className='p-2 m-2' >
    
      
        <h3 className='font-bold text-xl'>{title}</h3>
      
      <div className='flex m-1'>
        <h4 className='pr-4 text-xl'>{channelTitle}</h4>
        <h4 className=' bg-black text-white rounded-lg px-2 py-1'>Subscribe</h4>
        
      </div>
      <div className='shadow-lg p-2 rounded-md'>
        <div className='flex'>
          <h3 className='pr-2'>{viewss}M</h3>
          <h3>{moment(publishedAt).fromNow()}</h3>
        </div>
      <p onClick={()=>{showDesc(!desc)}}>{truncatedDescription}</p>
      </div>
      

    </div>
  )
}

export default Videodesc
