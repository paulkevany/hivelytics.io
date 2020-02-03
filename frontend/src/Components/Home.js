import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBar from './NavBar'

//Import Other compoents here


//Import actions functions here

class Home extends Component {
  componentDidMount() {
  //  if (this.props.auth.authenticated) {
  //    this.props.dispatch(null)
  //    //check if authenticated
  //  }
  }

  render() {
    return (
      <div style={{ height: '100%', overflowX: 'hidden' }}>
        <NavBar />
      </div>
    )
  }
}

Home.propTypes = {
  //auth: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired
}

//const mapStateToProps = ({ checklists: { loading }, auth }) => ({
//  loading,
//  auth
//})

export default connect(null)(Home)
