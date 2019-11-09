import { SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIE_DETAIL, LOADING } from './types';
import axios from 'axios';
import { OMDB_Key } from '../ApiKey';

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};

export const fetchMovie = text => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=${OMDB_Key}&s=${text}`)
        .then(response => dispatch({
            type: FETCH_MOVIE,
            payload: response.data.Search
        }))
        .catch(err => console.log(err))
};

export const fetchMovieDetails = id => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=${OMDB_Key}&i=${id}`)
        .then(response => dispatch({
            type: FETCH_MOVIE_DETAIL,
            payload: response.data
        }))
        .catch(err => console.log(err))
};


export const setLoading = () => {
    return {
        type: LOADING
    }
};
