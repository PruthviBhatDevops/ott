import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList';

const BrowseMoviesContainer = () => {
  const movies = useSelector(store => store.movies
    ?.nowPlayingMovies);
  if (!movies || !movies.results) return;
  return (
    <div className='bg-black pl-[4%]'>
      <div className='-mt-56 relative z-40'>
        <MoviesList movies={movies.results} title={"Trending"} />
        <MoviesList movies={movies.results} title={"Popular"} />
        <MoviesList movies={movies.results} title={"Now Playing"} />
        <MoviesList movies={movies.results} title={"Romantic"} />
      </div>
    </div>
  )
}

export default BrowseMoviesContainer
