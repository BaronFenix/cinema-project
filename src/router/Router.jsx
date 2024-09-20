import {Routes, Route} from 'react-router'
import Genres from '../pages/Genres';
import Home from '../pages/Home';
import Movie from '../pages/Movie';
import SearchResult from '../pages/SearchResult';

function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/genres' element={<Genres />}/>
                <Route path='/movie/*' element={<Movie />}/>
                <Route path='/search' element={<SearchResult />}/>
            </Routes>
        </div>
    );
}

export default Router;