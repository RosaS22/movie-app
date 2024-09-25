import React from 'react';

// Stars component: Displays a star rating
const Stars = ({ rating, onStarClick }) => {
    // Create an array of stars based on rating
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      onClick={() => onStarClick(index)} // Add click handler
      style={{ color: index < rating ? 'gold' : 'gray', cursor: 'pointer' }} //Dynamic styling for stars
    >
      ★
    </span>
  ));

  return <div>{stars}</div>; // Render stars
};

export default Stars;
