import React from 'react'
import moment from 'moment';
import {AiFillLike} from "react-icons/ai"
import { RandomNumberGenerator } from '../Utilities/helper';

const Comments = ({comment}) => {
  const {
    authorDisplayName,
    authorProfileImageUrl,
    textDisplay,
    publishedAt,
    likeCount,
} = comment?.snippet?.topLevelComment?.snippet;
  return (
    <div className='flex border border-gray-100 shadow-md m-2 p-2 rounded-md'>
    <img className="w-8 h-8" src={authorProfileImageUrl} alt="" />
    <div className='px-2'>
      <div className='flex'>
        <h3 className='font-bold text-xl'>{authorDisplayName}</h3>
        <p className='pl-2'>{moment(publishedAt).fromNow()}</p>
      </div>
      <p className=''>{textDisplay}</p>
      <div className='flex items-center px-4'>
      <p className=' inline'><AiFillLike/></p>
      <span className='p-2'>{RandomNumberGenerator()}</span>
      </div>
      

    </div>

  </div>
    
  )
}

export default Comments
