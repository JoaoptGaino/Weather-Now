import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const Weather = () => {
    const LOCATION = '5128581';
    const APIKEY = '0b177100caf71a656b93bfd11c06f133';
    useEffect(() => {
        api.get(`?id=${LOCATION}&appid=${APIKEY}`)
            .then(response => {
                console.log(response.data);
            })
    })
    return (
        <div>
            <h1>Weather</h1>
            <Link to="/">Home</Link>
        </div>
    );
}
export default Weather;