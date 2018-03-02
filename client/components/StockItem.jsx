import React from 'react'
import {connect} from 'react-redux'

import Log from './Log'

class StockItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      logIsVisible: false,
      logItems: [{last_update: '29/1/2018', changed: -25},
        {last_update: '1/1/2018', changed: 50},
        {last_update: '29/11/2017', changed: -500},
        {last_update: '1/1/2000', changed: 999999}]
    }
    this.toggleLog = this.toggleLog.bind(this)
  }

  toggleLog () {
    this.setState({logIsVisible: !this.state.logIsVisible})
  }

  // create function to dispatch active.id as "activeItem" to Redux so we don't have to pass it down to Log component

  render () {
    const active = this.props.item
    return (
      <div className='row'>
        <div className='row' style={{textAlign: 'right'}}>
          <p className='three columns'>{active.item}</p>
          <p className='one columns' style={{textAlign: 'right', fontWeight: 'bold'}}>{active.quantity}</p>
          <button className='two columns' type='button' id={active.id} onClick={this.toggleLog}>{this.state.logIsVisible ? 'Hide' : 'Log'}</button>
          <div className='three columns'></div>
          <button className='one column'>+</button>
          <button className='one column'>-</button>
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

// get relevant info from props

const mapStateToProps = (state) => {
  return {
    items: state.stock.items,
    latestQty: state.stock.latestQty
  }
}

export default connect(mapStateToProps)(StockItem)
