import React from 'react';
import Movie from './Movie';
import './App.css'; 

const movies = [
  {
    id: 1,
    title: 'Shrek',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbUDwXtfjVyAQ_njW-6b4h3RQRtDozx7XUA2HVneb69kBVTgA-c6A8Wkg_iW9fHAeYBQ&usqp=CAU',
    synopsis: 'Once upon a time, in a far away swamp, there lived an ogre named Shrek (Mike Myers) whose precious solitude is suddenly shattered by an invasion of annoying fairy tale characters. They were all banished from their kingdom by the evil Lord Farquaad (John Lithgow). Determined to save their home -- not to mention his -- Shrek cuts a deal with Farquaad and sets out to rescue Princess Fiona (Cameron Diaz) to be Farquaad\'s bride. Rescuing the Princess may be small compared to her deep, dark secret.',
    rating: 4,
    reviews: []
  },
  {
    id: 2,
    title: 'The Matrix',
    image: 'https://totallyhistory.com/wp-content/uploads/2023/05/The-Matrix-Movie-Poster-235x353.jpg',
    synopsis: 'Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life.',
    rating: 4.7,
    reviews: []
  },
  {
    id: 3,
    title: 'The Proposal',
    image: 'https://m.media-amazon.com/images/M/MV5BOGM5YTNiYzktNmEwZC00ZjE5LWIyNzEtOTUwNDE0NmVkYzE3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UY281_CR0,0,190,281_.jpg',
    synopsis: 'Faced with deportation to her native Canada, high-powered book editor Margaret Tate (Sandra Bullock) says she\'s engaged to marry Andrew Paxton (Ryan Reynolds), her hapless assistant. Andrew agrees to the charade, but imposes a few conditions of his own, including flying to Alaska to meet his eccentric family. With a suspicious immigration official always lurking nearby, Margaret and Andrew must stick to their wedding plan despite numerous mishaps.',
    rating: 4,
    reviews: [],
  },


  // Add more movies as needed
];

 // MovieList component: Renders a list of Movie components
const MovieList = () => {
  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item"> {/*Apply movie-item class to add a border around each movie*/}
        <Movie movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
