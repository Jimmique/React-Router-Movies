import React from 'react';

const MovieCard = props => {
  function routeToMovie() {

    props.history.push(`/movies/${id}`)
  }

  const { title, director, metascore, stars, id } = props.movie;

   return (
    <div className="movie-card" onClick={routeToMovie}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

       {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  )
};

export default MovieCard;
