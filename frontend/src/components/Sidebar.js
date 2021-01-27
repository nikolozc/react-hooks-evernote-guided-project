import React from "react";
import NoteList from "./NoteList";

function Sidebar({notes, openNote, newNote, handleCancel, editing}) {
  
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} openNote={openNote} handleCancel={handleCancel} editing={editing} />
  <button onClick={newNote}>New</button>
    </div>
  );
}

export default Sidebar;
