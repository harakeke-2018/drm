import React from 'react'
import {connect} from 'react-redux'
import {requestItems} from '../actions/stock'

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

  render () {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>{this.props.item.type}</p>
          <button type='button' onClick={this.toggleLog}>Log</button>
          <p>Stock: {this.props.item.quantity}</p>
        </div>
        {this.state.logIsVisible ? this.props.items.map((logItem, id) => {
          return <Log key={id} item={logItem} />
        })
          : null}
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

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems: teamId => {
      return dispatch(requestItems(teamId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockItem)
