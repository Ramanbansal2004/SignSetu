import React from "react";
import Notes from './Notes';
import SearchBar from './SearchBar';
export default function Home(props) {
  const {showAlert} = props;
  return (
    <div className="container">
      <SearchBar /> 
      <Notes className="container my-4" showAlert={showAlert}/>
    </div>
  );
}
