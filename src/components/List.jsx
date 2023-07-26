import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/list.css"
import jwt from 'jwt-decode';
import Navbar from './Navbar'

export default function List(props) {
  /*Make this mobile compatabile in the future?*/
  const [notes, setNotes] = useState([{}])
  const navigate = useNavigate();
  
  const userInfo = {
    userID: jwt(props.token).id
  }

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(userInfo)
  }

  const handleClick = (e, note) => {
    navigate("/note", {state: note})
  }

  const getNotes = async () => {
    const response = await fetch("http://localhost:3001/list", requestOptions)
    const data = await response.json()
    setNotes(data.notes)
  }
  useEffect(() => {
    getNotes()
    
 }, [])
  
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
          {/* <div className="list">
            <div className='list-title'>Title</div>
            <div className='list-date'>Date</div>  
          </div> 
          <div className="list">
            <div className='list-title'>Title</div>
            <div className='list-date'>Date</div>  
          </div>  */}
          {notes.map((note, i) => {
            return(
              <div key={i} className="list" onClick={(e) => handleClick(e, note)}>
                <div className='list-title'>{note.title}</div>
                <div className='list-date'>{note.date_created? note.date_created.substr(0,10) : "0000-00-00"}</div>  
              </div> 
            )
          })}

        </div>
      </div>
    </>
  )
}
