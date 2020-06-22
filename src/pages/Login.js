import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import Hero from "../components/Hero";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  validation = () => {
    if (
      this.state.signInEmail === "danjaggs@gmail.com" &&
      this.state.signInPassword === "test"
    ) {
      alert("woop this works");
    } else {
      alert("wrong motehrfuk");
    }
  };

  render() {
    return (
      <div className="divForm">
        <Hero title={this.props.title} />
        <Form className="form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={this.onEmailChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.onPasswordChange}
            />
          </Form.Group>
          <Button onClick={this.validation} variant="info" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
