import React from "react";
import GetNotes from './GetNotes';
import SearchBar from './SearchBar';
export default function Home(props) {
  const {showAlert} = props;
  return (
    <div className="container">
      <SearchBar /> 
      <GetNotes className="container my-4" showAlert={showAlert}/>
    </div>
  );
}
