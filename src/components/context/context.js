import React,{createContext,useEffect,useReducer,useContext} from 'react'
import reducer from "./reducer"

const initialState = {
    watchlist:localStorage.getItem("watchlist")? JSON.parse(localStorage.getItem("watchlist")) : [],
    watched:localStorage.getItem("watched")? JSON.parse(localStorage.getItem("watched")) : [],
}

export const GlobalContext = createContext();


export const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer,initialState);
    useEffect(() => {
      localStorage.setItem("watchlist",JSON.stringify(state.watchlist))
      localStorage.setItem("watched",JSON.stringify(state.watched))
    
     
    }, [state])
    
    const addMovieToWatchlist = (movie)=>{
        dispatch({
            type:"ADD_MOVIE_TO_WATCHLIST",
            payload: movie
        })
        
    }
    const addMovieToWatched = (movie)=>{
        dispatch({
            type:"ADD_MOVIE_TO_WATCHED",
            payload: movie
        })
        
    }
    const removeMovieFromWatchlist = (id)=>{
        dispatch({
            type:"REMOVE_MOVIE_FROM_WATCHLIST",
            payload: id
        })
        
        
    }
    const removeMovieFromWatched = (id)=>{
        dispatch({
            type:"REMOVE_MOVIE_FROM_WATCHED",
            payload: id
        })
        
        
    }


    return <GlobalContext.Provider value={{...state,addMovieToWatchlist,removeMovieFromWatchlist,addMovieToWatched,removeMovieFromWatched}}>
        {children}
    </GlobalContext.Provider>
}
export const useGlobalContext = ()=>{
    return useContext(GlobalContext);
}