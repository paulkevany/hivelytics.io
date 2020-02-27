import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'

import { withStyles } from '@material-ui/core/styles'

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
  render() {
    const { classes } = this.props

    return (
      <div className={classes.flex}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <HomeOutlinedIcon />
            <Typography className={classes.title} variant="h6" noWrap>
              Hivelytics.io
            </Typography>
            <Button
              className={classes.logoutButton}
              variant="contained"
              color="secondary"
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect(null)(withStyles(styles)(Header))
