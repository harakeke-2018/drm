import React from 'react'
import { connect } from 'react-redux'
import { deliverItems, increaseItems } from '../actions/stock'
import Modal from 'react-responsive-modal'

import Log from './Log'

let moment = require('moment');

class StockItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quantityChange: 0,
      logIsVisible: false,
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

  toggleLog () {
    this.setState({
      logIsVisible: !this.state.logIsVisible
    })
  }

  openModals (e) {
    this.setState({
      [e.target.id]: !this.state[e.target.id]
    })
  }

  // this could be tidier
  closeModals () {
    this.setState({
      logIsOpen: false,
      incrementIsOpen: false,
      decrementIsOpen: false
    })
  }

  handleChange (e) {
    this.setState({
      quantityChange: Number(e.target.value)
    })
  }

  updateAndCloseModal (e) {
    const action = (Number(e.target.id)) ? 'increment' : 'decrement'
    this.props[action](this.props.item.locationStockId, this.state.quantityChange)
    const item = this.props.item
    // needs refactoring
    item.quantity = (Number(e.target.id)) ? (item.quantity + this.state.quantityChange) : (item.quantity - this.state.quantityChange)
    this.setState({
      item
    })
    this.closeModals()
  }

  render () {
    let a = moment('2018-03-07 02:23:32')
    // console.log(a)
    const active = this.props.item
    const recentOrHide = !this.state.logIsVisible ? 'Recent' : 'Hide'
    let activeLogs = this.props.logs.filter(logItem => {
      if (logItem.item_id === active.locationStockId) {
        return logItem
      }
    })


    return (
      <div className='stocklist'>
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
                {console.log(activeLogs)}
                  {activeLogs.map((logItem, id) => {
                                  logItem.updated_at = moment(logItem.updated_at).format('MMMM Do YYYY, h:mm a')

                  if (id < 3) {
                    return <Log key={id} item={logItem} />
                  }
                })}
              </table>
            </div>}
        </div>

        <Modal open={this.state.logIsOpen}
          onClose={this.closeModals} className='row'>
          <table className="item-table">
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>Stock Change</th>
            </tr>
            {activeLogs.map((logItem, id) => {
              return <Log key={id} item={logItem} />
            })}
          </table>
        </Modal>

        {/* Update Stock - Add More Items */}
        <Modal open={this.state.incrementIsOpen}
          onClose={this.closeModals} className='row'>
          <p>Add Stock</p>
          <h5>Quantity:</h5>
          <input onChange={this.handleChange} />
          <button id='1' className="modal-button" onClick={this.updateAndCloseModal}>Add</button>

        </Modal>

        {/* Update Stock - Remove Items */}
        <Modal open={this.state.decrementIsOpen}
          onClose={this.closeModals} className='row'>
          <p>Remove Stock</p>
          <h5>Quantity:</h5>
          <input onChange={this.handleChange} />
          <button id='0' className="modal-button" onClick={this.updateAndCloseModal}>Reduce</button>
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
