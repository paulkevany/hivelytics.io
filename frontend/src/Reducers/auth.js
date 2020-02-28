import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  AUTHENTICATION_VALIDATED,
  AUTHENTICATION_INVALIDATED
} from '../Actions/auth'

const defaultState = {
  loggingIn: false,
  loginFailed: false
}

export default (state = defaultState, { type, meta, payload, error }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        authenticated: false,
        loginError: null
      }

    case LOGIN_SUCCESS:
    case AUTHENTICATION_VALIDATED:
      return {
        ...state,
        loggingIn: false,
        authenticated: true,
        loginError: null
      }

    case AUTHENTICATION_INVALIDATED:
      return {
        ...state,
        authenticated: false
      }

    case LOGIN_FAILED:
      return {
        ...state,
        loggingIn: false,
        authenticated: false,
        loginError: error
      }

    case SIGNUP_REQUEST:
      return {
        ...state,
        signingUp: true,
        signupError: null,
        signedUp: false
      }

    case SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        signupError: null,
        signedUp: true
      }

    case SIGNUP_FAILED:
      return {
        ...state,
        signingUp: false,
        signupError: error,
        signedUp: false
      }

    default:
      return state
  }
}
