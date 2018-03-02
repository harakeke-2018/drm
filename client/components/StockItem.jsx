import React from 'react'

import Log from './Log'

class StockItem extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            logIsVisible: false,
            logItems: [{last_update: '29/1/2018', changed: -25},
            {last_update: '1/1/2018', changed: 50},
            {last_update: '29/11/2017', changed: -500},
            {last_update: '1/1/2000', changed: 500}]
        }
        this.toggleLog = this.toggleLog.bind(this)
    }

    toggleLog () {
        this.setState({logIsVisible: !this.state.logIsVisible})
    }

    render() {
        return (
            <div className='row'>
                <div className='twelve columns'>
                    <p className='six columns'>{this.props.item.type}</p>
                    <button className='two columns' type='button' onClick={this.toggleLog}>{this.state.logIsVisible ? 'Hide' : 'Log'}</button>
                    <p className='four columns' style={{textAlign: 'right'}}>Stock: {this.props.item.quantity}</p>
                </div>

                <div className='twelve columns'>
                {this.state.logIsVisible ? (<div>
                            <h5 className='six columns'>Date</h5>
                            <h5 className='six columns' style={{textAlign: 'right'}}>Stock Change</h5>
                        </div>)
                        : null}
                {this.state.logIsVisible ? this.state.logItems.map((logItem, id) => {
                    return <div key={id}>
                        <Log item={logItem} />
                    </div>
                }) 
                    : null}
                </div>
            </div>
        )
    }
}

export default StockItem 
