import React from 'react';
import MovieList from './MovieList';
import './App.css'; // Import the CSS file

// Main App component: Entry point of the application
const App = () => {
  return (
    <div className="app-container"> {/* Apply the CSS class */}
      <h1>Movie Review App</h1> {/* Title of the application */}
      <MovieList /> {/* Renders the list of movies */}
    </div>
  );
};

export default App;
