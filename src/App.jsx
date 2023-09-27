import { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import UpcomingMovies from "./Components/UpcomingMovies";


function App() {
const [upcomingMovies, setUpcomingMovies] = useState([]);
  
  
const url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2";

  function getMovies() {

    fetch(url, {
      method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2Y0ZTAyYmNjNjBjZTI4NThiNTIyZTA0MDZjNzVmYyIsInN1YiI6IjY0MTc1ZDY5MzEwMzI1MDBlOGEyNGUxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vqS903rTtu9_RXuOvldMCRQnIDI15fEypp2rxApIi60'
  }
    })
    .then((response) => response.json())
    .then((data) => setUpcomingMovies(data.results))
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h1 className='display-2 text-center'>
        Upcoming Movies!
        <img
          src='src/assets/film-reel-svgrepo-com.svg'
          alt='Movie Reel'
          className='movie-reel'
        />
      </h1>
      <UpcomingMovies upcomingMovies={upcomingMovies} />
    </>
  );
}

export default App
