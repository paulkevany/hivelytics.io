import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'

import { withStyles } from '@material-ui/core/styles'

const styles = {
  appBar: {
    zIndex: 24
  },
  title: {
    display: 'block',
    marginLeft: 20
  }
}

class Header extends Component {
  render() {
    const { classes } = this.props

    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <HomeOutlinedIcon />
          <Typography className={classes.title} variant="h6" noWrap>
            Hivelytics.io
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect(null)(withStyles(styles)(Header))
