import axios, { AxiosResponse } from 'axios';
import { Movies } from '../../models/Movies';
import { Products } from '../../models/Products';
import { Weather } from '../../models/Weather';
import * as moviesData from './movies.json'

//axios.defaults.baseURL='http://localhost:5000/api';

const responseBody =<T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody)
};

const WeatherForecast = {
    list: () => requests.get<Weather[]>('http://localhost:5000/api/WeatherForecast'),
};

const products ={
    list: () => requests.get<Products[]>('https://fakestoreapi.com/products'),
}

const movies ={
    list: () => moviesData as any,
}

const agent={
    WeatherForecast,
    products,
    movies
};

export default agent;