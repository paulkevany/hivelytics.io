import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from '../Actions/auth'

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
      return {
        ...state,
        loggingIn: false,
        authenticated: true,
        loginError: null
      }

    case LOGIN_FAILED:
      return {
        ...state,
        loggingIn: false,
        authenticated: false,
        loginError: error
      }

    default:
      return state
  }
}
