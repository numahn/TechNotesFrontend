import React from 'react'
import "../css/Note.css"
import Navbar from './Navbar'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Note(props) {
  const {state} = useLocation()
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    setTitle(state.title)
    setContent(state.content)
 }, [])

 const requestOptions = {
  method: 'PUT',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({notesID: state.notesID, title: title, content: content})
}

 const handleClick = async (e) => {
  const response = await fetch("http://localhost:3001/note", requestOptions)
  const data = await response.json()
  console.log(data)
  e.preventDefault()
  navigate("/list")
 }

  return (
    <>
      <Navbar/>
      <div className='note-container'>
        <div className='note-title'>
          <input type="text" className="note-title" id="NoteTitle" placeholder="Note Title" defaultValue={state.title} onChange={(e) => {setTitle(e.target.value)}}/>
        </div>
        <div className='note-text'>
          <label for="exampleFormControlTextarea1" className="form-label"></label>
          <textarea className="note-text" id="exampleFormControlTextarea1" rows="6" placeholder='Write Notes Here' defaultValue={state.content} onChange={(e) => {setContent(e.target.value)}}></textarea>
        </div>
        <button className='save-button' onClick={(e) => handleClick(e)}>
          Save Note
        </button>
      </div>
    </>
  )
}
