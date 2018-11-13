import React from 'react'
import { addCrypto } from '../action_types/binance_actions'
import { connect } from 'react-redux'
import Marquee from 'react-marquee'
//import { RestClient } from '../utils/RestClient'

let binanceData = require('../utils/binance_data.json') 

class TickerComponent extends React.Component {

    componentWillMount() {
        //Example request
        /*RestClient.get('/exchangeInfo').then(res => {
            console.log(res.data)
        })*/
        //Using local json file THIS IS JUST AN EXAMPLE
        for(let bd of binanceData.symbols) {
            this.props.onAdd(
                bd.baseAsset,
                bd.filters[0].minPrice,
                bd.filters[0].maxPrice,
                bd.filters[0].tickSize
            )
        }

    }
    render() {
        return (
            <div className="crypto-items">
                <Marquee 
                    hoverToStop={true}
                    loop={true}
                    text={
                        this.props.items.binance.map((b, index) => (
                            <div key={index} className="crypto-item border-right-orange">
                                <div className="crypto-title">{b.crypto}</div>
                                <div className="crypto-info-static">
                                    Min Price: <span className="crypto-info-dynamic">${b.min_price}</span>
                                </div>
                                <div className="crypto-info-static">
                                    Max price: <span className="crypto-info-dynamic">${b.max_price}</span>
                                </div>
                                <div className="crypto-info-static">
                                    Tick size: <span className="crypto-info-dynamic">${b.tick_size}</span>
                                </div>
                            </div>
                        ))
                    }
                />
            </div>
        )
    }
}

const mapStateToPros = state => {
    return {
        items: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: (crypto, min_price, max_price, tick_size) => {
            console.log(dispatch(addCrypto(crypto, min_price, max_price, tick_size)))
        }
    }
}

const Ticker = connect(mapStateToPros, mapDispatchToProps)(TickerComponent)
export default Ticker