import React from 'react'
import SideBar from './SideBar'
import Main from './Main'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Body = () => {
  console.log("Body121");
  const sideBarStatus=useSelector((store)=>store.nav.sideBar);
  console.log(sideBarStatus);
  return (
    <div className='flex'>
      {sideBarStatus&&<SideBar/>}
      <Outlet/>
    </div>
  )
}

export default Body
