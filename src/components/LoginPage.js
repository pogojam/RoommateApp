import React, { Component } from "react";
import ButtonSVG from "../assets/Button.svg";
import { Icon, Input, Button } from "semantic-ui-react";
import { Link, Route } from "react-router-dom";
import { firebase } from "../server";
import { Redirect } from "react-router";
import { getLoggedIn } from "../server";

const initState = {
  pass: "",
  email: ""
};

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initState
    };
  }

  handleUser(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePass(e) {
    this.setState({
      pass: e.target.value
    });
  }

  handleSubmit(e) {
    let email = this.state.email;
    let password = this.state.pass;
    e.PreventDefault();

    getLoggedIn(email, password)
      .then(
        this.setState(() => ({
          logedIn: true
        }))
      )
      .catch(error => {
        console.log(error);
        this.setState({ error: error });
      });
  }

  render() {
    const { pass, email } = this.state;

    const isInvalid = email === "" || pass === "";

    return (
      <form className="loginForm animated fadeIn ">
        <div className="Wrapper" style={{ backgroundColor:'#607992' }}>
          <Icon size="huge" name="user circle"  />
          <Input
            iconPosition="left"
            inverted
            transparent
            icon="users"
            className="loginForm-input"
            type="email"
            onChange={this.handleUser.bind(this)}
            placeholder="Email"
          />
          <Input
            type="password"
            iconPosition="left"
            inverted
            transparent
            icon="chain"
            transparent
            className="loginForm-input"
            onChange={this.handlePass.bind(this)}
            placeholder="Password"
          />
          <Button
            disabled={isInvalid}
            onClick={this.handleSubmit}
          
          >
            Login
          </Button>
          <Link to={"/userForm"}>New User</Link>
          {this.state.logedIn && <Redirect path="/HouseDash" />}
          {this.state.err && <div> this.state.err </div>}
        </div>
      </form>
    );
  }
}
