import PropTypes from "prop-types";
import { format } from "date-fns";

export default function UpcomingMovies({ upcomingMovies }) {
  console.log(upcomingMovies);
  return (
    <>
      <div className='container'>
        {upcomingMovies.map((movie) => {
          return (
            <div
              className='row flex-wrap-reverse spaced-rows centered'
              key={movie.id}
            >
              <div className='col-md-6 col-sm-12'>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className='movie-posters-100'
                />
                <h1 className='movie-titles'>{movie.title}</h1>
                <h3>{format(new Date(movie.release_date), "MMMM d, yyyy")}</h3>

                <p className='movie-descriptions'>{movie.overview}</p>
              </div>
              <div className='col-md-6 col-sm-12'>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt={movie.title}
                  className='movie-posters-200'
                />
              </div>
              <span className='divider' />
            </div>
          );
        })}
      </div>
    </>
  );
}

UpcomingMovies.propTypes = {
  upcomingMovies: PropTypes.array.isRequired,
};
