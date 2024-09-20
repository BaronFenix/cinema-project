import '../styles/main.css'
import '../styles/home.css'
import React from 'react'

import testData from '../data/slider-data.json';
import movies from '../data/movies';

import StickySlider from '../components/slider/StickySlider';

class Home extends React.Component {

    constructor() {
        super();
    }

    render() {
    
        return(
            <div className='main-container'>
                <div className='container'>
                    <div className='slider-container'>
                    <h1 className='title'>Скоро</h1>
                        <StickySlider data={movies} />
                    </div>
                    <div className='slider-container'>
                    <h1 className='title'>Популярое</h1>
                        <StickySlider data={this.shuffleArray(movies)} />
                    </div>
                    <div className='slider-container'>
                    <h1 className='title'>Что то еще</h1>
                        <StickySlider data={this.shuffleArray(movies)} />
                    </div>
                </div>

            </div>
        );
    }

    shuffleArray(array) {
        // троеточие перед переменной означает что мы передаем/присваиваем копию этого объекта а не оригинальную ссылку
        let newArr = [...array]; 
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
    }

}

export default Home;