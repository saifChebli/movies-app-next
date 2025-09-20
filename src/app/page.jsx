import MovieCard from "@/components/MovieCard"


const getTrendingMovies = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
  return response.json()
}




export default async function Home() {

  const data = await getTrendingMovies()
  const movies = data.results
  return (
    <div>
        <h1 className="text-3xl font-bold my-6">Trending Movies</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {
              movies.map(movie => (
                <MovieCard movie={movie} />
              ))
            }
        </div>
    </div>
  );
}
