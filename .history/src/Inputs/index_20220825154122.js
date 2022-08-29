import React from "react";
import { useState } from "react";

const SearchCity = (props) => {
    const [city, setCity] = useState('');
    const [finalSearch, setFinalSearch] = useState('')
    // console.log(city);
    console.log(props.finalSearch);

    return (
        <div className="searchInput">
            <input 
                type='text'
                placeholder='input your text'
                onChange={(event) => {
                    props.setCity(event.target.value)
                }}
                value={city}
            />
            <button className="searchButton" onClick={() => {
                props.setFinalSearch(props.city)
            }}>
                SUBMIT
            </button>
        </div>
    )
}

export default SearchCity