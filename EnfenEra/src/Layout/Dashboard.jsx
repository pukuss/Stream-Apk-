import React from 'react'
import Navbar from '../Components/Root/Navbar'
import Footer from '../Components/Root/Footer'
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <>
        <Outlet  /> 
    </>
  )
}

export default Dashboard