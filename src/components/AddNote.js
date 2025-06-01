import React, {useContext, useState} from "react";
import NoteContext from '../context/Notes/NoteContext'
const AddNote = (props) => {
    const context= useContext(NoteContext);
    const {addNote}= context;
    const [note, setNote]= useState({title: "", description: "", imageUrl: "", videoUrl: ""})
    const handleClick =(e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.imageUrl, note.videoUrl);
        setNote({title: "", description: "", imageUrl: "", videoUrl: ""});
        props.showAlert("Word Added", "success");
    }
    const onChange =(e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div>
      <h2>Add a Word</h2>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="text"
          name= "title"
          onChange={onChange}
          value={note.title}
        />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          placeholder="text"
          onChange={onChange}
          value={note.description}
        />
        <label htmlFor="floatingPassword">Description</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="url"
          className="form-control"
          id="imageUrl"
          name="imageUrl"
          placeholder="text"
          onChange={onChange}
          value={note.imageUrl}
        />
        <label htmlFor="floatingPassword">Image Url</label>
      </div>
      <div className="form-floating">
        <input
          type="url"
          className="form-control"
          id="videoUrl"
          name="videoUrl"
          placeholder="text"
          onChange={onChange}
          value={note.videoUrl}
        />
        <label htmlFor="floatingPassword">Video Url</label>
      </div>
      <button disabled={note.title.length<2 || note.description.length<5} type="submit" className="btn btn-primary my-3" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default AddNote;
