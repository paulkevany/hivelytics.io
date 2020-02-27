import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CircularProgress } from '@material-ui/core'

import { withRouter, Route, Switch } from 'react-router'
import { checkAuthentication } from '../Actions/auth'

// Import components here from ./Components

import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Properties from './Properties'

class Root extends Component {
  componentDidMount() {
    this.props.dispatch(checkAuthentication())
  }

  render() {
    const { authenticated } = this.props

    if (typeof authenticated === 'undefined') {
      return <CircularProgress color="primary" />
    }

    return (
      // Reference imported components  here
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/properties" component={Properties} />
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
