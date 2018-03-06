import React, { Component } from 'react'

let divStyle={
    backgroundColor:'grey',
    height:'50vh'
}


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

  render() {
    return (
      <form style={divStyle} >
        <h1>Login</h1>
        Username: <input type="user" onChange={this.handleUser.bind(this)} placeholder="Username" />
        Password: <input type="pass" onChange={this.handlePass.bind(this)} placeholder="Password"/>
                  <button type="submit" ></button>
      </form>
    )
  }
}
