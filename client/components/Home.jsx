import React from 'react'
import {connect} from 'react-redux'
import {requestItems} from '../actions/stock'

import LoginForm from './LoginForm'
import StockItem from './StockItem'

class Home extends React.Component {
  constructor (props) {
    super(props)

    // this.state = {
    //   items: [
    //     { id: 1, type: 'Water', quantity: 30 },
    //     { id: 2, type: 'Blankets', quantity: 1 },
    //     { id: 3, type: 'Matches', quantity: 500 },
    //     { id: 4, type: 'Face Paint', quantity: 99999 },
    //     { id: 5, type: 'Dragon', quantity: 1 },
    //     { id: 6, type: 'Nuclear Thermometer', quantity: 5 }
    //   ]
    // }
  }

  componentDidMount () {
    this.props.loadItems()
  }

  render () {
    return (
      <div>
        <div style={{ width: '50%', margin: 'auto' }}>
          <h2 style={{ textAlign: 'center' }}>Stock List</h2>
          {this.props.items.map((item, id) => {
            return <div key={id}>
              <StockItem item={item} />
            </div>
          })}
        </div>

        <LoginForm />
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
    loadItems: () => {
      return dispatch(requestItems())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
