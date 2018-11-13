import React from 'react'
import '../../sass/main.scss'

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <div className="row">
                    <div className="col">
                        <div className="brand">CryptoTicker</div>
                    </div>
                    <div className="col">
                        <div className="button btn-orange align-right">JOIN US</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header