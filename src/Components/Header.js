import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { attach } from '../Redux/navSlice';
import { Youtube_Search_API } from '../Utilities/Constant';
import Recomm from './Recomm';
import { cached } from '../Redux/cacheSlice';
import { Link, useNavigate } from 'react-router-dom';
import Suggest from './Suggest';
import {AiOutlineSearch} from "react-icons/ai"


const Header = () => {
  

  const [text,setText]=useState("");
  const [recommendation,setRecommendations]=useState([]);
  const dispatch=useDispatch();
  const [viewSuggestions,setViewSuggestions]=useState(false);
  const cache=useSelector((store)=>store.cache);

  const navigate=useNavigate();
  


useEffect(()=>{
  
 const timer=setTimeout(()=>{
   if(cache[text]){
     setRecommendations(cache[text]);

   }
   else{
    fetchRecommendations();

   }
    


   },200);
   return ()=>{
    clearInterval(timer);
   }

},[text]);

const fetchRecommendations=async()=>{
  console.log("search");
  const resp=await fetch(Youtube_Search_API+text);
  const data=await resp.json();
  setRecommendations(data[1]);
  console.log("after recomm");
  dispatch(cached({
    [text]:data[1]
  }))
  
}

  return (
    <div className='grid grid-flow-col m-1 p-2 shadow-md'>
      <div className='w-8 h-8 flex col-span-1'>
        <img src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png" alt="sideBarLogo" onClick={()=>{dispatch(attach())}} />
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/YouTube_social_white_square_%282017%29.svg" alt="" />


      </div>

      <div className='col-span-10 ml-32'>
        
        <input className="border border-black-100  w-[400px] space-x-7  py-2 rounded-l-lg px-2" type="text" name="" id="" value={text} onChange={(e)=>setText(e.target.value)} onFocus={(e)=>{setViewSuggestions(true)} } onBlur={()=>{
          setTimeout(()=>{
            setViewSuggestions(false);

          },1000)
        }}/>
        <button className='py-2 border border-black-100 rounded-r-lg px-2'>Search</button>
        {viewSuggestions&&
         <div className='fixed  shadow-lg w-[400px] rounded-md p-2 bg-slate-50'>
          <ul className='m-2' >
            {
              recommendation.map((sugg,index)=>
              (
               <Link to={"/results?v="+sugg}> <li  className='shadow-md p-2' onClick={()=>{setText("")}}> <AiOutlineSearch className='inline'/> {sugg}</li></Link>
              
                )
              )
            }
          </ul>
          
         </div>
}
       

      </div>

      <div className='w-8 h-8 col-span-1'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
        

      </div>

    </div>
  )
}

export default Header
