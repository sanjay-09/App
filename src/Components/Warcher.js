import React from 'react'
import { useSearchParams } from 'react-router-dom';
import Comment from './Comment';
import LiveChat from './LiveChat';
import { useSelector } from 'react-redux';

const Warcher = () => {
  const [searchParams]=useSearchParams();
  const id=searchParams.get("v");
  const sideBar=useSelector((store)=>store.nav.sideBar);
  let style="";
  let style2="";
  if(sideBar){
    style="w-[700px] m-2 p-2";
    style2="700px"

  }
  else{
    style="w-[850px] m-2 p-2";
    style2="850px"
  }

  return (
    <div className='flex'>

    <div className={style}>
      <iframe className='rounded-md'
      width={style2}
      height="360px"
      src={"https://www.youtube.com/embed/"+id} 
      frameborder="0"/>
      <Comment id={id}/>
    </div>
    <LiveChat/>

    </div>
    
  )
}

export default Warcher;
