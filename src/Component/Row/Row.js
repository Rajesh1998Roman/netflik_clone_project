import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../../helpers/axios';

const Row = ({title,fetchUrl,isLarge=false}) => {

    const [movie, setMovie]=useState([]);

    const base_url= 'https://image.tmdb.org/t/p/original/';

    useEffect(()=>{
        const fetchData = async ()=>{
            const request =await axios.get(fetchUrl);
            setMovie(request.data.results);
            
            return request
        }
            fetchData(); 
    },[fetchUrl])

    console.log(movie);

  return (
      
      <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
            {movie.map((movies)=>((isLarge && movies.poster_path) ||(!isLarge && movies.backdrop_path))&&
            (
               <img 
               key={movies.id}
               className={`row_poster $ {isLarge && "row_posterLarge"}`}
               src={`${base_url}${
                isLarge ? movies.poster_path: movies.backdrop_path
               }`}
               alt=''
               />
            )
            
            )}
        </div>
      </div>
  
  );
   
};

export default Row