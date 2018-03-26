import React, { Component } from 'react'
import ButtonSVG from "../assets/Button.svg"
import { Icon, Input, Button } from 'semantic-ui-react'
import {Link,Route} from 'react-router-dom'
import * as db from '../server'



export default class Roomate extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
       
    }
  }

  handleUser(e){
    this.setState({
      user:e.target.value
    })

  }

  handlePass(e){
    this.setState({
      pass:e.target.value
    })
  }

  handleSubmit(e){
      e.preventDefault()
  }
  render() {
    return (
    
      <form className="loginForm" >
        <div className="Wrapper">
          <Icon size='huge' name='user circle' style={{color:'white'}} ></Icon>
 <Input iconPosition='left' inverted transparent icon='users'  className="loginForm-input" type="user" onChange={this.handleUser.bind(this)} placeholder="Username" />
 <Input type='password' iconPosition='left' inverted transparent icon='chain' transparent className="loginForm-input" onChange={this.handlePass.bind(this)} placeholder="Password"/>
  <Button  className='loginForm-Button'  >Login</Button>  
        <Link to={'/userForm'} >New User</Link>
        </div>
      </form>
    )
  }
}


