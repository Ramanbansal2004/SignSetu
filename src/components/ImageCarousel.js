import React from "react";

export default function ImageCarousel() {
  const images = [
    "https://picsum.photos/600",
    "https://picsum.photos/600",
    "https://picsum.photos/600",
    "https://picsum.photos/600",
    "https://picsum.photos/600",
    "https://picsum.photos/600",
  ];

  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img
              src={img}
              className="d-block w-100"
              style={{ height: "33vh", objectFit: "cover" }}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
