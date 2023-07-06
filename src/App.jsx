import React from 'react'
import {Routes, Route} from 'react-router-dom'
//Component Imports
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import List from './components/List'
import Note from './components/Note'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/list' element={<List/>}/>
      <Route path='/note' element={<Note/>}/>
    </Routes>)
   
}