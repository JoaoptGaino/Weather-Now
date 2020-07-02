import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import axios from 'axios';

const Weather = () => {
    const LOCATION = '5128581';
    const APIKEY = '0b177100caf71a656b93bfd11c06f133';
    const [temperature,setTemperature] = useState();
    const [city,setCity] = useState();
    useEffect(()=>{
        axios.get('https://extreme-ip-lookup.com/json')
        .then(response=>{
            setCity(response.data.city);
            console.log(city);
        })
    },[])
    useEffect(() => {
        api.get(`?q=Vancouver&appid=${APIKEY}`)
            .then(response => {
                console.log(response.data);
                let temp = response.data.main.temp;
                const tempCelsius = temp-273.15;
                setTemperature(tempCelsius.toFixed(1));
            })
    },[]);
    
    return (
        <div>
            <h1>Weather</h1>
            <h1>{temperature}ºC</h1>
            <Link to="/">Home</Link>
        </div>
    );
}
export default Weather;