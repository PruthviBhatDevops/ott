import React from 'react'
import { IMAGE_CDN } from "../utils/constants";

const MovieCard = ({poster_path}) => {
    console.log("IMAGE_CDN + poster_path", IMAGE_CDN + poster_path)
  return (
    <div className='px-1 w-40'>
      <img src={IMAGE_CDN + poster_path } className=""></img>
    </div>
  )
}

export default MovieCard
