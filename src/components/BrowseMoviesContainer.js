import React from 'react'
import { useSelector } from 'react-redux'

const BrowseMoviesContainer = () => {
  const movies = useSelector(store => store.movies
    ?.nowPlayingMovies);
  if (!movies || !movies.length) return;

  const { original_title, overview } = movies[0];

  return (
    <div>
    </div>
  )
}

export default BrowseMoviesContainer
