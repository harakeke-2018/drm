import React from 'react'

class Log extends React.Component {
  render () {
    const active = this.props.item
    const redOrGreen = active.quantity_changed < 0 ? '#FEE8E5' : '#DCFEC8'
    return (
      <tr>
        <td>{active.updated_at}</td>
        {/* Location Name */}
        <td>{active.name}</td>
        <td style={{margin: 'auto', textAlign: 'right', backgroundColor: redOrGreen}}>{active.quantity_changed}</td>
      </tr>
    )
  }
}

export default Log
