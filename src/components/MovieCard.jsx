import React from 'react'
import Link from 'next/link'

const MovieCard = ({movie}) => {
  return (
    <Link href={`/movie/${movie.id}`} className='shadow-lg rounded-xl bg-white hover:scale-105 transition-transform '>
        <img className='h-80 w-full  object-cover' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className='p-4'>
            <h2 className='text-lg font-semibold'>{movie.title}</h2>
            <p className='text-sm text-gray-500'>
               ⭐ {movie.vote_average.toFixed(1)} | 📅 {movie.release_date}
            </p>
        </div>
    </Link>
  )
}

export default MovieCard