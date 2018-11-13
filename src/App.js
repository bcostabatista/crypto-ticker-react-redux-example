import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { COMBINED_REDUCERS } from '../src/reducers/reducers'
import Routes from './Routes'

let store = createStore(COMBINED_REDUCERS)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        )
    }
}

export default App