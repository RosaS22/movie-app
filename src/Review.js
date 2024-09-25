import React from 'react';
import Stars from './Stars'; // Import Stars component for displaying ratings

// Review component: Displays a single review
const Review = ({ review }) => {
  return (
    <div>
      <p>{review.text}</p> {/* Review text */}
      <p>Rating: <Stars rating={review.rating} /></p> {/* Display associated rating */}
    </div>
  );
};

export default Review;
