import React from 'react'
import {connect} from 'react-redux'

const Loading = (props) => {
  return (
    <div>
      {props.isFetching &&
        <p>Loading....</p>
      }
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state[ownProps.reducer].isFetching
  }
}

export default connect(mapStateToProps)(Loading)
