import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

const Apps = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<User/>}/>
        <Route path='/create'element={<CreateUser/>}/>
        <Route path='/update/:id'element={<UpdateUser/>}/>

        </Routes></BrowserRouter>
    </div>
  )
}

export default Apps ;