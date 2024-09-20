import './layout.css'

import React from 'react'
import { Link } from 'react-router-dom' ;

class Footer extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
            <footer className='footer-wrapper'>
                <div className='flex-cont'>

                <ul className='footer-menu'>
                    <h3>Навигация</h3>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/home">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/genres">Genres</Link>
                    </li>
                </ul>
                <ul className='footer-menu'>
                    <h3>Соц сети</h3>
                    <li className='nav-item'>
                        <Link className='nav-link' to="#">Facebook</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="#">Instagram</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="#">Vk</Link>
                    </li>
                </ul>
            </div>
            <div className='bottom-block'>
                <p>© 2024</p>
            </div>
            </footer>
        );
    }

}

export default Footer;