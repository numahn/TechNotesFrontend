import React from 'react'
import "../css/list.css"
import Navbar from './Navbar'

export default function List(props) {
  /*Make this mobile compatabile in the future?*/
  return (
    <>
      <Navbar/>
      <div className="list-container">
        <div className="lists-title">My Notes</div>
        <div className="sections">
          <p className="title">Title</p>
          <p className="date">Date</p>
        </div>
        <div className="lists">
          <div className="list">
            <div className='list-title'>Title</div>
            <div className='list-date'>Date</div>  
          </div> 
          <div className="list">
            <div className='list-title'>Title</div>
            <div className='list-date'>Date</div>  
          </div> 
        </div>
      </div>
    </>
  )
}
