import React, { useContext, useEffect, useRef, useState } from "react";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import NoteContext from "../context/Notes/NoteContext";
import { useNavigate } from "react-router-dom";
const Notes = (props) => {
  let history = useNavigate();
  const {showAlert} = props;
  const context = useContext(NoteContext);
  const { notes, getNote, editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token'))
    {
      getNote()
    }
    else
    {
      history("/login")
    }
    // eslint-disable-next-line
  }, []);
  const [note, setNote]= useState({id:"", etitle: "", edescription: "", eimageUrl: "", evideoUrl: ""})
  const ref = useRef(null);
  const refClose = useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id, etitle: currentNote.title, edescription: currentNote.description, eimageUrl: currentNote.imageUrl, evideoUrl: currentNote.videoUrl});
  };
  const handleClick =(e)=>{
    editNote(note.id, note.etitle, note.edescription, note.eimageUrl, note.evideoUrl);
    getNote();
    refClose.current.click();
    props.showAlert("Note Updated", "success");
  }
  const onChange =(e)=>{
      setNote({...note, [e.target.name]: e.target.value})
  }
  return (
    <>
      <AddNote showAlert={showAlert}/>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
      </button>
    </>
  );
};

export default Notes;
