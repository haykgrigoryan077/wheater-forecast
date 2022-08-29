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
                onChange={(event) => {
                    setCity(event.target.value)
                }}
                value={city}
            />
        </div>
    )
}

export default SearchCity