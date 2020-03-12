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
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Header from './Header'
import { login } from '../Actions/auth'

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
  },
  errorText: {
    color: 'red',
    textAlign: 'center'
  }
}

class Login extends Component {
  state = {
    email: this.props.auth.email || '',
    password: ''
  }

  handleChange = ({ target: { id, value } }) => this.setState({ [id]: value })

  validateInput = () =>
    this.state.email.length > 0 && this.state.password.length > 0

  handleSubmit = event => {
    //Don't refresh page on form submit``
    event.preventDefault()
    this.props.dispatch(login(this.state))
  }

  render() {
    const {
      authenticated,
      loggingIn,
      loginError,
      userUnconfirmed,
      confirmed
    } = this.props.auth
    const { classes } = this.props

    const signedIn = authenticated ? <Redirect to="/dashboard" /> : null

    const loginFailed =
      !loggingIn && loginError ? (
        <Typography className={classes.errorText}>
          {loginError.message}
        </Typography>
      ) : null

    const notConfirmed = userUnconfirmed ? (
      <Redirect to="/confirm-signup" />
    ) : null

    return (
      <div>
        {signedIn}
        <Header />
        <Card className={classes.container}>
          <CardContent>
            <Typography variant="h5" align="center">
              Login
            </Typography>
            <form onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
                className={classes.textfield}
                id="email"
                label="Email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                className={classes.textfield}
                id="password"
                label="Password"
                type="password"
                onChange={this.handleChange}
              />
              {loginFailed}
              {notConfirmed}
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
                className={classes.button}
                color="primary"
                disabled={loggingIn || !this.validateInput()}
              >
                Login
              </Button>
            </form>
            <div className={classes.link}>
              <Typography variant="subtitle">
                <Link href="/signup" variant="primary">
                  Not registered? Sign up here
                </Link>
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps)(withStyles(styles)(Login))
