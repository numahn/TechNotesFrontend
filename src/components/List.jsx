import React from 'react'
import "../css/list.css"
import Navbar from './Navbar'

export default function List() {
  return (
    <>
      <Navbar/>
      <div className="list-container">
        <div className="list-title">My Notes</div>
        <div className="sections">
          <p className="title">Title</p>
          <p className="date">Date</p>
        </div>
        <div className="lists">
          <div className="list">asdf</div> 
        </div>
      </div>
    </>
  )
}
