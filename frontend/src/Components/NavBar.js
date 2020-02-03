import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Divider, 
  List, 
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  ClickAwayListener,
} from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import InboxIcon from '@material-ui/icons/Inbox'
import MailIcon from '@material-ui/icons/Mail'
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined'
import FormatPaintOutlinedIcon from '@material-ui/icons/FormatPaintOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

import { withStyles } from '@material-ui/core/styles'

const styles = {
  title: {
    display: 'block', 
    marginLeft: 20
    },
  drawer: {
    width: 240,
    position: 'relative',
    zIndex: 1,
  },
  drawerPaper: {
    width: 240
  },
  appBar: {
    zIndex: 24
  },
  list: {
    marginTop: 75
  }
}

class NavBar extends Component {

  state = {
    drawerOpen: true,
  }

  toggleDrawer = () => {
      this.setState({drawerOpen: !this.state.drawerOpen})
    }

  render() {

    const { classes, titles } = this.props


    const drawer = (
     <div>
      <div className={classes.toolbar} />
      <Divider />
      <List className={classes.list}>
        {['Properties', 'Tenants', 'Maintenance'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{text === 'Properties' ? <HomeOutlinedIcon /> : null || text === 'Tenants' ? <PeopleOutlineOutlinedIcon /> : null || text === 'Maintenance' ? <FormatPaintOutlinedIcon /> : null}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Settings', 'How it works', 'Send Feedback'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{text === 'Settings' ? <SettingsOutlinedIcon /> : null || text === 'How it works'? <HelpOutlineOutlinedIcon /> : null || text === 'Send Feedback' ? <SendOutlinedIcon /> : null}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div> 
    );

    return (
      <div>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <HomeOutlinedIcon />
        <Typography className={classes.title} variant="h6" noWrap>
          Hivelytics.io
        </Typography>
        </Toolbar>
        </AppBar>
       <Drawer 
        className={classes.drawer}
        anchor="left"
        variant="permanent"
        open={this.state.drawerOpen}
      >
      {drawer}
      </Drawer>
      </div>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  titles: PropTypes.array.isRequired
}

const mapStateToProps = ({ app: { titles } }) => ({
  titles
})

export default connect(mapStateToProps)(withStyles(styles)(NavBar))
