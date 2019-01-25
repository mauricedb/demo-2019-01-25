import React from 'react';
import withErrorBoundary from './withErrorBoundary';
import MovieType from './MovieType';

type SelectedMovieProps = {
  selected: MovieType;
  onMovieCleared: () => void;
};

const SelectedMovie: React.SFC<SelectedMovieProps> = ({
  selected,
  onMovieCleared
}) => (
  <div className="details">
    <div className="detail">
      <div className="detail-header">
        <h4>{selected.title}</h4>
        <span className="close-button" role="button" onClick={onMovieCleared}>
          &times;
        </span>
      </div>
      <img src={selected.image} alt={selected.title} />
      <div>{selected.overview}</div>
      <ul>
        {selected.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  </div>
);

SelectedMovie.displayName = 'SelectedMovie';

export default withErrorBoundary(SelectedMovie);
