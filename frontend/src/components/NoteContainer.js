import React, { useEffect, useState } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

//edit submit not updating

function NoteContainer() {
  
  const [notes, setNotes] = useState([])
  const [text, setText] = useState("")
  const [currentNote, setCurrentNote] = useState(1)
  const [editing, setEditing] = useState(false)

  function fetchNotes(){
    fetch("http://localhost:3000/api/v1/notes")
      .then(r => r.json())
      .then(notes => {
        setNotes(notes)
      })
  }
  useEffect(() =>{
    fetchNotes()
  }, [])

  function handleOpenNote(note){
    setCurrentNote(note)
  }

  function searchFilter(title){
    setText(title)
  }

  function newNote(event){
    event.preventDefault();
    const formData={
      title: "Default",
      body: "placeHolder",
      user_id: 3
    }
    fetch("http://localhost:3000/api/v1/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then(r=>r.json())
    .then(newNote=>{
      let updatedNotes = notes.map(note=>{
        return note
      })
      updatedNotes.push(newNote)
      setNotes(updatedNotes)
    })
  }

  function handleEditClick(){
    setEditing(true)
  }

  function handleCancel(){
    setEditing(false)
  }
  function handleSubmit(event){
    event.preventDefault()
    fetch(`http://localhost:3000/api/v1/notes/${currentNote.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "title": event.target.title.value,
        "body": event.target.body.value
      }),
    })
    .then((r) => r.json())
    .then((updatedNote) => {
      let updatedArray = notes.map(note =>{
        if(updatedNote.id === note.id){
          return updatedNote
        }
        else{
          return note
        }
      })
      setNotes(updatedArray)
      setEditing(false)
      setCurrentNote(updatedNote)
    });
  }

  const filteredList = []
    notes.forEach(note => {
      if(note.title.includes(text)){
        filteredList.push(note)
      }
    })

  return (
    <>
      <Search searchTitle={searchFilter}/>
      <div className="container">
        <Sidebar notes={filteredList} openNote={handleOpenNote} newNote={newNote} handleCancel={handleCancel} editing={editing}/>
        <Content note={currentNote} editing={editing} handleEditClick={handleEditClick} handleCancel={handleCancel} handleSubmit={handleSubmit}/>
      </div>
    </>
  );
}

export default NoteContainer;
