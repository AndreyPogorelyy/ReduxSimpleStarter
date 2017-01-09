import axios from 'axios';

const API_KEY = 'a361e7540c76df8d196f60e88dfe5a90';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);  // returns a promise

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}