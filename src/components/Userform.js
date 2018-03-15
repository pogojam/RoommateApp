import React, { Component } from 'react'
import { Segment,Icon,Label, Input, Button,Form,Checkbox } from 'semantic-ui-react'
import { createUser } from '../server'

export default class Userform extends Component {
constructor(props) {
  super(props)

  this.state = {
     
  }
}

  handleNameFirst(e){
    this.setState({
      first:e.target.value
    })
  }
  hanleNameLast(e){
    this.setState({
      last:e.target.value
    })
  }
  handleSubmit(){
    const name = this.state.first +' '+ this.state.last

    createUser(name)
  }

  render() {
    return (
    <div className='loginForm'>

      <div className='Wrapper' >
        <Segment>
      <Form>
    <Form.Field>
      <label>First Name</label>
      <input onChange={this.handleNameFirst.bind(this)} placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input onChange={this.hanleNameLast.bind(this)} placeholder='Last Name' />
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
