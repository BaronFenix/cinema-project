import { useSearchParams } from 'react-router-dom';
import '../styles/main.css'

import React from 'react'

function SearchResult (Search){
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    
    return(
        <div className='main-container'>
            <h1>sear Page</h1>
            
        </div>
    );
}

export default SearchResult;