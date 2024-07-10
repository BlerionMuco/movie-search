import { useState } from 'react'
import MovieCard from './components/MovieCard'
import SearchForm from './components/SearchForm'
import { Movie } from './@types/movie'

function App() {
  const [searchResults, setSearchResults] = useState<Movie[] | null>(null)
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <>
      <div className="text-2xl flex justify-center items-center">
        Search Movie Here
      </div>
      <SearchForm
        setErrorMessage={setErrorMessage}
        setSearchResults={setSearchResults}
      />
      {searchResults?.length === 0 && (
        <div className="text-md flex justify-center items-center">
          {errorMessage}
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {searchResults?.map((movie: Movie) => (
          <MovieCard
            imdbID={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
          />
        ))}
      </div>
    </>
  )
}

export default App
