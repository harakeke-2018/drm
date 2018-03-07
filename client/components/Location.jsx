import React from 'react'
import {connect} from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Home from './Home'
import {getLocations} from '../actions/stock'

class Location extends React.Component {
  constructor () {
    super()
    this.state = {
      tabIndex: 0
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect (tabIndex) {
    this.setState({ tabIndex })
  }

  componentWillMount () {
    this.props.loadLocations()
  }

  render () {
    return (
      <div className="app">
        <Tabs selectedIndex={this.state.tabIndex} onSelect={this.handleSelect}>
          <TabList>
            {this.props.locations.map((location, id) => {
              return (
                <Tab key={id}>{location.name}</Tab>
              )
            })}
          </TabList>
          {this.props.locations.map((location, id) => {
            return (
              <TabPanel key={id}><Home location={location.name} locationId={location.id} /></TabPanel>
            )
          })}
        </Tabs>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.stock.locations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadLocations: () => {
      return dispatch(getLocations())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)
