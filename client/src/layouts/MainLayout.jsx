import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import IntroPage from '../pages/Intro-page'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
    <div style={{display:'flex', backgroundColor:'#0B0F0E'}} >
        <Sidebar/>
        <div style={{flex:'1'}} >
        <Navbar/>
        <div  >
            <Outlet/>
        </div>
        </div>
   
    </div>
    </>
  )
}

export default MainLayout