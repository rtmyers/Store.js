import React from 'react'
import { render } from 'react-dom'
import Router from '@router'
import 'babel-polyfill'
import * as serviceWorker from '@helpers/serviceWorker'
import { StateProvider } from './store'
import './common/styles.scss'

(() => {
  render(
    <StateProvider>
      <Router />
    </StateProvider>,
    document.getElementById('app')
  )
})()

serviceWorker.unregister()
