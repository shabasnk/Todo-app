import React from 'react'
import IntroPage from './pages/Intro-page'
import HomePage from './pages/HomePage'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* page without Layout */}
      <Route path='/login' element={<Login/>} />
      {/* page with Layout */}
      <Route element={<MainLayout/>} >
        <Route path='/homepage' element={<HomePage/>} />
        <Route path='/introPage' element={<IntroPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />

      </Route>

    </Routes>
    
    </BrowserRouter> )
}

export default App