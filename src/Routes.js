import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeComponent from './components/Home'

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" component={HomeComponent} />
            </Router>
        )
    }
}

export default Routes