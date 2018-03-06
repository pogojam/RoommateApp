import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import Home from './components/home'
import Roomate from './components/Roomate'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path={'/'} component={Home} ></Route>
        <Route exact path={'/roomate'} component={Roomate} ></Route>
        <Route></Route>
      </div>
    );
  }
}

export default App;
