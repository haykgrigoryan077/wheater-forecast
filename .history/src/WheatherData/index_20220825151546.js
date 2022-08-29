import React from "react";
import { useState } from "react";

const SearchCity = () => {
    const [city, setCity] = useState('');
    const [finalSearch, setFinalSearch] = useState('')
    // console.log(city);
    console.log(finalSearch);

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
            <button className="searchButton" onClick={() => {
                setFinalSearch(city)
            }}>
                SUBMIT
            </button>
        </div>
    )
}

export default SearchCity