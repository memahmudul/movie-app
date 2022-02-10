import React from 'react';
import { useGlobalContext } from './context/context';
import WatchListCard from './WatchListCard';

function Watchlist() {
  const {watchlist} = useGlobalContext();
  const renderedList = watchlist.map((movie)=>{
    return <WatchListCard movie={movie} key={movie.id}/>
  })
 return (
   <div className="movie-page">
     <div className="container">
       <div className="header">
         <h1 className="heading">my watchlist</h1>
         <span className='count-pill'>{watchlist.length} movie</span>
       </div>
       <div className="movie-grid">
       {watchlist.length>0? renderedList : (<h2 className='no-movies'>no movies in your watchlist.add some..</h2>)}

       </div>
     </div>
   </div>
   
 )
}

export default Watchlist