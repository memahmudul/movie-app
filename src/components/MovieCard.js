import React from 'react'
import { useGlobalContext } from './context/context';

function MovieCard({movie}) {
    const {addMovieToWatchlist,watchlist} = useGlobalContext();

    const storedMovie = watchlist.find((item)=>item.id===movie.id);

  return (
      <div className="result-card">
          <div className="poster-wrapper">
             <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          </div>
          <div className="info">
              <div className="header">
                  <h3 className="title">{movie.title}</h3>
                  <h4 className='release-date'>{movie.release_date? movie.release_date.substring(0,4) : 'unknown'}</h4>
              </div>
              <div className="controls">
                  <button disabled={storedMovie} className="btn" onClick={()=>addMovieToWatchlist(movie)}>Add to Watchlist</button>
              </div>
          </div>
      </div>
    
  );
}

export default MovieCard