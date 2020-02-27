import React from 'react'
import { render } from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import configureStore from './configureStore'
import App from './Components/App'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const store = configureStore(history)

render(<App store={store} history={history} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
