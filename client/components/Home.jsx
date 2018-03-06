import React from 'react'
import {connect} from 'react-redux'
import {requestItems} from '../actions/stock'
import {requestLogs} from '../actions/logs'

import ChartistGraph from 'react-chartist';

import StockItem from './StockItem'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount () {
    this.props.loadItems(this.props.locationId)
    this.props.requestLogs(this.props.locationId)
  }

  render () {
    return (
      <div>
        <div style={{ width: '50%', margin: 'auto' }}>
          <h2 style={{ textAlign: 'center' }}>{this.props.location} Stock</h2>
          {this.props.items.map((item, id) => {
            return <div key={id}>
              <StockItem item={item} locationId={item.location_id} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.stock.items,
    latestQty: state.stock.latestQty,
    logs: state.logs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestLogs: (locationId) => {
      return dispatch(requestLogs(locationId))
    },
    loadItems: (locationId) => {
      return dispatch(requestItems(locationId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
