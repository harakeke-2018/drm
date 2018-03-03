import React from 'react'
import {connect} from 'react-redux'
import {deliverItems} from '../actions/stock'

import Log from './Log'

class StockItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      logIsVisible: true,
      logItems: [{last_update: '29/1/2018', changed: -25},
        {last_update: '1/1/2018', changed: 50},
        {last_update: '29/11/2017', changed: -500},
        {last_update: '1/1/2000', changed: 500}]
    }
    this.toggleLog = this.toggleLog.bind(this)
    this.decrementItems = this.decrementItems.bind(this)
  }

  toggleLog () {
    this.setState({logIsVisible: !this.state.logIsVisible})
  }

  decrementItems () {
    console.log('hi')
    this.props.dispatch(deliverItems(4, 7))
  }

  render () {
    return (
      <div className='row'>
        <div className='row' style={{textAlign: 'right'}}>
          <p className='three columns'>{this.props.item.type}</p>
          <p className='one columns' style={{textAlign: 'right', fontWeight: 'bold'}}>{this.props.item.quantity}</p>
          <button className='two columns' type='button' onClick={this.toggleLog}>{this.state.logIsVisible ? 'Hide' : 'Log'}</button>
          <div className='three columns'></div>
          <button className='one column'>+</button>
          <button className='one column' onClick={this.decrementItems}>-</button>
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

const mapStateToProps = (state) => {
  return {
    items: state.stock.items,
    latestQty: state.stock.latestQty
  }
}

export default connect(mapStateToProps)(StockItem)
