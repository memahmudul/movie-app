import React from 'react'
import { useGlobalContext } from './context/context';

function WatchedCard({movie}) {
  const {removeMovieFromWatched} = useGlobalContext();

  return (
   
    <>
        <div className="movie-card">
        
        
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            
            <div className="controls">
      <button className="btn" style={{backgroundColor : "red"}} onClick={()=>removeMovieFromWatched(movie.id)}>
        REMOVE
      </button>
      </div>
    </div>
    
    </>
  );
}

export default WatchedCard