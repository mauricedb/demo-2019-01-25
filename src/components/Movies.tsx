import React, { Component, lazy, Suspense, useState } from 'react';
import useFetch from './useAbortableFetch';
import './Movies.css';

import MovieType from './MovieType';
import Loading from './Loading';
import MovieListCard from './MovieListCard';
// import SelectedMovie from './SelectedMovie';
const SelectedMovie = lazy(() => import('./SelectedMovie'));

const Movies = () => {
  const { loading, data: movies, error } = useFetch<MovieType[]>(
    '/movies.json'
  );
  const [selected, setSelected] = useState<MovieType | null>(null);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="error">{error.message}</div>;
  }

  if (!movies) {
    return null;
  }

  return (
    <div className="container">
      <Suspense fallback={<Loading />}>
        <div className="movies">
          {movies.map((movie: MovieType) => (
            <MovieListCard
              key={movie.id}
              movie={movie}
              onMovieClicked={(m: MovieType) => setSelected(m)}
            />
          ))}
        </div>
        {selected && (
          <SelectedMovie
            key={selected.id}
            selected={selected}
            onMovieCleared={() => setSelected(null)}
          />
        )}
      </Suspense>
    </div>
  );
};

Movies.displayName = 'Movies';

export default Movies;
