"use client"

import React , { useState } from 'react'
import MovieCard from '@/components/MovieCard'

const Search = () => {

  const [query , setQuery] = useState("")
  const [movies , setMovies] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault()

    if (!query) return;

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}`)
    const data = await response.json()
    setMovies(data.results)
  }

  
  return (
    <div>
        <h1 className='font-bold text-3xl'>Search Movies</h1>
        <form onSubmit={handleSearch} className='flex gap-2 mb-6'>
            <input value={query} onChange={(e) => setQuery(e.target.value)} className='px-4 py-2 rounded-lg border bg-gray-50 focus:border-blue-400 outline-0' type="text" placeholder='Enter Movie title ...' />
            <button className='px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer' type='submit' >Search</button>
        </form>
        {movies.length > 0 && 
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        }
    </div>
  )
}

export default Search