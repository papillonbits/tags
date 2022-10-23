/* eslint-disable import/no-import-module-exports */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { checkAccessibilityIssues } from '@papillonbits/library/a11y'
import { MultiTagCard } from './pattern/template/Input/MultiTagCard'
import { intro, emails, telephones } from './data'

/* istanbul ignore next */
function renderApp() {
  checkAccessibilityIssues(React, ReactDOM, 1000)

  ReactDOM.createRoot(document.getElementById('app')).render(<MultiTagCard intro={intro} mails={emails} telephones={telephones} />)

  if (module.hot) {
    module.hot.accept()
  }
}

renderApp()
