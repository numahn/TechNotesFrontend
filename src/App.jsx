import React from 'react'
import {Routes, Route} from 'react-router-dom'
//Component Imports
import Home from './components/Home'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}/>
    </Routes>)
   
}