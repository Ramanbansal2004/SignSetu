import React, {useContext} from 'react'
import NoteContext from '../context/Notes/NoteContext'
const Noteitem = (props) => {
  const context= useContext(NoteContext);
  const {deleteNote}=context;
  const {note, updateNote}=props;
  return (
    <div className="col-md-3">
        <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-solid fa-trash mx-2" onClick={()=>{
              deleteNote(note._id)
              props.showAlert("Note Deleted", "success");
              }}></i>
            <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{
              updateNote(note)
            }}></i>
          </div>
            <div className="card-subtitle mb-2 text-body-secondary">
  {note.imageUrl && (
    <a href={note.imageUrl} target="_blank" rel="noopener noreferrer" className="me-3">
      Image
    </a>
  )}
  {note.videoUrl && (
    <a href={note.videoUrl} target="_blank" rel="noopener noreferrer">
      Video
    </a>
  )}
</div>
            <p className="card-text">{note.description} </p>
        </div>
        </div>
    </div>
  )
}

export default Noteitem