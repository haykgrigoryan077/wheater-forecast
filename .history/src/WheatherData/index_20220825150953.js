import React from "react";
import { useState } from "react";

const SearchCity = () => {
    const [city, setCity] = useState('');
    console.log(city);

    return (
        <div className="searchInput">
            <input 
                type='text'
                placeholder='input your text'
                value={city}
            />
        </div>
    )
}

export default SearchCity