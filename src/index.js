import React from "react"
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'

import App from "./App"
import store from './store/store'
import Global from "./Global"
import Theme from "./Theme"

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Theme>
          <Global/>
          <App />
        </Theme>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
