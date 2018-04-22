import React, { Component } from 'react'
import logo from './logo.svg'
import './styles/css/App.css'
import "../node_modules/react-vis/dist/style.css"
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import {Redirect,Route,Router,Switch} from 'react-router-dom'
import Home from './components/home'
import LoginPage from './components/LoginPage'
import userForm from './components/Userform'
import HouseDash from './components/HouseDash'
import {firebase,init} from './server'




class App extends Component {
  constructor(props){
      super(props)
      init()
      this.state={
        authenticated:false,
        loading:true,
        user:firebase.auth().currentUser
      }
  }

  componentDidMount(){
    
    this.removeAuthListener = firebase.auth().onAuthStateChanged((user)=>{
      if (user){
        this.setState({
          authenticated:true,
          loading:false
        })
      }
      else{
        this.setState({
          authenticated:false,
          loading:false
        })
      }
    })

  }
  componentWillUnmount(){
    this.removeAuthListener()
  }

  render() {
    const {authenticated} = this.state

    return (
      <div className="App">
    <Route  exact path={'/'} component={Home}  ></Route>
     { authenticated? <Route  render={({location})=>(
      <TransitionGroup  >
        <CSSTransition timeout={600} classNames='fade' key={location.key}>
      <Switch location={location}  >
        <Route  exact path={'/login'} component={LoginPage}  >  </Route>
        <Route  exact path={'/userForm'} component={userForm}  ></Route>
        <Route  exact path={'/HouseDash'} component={HouseDash}  > </Route>
      </Switch>
        </CSSTransition>
      </TransitionGroup> 
      
      )}></Route>: <Redirect exact path="/login"  />}
  
  </div>
    );
  }
}


export default App;
