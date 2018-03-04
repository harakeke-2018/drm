import React from 'react'

class Log extends React.Component {
  render () {
    return (

      <tr>
                 <td>{this.props.item.last_update}</td>
                 <td>{this.props.item.location}</td>
                 {this.props.item.changed < 0 ? <td style={{margin: 'auto', textAlign: 'right', backgroundColor: '#FEE8E5' }}>{this.props.item.changed}</td>
                                              : <td style={{margin: 'auto', textAlign: 'right', backgroundColor: '#DCFEC8' }}>{this.props.item.changed}</td>}
      </tr>
      // <div className='row'>
      //   <p className='nine columns' style={{margin: 'auto'}}>{this.props.item.last_update}</p>
      //   {this.props.item.changed < 0 ? <div className='three columns'><p style={{margin: 'auto', textAlign: 'right', backgroundColor: '#FEE8E5' }}>{this.props.item.changed}</p></div>
      //     : <div className='three columns'><p style={{margin: 'auto', textAlign: 'right', backgroundColor: '#DCFEC8' }}>{this.props.item.changed}</p></div>}
      // </div>
    )
  }
}

export default Log
