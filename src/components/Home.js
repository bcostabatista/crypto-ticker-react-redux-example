import React from 'react'
import Header from './layout_pieces/Header'
import Ticker from './Ticker'

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                    <div className="content">
                        <section className="section border">
                            <div className="title align-center">The real-time crypto ticker</div>
                            <Ticker />
                        </section>
                    </div>
            </div>
        )
    }
}

export default Home