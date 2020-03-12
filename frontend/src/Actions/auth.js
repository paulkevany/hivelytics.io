import Amplify, { Auth } from 'aws-amplify'
import aws_exports from '../aws-exports.js'
Amplify.configure(aws_exports)

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export function login({ email, password }) {
  return function(dispatch) {
    dispatch({ type: LOGIN_REQUEST, payload: { email } })
    Auth.signIn(email, password).then(
      () => dispatch({ type: LOGIN_SUCCESS }),
      err =>
        dispatch({
          type: LOGIN_FAILED,
          error: convertError(err)
        })
    )
  }
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILED = 'LOGOUT_FAILED'

export function logout() {
  return function(dispatch) {
    dispatch({ type: LOGOUT_REQUEST })
    Auth.signOut().then(
      () => dispatch({ type: LOGOUT_SUCCESS }),
      err => dispatch({ type: LOGOUT_FAILED, error: convertError(err) })
    )
  }
}

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILED = 'SIGNUP_FAILED'

export function signup({ email, password }) {
  return function(dispatch) {
    dispatch({ type: SIGNUP_REQUEST })
    Auth.signUp(email, password).then(
      () => dispatch({ type: SIGNUP_SUCCESS, payload: { email } }),
      err => dispatch({ type: SIGNUP_FAILED, error: convertError(err) })
    )
  }
}

export const AUTHENTICATION_VALIDATED = 'AUTHENTICATION_VALIDATED'
export const AUTHENTICATION_INVALIDATED = 'AUTHENTICATION_INVALIDATED'

export function checkAuthentication() {
  return function(dispatch) {
    Auth.currentSession().then(
      () => dispatch({ type: AUTHENTICATION_VALIDATED }),
      err =>
        dispatch({ type: AUTHENTICATION_INVALIDATED, error: convertError(err) })
    )
  }
}

export const ACCOUNT_CONFIRMATION_REQUEST = 'ACCOUNT_CONFIRMATION_REQUEST'
export const ACCOUNT_CONFIRMATION_SUCCESS = 'ACCOUNT_CONFIRMATION_SUCCESS'
export const ACCOUNT_CONFIRMATION_FAILURE = 'ACCOUNT_CONFIRMATION_FAILURE'

export function confirmSignup({ email, code }) {
  return function(dispatch) {
    dispatch({ type: ACCOUNT_CONFIRMATION_REQUEST, payload: { email } })
    Auth.confirmSignUp(email, code).then(
      () =>
        dispatch({ type: ACCOUNT_CONFIRMATION_SUCCESS, payload: { email } }),
      err =>
        dispatch({
          type: ACCOUNT_CONFIRMATION_FAILURE,
          error: convertError(err)
        })
    )
  }
}

export const RESEND_CODE_REQUEST = 'RESEND_CODE_REQUEST'
export const RESEND_CODE_SUCCESS = 'RESEND_CODE_SUCCESS'
export const RESEND_CODE_FAILURE = 'RESEND_CODE_FAILURE'

export function resendCode(email) {
  return function(dispatch) {
    dispatch({ type: RESEND_CODE_REQUEST })
    Auth.resendSignUp(email).then(
      () => dispatch({ type: RESEND_CODE_SUCCESS }),
      err => dispatch({ type: RESEND_CODE_FAILURE, error: convertError(err) })
    )
  }
}

function convertError(error) {
  let errorText

  switch (error.code) {
    //Login error codes
    case 'InvalidPasswordException':
      errorText = 'Invalid credentials entered!'
      break

    case 'NotAuthorizedException':
      errorText = "You're not authorized to do that"
      break

    case 'UserNotFoundException':
      errorText = "It seems we couldn't find your account"
      break

    case 'UserNotConfirmedException':
      errorText = 'Account not confirmed, please login again'
      break

    //Signup error codes
    case 'UsernameExistsException':
      errorText = 'A user with this email already exists'
      break

    case 'InvalidParameterException':
      errorText = 'Email must be of correct format'
      break

    //Account confirmation error code handlers
    case 'CodeMismatchException':
      errorText = 'Incorrect confirmation code'
      break

    case 'ExpiredCodeException':
      errorText = 'Code expired, please request a new one'
      break

    case 'TooManyFailedAttemptsException':
      errorText = 'Try again later'
      break

    //Default for when an unhandled exception occurs

    default:
      errorText = 'An unknown error occured'
      break
  }

  return {
    message: errorText,
    source: error
  }
}
