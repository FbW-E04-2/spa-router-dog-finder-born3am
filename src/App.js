
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dogs from './components/Dogs';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/* Render the Dogs component for all the dogs */}
          <Route exact path="/dogs" component={Dogs} />
          {/* Render the Dogs component for a specific dog */}
          <Route exact path="/dogs/:name" component={Dogs} />
          <Redirect to="/dogs" />
        </Switch>
      </div>
    );
  }
}

export default App;