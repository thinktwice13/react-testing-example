import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import reducers from 'reducers'
import { createStore } from 'redux'
import App from "./components/App"

ReactDOM.render(
  <Root>
    <App/>
  </Root>,
  document.querySelector("#root")
)