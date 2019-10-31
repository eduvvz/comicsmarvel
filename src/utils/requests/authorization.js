import { PUBLIC_KEY, PRIVATE_KEY } from '../constants';

import md5 from 'md5'

const getTS = () => {
    return new Date().getTime().toString()
}

export default () => {
    const ts = getTS();
    const hash = `${md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`)}`
    return `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
}