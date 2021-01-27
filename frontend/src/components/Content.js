import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({note, editing, handleCancel, handleEditClick, handleSubmit}) {
  const getContent = () => {
    if (note === 1) {
      return <Instructions />;
    } else if (editing === true) {
      return <NoteEditor note={note} handleCancel={handleCancel} handleSubmit={handleSubmit}/>;
    } else {
      return <NoteViewer note={note} handleEditClick={handleEditClick}/>;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
