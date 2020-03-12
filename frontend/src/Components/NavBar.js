import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Divider,
  List,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Button
} from '@material-ui/core'
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined'
import FormatPaintOutlinedIcon from '@material-ui/icons/FormatPaintOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'

import { withStyles } from '@material-ui/core/styles'
import Header from './Header'

const styles = {
  drawer: {
    width: 240,
    position: 'relative',
    zIndex: 1
  },
  list: {
    marginTop: 75
  },
  listItem: {
    marginLeft: 10,
    width: 210,
    alignItems: 'center'
  },
  button: {
    color: '#3d3d29',
    textTransform: 'inherit'
  }
}

class NavBar extends Component {
  state = {
    drawerOpen: true
  }

  render() {
    const { classes } = this.props

    const drawer = (
      <div className={classes.drawer}>
        <Divider />
        <List className={classes.list}>
          <Button href="/properties" className={classes.button}>
            <ListItem className={classes.listItem}>
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Properties</ListItemText>
            </ListItem>
          </Button>
          <Button href="/tenants" className={classes.button}>
            <ListItem className={classes.listItem}>
              <ListItemIcon>
                <PeopleOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Tenants</ListItemText>
            </ListItem>
          </Button>
        </List>
      </div>
    )

    //  const drawer = (
    //    <div>
    //      <div className={classes.toolbar} />
    //      <Divider />
    //      <List className={classes.list}>
    //        {['Properties', 'Tenants', 'Maintenance'].map((text, index) => (
    //          <div>
    //            <Link href={text.toLowerCase} />
    //            <ListItem button key={text}>
    //              <ListItemIcon>
    //                {text == 'Properties' ? (
    //                  <div>
    //                    <Link href="/properties">
    //                      <HomeOutlinedIcon />
    //                    </Link>
    //                  </div>
    //                ) : null || text === 'Tenants' ? (
    //                  <PeopleOutlineOutlinedIcon />
    //                ) : null || text === 'Maintenance' ? (
    //                  <FormatPaintOutlinedIcon />
    //                ) : null}
    //              </ListItemIcon>
    //              <ListItemText primary={text} />
    //            </ListItem>
    //          </div>
    //        ))}
    //      </List>
    //      <Divider />
    //      <List>
    //        {['Settings', 'How it works', 'Send Feedback'].map((text, index) => (
    //          <ListItem button key={text}>
    //            <ListItemIcon>
    //              {text === 'Settings' ? (
    //                <SettingsOutlinedIcon />
    //              ) : null || text === 'How it works' ? (
    //                <HelpOutlineOutlinedIcon />
    //              ) : null || text === 'Send Feedback' ? (
    //                <SendOutlinedIcon />
    //              ) : null}
    //            </ListItemIcon>
    //            <ListItemText primary={text} />
    //          </ListItem>
    //        ))}
    //      </List>
    //    </div>
    //  )

    return (
      <div>
        <Header />
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

export default withStyles(styles)(NavBar)
