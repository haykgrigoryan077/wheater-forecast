import React from "react";
import { useState } from "react";
import './style.css'

const SearchCity = (props) => {
    console.log(props.finalSearch);

    return (
        <div className="searchInput">
            <input 
                type='text'
                placeholder='input your text'
                onChange={(event) => {
                    props.setCity(event.target.value)
                }}
                value={props.city}
            />
            <button className="searchButton" onClick={() => {
                props.setFinalSearch(props.city)
                props.setCity('')
            }}>
                SUBMIT
            </button>
        </div>
    )
}

export default SearchCity