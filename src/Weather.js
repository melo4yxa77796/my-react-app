import React from "react";
import axios from"axios";


export default function Weather(){
    function handleResponse(response){
        alert(`The weather in New York is ${response.data.main.temp}`);
    }
    let apiKey="3fc4a1a542593e4089e587a81b28f31f";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return<h2>Hello from Weather</h2>
}
