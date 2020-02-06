import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import Header from './Header'
import { Redirect } from 'react-router-dom'

// Import Other compoents here

// Import actions functions here

class Home extends Component {
  componentDidMount() {}

  render() {
    let authCheck = null

    const {
      auth: { authenticated }
    } = this.props

    if (!authenticated) {
      authCheck = <Redirect to="/login" />
    }
    return (
      <div style={{ height: '100%', overflowX: 'hidden' }}>
        {authCheck}
        <NavBar />
        <Header />
      </div>
    )
  }
}

Home.propTypes = {
  auth: PropTypes.object.isRequired
  // dispatch: PropTypes.func.isRequired,
  // loading: PropTypes.bool.isRequired,
  // location: PropTypes.object.isRequired,
}

const mapStateToProps = ({ auth }) => ({
  //loading,
  auth
})

export default connect(mapStateToProps)(Home)
