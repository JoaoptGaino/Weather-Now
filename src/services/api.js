import axios from 'axios';
const api = axios.create({
    baseURL:'https://api.openweathermap.org/data/2.5/weather',
})
//2f0ab32bc688bb44060c42fcd670d424
export default api;