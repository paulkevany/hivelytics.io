import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withRouter, Route, Switch } from 'react-router'

// Import components here from ./Components

import Home from './Home'
import Login from './Login'
import Signup from './Signup'

class Root extends Component {
  componentDidMount() {
    // Check authentication here??
  }

  render() {
    const { authenticated } = this.props

    if (typeof authenticated === 'undefined') {
      return null
      // Implement this, return loading component
      // Still authenticating, show loading spinner
    }

    return (
      // Reference imported components  here
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/" component={Home} />
      </Switch>
    )
  }
}

Root.propTypes = {
  authenticated: PropTypes.bool,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ auth: { authenticated } }) => ({
  authenticated
})

export default withRouter(connect(mapStateToProps)(Root))
