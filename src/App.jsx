import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
//Component Imports
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import List from './components/List'
import Note from './components/Note'

export default function App() {
  const [token, setToken] = useState("")

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>} token={token} setToken={setToken}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/list' element={<List/>} token={token} setToken={setToken}/>
      <Route path='/note' element={<Note/>} token={token} setToken={setToken}/>
    </Routes>)
   
}