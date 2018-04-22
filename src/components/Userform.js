import React, { Component } from 'react'
import FormField, { Segment, Icon, Label, Input, Button, Form, Checkbox,Header } from 'semantic-ui-react'
import {firebase} from '../server'

export default class Userform extends Component {
constructor(props) {
  super(props)

  this.state = {
     email:'',
     password:''
  }
}

 
  handlePassword(e){
    this.setState({
password:e.target.value
    })
  }
  handleSubmit(e){
let error = null
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    .catch(function(err){
      console.error(err);
      error = err
    })

    this.setState({
      email:'',
      password:'',
      error:error
    })
  }
  handleEmail(e){
    this.setState({
      email:e.target.value
    })
  }

  render() {
    return (
    <div className='loginForm'>

      <div className='Wrapper' >
        <Segment>
      <Form>
    <Form.Field error={this.setState.error} >
       <Header.Subheader href="" style={{padding:'1em'}} >
       Set your username and password for your house. 
       </Header.Subheader>
      <label>Email</label>
      <input value={this.state.email} onChange={this.handleEmail.bind(this)}  placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input value={this.state.password} type='password' onChange={this.handlePassword.bind(this)} placeholder='Password' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
  
    <Button onClick={this.handleSubmit.bind(this)} type='submit'>Submit</Button>
  </Form>
  </Segment>
      </div>
    </div>
    )
  }
}
