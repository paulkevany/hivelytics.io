import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import Header from './Header'
import { Redirect } from 'react-router-dom'
import {
  Typography,
  Button,
  Fab,
  Card,
  CardContent,
  Grid,
  Paper
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

// Import Other compoents here

// Import actions functions here

const styles = {
  fab: {
    marginTop: 800,
    marginRight: 280
  },
  text: {
    bottom: 0,
    left: 0
  },
  container: {
    marginLeft: 280,
    width: '80%'
  }
}

class Properties extends Component {
  render() {
    const { classes } = this.props

    const { authenticated } = this.props.auth

    const notSignedIn = !authenticated ? <Redirect to="/" /> : null

    return (
      <React.Fragment>
        <Grid
          container
          className={classes.container}
          layout="row"
          justify="flex-start"
          alignItems="flex-end"
        >
          <Typography variant="subtitle1">
            No properties have been added! Click the plus icon to add one.
          </Typography>
          <NavBar />
          <Header />

          {notSignedIn}
          <Grid item>
            <Fab
              className={classes.fab}
              size="large"
              color="primary"
              component={Link}
              to="/new-property"
            >
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

Properties.propTypes = {
  auth: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ auth }) => ({
  auth
})
export default connect(mapStateToProps)(withStyles(styles)(Properties))
