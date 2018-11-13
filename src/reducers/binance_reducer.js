import { ADD_CRYPTO, DELETE_CRYPTO } from '../utils/constants'

export const binance_reducer = (state = [], action) => {
    switch(action.type) {
        case ADD_CRYPTO :
            return [...state, action.item]
        case DELETE_CRYPTO :
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]
        default : 
            return state
    }
}