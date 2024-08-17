import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SigIn, SiginUp } from '../../pages/Login'

function LoginPage() {
  return (
    <Routes>
        <Route path='/' element={<SigIn/>}/>
        <Route path='/sign-up' element={<SiginUp/>}/>
    </Routes>
  )
}

export default LoginPage
