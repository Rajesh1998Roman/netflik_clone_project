import React from 'react'
import "../HomeScreen/HomeScreen.css"
import Nav from '../Component/Nav/Nav'
import Banner from '../Component/Banner/Banner';
import Row from '../Component/Row/Row';
import request from '../helpers/request';

const HomeScrren = () => {
  return (
    <div className='homeScreen'>
         <Nav />
         <Banner/>
         <Row title="NETFLIK ORIGINALS"
         fetchUrl={request.fetchNetflixOrginials}
         isLarge={true}
         />
         <Row title="TRENDING NOW"
         fetchUrl={request.fetchTrending}
         />
          <Row title="ACTION MOVIES"
         fetchUrl={request.fetchActionMovies}
         />
          <Row title="DOCUMENTARIES"
         fetchUrl={request.fetchDocumentaries}
         />
          <Row title="HORROR MOVIES"
         fetchUrl={request.fetchHorrorMovies}
         />
          <Row title="ROMANCE MOVIES"
         fetchUrl={request.fetchRomanceMovies}
         />
          <Row title="COMEDY MOVIES"
         fetchUrl={request.fetchComedyMovies}
         />
          <Row title="TOP RATEDS"
         fetchUrl={request.fetchTopRated}
         />
    </div>
       
  );
};

export default HomeScrren