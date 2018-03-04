import React from 'react'
import {connect} from 'react-redux'
import {deliverItems, increaseItems} from '../actions/stock'
import Modal from 'react-responsive-modal'

import Log from './Log'

class StockItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quantityChange: 0,
      logIsVisible: false,
      logItems: [{last_update: '29/1/2018', location: 'Auckland', changed: -25},
        {last_update: '1/1/2018', location: 'Mt Eden', changed: 50},
        {last_update: '29/11/2017', location: 'Mt Roskill Family Centre', changed: -500},
        {last_update: '1/1/2000', location: 'Auckland', changed: 999999},
        {last_update: '1/1/2018', location: 'Mt Eden', changed: 50},
        {last_update: '29/11/2017', location: 'Mt Roskill Family Centre', changed: -500},
        {last_update: '1/1/2000', location: 'Auckland', changed: 999999}],
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
      logIsVisible: !this.state.logIsVisible})
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
      quantityChange: e.target.value
    })
  }

  updateAndCloseModal (e) {
    const action = e.target.id + 'Items'
    this.props[action](this.props.item.id, this.state.quantityChange)
    this.closeModals()
  }

  render () {
    const active = this.props.item
    const recentOrHide = !this.state.logIsVisible ? 'Recent' : 'Hide'
    return (
      <div className='row'>

        <div className='row' style={{textAlign: 'right'}}>
          <div className='three columns' style={{border: 'black solid 1px', margin: 'auto'}} onClick={this.openModals} >
            <p id='logIsOpen' style={{textAlign: 'center', margin: 'auto', padding: '2.5%'}}>{active.item}</p>
          </div>
          <p className='three columns' style={{textAlign: 'center', fontWeight: 'bold', margin: 'auto'}}>Stock: {active.quantity}</p>

          <button className='two columns hideOnShrink' type='button' key={active.id} onClick={this.toggleLog}>{recentOrHide}</button>
          <button className='one column' id='incrementIsOpen' onClick={this.openModals}>+</button>
          <button className='one column' id='decrementIsOpen' onClick={this.openModals}>-</button>
        </div>

        <div className='row'>
          {this.state.logIsVisible &&
          <div>
            <table style={{margin: 'auto'}}>
              <tr>
                <th>Date</th>
                <th>Location</th>
                <th>Stock Change</th>
              </tr>
              {this.state.logItems.map((logItem, id) => {
                // return only three recent log items
                return id < 3 && <Log key={id} item={logItem} />
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
            {this.state.logItems.map((item, id) => {
              const redOrGreen = item.changed < 0 ? '#FEE8E5' : '#DCFEC8'
              return (<tr key={id}>
                <td>{item.last_update}</td>
                <td>{item.location}</td>
                <td style={{margin: 'auto', textAlign: 'right', backgroundColor: redOrGreen}}>{item.changed}</td>
              </tr>)
            })}
          </table>
        </Modal>

        {/* Update Stock - Add More Items */}
        <Modal open={this.state.incrementIsOpen}
          onClose={this.closeModals} className='row'>
          <p>Add Stock</p>
          <h5>Quantity:</h5>
          <input onChange={this.handleChange}/>
          <button id='increment' onClick={this.updateAndCloseModal}>Add</button>

        </Modal>

        {/* Update Stock - Remove Items */}
        <Modal open={this.state.decrementIsOpen}
          onClose={this.closeModals} className='row'>
          <p>Remove Stock</p>
          <h5>Quantity:</h5>
          <input onChange={this.handleChange}/>
          <button id='decrement' onClick={this.updateAndCloseModal}>Reduce</button>
        </Modal>
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
    decrementItems: (item, qty) => {
      return dispatch(deliverItems(item, qty))
    },
    incrementItems: (item, qty) => {
      return dispatch(increaseItems(item, qty))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockItem)
