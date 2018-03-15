import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import Home from './components/home'
import Roomate from './components/Roomate'
import userForm from './components/Userform'
import {init as firebaseInit} from './server'

class App extends Component {
  constructor(props){
      super(props)
      firebaseInit()
  }
  render() {
    return (
      <div className="App">
        <Route exact path={'/'} component={Home} ></Route>
        <Route exact path={'/roomate'} component={Roomate} ></Route>
        <Route exact path={'/userForm'} component={userForm} ></Route>
      </div>
    );
  }
}

export default App;
