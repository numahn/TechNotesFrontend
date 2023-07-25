import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/list.css"
import Navbar from './Navbar'

export default function List(props) {
  /*Make this mobile compatabile in the future?*/
  const [notes, setNotes] = useState([{}])
  const navigate = useNavigate();
  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(parseJwt(props.token))
  }

  const getNotes = async () => {
    const response = await fetch("http://localhost:3001/list", requestOptions)
    console.log(response)
    const data = await response.json()
    console.log(data)
    setNotes(data.notes)
  }
  useEffect(() => {
    getNotes()
    console.log(notes)
    
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
