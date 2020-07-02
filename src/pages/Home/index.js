import React, { useEffect, useState } from 'react';
import { Link,useHistory} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaSearchLocation, FaSearch } from 'react-icons/fa';
import axios from 'axios';
import './styles.css';
/* import {useGeolocation} from 'react-use'; */

const Home = () => {
    /* const state = useGeolocation(); */
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [cityName, setCityName] = useState();
    /* const [userIp, setUserIp] = useState(); */
    const API_KEY = 'b9a9fdac9468e9d249cb59ed9e17a0a5';
    const IP = '191.37.40.229';
    const { handleSubmit, errors,register } = useForm();
    const history = useHistory();
    useEffect(() => {
        axios.get('https://extreme-ip-lookup.com/json')
            .then(response => {
                setCityName(response.data.city);
                console.log(cityName);
            })
    }, [])
    /* useEffect(() => {
        axios.get(`http://api.ipstack.com/${IP}?access_key=${API_KEY}`)
            .then(response => {
                console.log(response.data);
                setCityName(response.data.city);
            })
        setLatitude(state.latitude);
        setLongitude(state.longitude);
    },[]) */
    const onSubmit = data => {
        console.log(data);
        history.goForward('/weather')
    }

    return (
        <div className="page-content">
            <div className="text-content">
                <h1>Hello! Please write your city name</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" name="city" placeholder={`Ex: ${cityName}`} ref={register({required:true})} className="searchForm" />
                        <button type="submit" className="btn mb-2"><FaSearch />Search</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Home;