import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from '../../pages/Dashboard/Home';
import Profile from '../../pages/Dashboard/Profile';



function DashboardPage() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>} />
    </Routes>
  )
}

export default DashboardPage
