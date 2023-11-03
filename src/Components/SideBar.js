import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillHome} from "react-icons/ai"
import SideBarList from './SideBarList'
import {MdOutlineSubscriptions} from "react-icons/md"
import {SiYoutubegaming} from "react-icons/si"
import {CiStreamOn} from "react-icons/ci"
import {BiTrendingUp} from "react-icons/bi"
import {BsNewspaper} from "react-icons/bs"
const SideBar = () => { 
  const SideBarsItem={name:"Home",icon:<AiFillHome/>};
  return (
    <div className='w-36 m-2'>
      <Link to="/"> <SideBarList name="Home" icon={<AiFillHome/>}/></Link> 
        <SideBarList name="Trending" icon={<BiTrendingUp/>} />

        <SideBarList name="Subscription" icon={<MdOutlineSubscriptions/>}/>
        <SideBarList name="Live Streaming" icon={<CiStreamOn/>}/>
        <SideBarList name="Gaming" icon={<SiYoutubegaming/>}/>
        <SideBarList name="News" icon={<BsNewspaper/>}/>
           
            
          
    </div>
  )
}

export default SideBar
