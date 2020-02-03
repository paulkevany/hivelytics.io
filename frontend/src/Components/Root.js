import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withRouter, Route, Switch } from 'react-router'

//Import components here from ./Components

import Home from './Home'


class Root extends Component {
  componentDidMount() {
    //Check authentication here??
  }

  render() {
 //   const { authenticated } = this.props

 //   if (typeof authenticated === 'undefined') {
  //    return(null)
      //Implement this, return loading component
  //  }

    return (
      //Reference imported components  here
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    )
  }
}

Root.propTypes = {
//  authenticated: PropTypes.bool,
  dispatch: PropTypes.func.isRequired
}

//const mapStateToProps = ({ auth: { authenticated } }) => ({
//  authenticated
//})

export default withRouter(connect(null)(Root))


