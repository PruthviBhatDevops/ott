import React from 'react'
import { IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className='px-1 w-40'>
      <img src={IMAGE_CDN + poster_path} className="" alt="Poster Icon"></img>
    </div>
  )
}

export default MovieCard
