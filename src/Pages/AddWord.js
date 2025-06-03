import React from 'react'
import Notes from '../components/Notes';
export default function AddWord(props) {
  const {showAlert} = props;
  return (
    <div className="container">
  <Notes className="container my-4" showAlert={showAlert}/>
</div>
  )
}
