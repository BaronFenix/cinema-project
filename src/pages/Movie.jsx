import '../styles/main.css';
import '../styles/movie.css';

import React from 'react';

import movies from '../data/movies.json'; 
import { useSearchParams } from 'react-router-dom';
import Tabs from '../components/tabs/Tabs';


function Movie() {
    const [searchParams, setSearchParams] = useSearchParams();
    const movieId = searchParams.get("id");

    let movie = movies.find(elem => elem.id === movieId);

    return(
        <div className='main-container'>
            <div className='movie-block'>
                <div className='poster-container'>
                    <img src={(movie.poster)} className="poster-image" alt='movie-poster' />
                </div>
                <div className='details-block'>
                    <h1 className='text-title'>{movie.title}</h1>
                    <h3 className='text-accent'><b>{movie.genres}</b></h3>
                    <hr className='underline'></hr>
                    <p><span className='text-accent'>Премьера: </span><b>{movie.premier}</b></p>
                    <p><span className='text-accent'>Продолжительность: </span><b>{movie.duration} мин.</b></p>
                    <p><span className='text-accent'>Страна: </span><b>{movie.country}</b></p>
                    <p><span className='text-accent'>Режиссер: </span><b>{movie.director}</b></p>
                    <hr className='underline'></hr>
                    <p><span className='text-accent'>В ролях: </span><b>
                    {
                        movie.actors.map(item => item + ", ")
                    }
                    </b></p>
                </div>
            </div>
            <div>
                <Tabs movieData={movie} />
            </div>


        </div>
    );
}


export default Movie;