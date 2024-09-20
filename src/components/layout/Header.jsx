
import './layout.css'
import logo from '../../logo.svg';

import React from 'react'
import { Link } from 'react-router-dom' ;
import SearchResult from '../../pages/SearchResult';

class Header extends React.Component {

    constructor() {
        super();

        this.state = {
            searchInput: "asda",
        }
    }

    render() {
        return(
            <header>
                <ul className='nav-menu'>
                    <li>
                        <Link to='/home'>
                            <img src={logo} width={60} />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/home">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/genres">Genres</Link>
                    </li>
                    <li className='nav-item'>
                        <form method='GET' action="../search">
                            <input type='text' name="query" className='search-bar' />
                            <button type='submit' className='search-btn'>🔍</button>
                            {
                                
                            }
                        </form>
                    </li>
                </ul>
            </header>
        );
    }

    search(formData) {
        const query = formData.get('query');
        alert(`You searched for '${query}'`);
    }

}

export default Header;