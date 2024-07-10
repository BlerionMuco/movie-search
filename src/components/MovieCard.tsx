type CardProps = {
  imdbID: string
  title: string
  poster: string
}

const MovieCard = ({ title, poster, imdbID }: CardProps) => {
  return (
    <a
      className="cursor-pointer"
      href={`https://www.imdb.com/title/${imdbID}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col justify-center sm:py-12">
        <div className="py-3 sm:max-w-xl sm:mx-auto">
          <div className="bg-white shadow-lg border-gray-100 border sm:rounded-3xl min-h-[450px] flex space-x-8">
            <img
              className="rounded-l-3xl shadow-lg"
              src={poster !== 'N/A' ? poster : '/assets/no-image.jpg'}
              alt=""
            />
            <div className="flex flex-col w-1/2 space-y-4 p-8">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold">{title}</h2>
                <div className="bg-yellow-400 font-bold rounded-xl p-2">
                  7.2
                </div>
              </div>
              <p className="text-gray-400 max-h-40 overflow-y-hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default MovieCard
