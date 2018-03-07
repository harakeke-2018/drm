import React from 'react'
import { connect } from 'react-redux'
import { requestItems } from '../actions/stock'
import { requestLogs } from '../actions/logs'

import { Doughnut } from 'react-chartjs-2'

import StockItem from './StockItem'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chartColors: [
        '#3366cc',
        '#dc3912',
        '#ff9900',
        '#109618',
        '#990099',
        '#0099c6',
        '#dd4477',
        '#66aa00',
        '#b82e2e',
        '#316395',
        '#3366cc',
        '#994499',
        '#22aa99',
        '#aaaa11',
        '#6633cc',
        '#e67300',
        '#8b0707',
        '#651067',
        '#329262',
        '#5574a6',
        '#3b3eac',
        '#b77322',
        '#16d620',
        '#b91383',
        '#f4359e'
      ],
      graphLabels: [],
      graphData: []
    }
    this.refresh = this.refresh.bind(this)
  }

  componentWillMount() {
    // is currently hard-coded, will need to use token
    this.props.loadItems(this.props.locationId)
    this.props.requestLogs(this.props.locationId)
    }
  
    componentWillReceiveProps (props) {
      let graphLabels = []
      let graphData = []
      props.items.map(item => {
        graphData.push(item.quantity)
        graphLabels.push(item.item)
      })
      this.setState({graphLabels: graphLabels, graphData: graphData})
    }

    refresh () {
      this.props.loadItems(this.props.locationId)
      this.props.requestLogs(this.props.locationId)
    }

  render() {


    return (
      <div>
        <div style={{ width: '50%', margin: 'auto' }}>
          <h2 style={{ textAlign: 'center' }}>{this.props.location} Stock</h2>
          {this.props.items.map((item, id) => {
            return <div key={id}>
              <StockItem refresh={this.refresh} item={item} locationId={item.location_id} />
            </div>
          })}
          <h1></h1>
          <Doughnut data={{
            datasets: [{
              backgroundColor: this.state.chartColors,
              data: this.state.graphData,
              hoverBackgroundColor: this.state.chartColors
            }],
            labels: this.state.graphLabels
          }} />
          <h1></h1>
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
