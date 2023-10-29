import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_URI } from "../utils/constants"

const GPTSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={BG_URI} alt="background"></img>
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  )
}

export default GPTSearch
