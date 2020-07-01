import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaSearchLocation,FaSearch} from 'react-icons/fa';
import axios from 'axios';
/* import {useGeolocation} from 'react-use'; */

const Home = () => {
    /* const state = useGeolocation(); */
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [cityName, setCityName] = useState();
    /* const [userIp, setUserIp] = useState(); */
    const API_KEY = 'b9a9fdac9468e9d249cb59ed9e17a0a5';
    const IP = '191.37.40.229'

    useEffect(()=>{
        axios.get('https://extreme-ip-lookup.com/json')
        .then(response=>{
            setCityName(response.data.city);
            console.log(cityName);
        })
    },[])
    /* useEffect(() => {
        axios.get(`http://api.ipstack.com/${IP}?access_key=${API_KEY}`)
            .then(response => {
                console.log(response.data);
                setCityName(response.data.city);
            })
        setLatitude(state.latitude);
        setLongitude(state.longitude);
    },[]) */
    return (
        <div className="page-content">
            <div className="text-content">
                <h1>Hello! Please write your city name</h1>
                <input type="text" value={cityName}/>
                <button type="submit"><FaSearch/></button>
            </div>
        </div>
    );
}
export default Home;