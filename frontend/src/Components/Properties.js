import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import Header from './Header'
import { Redirect } from 'react-router-dom'
import { Typography, Link, Button, Card, CardContent } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

// Import Other compoents here

// Import actions functions here

const styles = {
  leftChecklist: {
    float: 'left',
    marginLeft: '12%'
  },
  rightChecklist: {
    float: 'right',
    marginRight: '12%'
  },
  loginLink: {
    color: '#808080',
    marginTop: 20
  },
  description: {
    color: '#312222'
  },
  button: {
    backgroundColor: '#21FFD0',
    marginTop: 35,
    color: '#204E69'
  },
  story: {
    marginTop: -30
  }
}

class Home extends Component {
  componentDidMount() {}

  render() {
    const { classes } = this.props
    let title = 'Hivelytics.io'

    let authCheck = null

    const {
      auth: { authenticated }
    } = this.props

    if (!authenticated) {
      ;<Redirect to="/login" />
    }

    return (
      <Card>
        <CardContent>
          <Typography>Card Name</Typography>
        </CardContent>
      </Card>
    )
  }
}

Home.propTypes = {
  auth: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ auth }) => ({
  auth
})
export default connect(mapStateToProps)(withStyles(styles)(Home))
