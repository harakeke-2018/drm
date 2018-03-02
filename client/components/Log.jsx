import React from 'react'

class Log extends React.Component {

    render () {
        return (
            <div className='twelve columns'>
                <p className='ten columns'>{this.props.item.last_update}</p>
                {this.props.item.changed < 0 ? <div><p className='one column' style={{textAlign: 'right', backgroundColor: '#FE8073'}}>{this.props.item.changed}</p><div className='one column'></div></div>
                                        : <p  className='one column' style={{textAlign: 'right', backgroundColor: '#B2FF97'}}>{this.props.item.changed}</p>}
            </div>
        )
    }
}

export default Log 
