import { ADD_CRYPTO, DELETE_CRYPTO } from '../utils/constants'

export const addCrypto = (crypto, min_price, max_price, tick_size) => {
    return {
        type: ADD_CRYPTO,
        item: {
            crypto,
            min_price,
            max_price,
            tick_size
        }
    }
}

export const deleteCrypto = index => {
    return {
        type: DELETE_CRYPTO,
        index: index
    }
}