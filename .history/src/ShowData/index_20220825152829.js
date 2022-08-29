import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ShowWheatherData = (props) => {
    const [wheatherData, setWheatherData] = useState('')

    let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=50a7aa80fa492fa92e874d23ad061374`

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setWheatherData(response.data)
        })
    }, [wheatherData])
    console.log(wheatherData);

    return (
        <div className="infoWrapper">
            <div className="wheatherInfoBox">

            </div>
        </div>
    )

}

export default ShowWheatherData