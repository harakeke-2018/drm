import React from 'react'
// import {Link} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Home from './Home'
// import 'react-tabs/style/react-tabs.css'

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

  render () {
    return (
      <Tabs selectedIndex={this.state.tabIndex} onSelect={this.handleSelect}>
        <TabList>
          <Tab>Auckland</Tab>
          <Tab>Wellington</Tab>
          <Tab>Chrischurch</Tab>
        </TabList>
        <TabPanel><Home tab={'Auckland'} /></TabPanel>
        <TabPanel><Home tab={'Wellington'} /></TabPanel>
        <TabPanel><Home tab={'Chrischurch'} /></TabPanel>
      </Tabs>
    )
  }
}

export default Location
