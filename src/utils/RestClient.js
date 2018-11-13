import { 
    BINANCE_API_URL,
    BINANCE_API_KEY, 
    BINANCE_API_SECRET_KEY 
} 
from './constants'

let axios = require('axios').default
export const RestClient = axios.create({
    baseURL: BINANCE_API_URL,
    timeout: 50000,
    headers: {
        'apiKey': BINANCE_API_KEY,
        'secretKey': BINANCE_API_SECRET_KEY
    }
})