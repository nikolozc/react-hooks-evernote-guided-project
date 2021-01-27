import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, openNote, handleCancel, editing}) {

  const NoteItems = notes.map(note => {
    return <NoteItem key={note.id} note={note} openNote={openNote} handleCancel={handleCancel} editing={editing} />
  })

  return (
    <ul>
      {/* Render list of notes here... */}
      {NoteItems}
    </ul>
  );
}

export default NoteList;
