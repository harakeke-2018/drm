import React from 'react'

class Log extends React.Component {
  render () {
    return (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <p>{this.props.item.last_update}</p>
        {this.props.item.changed < 0 ? <p style={{color: 'red'}}>{this.props.item.changed}</p>
          : <p>{this.props.item.changed}</p>}
      </div>
    )
  }
}

export default Log
