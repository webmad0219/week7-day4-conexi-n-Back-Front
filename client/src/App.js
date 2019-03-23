import React, { Component } from 'react';
import './App.css';
import CoastersList from "./components/CoastersList"
import { Switch, Route } from 'react-router-dom';


class App extends Component {

  render() {

    return (

      <Switch>
        <Route path="/coasters" exact component={CoastersList} />
      </Switch>

    )
  }
}

export default App;