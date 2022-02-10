import React from 'react'
import { useGlobalContext } from './context/context';

function WatchListCard({movie}) {
    const {removeMovieFromWatchlist,addMovieToWatched,watched}  = useGlobalContext();
    const watchedMovie = watched.find((item)=>item.id===movie.id);
  return (
   
    <>
        <div className="movie-card">
        
        
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            
            <div className="controls">
      <button className="btn" style={{backgroundColor : "red"}} onClick={() => removeMovieFromWatchlist(movie.id)}>
        REMOVE from watchlist
      </button>
      <button className="btn"  disabled={watchedMovie} onClick={() => addMovieToWatched(movie)}>
        add to Watched
      </button>
      </div>
    </div>
    
    </>
  );
}

export default WatchListCard