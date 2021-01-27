import React from "react";

function NoteItem({note, openNote, handleCancel, editing}) {
  return (
    <li onClick={()=>{
      if(editing === true){
        handleCancel()
      }
      openNote(note)}
      }>
      <h2>{note.title}</h2>
      <p>{note.body.substring(0,15)+"..."}</p>
    </li>
  );
}

export default NoteItem;
