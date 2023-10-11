import React, { useState } from 'react';
import Movie from './Components/Movie';
import MovieDetail from './Components/MovieDetail';
import { movies } from './movieDummy';

function App() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMouseOver = (overview) => {
    setSelectedMovie(overview);
    setShowDetail(true);
  };

  const handleMouseOut = () => {
    setShowDetail(false);
  };

  return (
    <div>
      <div className="app-container">
        {movies.results.map((item) => {
          return (
            <div
              key={item.id}
              onMouseOver={() => handleMouseOver(item.overview)}
              onMouseOut={handleMouseOut}
            >
              <Movie
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            </div>
          );
        })}
      </div>
      {showDetail && <MovieDetail overview={selectedMovie} />}
    </div>
  );
}

export default App;
