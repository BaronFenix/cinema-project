import React from 'react';
import './slider.css';
import { Link } from 'react-router-dom';

const Slide = ({children, source, movieId}) => {
    return (
        <div className='container'>
            <div className='content-image'>
            <img src={source} className="" alt='poster'/>
            </div>
            <div className='content-text'>
                <Link className='custom-link' to={"../movie/" + children + "?id=" + movieId}>
                    {children}
                </Link>
            </div>
        </div>
    );
};

export default Slide;