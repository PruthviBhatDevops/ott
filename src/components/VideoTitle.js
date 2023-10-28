import React from 'react'

const videoTitle = ({original_title, overview}) => {
  return (
    <div className='flex pt-[15%] pl-[4%] flex-col absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-5xl font-serif'>{original_title}</h1>
      <p className='pr-6 py-6 w-1/4 '>{overview}</p>
      <div className='flex'>
        <button className='px-12 py-2 mr-2 rounded-lg bg-white text-black font-semibold hover:bg-opacity-80'>Play</button>
        <button className='px-12 py-2 rounded-lg bg-white text-black font-semibold hover:bg-opacity-80'>More Info</button>
      </div>
    </div>
  )
}

export default videoTitle
