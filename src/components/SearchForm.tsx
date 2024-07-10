import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Movie } from '../@types/movie';

type SearchFormProps = {
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setSearchResults: Dispatch<SetStateAction<Movie[] | null>>;
};

const SearchForm = ({ setSearchResults, setErrorMessage }: SearchFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async () => {
    if (searchInputRef?.current?.value) {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}&s=${searchInputRef?.current?.value}`
        );
        const data = await response.json();
        if (data?.Search) {
          setSearchResults(data.Search.slice(0, 3));
        } else {
          setErrorMessage(data.Error);
          setSearchResults([]);
        }
        setIsLoading(false);
      } catch (error) {
        setErrorMessage(error as string);
      }
    } else {
      alert('Your search field is empty!');
    }
  };

  const searchIcon = isLoading
    ? 'https://www.svgrepo.com/show/199956/loading-loader.svg'
    : '/assets/search-icon.svg';

  return (
    <div className='relative max-w-sm mx-auto mt-5'>
      <input
        ref={searchInputRef}
        className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        type='search'
        placeholder='Search'
      />
      <button
        onClick={handleSearch}
        className='absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
      >
        <img
          className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`}
          src={searchIcon}
          alt='Loading icon'
        ></img>
      </button>
    </div>
  );
};

export default SearchForm;
