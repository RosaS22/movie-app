import React, { useState } from 'react';
import Stars from './Stars'; // Import Stars for rating selection

// ReviewForm component: Allows users to submit a new review
const ReviewForm = ({ addReview }) => {
  const [review, setReview] = useState(''); // State for the review text
  const [rating, setRating] = useState(0); // State for the star rating

  // Handler for star click to set the rating
  const handleStarClick = (index) => {
    setRating(index + 1); // Update rating based on clicked star
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (review) {
      addReview({ text: review, rating }); // Call addReview with text and rating
      setReview(''); // Reset review text
      setRating(0); // Reset rating after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* Handle form submission */}
      <Stars rating={rating} onStarClick={handleStarClick} /> {/* Star selection */}
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)} // Update state on change
        placeholder="Leave your review here"
        required
      />
      <button type="submit">Submit Review</button> {/* Submit button */}
    </form>
  );
};

export default ReviewForm;
