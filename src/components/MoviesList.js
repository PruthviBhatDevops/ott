import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({ movies, title }) => {
    return (
        <div className='p-6'>
            <h1 className='font-semibold text-3xl pb-5 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll' >
                <div className='flex'>
                    {movies && movies?.map((movie) => <MovieCard key={movie.id} poster_path={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MoviesList
