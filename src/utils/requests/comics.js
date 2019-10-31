import axios from 'axios'

import { API_URI, GET_COMICS } from '../constants'
import authorization from './authorization'

const getComics = (offset, limit) => {
    return new Promise ((resolve, reject)=> { 
        axios.get(`${API_URI}${GET_COMICS}?offset=${offset}&limit=${limit}&${authorization()}`)
        .then((response) => {
            resolve(response.data.data.results)
        })
        .catch((error) => {
            console.log(error);
        })
    });
}

export default {
    getComics
}