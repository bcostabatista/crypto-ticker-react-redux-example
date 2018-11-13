import { combineReducers } from 'redux'
import { binance_reducer } from './binance_reducer'

export const COMBINED_REDUCERS = combineReducers({
    binance: binance_reducer
})