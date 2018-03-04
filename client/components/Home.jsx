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
    // is currently user id, will need to be changed to team id
    this.props.loadItems(this.props.user.id)
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
    user: state.auth.user,
    items: state.stock.items,
    latestQty: state.stock.latestQty
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems: (teamId) => {
      return dispatch(requestItems(teamId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
