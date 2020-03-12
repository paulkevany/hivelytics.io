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

import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Header from './Header'
import { confirmSignup, resendCode } from '../Actions/auth'
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
  },
  success: {
    color: 'green',
    textAlign: 'center'
  }
}

class ConfirmSignup extends Component {
  state = {
    email: this.props.auth.email,
    code: ''
  }

  handleChange = ({ target: { id, value } }) => this.setState({ [id]: value })

  validateInput = () => this.state.code.length > 0 && this.state.email

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch(confirmSignup(this.state))
  }

  resendCode = event => {
    event.preventDefault()
    this.props.dispatch(resendCode(this.state.email))
  }

  render() {
    const {
      confirming,
      confirmError,
      confirmed,
      codeSent,
      sendingCode,
      codeSendError
    } = this.props.auth

    const { classes, dispatch } = this.props

    const codeSentSuccess =
      codeSent && !codeSendError ? (
        <Typography className={classes.success}>
          Code sent successfully!
        </Typography>
      ) : null

    const message =
      (confirmError && !confirming && !sendingCode) ||
      (codeSendError && !sendingCode) ? (
        <Typography className={classes.errorItem}>
          {confirmError.message || codeSendError.message}
        </Typography>
      ) : null

    const accountConfirmed = confirmed ? <Redirect to="/login" /> : null

    const noEmail = !this.props.auth.email ? <Redirect to="/login" /> : null

    const wrongCode =
      confirmError && !confirming ? (
        <form onSubmit={this.resendCode}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            type="submit"
          >
            Resend Code
          </Button>
        </form>
      ) : null

    return (
      <div>
        <Header />
        <Card className={classes.container}>
          <CardContent>
            <Typography variant="h5" align="center">
              Confirm Account
            </Typography>
            <form onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
                className={classes.textfield}
                id="code"
                label="Confirmation Code"
                onChange={this.handleChange}
              />
              {noEmail}
              {message}
              {codeSentSuccess}
              {accountConfirmed}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                disabled={
                  confirming || !this.validateInput() || !this.state.email
                }
                type="submit"
              >
                Confirm Account
              </Button>
            </form>
            {wrongCode}
            <div className={classes.link}>
              <Typography variant="subtitle">
                <Link href="/login" variant="primary">
                  Access login page
                </Link>
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

ConfirmSignup.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps)(withStyles(styles)(ConfirmSignup))
