import React from 'react'


const getMovie = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
  return response.json()
}

const MovieDetails = async ({ params }) => {

  const { id } = await params
  const movie = await getMovie(id)

  console.log(movie)
  return (
    <div className='max-w-3xl mx-auto'>
      <img className='rounded-lg mb-6' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
      <h1 className='text-4xl font-bold mb-4'>{movie.title}</h1>
      <p className='text-gray-700 mb-4'>
        {movie.overview}
      </p>
      <p className='text-lg'>
          ⭐ {movie.vote_average.toFixed(1) }  / 10
       </p>
       <p className='text-lg'>
         📅 {movie.release_date}
       </p>
    </div>
  )
}

export default MovieDetails