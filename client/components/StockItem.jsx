import React from 'react'
import {connect} from 'react-redux'
import Modal from 'react-responsive-modal'

import Log from './Log'

class StockItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      logIsVisible: false,
      logItems: [{last_update: '29/1/2018', location: 'Auckland', changed: -25},
        {last_update: '1/1/2018', location: 'Mt Eden', changed: 50},
        {last_update: '29/11/2017', location: 'Mt Roskill Family Centre', changed: -500},
        {last_update: '1/1/2000', location: 'Auckland', changed: 999999},
        {last_update: '1/1/2018', location: 'Mt Eden', changed: 50},
        {last_update: '29/11/2017', location: 'Mt Roskill Family Centre', changed: -500},
        {last_update: '1/1/2000', location: 'Auckland', changed: 999999}],
      logIsOpen: false,
      plusQuantityIsOpen: false,
      minusQuantityIsOpen: false
    }
    this.toggleLog = this.toggleLog.bind(this)
    this.onLogModalOpen = this.onLogModalOpen.bind(this)
    this.onPlusQuantityOpen = this.onPlusQuantityOpen.bind(this)
    this.onMinusQuantityOpen = this.onMinusQuantityOpen.bind(this)
  }

  toggleLog () {
    this.setState({logIsVisible: !this.state.logIsVisible})
  }

  onLogModalOpen () {
    this.setState({
      logIsOpen: !this.state.logIsOpen
    })
  }

  onPlusQuantityOpen () {
    this.setState({
      plusQuantityIsOpen: !this.state.plusQuantityIsOpen
    })
  }

  onMinusQuantityOpen () {
    this.setState({
      minusQuantityIsOpen: !this.state.minusQuantityIsOpen
    })
  }

  render () {
    const active = this.props.item
    return (
      <div className='row'>

        <div className='row' style={{textAlign: 'right'}}>
          <div className='three columns' style={{border: 'black solid 1px', margin: 'auto'}} onClick={() => this.onLogModalOpen()} >
            <p style={{textAlign: 'center', margin: 'auto', padding: '2.5%'}}>{active.item}</p>
          </div>
          {/* <div className='three columns'>
            <p style={{textAlign: 'right', fontWeight: 'bold'}}>Quantity: {active.quantity}</p>
          </div> */}
          <p className='three columns' style={{textAlign: 'center', fontWeight: 'bold', margin: 'auto'}}>Stock: {active.quantity}</p>

          <button className='two columns hideOnShrink' type='button' key={active.id} onClick={this.toggleLog}>{!this.state.logIsVisible ? 'Recent' : 'Hide'}</button>
          <button className='one column' onClick={this.onPlusQuantityOpen}>+</button>
          <button className='one column' onClick={this.onMinusQuantityOpen}>-</button>
        </div>

        <div className='row'>
          {this.state.logIsVisible ? (<div>
            <table style={{margin: 'auto'}}>
              <tr>
                <th>Date</th>
                <th>Location</th>
                <th>Stock Change</th>
              </tr>
              {this.state.logItems.map((logItem, id) => {
                return (id <= 2) ? <Log key={id} item={logItem} />
                  : null
              })}
            </table>
          </div>)
            : null}
        </div>

        <Modal open={this.state.logIsOpen}
          onClose={this.onLogModalOpen} className='row'>
          <table>
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>Stock Change</th>
            </tr>
            {this.state.logItems.map((item, id) => {
              return (<tr key={id}>
                <td>{item.last_update}</td>
                <td>{item.location}</td>
                {item.changed < 0 ? <td style={{margin: 'auto', textAlign: 'right', backgroundColor: '#FEE8E5' }}>{item.changed}</td>
                  : <td style={{margin: 'auto', textAlign: 'right', backgroundColor: '#DCFEC8' }}>{item.changed}</td>}
              </tr>)
            })}
          </table>
        </Modal>

        {/* Update Stock - Add More Items */}
        <Modal open={this.state.plusQuantityIsOpen}
          onClose={this.onPlusQuantityOpen} className='row'>
          <p>Add Stock</p>
          <h5>Quantity:</h5>
          <input />
          <button>Add</button>
        </Modal>

        {/* Update Stock - Remove Items */}
        <Modal open={this.state.minusQuantityIsOpen}
          onClose={this.onMinusQuantityOpen} className='row'>
          <p>Remove Stock</p>
          <h5>Quantity:</h5>
          <input />
          <button>Reduce</button>
        </Modal>
      </div>
    )
  }
}

// get relevant info from props

const mapStateToProps = (state) => {
  return {
    items: state.stock.items,
    latestQty: state.stock.latestQty
  }
}

export default connect(mapStateToProps)(StockItem)
