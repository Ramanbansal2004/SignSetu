import React, { useContext, useEffect, useRef} from "react";
import AddNote from "./AddNote";
import NoteContext from "../context/Notes/NoteContext";
import { useNavigate } from "react-router-dom";
const Notes = (props) => {
  let history = useNavigate();
  const {showAlert} = props;
  const context = useContext(NoteContext);
  const {getNote} = context;
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
  const ref = useRef(null);
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
