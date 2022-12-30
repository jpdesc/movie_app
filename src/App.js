import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=c387c552';

const movie1 = {
    Title: 'Italian Spiderman',
    Year: '2007',
    imdbID: 'tt2705436',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYjFhN2RjZT…TkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg'
}


const App = () => {

    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }


    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>MovieFind</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={() => { } }
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => { }}
                />
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>

                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                )

            }

        </div>

    );
}

export default App;
