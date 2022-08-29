import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './style.css'

const ShowWheatherData = (props) => {
    const [wheatherData, setWheatherData] = useState('')

    let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=50a7aa80fa492fa92e874d23ad061374`

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setWheatherData(response.data)
        })
    }, [baseUrl])
    console.log(wheatherData.main);

    
    return (
        
            <div className="wheatherInfoBox">
                <div className="cityName">
                    <h4>{wheatherData && wheatherData.name}</h4>
                    <p>{wheatherData && wheatherData.main.temp}</p>
                </div>
            </div>
    )
}

export default ShowWheatherData