import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
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
  const createOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({userID: userInfo.userID, title: "New Note", content: "Type your notes here"})
  }

  const handleClick = (e, note) => {
    navigate("/note", {state: note})
  }

  const getNotes = async () => {
    const response = await fetch("http://localhost:3001/list", requestOptions)
    const data = await response.json()
    setNotes(data.notes)
  }


  const handleCreate = async () => {
    const response = await fetch("http://localhost:3001/notes", createOptions)
    const data = await response.json()
    console.log(data)
    navigate("/note", {state: data.data})
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
          {notes? notes.map((note, i) => {
            return(
              <div key={i} className="list" onClick={(e) => handleClick(e, note)}>
                <div className='list-title'>{note.title}</div>
                <div className='list-date'>{note.date_created? note.date_created.substr(0,10) : "0000-00-00"}</div>  
              </div> 
            )
          }): <div>No notes</div>}

        </div>
        <button className='create-button' onClick={(e) => handleCreate(e)}>Create Note</button>
      </div>
    </>
  )
}
