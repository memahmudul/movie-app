import React from 'react'
import { useGlobalContext } from './context/context'
import WatchedCard from './WatchedCard';

function Watched() {
   const {watched} = useGlobalContext();
   const renderedList = watched.map((movie)=>{
   return <WatchedCard movie={movie} key={movie.id}/>
  })
 return (
   <div className="movie-page">
     <div className="container">
       <div className="header">
         <h1 className="heading">Watched Movies</h1>
         <span className='count-pill'>{watched.length} movie</span>
       </div>
       <div className="movie-grid">
       {watched.length>0? renderedList : (<h2 className='no-movies'>no movies is watched.add some..</h2>)}

       </div>
     </div>
   </div>
   
 )
}

export default Watched