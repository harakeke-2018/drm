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

  render () {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>{this.props.item.type}</p>
          <button type='button' onClick={this.toggleLog}>Log</button>
          <p>Stock: {this.props.item.quantity}</p>
        </div>
        {this.state.logIsVisible ? this.state.logItems.map((logItem, id) => {
          return <Log key={id} item={logItem} />
        })
          : null}
      </div>
    )
  }
}

export default StockItem
