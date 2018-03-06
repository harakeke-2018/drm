import React from 'react'
import { connect } from 'react-redux'
import { deliverItems, increaseItems } from '../actions/stock'
import { requestLogs } from '../actions/logs'
import Modal from 'react-responsive-modal'

import Log from './Log'

class StockItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantityChange: 0,
      logIsVisible: false,
      logItems: [{ last_update: '29/1/2018', location: 'Auckland', changed: -25 },
      { last_update: '1/1/2018', location: 'Mt Eden', changed: 50 },
      { last_update: '29/11/2017', location: 'Mt Roskill Family Centre', changed: -500 },
      { last_update: '1/1/2000', location: 'Auckland', changed: 999999 },
      { last_update: '1/1/2018', location: 'Mt Eden', changed: 50 },
      { last_update: '29/11/2017', location: 'Mt Roskill Family Centre', changed: -500 },
      { last_update: '1/1/2000', location: 'Auckland', changed: 999999 }],
      logIsOpen: false,
      incrementIsOpen: false,
      decrementIsOpen: false
    }
    this.toggleLog = this.toggleLog.bind(this)
    this.openModals = this.openModals.bind(this)
    this.closeModals = this.closeModals.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.updateAndCloseModal = this.updateAndCloseModal.bind(this)
  }

  componentDidMount() {
    console.log(this.props.locationId)
    // this.props.requestLogs(this.props.item.location_id)
    }
  

  toggleLog() {
    this.setState({
      logIsVisible: !this.state.logIsVisible
    })
  }



  openModals(e) {
    this.setState({
      [e.target.id]: !this.state[e.target.id]
    })
  }

  // this could be tidier
  closeModals() {
    this.setState({
      logIsOpen: false,
      incrementIsOpen: false,
      decrementIsOpen: false
    })
  }

  handleChange(e) {
    this.setState({
      quantityChange: Number(e.target.value)
    })
  }

  updateAndCloseModal(e) {
    const action = (Number(e.target.id)) ? 'increment' : 'decrement'
    this.props[action](this.props.item.id, this.state.quantityChange)
    const item = this.props.item
    // needs refactoring
    item.quantity = (Number(e.target.id)) ? (this.props.item.quantity + this.state.quantityChange) : (this.props.item.quantity - this.state.quantityChange)
    this.setState({
      item
    })
    this.closeModals()
  }

  render () {
    const active = this.props.item
    const recentOrHide = !this.state.logIsVisible ? 'Recent' : 'Hide'
    return (
      <div className='row'>
        <div className='row' style={{textAlign: 'center'}}>
          <div className='three columns' style={{border: 'black solid 1px', margin: 'auto'}} onClick={this.openModals} >
            <p id='logIsOpen' style={{textAlign: 'center', margin: 'auto', padding: '2.5%'}}>{active.item}</p>
          </div>
          <p className='three columns' style={{ textAlign: 'center', fontWeight: 'bold', margin: 'auto' }}>Stock: {active.quantity}</p>

          <button className='one column' id='incrementIsOpen' onClick={this.openModals}>+</button>
          <button className='one column' id='decrementIsOpen' onClick={this.openModals}>-</button>
          <button className='two columns' id='hideOnShrink' type='button' key={active.id} onClick={this.toggleLog}>{recentOrHide}</button>
        </div>

        <div className='row'>
          {this.state.logIsVisible &&
            <div>
              <table style={{ margin: 'auto' }}>
                <tr>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Stock Change</th>
                </tr>
                {this.props.logs.map((logItem, id) => {
                  console.log(this.props.logs)
                  // return only three recent log items
                  if (active.stockId === logItem.item_id) {
                    return id < 3 && <Log key={logItem.location_stock_id} item={logItem} />
                  } else {
                    console.log('Didn\'t succeed')
                    id -= 1
                  }
                })}
              </table>
            </div>}
        </div>

        <Modal open={this.state.logIsOpen}
          onClose={this.closeModals} className='row'>
          <table>
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>Stock Change</th>
            </tr>
            {this.props.logs.map((logItem, id) => {
              if (active.stockId === logItem.item_id) {
                return <Log key={id} item={logItem} />
              } else {
                null
              }
            })}
          </table>
        </Modal>

        {/* Update Stock - Add More Items */}
        <Modal open={this.state.incrementIsOpen}
          onClose={this.closeModals} className='row'>
          <p>Add Stock</p>
          <h5>Quantity:</h5>
          <input onChange={this.handleChange} />
          <button id='1' onClick={this.updateAndCloseModal}>Add</button>

        </Modal>

        {/* Update Stock - Remove Items */}
        <Modal open={this.state.decrementIsOpen}
          onClose={this.closeModals} className='row'>
          <p>Remove Stock</p>
          <h5>Quantity:</h5>
          <input onChange={this.handleChange} />
          <button id='0' onClick={this.updateAndCloseModal}>Reduce</button>
        </Modal>
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
    decrement: (item, qty) => {
      return dispatch(deliverItems(item, qty))
    },
    increment: (item, qty) => {
      return dispatch(increaseItems(item, qty))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockItem)
