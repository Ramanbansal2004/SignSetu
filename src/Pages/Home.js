import React from "react";
import GetNotes from "../components/GetNotes";
import SearchBar from "../components/SearchBar";
import ImageCarousel from '../components/ImageCarousel';

export default function Home(props) {
  const { showAlert } = props;
  return (
    <div className="container">
      <SearchBar />
      <div className="container mt-4">
        <ImageCarousel />
      </div>
      <GetNotes className="container my-4" showAlert={showAlert} />
    </div>
  );
}
