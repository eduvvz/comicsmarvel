import axios from 'axios'
import md5 from 'md5-hash'

import { API_URI, GET_COMICS, PUBLIC_KEY, PRIVATE_KEY } from '../constants'

const getTS = () => {
    return '1'
}

const getComics = () => {
    const ts = getTS()
    axios.get(`${API_URI}${GET_COMICS}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`)}`)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
}

export {
    getComics
}