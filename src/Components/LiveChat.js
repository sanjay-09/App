import React, { useEffect,useState } from 'react'
import LiveChatMessages from './LiveChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Redux/chatSlice';
import { randomNamegenerator } from '../Utilities/helper';

const LiveChat = () => {

    const dispatch=useDispatch();
    const chatMessages=useSelector((store)=>store.chat.messages);
    const [liveMessage,setLiveMessage]=useState("");

    useEffect(()=>{
      const timer=setInterval(() => {
            pollLiveChat();
            
        },2000);

        return ()=>{
            clearInterval(timer);
        }

    },[])
    const pollLiveChat=()=>{
        dispatch(addMessage({
            name:randomNamegenerator(),
            message:"Sanjay Singh is the hero"
        }))
    }
  return (
    <div>
    <div className='m-3 p-2 border border-black-100 w-[400px] h-[350px] rounded-lg overflow-y-auto flex flex-col-reverse'>
        {
            chatMessages.map((m)=><LiveChatMessages data={m}/>)
        }
      
      
    </div>
    <div className='m-2 p-2 border border-black-100'>
        <input  className="border border-black-100 ml-4  w-64" type="text" name="" id="" value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}} />
        <button className='mx-2 px-2 bg-green-400 rounded-md' onClick={()=>{dispatch(addMessage({
            name:randomNamegenerator(),
            message:liveMessage
        }))}}>Send</button>
    </div>
    </div>
  )
}

export default LiveChat
