import React from 'react'

const ResultCard = ({data}) => {
    const {snippet}=data;
    
    
    const {channelTitle,title,thumbnails,description}=snippet;

  return (
    <div className='flex m-2'>
        <div className=' h-52   w-60 rounded-md'>
           <img className="rounded-lg" src={thumbnails.high.url} alt="" />
        </div>
        <div>
          <h3 className='font-bold p-2 my-2'>{title}</h3>
          <h3 className='p-2 font-bold'>{channelTitle}</h3>
          <p className='p-2'>{description}</p>
        </div>
        
      
    </div>
  )
}

export default ResultCard
