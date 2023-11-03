import React, { useEffect, useState } from 'react'
import { json, useParams,useSearchParams } from 'react-router-dom'
import { SEARCH_RESULT_API, Youtube_Search_API } from '../Utilities/Constant';
import ResultCard from './ResultCard';
import { Link } from 'react-router-dom';


const Result = () => {
  
  const [searchParams]=useSearchParams();
  const id=searchParams.get("v");
  const [suggestion,setViewSuggestions]=useState([]);
  
  
  
  useEffect(()=>{
    getVideos();
    return ()=>{
      console.log("destroyed");
    }

  },[id])
  const getVideos=async()=>{
    const resp=await fetch(SEARCH_RESULT_API+id);
    const jsonData=await resp.json();
    setViewSuggestions(jsonData.items);
  

  }
  if(suggestion.length===0){
    return null;
  }
  return (
    <div className='m-2 shadow-sm'>
       {
        suggestion.map((sugg)=>
        <Link to={"/watch?v="+sugg.id.videoId}><ResultCard data={sugg}/></Link>
        )
       }
    </div>
  )
}

export default Result
