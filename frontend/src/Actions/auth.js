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
      err => dispatch({ type: LOGIN_FAILED, error: convertError(err) })
    )
  }
}

export const AUTHENTICATION_VALIDATED = 'AUTHENTICATION_VALIDATED'
export const AUTHENTICATION_INVALIDATED = 'AUTHENTICATION_INVALIDATED'

export function checkAuthentication() {
  return function(dispatch) {
    Auth.currentSession().then(
      () => dispatch({ type: AUTHENTICATION_VALIDATED }),
      err => dispatch({ type: AUTHENTICATION_INVALIDATED })
    )
  }
}

function convertError(error) {
  let errorText

  switch (error.code) {
    case 'InvalidPasswordException' && 'NotAuthorizedException':
      errorText = 'Invalid credentials entered!'
      break

    case 'UserNotFoundException':
      errorText = "It seems we couldn't find your account"
      break

    case 'UserNotConfirmedException':
      errorText = "Your account hasn't been confirmed yet"
  }

  return {
    message: errorText,
    source: error
  }
}
