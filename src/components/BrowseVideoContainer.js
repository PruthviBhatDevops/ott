import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground";

const BrowseVideoContainer = () => {

  const movies = useSelector(store => store.movies
    ?.nowPlayingMovies);
  if (!movies || !movies.results) return;

  const { original_title, overview, id } = movies?.results[11];

  return (
    <div>
      <VideoTitle original_title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  )
}

export default BrowseVideoContainer
