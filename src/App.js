import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Dogs from './components/Dogs'
import NotFound from './components/NotFound'

import './style.css'


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Dog family</h1>
          <Switch>
            <Route className exact path="/dogs" component={Dogs} />
            <Route exact path="/dogs/:name" component={Dogs} />
            <Route component={NotFound} />

            {/* <Redirect to="/dogs" /> */}
          </Switch>

        </div>
      </BrowserRouter>

    )
  }
}

export default App

