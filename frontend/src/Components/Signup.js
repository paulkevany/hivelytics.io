import React, { Component } from 'react'
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Link
} from '@material-ui/core'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Header from './Header'

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginTop: 100,
    marginLeft: '25%',
    marginRight: '25%',
    justifyContent: 'center'
  },
  textfield: {
    marginTop: 35,
    width: '100%'
  },
  button: {
    width: '100%',
    marginTop: 50
  },
  link: {
    display: 'flex',
    marginTop: 25,
    justifyContent: 'center'
  }
}

class Signup extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <Header />
        <Card className={classes.container}>
          <CardContent>
            <Typography variant="h5" align="center">
              Signup
            </Typography>
            <form>
              <TextField
                variant="outlined"
                className={classes.textfield}
                id="email"
                label="Email"
                type="email"
              />
              <TextField
                variant="outlined"
                className={classes.textfield}
                id="password"
                label="Password"
                type="password"
              />
              <Button
                className={classes.button}
                variant="contained"
                className={classes.button}
                color="primary"
              >
                Signup
              </Button>
            </form>
            <div className={classes.link}>
              <Typography variant="subtitle">
                <Link href="/login" variant="primary">
                  Already registered? Login here
                </Link>
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
}
export default connect(null)(withStyles(styles)(Signup))
