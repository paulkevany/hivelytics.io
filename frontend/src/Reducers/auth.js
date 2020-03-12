import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  AUTHENTICATION_VALIDATED, 
  AUTHENTICATION_INVALIDATED
  ACCOUNT_CONFIRMATION_REQUEST,
  ACCOUNT_CONFIRMATION_SUCCESS,
  ACCOUNT_CONFIRMATION_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  RESEND_CODE_REQUEST,
  RESEND_CODE_SUCCESS,
  RESEND_CODE_FAILURE
} from '../Actions/auth'

const defaultState = {
  loggingIn: false,
  loginFailed: false
}

const userNotConfirmedCognitoCode = 'UserNotConfirmedException'

export default (state = defaultState, { type, meta, payload, error }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        authenticated: false,
        loginError: null,
        email: payload.email
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
        loginError: error,
        userUnconfirmed: error.source.code == userNotConfirmedCognitoCode
        //IF error.id = "USER_NOT_CONFIRMED => userUnconfirmed will be true, otherwise false"
      }

    case LOGOUT_REQUEST:
      return {
        ...state,
        loggingOut: true,
        loggedOut: false,
        logoutError: null
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedOut: true,
        logoutError: null,
        authenticated: false
      }
    case LOGOUT_FAILED:
      return {
        ...state,
        loggingIn: false,
        loggedOut: false,
        logoutError: error
      }

    case SIGNUP_REQUEST:
      return {
        ...state,
        signingUp: true,
        signupError: null,
        accountConfirmed: false,
        signedUp: false
      }

    case SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        signupError: null,
        accountConfirmed: false,
        signedUp: true,
        email: payload.email
      }

    case SIGNUP_FAILED:
      return {
        ...state,
        signingUp: false,
        signupError: error,
        accountConfirmed: false,
        signedUp: false
      }

    case ACCOUNT_CONFIRMATION_REQUEST:
      return {
        ...state,
        confirming: true,
        confirmError: null,
        confirmed: false
      }

    case ACCOUNT_CONFIRMATION_SUCCESS:
      return {
        ...state,
        confirming: false,
        confirmError: null,
        authenticated: false,
        confirmed: true,
        email: payload.email
      }

    case ACCOUNT_CONFIRMATION_FAILURE:
      return {
        ...state,
        confirming: false,
        confirmError: error,
        authenticated: false,
        confirmed: false
      }

    case RESEND_CODE_REQUEST:
      return {
        ...state,
        sendingCode: true,
        codeSent: false,
        codeSendError: null
      }

    case RESEND_CODE_SUCCESS:
      return {
        ...state,
        sendingCode: false,
        codeSent: true,
        codeSendError: null
      }

    case RESEND_CODE_FAILURE:
      return {
        ...state,
        sendingCode: false,
        codeSent: false,
        codeSendError: error
      }

    default:
      return state
  }
}
