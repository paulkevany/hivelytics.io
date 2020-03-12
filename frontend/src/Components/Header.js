import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'

import { withStyles } from '@material-ui/core/styles'
import { logout } from '../Actions/auth'

const styles = {
  appBar: {
    zIndex: 24
  },
  title: {
    display: 'block',
    marginLeft: 20
  },
  flex: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row'
  },
  logoutButton: {
    marginLeft: 'auto'
  }
}

class Header extends Component {
  handleLogout = event => {
    event.preventDefault()
    this.props.dispatch(logout())
  }

  render() {
    const { classes } = this.props
    const { authenticated } = this.props.auth

    const logoutButton = authenticated ? (
      <form onSubmit={this.handleLogout}>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          disabled={!authenticated}
        >
          Logout
        </Button>
      </form>
    ) : null

    return (
      <div className={classes.flex}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <HomeOutlinedIcon />
            <Typography className={classes.title} variant="h6" noWrap>
              Hivelytics.io
            </Typography>
            <div className={classes.logoutButton}>{logoutButton}</div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(withStyles(styles)(Header))
