import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import Header from './Header'
import { Redirect } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

// Import Other compoents here

// Import actions functions here

class Dashboard extends Component {
  render() {
    const { classes } = this.props
    const { authenticated } = this.props.auth

    const notSignedIn = !authenticated ? <Redirect to="/" /> : null

    return (
      <div>
        <Header />
        <NavBar />
        {notSignedIn}
      </div>
    )
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ auth }) => ({
  auth
})
export default connect(mapStateToProps)(Dashboard)
