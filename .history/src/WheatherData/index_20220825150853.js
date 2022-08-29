import React from "react";
import { useState } from "react";

const SearchCity = () => {
    const [city, setCity] = useState('');

    return (
        <div className="searchInput">
            <input 
                type='text'
                placeholder='input your text'
            />
        </div>
    )
}

export default SearchCity