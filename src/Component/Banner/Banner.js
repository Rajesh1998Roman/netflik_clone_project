import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../helpers/axios';
import request from '../../helpers/request';

const Banner = () => {

    const [ movie, setMovie]=useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const requests =await axios.get(request.fetchNetflixOrginials);
            setMovie(
                requests.data.results[
                    Math.floor(Math.random()*requests.data.results.length-1)
                ]
            );
            return requests;
        };
        fetchData();
    },[]);

    console.log(movie);

    function truncate(string,n){
      return string?.length>n ? string.substr(0,n-1)+"...":string;
    }
  return (
    <header className=' banner'
       style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize:"cover",
        backgroundPosition: "center center"
       }}
    >
        <div className='banner-contents'>
            <h1 className='banner-title'>
                {movie?.title|| movie?.name || movie?.original_name}
            </h1>
            <div className='banner-buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner-descr'>
                {truncate(movie?.overview, 150)}
             </h1>

        </div>
        <div className='banner-slide'/>

    </header>
  )
}

export default Banner