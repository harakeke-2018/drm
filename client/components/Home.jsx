import React from 'react'
import {connect} from 'react-redux'
import {requestItems} from '../actions/stock'

import LoginForm from './LoginForm'
import StockItem from './StockItem'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    this.loadItems()
  }

  loadItems () {
    this.props.dispatch(requestItems())
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

        <LoginForm history={this.props.history}/>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadItems: () => {
//       return dispatch(requestItems())
//     }
//   }
// }

export default connect(mapStateToProps)(Home)
