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
    console.log(wheatherData);
    console.log(wheatherData && wheatherData.weather[0].description);

try
    {    
        return (
                <div className="wheatherInfoBox">
                    <div className="cityName">
                        <h4>{wheatherData && wheatherData.name}</h4>
                    </div>
                    <div className="temperature">
                        <p>{wheatherData && `${Math.floor(wheatherData.main.temp - 273)} Celsius`}</p>
                    </div>
                    <div className="skyDescription">
                        <p>Clearense -> {wheatherData && wheatherData.weather[0].description}</p>
                    </div>
                </div>

        )
    } catch (err) {
        console.log("sorry");
    }
}

export default ShowWheatherData