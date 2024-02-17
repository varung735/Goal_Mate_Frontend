import React from 'react'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import { Outlet } from 'react-router-dom'

function UserDashboard() {
  return (
    <>
        <Navbar pageProp={'user'}/>
        <div className='flex'>
          <SideNav pageProp={'user'} />
          <Outlet />
        </div>
    </>
  )
}

export default UserDashboard