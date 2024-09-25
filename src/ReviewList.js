import React from 'react';
import Review from './Review';

// ReviewList component: Displays all reviews for a movie
const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews:</h3> {/* Section header */}
      {reviews.map((review, index) => (
        <Review key={index} review={review} /> // Render each review
      ))}
    </div>
  );
};

export default ReviewList;
