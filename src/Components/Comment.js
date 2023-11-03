import React, { useEffect,useState } from 'react'
import Comments from './Comments';
import { COMMENTS_API } from '../Utilities/Constant';
import {AiOutlineLike} from "react-icons/ai"
import {AiOutlineDislike} from "react-icons/ai"
import { kFormatter } from '../Utilities/Constant';
import moment from "moment"
const commetList=[
    {
        name:"Sanjay Singh",
        commentMessage:"Nice Video",
        replies:[
              {
                name:"Vedansh Bisht",
                commentMessage:"Once again nice video",
                replies:[
                    {
                        name:"Sanjay Singh",
                        commentMessage:"ok you are right",
                        replies:[]
                    }
                ]
              }
        ]
    },{
        name:"Vedansh Bisht",
        commentMessage:"Very good video",
        replies:[]
    }
]
const CommentList=({data})=>{
   
    return(
       <div>
        {
            data.map((d)=>(
                <div>
                <Comments data={d}/>
                <div className='ml-6 border border-l-black'>
                <CommentList data={d.replies}/>
                </div>
                </div>
            ))
        }
       </div>
    )
}
const Comment = ({id}) => {
  const [comments,setComments]=useState([]);

  

  useEffect(()=>{
   getData();

  },[])
  const getData=async()=>{
    const resp=await fetch(COMMENTS_API+id);
    const data=await resp.json();
    console.log(data.items[0]);
      setComments(data.items);
  }
  if(Object.keys(comments).length === 0){
    return null;
  }
  
  return (
    <div className='m-2 p-2'>
      <h1 className='font-bold text-2xl'>{comments.length} Comment</h1>
     {
      comments.map((comment)=><Comments comment={comment}/>)

     }
     
      


    </div>
  )
}

export default Comment
