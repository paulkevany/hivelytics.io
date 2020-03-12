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
import { signup } from '../Actions/auth'

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
  errorItem: {
    color: 'red',
    textAlign: 'center'
  }
}

class Signup extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = ({ target: { id, value } }) => this.setState({ [id]: value })

  validateInput = () =>
    this.state.email.length > 3 && this.state.password.length > 8

  handleSubmit = event => {
    //Don't refresh page on form submit
    event.preventDefault()
    this.props.dispatch(signup(this.state))
  }
  render() {
    const { classes } = this.props
    const { signingUp, signupError, signedUp, confirmed } = this.props.auth

    const errorItem =
      !signingUp && signupError ? (
        <Typography className={classes.errorItem}>
          {signupError.message}
        </Typography>
      ) : null

    const signupSuccess =
      signedUp && !signupError ? <Redirect to="/confirm-signup" /> : null

    const notConfirmed =
      signedUp && !confirmed ? <Redirect to="/confirm-signup" /> : null

    return (
      <div>
        <Header />
        <Card className={classes.container}>
          <CardContent>
            <Typography variant="h5" align="center">
              Signup
            </Typography>
            <form onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
                className={classes.textfield}
                id="email"
                label="Email"
                onChange={this.handleChange}
                type="email"
              />
              <TextField
                variant="outlined"
                className={classes.textfield}
                id="password"
                label="Password"
                type="password"
                onChange={this.handleChange}
              />
              {errorItem}
              {signupSuccess}
              {notConfirmed}
              <Button
                className={classes.button}
                variant="contained"
                className={classes.button}
                color="secondary"
                disabled={signingUp || !this.validateInput()}
                type="submit"
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
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps)(withStyles(styles)(Signup))
