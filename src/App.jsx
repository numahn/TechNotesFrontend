import React from 'react'
import {Routes, Route} from 'react-router-dom'
//Component Imports
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>)
   
}