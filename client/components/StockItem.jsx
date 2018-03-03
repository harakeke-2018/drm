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
        {last_update: '1/1/2000', location: 'Auckland', changed: 999999}],
      isOpen: false,
        }
    this.toggleLog = this.toggleLog.bind(this)
    this.onOpenModal = this.onOpenModal.bind(this)
  }

  toggleLog () {
    this.setState({logIsVisible: !this.state.logIsVisible})
  }

  onOpenModal (text) {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    const active = this.props.item
    return (
      <div className='row'>

        <div className='row' style={{textAlign: 'right'}}>
          <div className='three columns' style={{border: 'black solid 1px', margin: 'auto'}} onClick={() => this.onOpenModal(this.state.logItems)} >
            <p style={{textAlign: 'center', margin: 'auto', padding: '2.5%'}}>{active.item}</p>
          </div>
          {/* <div className='three columns'>
            <p style={{textAlign: 'right', fontWeight: 'bold'}}>Quantity: {active.quantity}</p>
          </div> */}
          <p className='three columns' style={{textAlign: 'center', fontWeight: 'bold', margin: 'auto'}}>Stock: {active.quantity}</p>

          <button className='two columns hideOnShrink' type='button' key={active.id} onClick={this.toggleLog}>{!this.state.logIsVisible ? 'Recent' : 'Hide'}</button>
          <button className='one column'>+</button>
          <button className='one column'>-</button>
        </div>


        

        <div className='row'>
          {this.state.logIsVisible ? (<div style={{margin: '0 0'}}>
            <h5 className='six columns'>Date</h5>
            <h5 className='six columns' style={{textAlign: 'right'}}>Stock Change</h5>
          </div>)
            : null}
          {this.state.logIsVisible ? this.state.logItems.map((logItem, id) => {
            return <div key={id}  style={{margin: 0}}>
              <Log item={logItem} />
            </div>
          })
            : null}
        </div>

        <Modal open={this.state.isOpen}
          onClose={this.onOpenModal} className='row'>
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
