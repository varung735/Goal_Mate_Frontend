import React from 'react'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'

function UserDashboard() {
  return (
    <>
        <Navbar pageProp={'user'} />
        <SideNav />
    </>
  )
}

export default UserDashboard