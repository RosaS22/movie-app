import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';



// Movie component: Displays details of a single movie
const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState(movie.reviews); // Manage local stat for reviews

// Function to add a new review to the state
  const addReview = (newReview) => {
    setReviews([...reviews, { text: newReview.text, rating: newReview.rating }]); // Append new review to existing ones
  };
  
  

  return (
    <div className="movie-container"> {/*container for movie cards*/}
    <div className="movie-card">
      <div className="card shadow cardWidth">
      <img src={movie.image} alt={movie.title} />
      <div className="card-body h-100">
      <h2 className="text-center">{movie.title}</h2>
      <p>{movie.synopsis}</p>
      <Stars rating={movie.rating} />
      <ReviewList reviews={reviews} />
      <ReviewForm addReview={addReview} />
    </div>
    </div>
    </div>
    </div>
  );
};

export default Movie;
