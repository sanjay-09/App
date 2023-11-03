import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiFillHome} from "react-icons/ai"
import SideBarList from './SideBarList'
import {MdOutlineSubscriptions} from "react-icons/md"
import {SiYoutubegaming} from "react-icons/si"
import {CiStreamOn} from "react-icons/ci"
import {BiTrendingUp} from "react-icons/bi"
import {BsNewspaper} from "react-icons/bs"
const SideBar = () => { 
  const SideBarsItem={name:"Home",icon:<AiFillHome/>};
  const navigate=useNavigate();
  return (
    <div className='w-36 m-2'>
      <Link to="/"> <SideBarList name="Home" icon={<AiFillHome/>}/></Link> 
        <SideBarList  name="Trending" icon={<BiTrendingUp/>} />

        <SideBarList name="Subscription" icon={<MdOutlineSubscriptions/>}/>
        <Link to="/results?v=Live Streaming"><SideBarList name="Live Streaming" icon={<CiStreamOn/>}/></Link>
       <Link to="/results?v=Gaming"><SideBarList  name="Gaming" icon={<SiYoutubegaming/>}/></Link> 
       <Link to="/results?v=News"><SideBarList name="News" icon={<BsNewspaper/>}/></Link>
    </div>
  )
}

export default SideBar
